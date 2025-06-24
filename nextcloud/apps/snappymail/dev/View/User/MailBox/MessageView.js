/* axios */
import ko from 'ko';
import { addObservablesTo, addComputablesTo, addSubscribablesTo } from 'External/ko';

import { UNUSED_OPTION_VALUE } from 'Common/Consts';
import { ScopeFolderList, ScopeMessageList, ScopeMessageView } from 'Common/Enums';

import {
	ComposeType,
	ClientSideKeyNameMessageHeaderFullInfo,
	ClientSideKeyNameMessageAttachmentControls,
	FolderType,
	MessageSetAction
} from 'Common/EnumsUser';
import { RFC822 } from 'Common/File';
import {
	elementById,
	keyScopeReal,
	Settings,
	SettingsCapa,
	fireEvent,
	stopEvent,
	addShortcut,
	registerShortcut,
	formFieldFocused
} from 'Common/Globals';

import { arrayLength } from 'Common/Utils';
import { downloadZip, mailToHelper, showMessageComposer, moveAction } from 'Common/UtilsUser';
import { isFullscreen, exitFullscreen, toggleFullscreen } from 'Common/Fullscreen';

import { SMAudio } from 'Common/Audio';

import { i18n } from 'Common/Translator';

import { AppUserStore } from 'Stores/User/App';
import { SettingsUserStore } from 'Stores/User/Settings';
import { AccountUserStore } from 'Stores/User/Account';
import { FolderUserStore, isAllowedKeyword } from 'Stores/User/Folder';
import { MessageUserStore } from 'Stores/User/Message';
import { MessagelistUserStore } from 'Stores/User/Messagelist';

import * as Local from 'Storage/Client';

import Remote from 'Remote/User/Fetch';

import { decorateKoCommands } from 'Knoin/Knoin';
import { AbstractViewRight } from 'Knoin/AbstractViews';

import { PgpUserStore } from 'Stores/User/Pgp';

import { MimeToMessage } from 'Mime/Utils';

import { MessageModel } from 'Model/Message';

import { showScreenPopup } from 'Knoin/Knoin';
import { OpenPgpImportPopupView } from 'View/Popup/OpenPgpImport';
import { GnuPGUserStore } from 'Stores/User/GnuPG';
import { OpenPGPUserStore } from 'Stores/User/OpenPGP';

const
	oMessageScrollerDom = () => elementById('messageItem') || {},

	currentMessage = MessageUserStore.message,

	setAction = action => {
		const message = currentMessage();
		message && MessagelistUserStore.setAction(message.folder, action, [message]);
	},

	fetchRaw = url => rl.fetch(url).then(response => response.ok && response.text());


//test
const OC = () => typeof parent.OC !== 'undefined' ? parent.OC : null;
const generateUrl = (path) => {
	const oc = OC();
	if (oc && oc.webroot) {
		let base = oc.webroot;
		if (!base.endsWith('/')) {
			base += '/';
		}
		if (path.startsWith('/')) {
			path = path.substring(1);
		}
		return `${base}${path}`;
	}
	console.error('generateUrl: OC.webroot is not available. Using path as is.');
	return path; // Fallback
};

const getRequestToken = () => {
	const oc = OC();
	if (oc && oc.requestToken) {
		return oc.requestToken;
	}
	console.error('getRequestToken: OC.requestToken is not available.');
	return null;
};
//test
export class MailMessageView extends AbstractViewRight {
	constructor() {
		super();
		console.log('MailMessageView: OC object available?', !!OC(), 'Current user:',
			OC() ? OC().currentUser : 'N/A', 'Webroot:', OC() ? OC().webroot : 'N/A');
		const
			/**
			 * @param {Function} fExecute
			 * @param {Function} fCanExecute = true
			 * @returns {Function}
			 */
			createCommand = (fExecute, fCanExecute) => {
				let fResult = () => {
						fCanExecute() && fExecute.call(null);
						return false;
					};
				fResult.canExecute = fCanExecute;
				return fResult;
			},

			createCommandReplyHelper = type =>
				createCommand(() => this.replyOrforward(type), this.canBeRepliedOrForwarded),

			createCommandActionHelper = (folderType, bDelete) =>
				createCommand(() => {
					const message = currentMessage();
					if (message) {
						currentMessage(null);
						rl.app.moveMessagesToFolderType(folderType, message.folder, new Set([message.uid]), bDelete);
					}
				}, this.messageVisible),
			createCommandSetHelper = action =>
				createCommand(() => setAction(action), this.messageVisible),
			createCommandDeleteHelper = () =>
				createCommand(() => {
					/**
					 * When FolderUserStore.trashFolder is set to "Do not use",
					 * flag as \Deleted for removal by later EXPUNGE
					 */
					if (UNUSED_OPTION_VALUE === FolderUserStore.trashFolder()) {
						setAction(MessageSetAction.SetDeleted);
					} else {
						const message = currentMessage();
						if (message) {
							currentMessage(null);
							rl.app.moveMessagesToFolderType(FolderType.Trash, message.folder, new Set([message.uid]));
						}
					}
				}, this.messageVisible);

		this.msgDefaultAction = SettingsUserStore.msgDefaultAction;
		this.simpleAttachmentsList = SettingsUserStore.simpleAttachmentsList;

		addObservablesTo(this, {
			showAttachmentControls: !!Local.get(ClientSideKeyNameMessageAttachmentControls),
			downloadAsZipLoading: false,
			showFullInfo: '1' === Local.get(ClientSideKeyNameMessageHeaderFullInfo),
			// bootstrap dropdown
			actionsMenu: null,
			// viewer
			viewFromShort: '',
			dkimData: ['none', '', ''],
			spfData: ['none', '', ''],
			dmarcData: ['none', '', ''],
			nowTracking: false
		});

		this.moveAction = moveAction;

		const attachmentsActions = Settings.app('attachmentsActions');
		this.attachmentsActions = ko.observableArray(arrayLength(attachmentsActions) ? attachmentsActions : []);

		this.hasCheckedMessages = MessagelistUserStore.hasChecked;
		this.archiveAllowed = MessagelistUserStore.archiveAllowed;
		this.canMarkAsSpam = MessagelistUserStore.canMarkAsSpam;
		this.isDraftFolder = MessagelistUserStore.isDraftFolder;
		this.isSpamFolder = MessagelistUserStore.isSpamFolder;

		this.message = currentMessage;
		this.messageLoadingThrottle = MessageUserStore.loading;
		this.messageError = MessageUserStore.error;

		this.fullScreenMode = isFullscreen;
		this.toggleFullScreen = toggleFullscreen;

		this.downloadAsZipError = ko.observable(false).extend({ falseTimeout: 7000 });

		this.messageDomFocused = ko.observable(false).extend({ rateLimit: 0 });

		// viewer
		this.viewHash = '';

		addComputablesTo(this, {
			allowAttachmentControls: () => arrayLength(attachmentsActions) && SettingsCapa('AttachmentsActions'),

			downloadAsZipAllowed: () => this.attachmentsActions.includes('zip')
				&& (currentMessage()?.attachments || [])
					.filter(item => item?.checked() && item?.download /*&& !item?.isLinked()*/)
					.length,

			tagsAllowed: () => FolderUserStore.currentFolder()?.tagsAllowed(),

			messageVisible: () => !MessageUserStore.loading() && !!currentMessage(),

			tagsToHTML: () => currentMessage()?.flags().map(value =>
					isAllowedKeyword(value)
					? '<span class="focused msgflag-'+value+'">' + i18n('MESSAGE_TAGS/'+value,0,value) + '</span>'
					: ''
				).join(' '),

			askReadReceipt: () => currentMessage()?.readReceipt
				&& !(MessagelistUserStore.isDraftFolder() || MessagelistUserStore.isSentFolder())
				&& !currentMessage()?.flags().includes('$mdnsent')
				&& !currentMessage()?.flags().includes('\\answered'),

			listAttachments: () => currentMessage()?.attachments()
				.filter(item => SettingsUserStore.listInlineAttachments() || !item.isLinked()),
//			hasAttachments: () => currentMessage()?.attachments()?.length,
			hasAttachments: () => currentMessage()?.attachments()
				.some(item => SettingsUserStore.listInlineAttachments() || !item.isLinked()),
//			listInline: () => currentMessage()?.attachments().filter(item => item.isLinked()),
//			hasInline: () => currentMessage()?.attachments().some(item => item.isLinked()),

			canBeRepliedOrForwarded: () => !MessagelistUserStore.isDraftFolder() && this.messageVisible(),

			dkimIcon: () => {
				switch (this.dkimData()[0]) {
					case 'none':
						return '🚫︎';
					case 'pass':
						return '✔';
					default:
						return '✖';
				}
			},
			dkimIconClass: () => 'pass' === this.dkimData()[0] ? 'iconcolor-green' : 'iconcolor-red',
			dkimTitle:() => {
				const dkim = this.dkimData();
				return dkim[0] ? dkim[2] || 'DKIM: ' + dkim[0] : '';
			},

			spfIcon: () => {
				switch (this.spfData()[0]) {
					case 'none':
						return '🚫︎';
					case 'pass':
						return '✔';
					default:
						return '✖';
				}
			},
			spfIconClass: () => 'pass' === this.spfData()[0] ? 'iconcolor-green' : 'iconcolor-red',
			spfTitle:() => {
				const spf = this.spfData();
				return spf[0] ? spf[2] || 'SPF: ' + spf[0] : '';
			},

			dmarcIcon: () => {
				switch (this.dmarcData()[0]) {
					case 'none':
						return '🚫︎';
					case 'pass':
						return '✔';
					default:
						return '✖';
				}
			},
			dmarcIconClass: () => 'pass' === this.dmarcData()[0] ? 'iconcolor-green' : 'iconcolor-red',
			dmarcTitle:() => {
				const dmarc = this.dmarcData();
				return dmarc[0] ? dmarc[2] || 'DMARC: ' + dmarc[0] : '';
			},

			showWhitelistOptions: () => 'match' === SettingsUserStore.viewImages(),

			firstUnsubsribeLink: () => currentMessage()?.unsubsribeLinks()[0] || '',

			pgpSupported: () => currentMessage() && PgpUserStore.isSupported(),

			canBeUndeleted: () => currentMessage()?.isDeleted(),

			messageListOrViewLoading:
				() => MessagelistUserStore.isLoading() | MessageUserStore.loading()
		});

		addSubscribablesTo(this, {
			message: message => {
				if (message) {
					if (this.viewHash !== message.hash) {
						this.scrollMessageToTop();
					}
					this.viewHash = message.hash;
					// TODO: make first param a user setting #683
					this.viewFromShort(message.from.toString(false, true));
					this.dkimData(message.dkim[0] || ['none', '', '']);
					this.spfData(message.spf[0] || ['none', '', '']);
					this.dmarcData(message.dmarc[0] || ['none', '', '']);
					this.nowTracking(false);
				} else {
					MessagelistUserStore.selectedMessage(null);

					this.viewHash = '';

					this.scrollMessageToTop();
				}
			},

			showFullInfo: value => Local.set(ClientSideKeyNameMessageHeaderFullInfo, value ? '1' : '0')
		});

		// commands
		this.replyCommand = createCommandReplyHelper(ComposeType.Reply);
		this.replyAllCommand = createCommandReplyHelper(ComposeType.ReplyAll);
		this.forwardCommand = createCommandReplyHelper(ComposeType.Forward);
		this.forwardAsAttachmentCommand = createCommandReplyHelper(ComposeType.ForwardAsAttachment);
		this.editAsNewCommand = createCommandReplyHelper(ComposeType.EditAsNew);

//		this.deleteCommand = createCommandActionHelper(FolderType.Trash);
		// User setting hideDeleted || immediatelyMoveToTrash ??
		this.deleteCommand = createCommandDeleteHelper();
		// User setting !hideDeleted && !immediatelyMoveToTrash ??
		this.undeleteCommand = createCommandSetHelper(MessageSetAction.UnsetDeleted);
		this.deleteWithoutMoveCommand = createCommandActionHelper(FolderType.Trash, true);
		this.archiveCommand = createCommandActionHelper(FolderType.Archive);
		this.spamCommand = createCommandActionHelper(FolderType.Junk);
		this.notSpamCommand = createCommandActionHelper(FolderType.Inbox);

		decorateKoCommands(this, {
			editCommand: self => self.messageVisible(),
			moveCommand: self => self.messageVisible(),
			copyCommand: self => self.messageVisible(),
			goUpCommand: self => !self.messageListOrViewLoading(),
			goDownCommand: self => !self.messageListOrViewLoading()
		});

		// === НОВЫЕ СВОЙСТВА ДЛЯ УПРАВЛЕНИЯ МОДАЛЬНЫМ ОКНОМ ===
		// Используйте ko.observable() для всех свойств, которые будут использоваться с () в HTML
		this.showOnlyOfficeModal = ko.observable(false);
		this.isOnlyOfficeLoading = ko.observable(false);
		this.onlyOfficeIframeSrc = ko.observable('');
		this.currentAttachmentFileName = ko.observable('');
		this.currentAttachmentSrc = ko.observable('');
		this.currentAttachmentMimeType = ko.observable('');

		this.currentTempFileInfo = ko.observable(null);

		this.isImageViewerVisible = ko.observable(false);
		this.isPdfTxtViewerVisible = ko.observable(false);
		this.isUnsupportedViewerVisible = ko.observable(false);
		// === КОНЕЦ НОВЫХ СВОЙСТВ ===

		// Константы OnlyOffice
		this.officeMimeTypes = [
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
			'application/msword', // doc
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
			'application/vnd.ms-excel', // xls
			'application/vnd.openxmlformats-officedocument.presentationml.presentation', // pptx
			'application/vnd.ms-powerpoint', // ppt
			'text/rtf', // rtf
			'text/plain', // txt
			'application/rtf',
			'application/vnd.oasis.opendocument.text', // odt
			'application/vnd.oasis.opendocument.spreadsheet', // ods
			'application/vnd.oasis.opendocument.presentation', // odp
			'application/pdf'
		];

	} // End of constructor()

	// --- НАЧАЛО МЕТОДОВ КЛАССА MAILMESSAGEVIEW ---

	/**
	 * Метод для получения текущего пользователя Nextcloud.
	 * @returns {string|null} Имя текущего пользователя Nextcloud.
	 */
	getCurrentNextcloudUser() {
		if (typeof OC !== 'undefined' && OC.currentUser) {
			console.log('Nextcloud current user:', OC.currentUser);
			return OC.currentUser;
		}
		console.error('Nextcloud current user (OC.currentUser) is not available. Ensure OC is loaded.');
		return null;
	}

	/**
	 * Убеждается, что временный каталог для OnlyOffice существует.
	 * Создает его, если не существует.
	 * @param {string} folderPath Путь к временному каталогу (например, '/temp/snappymail/').
	 * @returns {Promise<void>}
	 */
	async ensureTempDirectoryExists(folderPath) {
		const currentUser = this.getCurrentNextcloudUser();
		if (!currentUser) {
			console.error('ensureTempDirectoryExists: Не удалось получить текущего пользователя Nextcloud. ' +
				'Отмена создания каталога.');
			throw new Error('Nextcloud user not found.');
		}
		// Использование глобальной функции getRequestToken()
		const requestToken = typeof getRequestToken === 'function' ? getRequestToken() : null;
		if (!requestToken) {
			console.error('ensureTempDirectoryExists: Nextcloud request token (getRequestToken()) is not available. ' +
				'Отмена создания каталога.');
			throw new Error('Nextcloud request token not found.');
		}

		const nextcloudDavBaseUrl = generateUrl(`/remote.php/dav/files/admclient/`);
		const fullDirPath = `${nextcloudDavBaseUrl}${folderPath}`;

		console.log('ensureTempDirectoryExists: Проверка существования каталога:', fullDirPath);

		try {
			// Попытка проверить существование каталога с помощью PROPFIND
			const response = await axios.request({
				method: 'PROPFIND',
				url: fullDirPath,
				headers: {
					'X-Requested-With': 'XMLHttpRequest'
				}
			});
			console.log('ensureTempDirectoryExists: PROPFIND response status:', response.status);

			if (response.status === 207) { // 207 Multi-Status - каталог существует
				console.log('ensureTempDirectoryExists: Каталог уже существует.');
				return;
			}
		} catch (error) {
			console.log('ensureTempDirectoryExists: PROPFIND ошибка или каталог не существует, статус:',
				error.response ? error.response.status : 'N/A');
			if (error.response && error.response.status === 404) {
				console.log('ensureTempDirectoryExists: Каталог не найден, попытка создать.');
			} else {
				console.error('ensureTempDirectoryExists: Неожиданная ошибка PROPFIND при проверке каталога:', error);
				throw error;
			}
		}

		try {
			// Если каталог не существует, создаем его с помощью MKCOL
			console.log('ensureTempDirectoryExists: Попытка создать каталог:', fullDirPath);
			const createResponse = await axios.request({
				method: 'MKCOL',
				url: fullDirPath,
				headers: {
					'X-Requested-With': 'XMLHttpRequest'
				}
			});
			console.log('ensureTempDirectoryExists: MKCOL response status:', createResponse.status);

			if (createResponse.status === 201) { // 201 Created - каталог успешно создан
				console.log('ensureTempDirectoryExists: Каталог успешно создан.');
			} else if (createResponse.status === 405) { // 405 Method Not Allowed - каталог уже существует
				console.log('ensureTempDirectoryExists: Каталог уже существует (получен 405 при MKCOL).');
			} else {
				console.error('ensureTempDirectoryExists: Неизвестный статус при создании каталога:', createResponse.status);
				throw new Error('Не удалось создать временный каталог.');
			}
		} catch (error) {
			console.error('ensureTempDirectoryExists: Ошибка при создании временного каталога:', error);
			if (error.response && error.response.status === 405) {
				console.log('ensureTempDirectoryExists: Каталог уже существует (ошибка 405 при MKCOL).');
			} else {
				throw error;
			}
		}
	}


	/**
	 * Генерирует URL для просмотра файла через Nextcloud Files (который может использовать OnlyOffice).
	 * Этот метод включает загрузку файла в Nextcloud и получение его fileId.
	 * @param {AttachmentModel} attachmentItem
	 * @returns {Promise<string|null>} URL для iframe OnlyOffice, или null в случае ошибки.
	 */
	async getOnlyOfficeFrameUrl(attachmentItem) {
		console.log('getOnlyOfficeFrameUrl: Начало процесса загрузки и получения fileId для:', attachmentItem.fileName);

		const fileDownloadUrl = attachmentItem.linkDownload();
		const originalFileName = attachmentItem.fileName;
		const fileMimeType = attachmentItem.mimeType;

		// const currentUser = this.getCurrentNextcloudUser();
		// if (!currentUser) {
		// 	console.error('getOnlyOfficeFrameUrl: Не удалось получить текущего пользователя Nextcloud. Отмена операции.');
		// 	return null;
		// }

		// const requestToken = typeof getRequestToken === 'function' ? getRequestToken() : null;
		// if (!requestToken) {
		// 	console.error('getOnlyOfficeFrameUrl: Nextcloud request token (getRequestToken()) is not available. ' +
		// 		'Отмена операции.');
		// 	return null;
		// }

		const tempPathPrefix = '/Temp/'; // Имя временной папки в Nextcloud Files (для текущего пользователя)

		try {
			// 1. Загружаем файл как blob из SnappyMail
			console.log('getOnlyOfficeFrameUrl: Шаг 1/5 - Загрузка файла вложения как Blob из:', fileDownloadUrl);
			const response = await axios.get(fileDownloadUrl, {
				responseType: 'blob',
				headers: {
					'Content-Type': fileMimeType,
					'X-Requested-With': 'XMLHttpRequest'
				}
			});
			console.log('getOnlyOfficeFrameUrl: Шаг 1/5 - Файл вложения успешно загружен в Blob. Размер:',
				response.data.size, 'байт.');

			// 2. Создаем временное имя файла для Nextcloud и полный путь
			const tempFileName = `snappymail_${Date.now()}_${originalFileName.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`;
			const fullTempFilePath = `${tempPathPrefix}${tempFileName}`;
			console.log('getOnlyOfficeFrameUrl: Шаг 2/5 - Сформировано временное имя файла и путь:', fullTempFilePath);

			// Проверка и создание временной папки /Temp, если она не существует
			await this.ensureTempDirectoryExists(tempPathPrefix);

			// 3. Загружаем файл через WebDAV PUT в Nextcloud
			const uploadUrl = generateUrl(`/remote.php/dav/files/admclient/${fullTempFilePath}`);
			console.log('getOnlyOfficeFrameUrl: Шаг 3/5 - Загрузка файла в Nextcloud по PUT запросу на URL:', uploadUrl);

			await axios.put(
				uploadUrl,
				response.data,
				{
					headers: {
						'Content-Type': fileMimeType,
						'X-Requested-With': 'XMLHttpRequest'
					}
				}
			);
			console.log('getOnlyOfficeFrameUrl: Шаг 3/5 - Файл успешно загружен во временную папку Nextcloud.');

			// 4. Получаем fileid через PROPFIND для только что загруженного файла
			const propfindUrl = generateUrl(`/remote.php/dav/files/admclient/${fullTempFilePath}`);
			console.log('getOnlyOfficeFrameUrl: Шаг 4/5 - Получение fileId через PROPFIND запрос к:', propfindUrl);

			const propfindResponse = await axios.request({
				method: 'PROPFIND',
				url: propfindUrl,
				headers: {
					'Content-Type': fileMimeType,
					'X-Requested-With': 'XMLHttpRequest'
				},
				data: `<?xml version="1.0"?>
                        <d:propfind xmlns:d="DAV:">
                            <d:prop>
                                <oc:fileid xmlns:oc="http://owncloud.org/ns"/>
                            </d:prop>
                        </d:propfind>`
			});
			console.log('getOnlyOfficeFrameUrl: Шаг 4/5 - PROPFIND запрос выполнен. Статус:', propfindResponse.status);

			// 5. Парсим fileid из XML-ответа
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(propfindResponse.data, "text/xml");
			const fileIdNode = xmlDoc.getElementsByTagName('oc:fileid')[0]; // Находим первый элемент с тегом oc:fileid
			const fileId = fileIdNode ? fileIdNode.textContent : null;

			if (!fileId) {
				console.error('getOnlyOfficeFrameUrl: Шаг 5/5 - ОШИБКА: Не удалось получить file ID из ответа PROPFIND. ' +
					'Ответ:', propfindResponse.data);
				throw new Error('Could not get file ID from server response');
			}
			console.log('getOnlyOfficeFrameUrl: Шаг 5/5 - fileId успешно получен:', fileId);

			// Сохраняем информацию о временном файле в модели
			this.currentTempFileInfo( {
				id: fileId,
				path: fullTempFilePath // Сохраняем полный WebDAV путь для удобства
			});
			console.log('getOnlyOfficeFrameUrl: Сохранена информация о временном файле:', this.currentTempFileInfo());

			// Конечный URL для отображения в iframe
			const finalViewerUrl =
				generateUrl(`/apps/files/files/${fileId}?dir=${encodeURIComponent(tempPathPrefix)}&openfile=true&iframe=true`);
			console.log('getOnlyOfficeFrameUrl: Успех! Сформирован конечный URL Nextcloud Files Viewer:', finalViewerUrl);

			return finalViewerUrl;

		} catch (error) {
			console.error('getOnlyOfficeFrameUrl: Общая ошибка в процессе интеграции OnlyOffice:', error);
			if (error.response) {
				console.error('getOnlyOfficeFrameUrl: Ошибка ответа сервера:', error.response.status,
					error.response.data);
			} else if (error.request) {
				console.error('getOnlyOfficeFrameUrl: Нет ответа от сервера:', error.request);
			} else {
				console.error('getOnlyOfficeFrameUrl: Ошибка при настройке запроса:', error.message);
			}
			// Скрываем индикатор загрузки и показываем сообщение о неподдерживаемом файле в случае ошибки
			this.isUnsupportedViewerVisible(true);
			this.isOnlyOfficeLoading(false);
			return null;
		}
	}


	/**
	 * Основной метод для открытия просмотрщика вложения.
	 * @param {AttachmentModel} attachmentItem Экземпляр AttachmentModel для просмотра.
	 * @returns {Promise<void>}
	 */
	async openAttachmentInViewer(attachmentItem) {
		console.log('Клик по вложению для предпросмотра ~');
		console.log('Вызов openAttachmentInViewer. Имя файла:',
			attachmentItem.fileName, 'MIME-тип:', attachmentItem.mimeType);

		this.currentAttachmentFileName(attachmentItem.fileName);
		this.currentAttachmentSrc(attachmentItem.linkDownload());
		this.currentAttachmentMimeType(attachmentItem.mimeType);

		this.isOnlyOfficeLoading(true);
		this.showOnlyOfficeModal(true); // Показываем модальное окно загрузки OnlyOffice

		this.isImageViewerVisible(false);
		this.isPdfTxtViewerVisible(false);
		this.isUnsupportedViewerVisible(false);
		this.onlyOfficeIframeSrc('');

		const fileName = attachmentItem.fileName.toLowerCase();
		const fileExtension = fileName.split('.').pop();
		const mimeType = attachmentItem.mimeType.toLowerCase();

		const supportedImageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
		const supportedPdfTxtExtensions = ['pdf', 'txt']; // txt можно открывать как текст, но и в OO

		console.log('openAttachmentInViewer: Проверка условий OnlyOffice/Nextcloud Files.');
		console.log('openAttachmentInViewer: officeMimeTypes:', this.officeMimeTypes);
		console.log('openAttachmentInViewer: current MIME-type:', mimeType);

		// Встроенный просмотрщик для изображений
		if (supportedImageExtensions.includes(fileExtension) || mimeType.startsWith('image/')) {
			console.log('openAttachmentInViewer: Открытие встроенного предпросмотра изображения для:',
				attachmentItem.fileName);
			this.isImageViewerVisible(true);
			this.isOnlyOfficeLoading(false);
			// Здесь, вероятно, должен быть код для установки src для img или другого просмотра изображений
			// (например, this.currentPreviewUrl(attachmentItem.linkPreviewMain()); this.showPreviewPopup(true);)
			// Если у вас уже есть эта логика, оставьте ее.
		}
		// Встроенный просмотрщик для PDF/текста
		else if (supportedPdfTxtExtensions.includes(fileExtension) || mimeType.includes('pdf') ||
			mimeType.includes('text/plain')) {
			console.log('openAttachmentInViewer: Открытие встроенного предпросмотра PDF/текста для:',
				attachmentItem.fileName);
			this.isPdfTxtViewerVisible(true);
			this.onlyOfficeIframeSrc(attachmentItem.linkDownload()); // или attachmentItem.linkPreviewMain()
			this.isOnlyOfficeLoading(false);
		}
		// Логика для OnlyOffice через Nextcloud Files
		else if (this.officeMimeTypes.includes(mimeType)) {
			console.log('Офисный документ обнаружен для просмотра через Nextcloud Files. MIME-тип:', mimeType); // Обновленный лог

			try {
				const viewerUrl = await this.getOnlyOfficeFrameUrl(attachmentItem); // Теперь он вернет конечный URL Nextcloud Files

				if (viewerUrl) {
					console.log('Получен URL для просмотра Nextcloud Files:', viewerUrl); // Обновленный лог
					this.onlyOfficeIframeSrc(viewerUrl);
					this.isOnlyOfficeLoading(false);
				} else {
					console.warn('Не удалось получить URL для просмотра через Nextcloud Files. ' +
						'Будет показано сообщение о неподдерживаемом файле.'); // Обновленный лог
					this.isUnsupportedViewerVisible(true);
					this.isOnlyOfficeLoading(false);
				}
			} catch (error) {
				console.error('Ошибка при генерации или использовании URL Nextcloud Files/OnlyOffice:', error); // Обновленный лог
				this.isUnsupportedViewerVisible(true);
				this.isOnlyOfficeLoading(false);
			}
		}
		// Если ни один из вышеперечисленных случаев не сработал
		else {
			console.log('openAttachmentInViewer: Предпросмотр не поддерживается для MIME-типа:', mimeType);
			this.isUnsupportedViewerVisible(true);
			this.isOnlyOfficeLoading(false);
		}
	}

	/**
	 * Метод, который будет вызван, когда iframe Nextcloud Files Viewer загрузится.
	 */
	handleOnlyOfficeLoaded() {
		console.log('Nextcloud Files iframe (возможно, с OnlyOffice) загружен.');
		this.isOnlyOfficeLoading(false);
	}

	/**
	 * Метод для закрытия модального окна ONLYOFFICE и очистки временного файла.
	 * @returns {Promise<void>}
	 */
	async closeOnlyOfficeModal() {
		this.showOnlyOfficeModal(false);
		this.isOnlyOfficeLoading(false);
		this.onlyOfficeIframeSrc(''); // Очищаем URL iframe
		this.isImageViewerVisible(false);
		this.isPdfTxtViewerVisible(false);
		this.isUnsupportedViewerVisible(false);
		this.currentAttachmentFileName('');
		this.currentAttachmentSrc('');
		this.currentAttachmentMimeType('');

		// Логика удаления временного файла
		const tempFileInfo = this.currentTempFileInfo();
		if (tempFileInfo && tempFileInfo.path) { // Проверяем наличие tempFileInfo и его path
			try {
				// const currentUser = this.getCurrentNextcloudUser();
				// if (!currentUser) {
				// 	console.error('closeOnlyOfficeModal: Не удалось получить текущего пользователя ' +
				// 		'Nextcloud для удаления файла.');
				// 	return;
				// }
				// const requestToken = typeof getRequestToken === 'function' ? getRequestToken() : null;
				// if (!requestToken) {
				// 	console.error('closeOnlyOfficeModal: Nextcloud request token (getRequestToken()) ' +
				// 		'is not available для удаления файла.');
				// 	return;
				// }

				console.log(`closeOnlyOfficeModal: Попытка удалить временный файл: ${tempFileInfo.path} 
				для пользователя \${currentUser}`);
				await axios.delete(
					generateUrl(`/remote.php/dav/files/admclient/${tempFileInfo.path}`), // Используем tempFileInfo.path
					{
						headers: {
							'X-Requested-With': 'XMLHttpRequest'
						}
					}
				);
				console.log(`closeOnlyOfficeModal: Временный файл ${tempFileInfo.path} успешно удален из Nextcloud.`);
			} catch (deleteError) {
				console.error('closeOnlyOfficeModal: Ошибка при удалении временного файла:', deleteError);
				if (deleteError.response) {
					console.error('closeOnlyOfficeModal: Ответ сервера при удалении:', deleteError.response.status,
						deleteError.response.data);
				}
			} finally {
				this.currentTempFileInfo(null); // Сбрасываем информацию о файле
				// sessionStorage.removeItem('currentSnappyMailTempFile'); // Эту строку можно удалить, если не используете sessionStorage
			}
		} else {
			console.log('closeOnlyOfficeModal: Временный файл для удаления не найден или информация неполна.');
		}
	}

	toggleFullInfo() {
		this.showFullInfo(!this.showFullInfo());
	}

	closeMessage() {
		currentMessage(null);
	}

	editCommand() {
		currentMessage() && showMessageComposer([ComposeType.Draft, currentMessage()]);
	}

	moveOrCopy(vm, event, mode) {
		if (vm && event?.preventDefault) {
			stopEvent(event);
		}
		this.actionsMenu().ddBtn.hide();
		AppUserStore.focusedState(ScopeFolderList);
		moveAction(mode);
	}

	moveCommand(vm, event) {
		this.moveOrCopy(vm, event, 1);
	}

	copyCommand(vm, event) {
		this.moveOrCopy(vm, event, 2);
	}

	setUnseen() {
		setAction(MessageSetAction.UnsetSeen);
		currentMessage(null);
	}

	goUpCommand() {
		fireEvent('mailbox.message-list.selector.go-up',
			!!currentMessage() // bForceSelect
		);
	}

	goDownCommand() {
		fireEvent('mailbox.message-list.selector.go-down',
			!!currentMessage() // bForceSelect
		);
	}

	/**
	 * @param {string} sType
	 * @returns {void}
	 */
	replyOrforward(sType) {
		showMessageComposer([sType, currentMessage()]);
	}

	onBuild(dom) {

		const wrapperBlock = document.querySelector('.rl-wrapper');
		wrapperBlock.classList.add('active');

		const eqs = (ev, s) => ev.target.closestWithin(s, dom);
		dom.addEventListener('click', event => {
			let el = eqs(event, 'a');
			if (el && 0 === event.button && mailToHelper(el.href)) {
				stopEvent(event);
				return;
			}

			el = eqs(event, '.attachmentsPlace .showPreview');
			if (el) {
				const attachment = ko.dataFor(el), url = attachment?.linkDownload();
//				if (url && FileType.Eml === attachment.fileType) {
				if (url && RFC822 == attachment.mimeType) {
					stopEvent(event);
					fetchRaw(url).then(text => {
						const oMessage = new MessageModel();
						MimeToMessage(text, oMessage);
						// cleanHTML
						oMessage.popupMessage();
					});
				}
				return;
			}

			el = eqs(event, '.attachmentsPlace .showPreplay');
			if (el) {
				stopEvent(event);
				const attachment = ko.dataFor(el);
				if (attachment && SMAudio.supported) {
					switch (true) {
						case SMAudio.supportedMp3 && attachment.isMp3():
							SMAudio.playMp3(attachment.linkDownload(), attachment.fileName);
							break;
						case SMAudio.supportedOgg && attachment.isOgg():
							SMAudio.playOgg(attachment.linkDownload(), attachment.fileName);
							break;
						case SMAudio.supportedWav && attachment.isWav():
							SMAudio.playWav(attachment.linkDownload(), attachment.fileName);
							break;
						// no default
					}
				}
				return;
			}

			el = eqs(event, '.attachmentItem');
			if (el) {
				const attachment = ko.dataFor(el), url = attachment?.linkDownload();
				if (url) {
					if ('application/pgp-keys' == attachment.mimeType
					 && (OpenPGPUserStore.isSupported() || GnuPGUserStore.isSupported())) {
						fetchRaw(url).then(text =>
							showScreenPopup(OpenPgpImportPopupView, [text])
						);
					} else {
						// download(url, attachment.fileName);
						this.openAttachmentInViewer(attachment);
					}
				}
			}

			if (eqs(event, '.messageItemHeader .subjectParent .flagParent')) {
				setAction(currentMessage()?.isFlagged() ? MessageSetAction.UnsetFlag : MessageSetAction.SetFlag);
			}
		});

		keyScopeReal.subscribe(value => this.messageDomFocused(ScopeMessageView === value));

		// initShortcuts

		// exit fullscreen, back
		addShortcut('escape', '', ScopeMessageView, () => {
			if (!this.viewModelDom.hidden && currentMessage()) {
				const preview = SettingsUserStore.usePreviewPane();
				if (isFullscreen()) {
					exitFullscreen();
					if (preview) {
						AppUserStore.focusedState(ScopeMessageList);
					}
				} else if (!preview) {
					currentMessage(null);
				} else {
					AppUserStore.focusedState(ScopeMessageList);
				}

				return false;
			}
		});

		// fullscreen
		addShortcut('enter,open', '', ScopeMessageView, () => {
			isFullscreen() || toggleFullscreen();
			return false;
		});

		// reply
		registerShortcut('r,mailreply', '', [ScopeMessageList, ScopeMessageView], () => {
			if (currentMessage()) {
				this.replyCommand();
				return false;
			}
			return true;
		});

		// replyAll
		registerShortcut('a', '', [ScopeMessageList, ScopeMessageView], () => {
			if (currentMessage()) {
				this.replyAllCommand();
				return false;
			}
		});
		registerShortcut('mailreply', 'shift', [ScopeMessageList, ScopeMessageView], () => {
			if (currentMessage()) {
				this.replyAllCommand();
				return false;
			}
		});

		// forward
		registerShortcut('f,mailforward', '', [ScopeMessageList, ScopeMessageView], () => {
			if (currentMessage()) {
				this.forwardCommand();
				return false;
			}
		});

		// message information
		registerShortcut('i', 'meta', [ScopeMessageList, ScopeMessageView], () => {
			currentMessage() && this.toggleFullInfo();
			return false;
		});

		// toggle message blockquotes
		registerShortcut('b', '', [ScopeMessageList, ScopeMessageView], () => {
			const message = currentMessage();
			if (message?.body) {
				message.body.querySelectorAll('details').forEach(node => node.open = !node.open);
				return false;
			}
		});

		addShortcut('b', 'shift', [ScopeMessageList, ScopeMessageView], () => {
			if (!formFieldFocused()) {
				currentMessage()?.swapColors?.();
				return false;
			}
		});

		addShortcut('arrowup,arrowleft', 'meta', [ScopeMessageList, ScopeMessageView], () => {
			this.goUpCommand();
			return false;
		});

		addShortcut('arrowdown,arrowright', 'meta', [ScopeMessageList, ScopeMessageView], () => {
			this.goDownCommand();
			return false;
		});

		// delete
		addShortcut('delete', '', ScopeMessageView, () => {
			this.deleteCommand();
			return false;
		});
		addShortcut('delete', 'shift', ScopeMessageView, () => {
			this.deleteWithoutMoveCommand();
			return false;
		});

		// change focused state
		addShortcut('arrowleft', '', ScopeMessageView, () => {
			if (!isFullscreen() && currentMessage() && SettingsUserStore.usePreviewPane()
			 && !oMessageScrollerDom().scrollLeft) {
				AppUserStore.focusedState(ScopeMessageList);
				return false;
			}
		});
		addShortcut('tab', 'shift', ScopeMessageView, () => {
			if (!isFullscreen() && currentMessage() && SettingsUserStore.usePreviewPane()) {
				AppUserStore.focusedState(ScopeMessageList);
			}
			return false;
		});

		MessageUserStore.bodiesDom(dom.querySelector('.bodyText'));
	} // End of onBuild(dom)

	scrollMessageToTop() {
		oMessageScrollerDom().scrollTop = 0;
	}

	scrollMessageToLeft() {
		oMessageScrollerDom().scrollLeft = 0;
	}

	toggleAttachmentControls() {
		const b = !this.showAttachmentControls();
		this.showAttachmentControls(b);
		Local.set(ClientSideKeyNameMessageAttachmentControls, b);
	}

	downloadAsZip() {
		const hashes = (currentMessage()?.attachments || [])
			.map(item => item?.checked() /*&& !item?.isLinked()*/ ? item.download : '')
			.filter(v => v);
		downloadZip(
			currentMessage().subject(),
			hashes,
			() => this.downloadAsZipError(true),
			this.downloadAsZipLoading
		);
	}

	/**
	 * @param {MessageModel} oMessage
	 * @returns {void}
	 */
	showImages() {
		currentMessage().showExternalImages();
	}

	showTracking() {
		const msg = currentMessage(), body = msg?.body;
		if (body && msg.hasTracking()) {
			let attr = 'data-x-href-tracking';
			body.querySelectorAll('a['+attr+']').forEach(node => node.href = node.getAttribute(attr));
//			attr = 'data-x-src-tracking';
//			body.querySelectorAll('img['+attr+']').forEach(node => node.src = node.getAttribute(attr));
			this.nowTracking(true);
		}
	}

	whitelistText(txt) {
		let value = (SettingsUserStore.viewImagesWhitelist().trim() + '\n' + txt).trim();
/*
		if ('pass' === currentMessage().spf[0]?.[0]) value += '+spf';
		if ('pass' === currentMessage().dkim[0]?.[0]) value += '+dkim';
		if ('pass' === currentMessage().dmarc[0]?.[0]) value += '+dmarc';
*/
		SettingsUserStore.viewImagesWhitelist(value);
		Remote.saveSetting('ViewImagesWhitelist', value);
		currentMessage().showExternalImages(1);
	}

	/**
	 * @returns {string}
	 */
	printableCheckedMessageCount() {
		const cnt = MessagelistUserStore.listCheckedOrSelectedUidsWithSubMails().size;
		return 0 < cnt ? (100 > cnt ? cnt : '99+') : '';
	}

	/**
	 * @param {MessageModel} oMessage
	 * @returns {void}
	 */
	readReceipt() {
		let oMessage = currentMessage();
		if (oMessage.readReceipt) {
			oMessage.flags.push('$mdnsent');
			Remote.request('SendReadReceiptMessage',
				iError => iError && oMessage.flags.remove('$mdnsent'),
				{
					messageFolder: oMessage.folder,
					messageUid: oMessage.uid,
					readReceipt: oMessage.readReceipt,
					subject: i18n('READ_RECEIPT/SUBJECT', { SUBJECT: oMessage.subject() }),
					plain: i18n('READ_RECEIPT/BODY', { 'READ-RECEIPT': AccountUserStore.email() })
				}
			);
		}
	}

	newTag() {
		let message = currentMessage();
		if (message) {
			let keyword = prompt(i18n('MESSAGE/NEW_TAG'), '')?.replace(/[\s\\]+/g, '');
			if (keyword.length && isAllowedKeyword(keyword)) {
				message.toggleTag(keyword);
				FolderUserStore.currentFolder().permanentFlags.push(keyword);
			}
		}
	}

	pgpDecrypt() {
		currentMessage().decrypt();
	}

	pgpVerify(/*self, event*/) {
		currentMessage().pgpVerify();
	}

	async smimeDecrypt() {
		currentMessage().decrypt();
	}

	smimeVerify(/*self, event*/) {
		currentMessage().smimeVerify();
	}
}
