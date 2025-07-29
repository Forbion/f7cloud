document.addEventListener('DOMContentLoaded', function() {
    const linkMore = document.querySelector('#header .app-menu-entry__link-more');
    const hiddenMenuList = document.querySelector('#header .hidden-app-menu__list');

    if (linkMore && hiddenMenuList) {
        linkMore.addEventListener('click', function(event) {
            event.preventDefault();

            if (hiddenMenuList.classList.contains('is-active')) {
                hiddenMenuList.classList.remove('is-active');
            } else {
                hiddenMenuList.classList.add('is-active');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // const firstMenuEntries = document.querySelectorAll('.app-menu__list:first-child .app-menu-entry');
    // const secondMenuEntries = document.querySelectorAll('.app-menu__list:last-child .app-menu-entry');

    // firstMenuEntries.forEach((entry, index) => {
    //     const width = entry.offsetWidth;
    //     if (secondMenuEntries[index]) {
            //secondMenuEntries[index].style.width = `${width}px`;
        // }
    // });
});

window.addEventListener('resize', function() {
    // firstMenuEntries.forEach((entry, index) => {
    //     const width = entry.offsetWidth;
    //     if (secondMenuEntries[index]) {
            //secondMenuEntries[index].style.width = `${width}px`;
        // }
    // });
});

document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', function(event) {

        if (event.target.classList.contains('native-datetime-picker--input')) {

            const inputElement = event.target;

            inputElement.classList.add('is-set-value');
        }
    });
});


// Выпадающее меню
document.addEventListener('DOMContentLoaded', function() {
    // console.log('menu-init');
    const userMenuLink = document.getElementById('user-menu-f7mail');
    const dropdownMenu = document.getElementById('header-menu-user-menu-f7mail');
    // console.log('userMenuLink',userMenuLink);
    // console.log('dropdownMenu',dropdownMenu);

    if (userMenuLink && dropdownMenu) {
        // console.log('menu-init1');
        userMenuLink.addEventListener('click', function(e) {
            // console.log('menu-init2');
            e.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', function(e) {
            // console.log('menu-click');
            if (!dropdownMenu.contains(e.target) && e.target !== userMenuLink) {
                dropdownMenu.style.display = 'none';
            }
        });
    }

    //уведомления иконка
    setTimeout(function () {
        const newNotifications = document.getElementsByClassName('notification__dot');
        if (newNotifications.length > 0) {
            const spanAlert = document.createElement('span');
            spanAlert.className = 'alert-icon';
            newNotifications[0].parentNode.parentNode.appendChild(spanAlert);
        }
    }, 2000);
});


//axe
document.addEventListener('DOMContentLoaded', () => {
    // Конфигурация элементов
    const elements = {
        appTalk: null,
        topBarOuter: null,
        topBar: null,
        topBarWrapper: null,
        rightSidebarClose: null,
        leftSidebarToggle: null,
        leftSidebarButtons: null,
        appNavigation: null,
        sidebarToggle: null,
        emptyTopBar: null
    };

    // Состояние приложения
    const state = {
        isUpdating: false,
        inCall: false,
        isNavClosed: false,
        observers: {
            resize: null,
            topBar: null,
            dom: null
        },
        flags: {
            resizeObserving: false,
            listenersAttached: false
        }
    };

    // Инициализация наблюдателей
    const initObservers = () => {
        // ResizeObserver для отслеживания изменений размеров
        state.observers.resize = new ResizeObserver(() => {
            if (!state.isUpdating) updateLayout();
        });

        // MutationObserver для отслеживания изменений класса top-bar
        state.observers.topBar = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    const newCallStatus = mutation.target.classList.contains('top-bar--in-call');
                    if (newCallStatus !== state.inCall) {
                        state.inCall = newCallStatus;
                        // console.log('Call status changed:', state.inCall);
                        updateLayout();
                    }
                }
            });
        });

        // MutationObserver для общих изменений DOM
        state.observers.dom = new MutationObserver(() => {
            setupEventListeners();
            updateLayout();
        });
    };

    // Обновление ссылок на DOM-элементы
    const updateElements = () => {
        elements.appTalk = document.querySelector('.app-talk');
        elements.topBarOuter = document.querySelector('.app-talk .top-bar-outer');
        elements.topBar = document.querySelector('.app-talk .top-bar');
        elements.topBarWrapper = document.querySelector('.app-talk:not(.in-call) .top-bar__wrapper');
        elements.rightSidebarClose = document.querySelector('.app-talk .app-sidebar__close');
        elements.leftSidebarToggle = document.querySelector('.app-talk:not(.in-call) .app-navigation-toggle-wrapper');
        elements.leftSidebarButtons = document.querySelector('.app-talk:not(.in-call) .vue-recycle-scroller__item-wrapper');
        elements.appNavigation = document.querySelector('.app-talk:not(.in-call) .app-navigation');
        elements.sidebarToggle = document.querySelector('.app-talk:not(.in-call) .app-sidebar__toggle');
        elements.emptyTopBar = document.querySelector('.app-talk:not(.in-call) .emptyTopBar');

        // Обновляем состояние навигации
        if (elements.appNavigation) {
            state.isNavClosed = elements.appNavigation.classList.contains('app-navigation--close');
        }

        // Настраиваем наблюдение за top-bar
        if (elements.topBar && !elements.topBar.isObserved) {
            state.observers.topBar.observe(elements.topBar, {
                attributes: true,
                attributeFilter: ['class']
            });
            elements.topBar.isObserved = true;
            state.inCall = elements.topBar.classList.contains('top-bar--in-call');
        }
    };

    // Основная функция обновления ширины
    const updateLayout = () => {
        if (state.isUpdating) return;
        state.isUpdating = true;

        updateElements();

        if (elements.topBarWrapper) {
            const testWidth = parseFloat(getComputedStyle(elements.topBarWrapper).width);

            // Применяем стили в зависимости от состояния звонка
            if (elements.topBar) {
                elements.topBar.style.right = state.isNavClosed ? '0px' : '-60px';
            }

            if (testWidth <= 3) {
                applyCompactLayout(testWidth);
            } else {
                applyNormalLayout(testWidth);
            }
        } else {
            applyFallbackLayout();
        }

        state.isUpdating = false;
    };

    // Функции для разных режимов layout
    const applyCompactLayout = (testWidth) => {
        if (elements.topBarOuter) {
            elements.topBarOuter.style.width = state.isNavClosed ? '100%' : 'calc(100% - 60px)';
        }

        if (elements.leftSidebarToggle) {
            elements.leftSidebarToggle.style.insetInlineEnd = state.isNavClosed
                ? 'calc(32px - var(--app-navigation-padding)) !important'
                : 'calc(var(--app-navigation-padding))';
        }

        if (elements.sidebarToggle) {
            elements.sidebarToggle.style.setProperty('--sidebar-pad', `${testWidth}px`);
        }
    };

    const applyNormalLayout = (testWidth) => {
        if (elements.topBarOuter) {
            elements.topBarOuter.style.width = state.isNavClosed
                ? `calc(100% - ${testWidth}px - 8px)`
                : `calc(100% - ${testWidth}px - 68px)`;
        }

        if (elements.leftSidebarToggle) {
            elements.leftSidebarToggle.style.insetInlineEnd = state.isNavClosed
                ? 'calc(32px - var(--app-navigation-padding)) !important'
                : 'calc(var(--app-navigation-padding))';
        }

        if (elements.sidebarToggle) {
            const sidebarPad = state.inCall
                ? `calc(${testWidth}px + 8px)`
                : `calc(${testWidth}px)`;
            elements.sidebarToggle.style.setProperty('--sidebar-pad', sidebarPad);
        }
    };

    const applyFallbackLayout = () => {
        if (elements.emptyTopBar) {
            elements.emptyTopBar.style.left = state.isNavClosed ? '54px' : '94px';
            elements.emptyTopBar.style.width = state.isNavClosed ? 'calc(100% - 54px)' : 'calc(100% - 94px)';
        }

        if (elements.leftSidebarToggle) {
            elements.leftSidebarToggle.style.insetInlineEnd = state.isNavClosed
                ? 'calc(28px - var(--app-navigation-padding)) !important'
                : 'calc(-26px - var(--app-navigation-padding)) !important';
        }
    };

    // Настройка обработчиков событий
    const setupEventListeners = () => {
        if (elements.rightSidebarClose && !elements.rightSidebarClose.hasListener) {
            elements.rightSidebarClose.addEventListener('click', updateLayout);
            elements.rightSidebarClose.hasListener = true;
        }

        if (elements.leftSidebarButtons && !elements.leftSidebarButtons.hasListener) {
            elements.leftSidebarButtons.addEventListener('click', updateLayout);
            elements.leftSidebarButtons.hasListener = true;
        }

        if (elements.leftSidebarToggle && !elements.leftSidebarToggle.hasListener) {
            elements.leftSidebarToggle.addEventListener('click', updateLayout);
            elements.leftSidebarToggle.hasListener = true;
        }
    };

    // Инициализация ResizeObserver
    const setupResizeObserver = () => {
        if (elements.topBarWrapper && !state.flags.resizeObserving) {
            state.observers.resize.observe(elements.topBarWrapper);
            state.flags.resizeObserving = true;
        }
    };

    // Основная функция инициализации
    const initialize = () => {
        initObservers();
        updateElements();
        setupEventListeners();
        setupResizeObserver();
        updateLayout();

        // Начинаем наблюдение за изменениями DOM
        state.observers.dom.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false
        });
    };

    // Запускаем приложение
    initialize();
});


// Files
// Функция для перемещения элементов и управления видимостью

const moveElements = () => {
    const searchBox = document.querySelector('.app-files .searchBoxReplace');
    const buttonAddReplace = document.querySelector('.app-files .breadcrumb__actions');
    const buttonDisabled = document.querySelector('.app-files .files-list__header-upload-button--disabled');
    const targetContainer = document.querySelector('.app-files .files-list__header');
    const gridButton = document.querySelector('.app-files .files-list__header-grid-button');
    const targetContainerFirstElement = document.querySelector('.app-files .files-list__breadcrumbs');
    const searchBoxActual = document.querySelector('.app-files .app-navigation__search');


    // Создаем элемент с лупой, если он еще не существует
    let magnifier = document.querySelector('.app-files .magnifier-icon');
    if (!magnifier && targetContainer) {
        magnifier = document.createElement('div');
        magnifier.className = 'magnifier-icon';
        magnifier.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3504_3055)">
                <circle cx="5.5" cy="5.5" r="4.75" stroke="#808080" stroke-width="1.5"/>
                <path d="M8.73541 9L14.7354 15" stroke="#808080" stroke-width="1.5" stroke-linecap="round"/>
                </g>
                <defs>
                <clipPath id="clip0_3504_3055">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        `;
        magnifier.style.cursor = 'pointer';
        // targetContainer.insertBefore(magnifier, gridButton);
        targetContainerFirstElement.after(magnifier);

        // Обработчик клика на лупу для активации поля поиска
        magnifier.addEventListener('click', () => {
            if (searchBox) {
                searchBox.style.display = 'flex';
                magnifier.style.display = 'none'; // Скрываем лупу
                searchBox.querySelector('input')?.focus(); // Фокусируемся на инпуте, если он есть
            }
        });

        // Перемещение searchBox
        if (searchBox && targetContainer && magnifier) {
            // console.log('insertBefore');
            targetContainer.insertBefore(searchBox, magnifier);
            // targetContainer.append(searchBox);
            searchBox.style.display = ''; // Скрываем по умолчанию
        }



        // Обработчики для поля поиска
        if (searchBox) {
            const input = searchBox.querySelector('input'); // Предполагаем, что внутри searchBox есть input
            if (input) {
                input.addEventListener('focus', () => {
                    if (magnifier) {
                        magnifier.style.display = 'none'; // Скрываем лупу при фокусе
                    }
                });

                input.addEventListener('blur', () => {
                    if (magnifier) {
                        magnifier.style.display = 'flex'; // Показываем лупу при потере фокуса
                        searchBox.style.display = 'none'; // Скрываем поле поиска
                    }
                });
            }
        }
    }

    // Перемещение buttonAddReplace
    if (buttonAddReplace && searchBoxActual) {
        searchBoxActual.append(buttonAddReplace);
        if (buttonDisabled) {
            buttonDisabled.style.display = 'flex';
        }
    }

};

// Выполняем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    moveElements();
});

// Отслеживаем изменения в DOM
const observer = new MutationObserver(() => {
    moveElements();
});

// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });


document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('[href="#profile-visibility"]');
    const profileWrapper = document.querySelector('.settings-visible-profile');
    if(toggleButton && profileWrapper) {
        toggleButton.addEventListener('click', function() {
            if (profileWrapper.style.display === 'none' || profileWrapper.style.display === '') {
                profileWrapper.style.display = 'block';
            } else {
                profileWrapper.style.display = 'none';
            }
        });
    }
});


/**
 * Toggle password visibility in SnappyMail login form
 */
function initSnappyMailPasswordToggle() {
    if (!window.location.pathname.includes('/apps/snappymail/')) {
        return;
    }
    // console.log('snappymail-js-init');
    const setupPasswordToggle = () => {
        const passwordControl = document.querySelector('#password-control');
        // console.log('Элемент passwordControl (попытка найти через setupPasswordToggle):', passwordControl);

        if (passwordControl) {
            const passwordToggleIcon = passwordControl.querySelector('.password-toggle-icon');
            const inputField = passwordControl.querySelector('input[name="Password"]');
            const eyeOpenIcon = passwordControl.querySelector('.eye-icon.eye-open');
            const eyeClosedIcon = passwordControl.querySelector('.eye-icon.eye-closed');

            if (passwordToggleIcon && inputField && eyeOpenIcon && eyeClosedIcon) {
                // console.log('Все необходимые элементы для переключения пароля найдены. Добавляем слушатель клика.');
                passwordToggleIcon.addEventListener('click', (event) => {
                    // console.log('Клик по иконке переключения пароля!');
                    event.preventDefault();
                    event.stopPropagation();

                    passwordControl.classList.toggle('show-password');

                    if (inputField.type === 'password') {
                        inputField.type = 'text';
                    } else {
                        inputField.type = 'password';
                    }

                    eyeOpenIcon.classList.toggle('active');
                    eyeClosedIcon.classList.toggle('active');
                });
                return true;
            }
        }
        return false;
    };

    if (setupPasswordToggle()) {
        return;
    }

    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                if (setupPasswordToggle()) {
                    observer.disconnect();
                    return;
                }
            }
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'complete') {
    initSnappyMailPasswordToggle();
} else {
    document.addEventListener('DOMContentLoaded', initSnappyMailPasswordToggle);
}
