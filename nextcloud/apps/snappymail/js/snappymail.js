/**
 * Nextcloud - SnappyMail mail plugin
 *
 * @author RainLoop Team, Nextgen-Networks (@nextgen-networks), Tab Fitts (@tabp0le), Pierre-Alain Bandinelli (@pierre-alain-b), SnappyMail, Rene Hampölz (@hampoelz)
 *
 * Based initially on https://github.com/RainLoop/rainloop-webmail/tree/master/build/owncloud/rainloop-app
 */

// Do the following things once the document is fully loaded.
document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		watchIFrameTitle();
		passThemesToIFrame();
		let form = document.querySelector('form.snappymail');
		form && SnappyMailFormHelper(form);
		setupUnifiedSearchListener()
	}
};

// Pass Nextcloud themes and theme attributes to SnappyMail on
// first load and when the SnappyMail iframe is reloaded. 
function passThemesToIFrame() {
	const iframe = document.getElementById('rliframe');
	if (!iframe) return;

	let firstLoad = true;

	iframe.addEventListener('load', event => {
		// repass theme styles when iframe is reloaded
		if (!firstLoad) {
			passThemes(event.target);
		}
		firstLoad = false;
	});

	passThemes(iframe);
}

// Pass Nextcloud themes and theme attributes to SnappyMail.
function passThemes(iframe) {
	if (!iframe) return;
	
	const target = iframe.contentWindow.document;

	const ncStylesheets = [...document.querySelectorAll('link.theme')];
	ncStylesheets.forEach(ncSheet => {
		const smSheet = target.importNode(ncSheet, true);
		target.head.appendChild(smSheet);
	});

	const themes = [...document.body.attributes].filter(att => att.name.startsWith('data-theme'));
	themes.forEach(theme => target.body.setAttribute(theme.name, theme.value));
}

// The SnappyMail application is already configured to modify the <title> element
// of its root document with the number of unread messages in the inbox.
// However, its document is the SnappyMail iframe. This function sets up a
// Mutation Observer to watch the <title> element of the iframe for changes in
// the unread message count and propagates that to the parent <title> element,
// allowing the unread message count to be displayed in the NC tab's text when
// the SnappyMail app is selected.
function watchIFrameTitle() {
	let iframe = document.getElementById('rliframe');
	if (!iframe) {
		return;
	}
	let target = iframe.contentDocument.getElementsByTagName('title')[0];
	let config = {
		characterData: true,
		childList: true,
		subtree: true
	};
	let observer = new MutationObserver(mutations => {
		let title = mutations[0].target.innerText;
		if (title) {
			let matches = title.match(/\(([0-9]+)\)/);
			if (matches) {
				document.title = '('+ matches[1] + ') ' + t('snappymail', 'Email') + ' - Nextcloud';
			} else {
				document.title = t('snappymail', 'Email') + ' - Nextcloud';
			}
		}
	});
	observer.observe(target, config);
}

function SnappyMailFormHelper(oForm)
{
	try
	{
		var
			oSubmit = document.getElementById('snappymail-save-button'),
			sSubmitValue = oSubmit.textContent,
			oDesc = oForm.querySelector('.snappymail-result-desc')
		;

		oForm.addEventListener('submit', oEvent => {
			oEvent.preventDefault();

			oForm.classList.add('snappymail-fetch')
			oForm.classList.remove('snappymail-error')
			oForm.classList.remove('snappymail-success')

			oDesc.textContent = '';
			oSubmit.textContent = '...';

			let data = new FormData(oForm);
			data.set('appname', 'snappymail');

			fetch(OC.filePath('snappymail', 'fetch', oForm.getAttribute('action')), {
				mode: 'same-origin',
				cache: 'no-cache',
				redirect: 'error',
				referrerPolicy: 'no-referrer',
				credentials: 'same-origin',
				method: 'POST',
				headers: {},
				body: data
			})
			.then(response => response.json())
			.then(oData => {
				let bResult = 'success' === oData?.status;
				oForm.classList.remove('snappymail-fetch');
				oSubmit.textContent = sSubmitValue;
				if (oData?.Message) {
					oDesc.textContent = t('snappymail', oData.Message);
				}
				if (bResult) {
					oForm.classList.add('snappymail-success');
				} else {
					oForm.classList.add('snappymail-error');
					if ('' === oDesc.textContent) {
						oDesc.textContent = t('snappymail', 'Error');
					}
				}
			});

			return false;
		});
	} catch (e) {
		console.error(e);
	}
}

function setupUnifiedSearchListener() {
	const iframe = document.getElementById('rliframe');
	if (!iframe || !iframe.contentWindow) return;

	addEventListener('hashchange', (event) => {
		const hashIndex = event.newURL.indexOf('#/mailbox/');
		if (hashIndex !== -1) {
			const hash = event.newURL.substring(hashIndex + 1);
			if (/\/[\w-]+\/[\w-]+\/\w\d+\/.{0,24}/.test(hash)) {
				iframe.contentWindow.location.hash = hash;
			}
		}
	});
}

document.getElementById('loadCalendars').addEventListener('click', myFunction);

// Импорт необходимых библиотек
const _ = require('underscore');
const $ = require('jquery');
const Backbone = require('backbone');
const dav = require('davclient');
const ical = require('ical');
const OC = require('OC');
const Radio = require('radio');
const Calendar = require('models/dav/calendar');

// Настройка клиента DAV
const client = new dav.Client({
	baseUrl: OC.linkToRemote('dav/calendars'),
	xmlNamespaces: {
		'DAV:': 'd',
		'urn:ietf:params:xml:ns:caldav': 'c',
		'http://apple.com/ns/ical/': 'aapl',
		'http://owncloud.org/ns': 'oc',
		'http://calendarserver.org/ns/': 'cs'
	}
});

// Свойства календаря для запроса
const calendarProps = [
	'{DAV:}displayname',
	'{urn:ietf:params:xml:ns:caldav}calendar-description',
	'{urn:ietf:params:xml:ns:caldav}calendar-timezone',
	'{http://apple.com/ns/ical/}calendar-order',
	'{http://apple.com/ns/ical/}calendar-color',
	'{urn:ietf:params:xml:ns:caldav}supported-calendar-component-set',
	'{http://owncloud.org/ns}calendar-enabled',
	'{DAV:}acl',
	'{DAV:}owner',
	'{http://owncloud.org/ns}invite'
];

// Регистрация обработчиков событий
Radio.dav.reply('calendars', getUserCalendars);
Radio.dav.reply('calendar:import', importCalendarEvent);

// Функция для получения кода ответа HTTP
function getHTTPResponseCode(responseText) {
	return parseInt(responseText.split(' ')[1]);
}

// Проверка прав доступа к календарю
function checkCalendarPermissions(properties) {
	let canWrite = false;
	const acl = properties['{DAV:}acl'];

	if (acl) {
		for (let i = 0; i < acl.length; i++) {
			const writeNode = acl[i].getElementsByTagNameNS('DAV:', 'write');
			if (writeNode.length > 0) {
				canWrite = true;
				break;
			}
		}
	}

	properties.canWrite = canWrite;
}

// Формирование данных календаря
function prepareCalendarData(properties) {
	checkCalendarPermissions(properties);

	const data = {
		displayname: properties['{DAV:}displayname'],
		color: properties['{http://apple.com/ns/ical/}calendar-color'],
		order: properties['{http://apple.com/ns/ical/}calendar-order'],
		components: { vevent: false },
		writable: properties.canWrite
	};

	const components = properties['{urn:ietf:params:xml:ns:caldav}supported-calendar-component-set'] || [];
	for (let i = 0; i < components.length; i++) {
		const name = components[i].attributes.getNamedItem('name').textContent.toLowerCase();
		if (data.components.hasOwnProperty(name)) {
			data.components[name] = true;
		}
	}

	return data;
}

// Получение календарей пользователя
function getUserCalendars() {
	return new Promise((resolve, reject) => {
		const url = `${OC.linkToRemote('dav/calendars')}/${OC.currentUser}/`;

		client.propFind(url, calendarProps, 1, {
			'requesttoken': OC.requestToken
		}).then(response => {
			const calendars = new Backbone.Collection();

			_.each(response.body, calendar => {
				if (calendar.propStat.length < 1) return;

				const statusCode = getHTTPResponseCode(calendar.propStat[0].status);
				if (statusCode === 200) {
					const properties = prepareCalendarData(calendar.propStat[0].properties);
					if (properties && properties.components.vevent && properties.writable) {
						properties.url = calendar.href;
						calendars.push(new Calendar(properties));
					}
				}
			});

			resolve(calendars);
		}).catch(error => {
			reject(error);
		});
	});
}

// Генерация случайной строки
function generateRandomString() {
	return Math.random().toString(36).substring(2, 9);
}

// Создание элемента iCal
function createICalendar() {
	const calendar = new ical.Component(['vcalendar', [], []]);
	calendar.updatePropertyWithValue('prodid', `-//${OC.theme.name} Mail`);
	return calendar;
}

// Разбор календаря на компоненты
function parseCalendarData(data) {
	const result = {
		name: '',
		color: '',
		split: { vevent: [], vjournal: [], vtodo: [] }
	};

	const jCal = ical.parse(data);
	const components = new ical.Component(jCal);

	// Получаем временные зоны
	const timezones = components.getAllSubcomponents('vtimezone');

	// Получаем компоненты календаря
	const componentTypes = ['vevent', 'vjournal', 'vtodo'];
	const calendarObjects = {};

	componentTypes.forEach(type => {
		calendarObjects[type] = {};
		const items = components.getAllSubcomponents(type);

		items.forEach(item => {
			const uid = item.getFirstPropertyValue('uid');
			calendarObjects[type][uid] = calendarObjects[type][uid] || [];
			calendarObjects[type][uid].push(item);
		});
	});

	// Формируем разделенные календари
	componentTypes.forEach(type => {
		Object.values(calendarObjects[type]).forEach(objects => {
			const calendar = createICalendar();

			timezones.forEach(tz => calendar.addSubcomponent(tz));
			objects.forEach(obj => calendar.addSubcomponent(obj));

			result.split[type].push(calendar.toString());
		});
	});

	result.name = components.getFirstPropertyValue('x-wr-calname');
	result.color = components.getFirstPropertyValue('x-apple-calendar-color');

	return result;
}

// Импорт событий календаря
function importCalendarEvent(url, data) {
	return new Promise((resolve, reject) => {
		const requests = [];
		const calendar = parseCalendarData(data);

		['vevent', 'vjournal', 'vtodo'].forEach(type => {
			calendar.split[type].forEach(component => {
				requests.push(
					$.ajax({
						url: `${url}${generateRandomString()}`,
						method: 'PUT',
						contentType: 'text/calendar; charset=utf-8',
						data: component
					}).fail(() => reject())
				);
			});
		});

		Promise.all(requests)
			.then(() => resolve())
			.catch(error => reject(error));
	});
}