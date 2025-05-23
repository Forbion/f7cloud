import { leftPanelDisabled, toggleLeftPanel } from 'Common/Globals';

import { MessageUserStore } from 'Stores/User/Message';
import { ThemeStore } from 'Stores/Theme';

import { AbstractViewRight } from 'Knoin/AbstractViews';

export class SettingsPaneUserView extends AbstractViewRight {
	constructor() {
		super();
	}

	onShow() {
		MessageUserStore.message(null);
	}

	onBuild(dom) {
		dom.addEventListener('click', () => {
			if (event.target.closestWithin('.toggleLeft', dom)) {
				toggleLeftPanel();
			} else {
				ThemeStore.isMobile() && leftPanelDisabled(true);
			}

			//поиск
			const searchInput = document.querySelector('.search-wrapper-tab input[type="search"]#search_accounts');
			const accountItems = document.querySelectorAll('.account-item');

			if(searchInput && accountItems) {
				searchInput.addEventListener('input', function() {
					const searchTerm = searchInput.value.trim().toLowerCase();

					accountItems.forEach(function(item) {
						const accountNameElement = item.querySelector('.account-name');
						if (accountNameElement) {
							const accountName = accountNameElement.textContent.trim().toLowerCase();

							if (searchTerm === '' || accountName.includes(searchTerm)) {
								item.style.display = 'block';
							} else {
								item.style.display = 'none';
							}
						} else {
							item.style.display = 'none';
						}
					});
				});
			}

			//поиск
			const searchInput2 = document.querySelector('.search-wrapper-tab input[type="search"]#search_folders');
			const folderItems2 = document.querySelectorAll('.b-tab-content table tr');

			if(searchInput2 && folderItems2) {
				searchInput2.addEventListener('input', function() {
					const searchTerm = searchInput2.value.trim().toLowerCase();

					folderItems2.forEach(function(item) {
						const folderName = item.querySelector('.folder-name');
						if (folderName) {
							const accountName = folderName.textContent.trim().toLowerCase();

							if (searchTerm === '' || accountName.includes(searchTerm)) {
								item.style.display = '';
							} else {
								item.style.display = 'none';
							}
						} else {
							item.style.display = 'none';
						}
					});
				});
			}
		});
	}
}
