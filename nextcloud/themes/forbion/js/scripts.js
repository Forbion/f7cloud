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


//axe
document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOMContentLoaded");

    let elements = {
        topBarOuter: null,
        topBarWrapper: null,
        rightSidebarClose: null,
        leftSidebarToggle: null,
        leftSidebarButtons: null,
        appNavigation: null,
        sidebarToggle: null
    };
    let isUpdating = false; // Флаг для предотвращения рекурсии
    let resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
            updateTopBarWidth();
        }
    });

    // Функция для обновления ссылок на элементы
    const updateElements = () => {
        elements.topBarOuter = document.querySelector('.app-talk:not(.in-call) .top-bar-outer');
        elements.topBarWrapper = document.querySelector('.app-talk:not(.in-call) .top-bar__wrapper');
        elements.rightSidebarClose = document.querySelector('.app-talk:not(.in-call) .app-sidebar__close');
        elements.leftSidebarToggle = document.querySelector('.app-talk:not(.in-call) .app-navigation-toggle-wrapper');
        elements.leftSidebarButtons = document.querySelector('.app-talk:not(.in-call) .vue-recycle-scroller__item-wrapper');
        elements.appNavigation = document.querySelector('.app-talk:not(.in-call) .app-navigation');
        elements.sidebarToggle = document.querySelector('.app-talk:not(.in-call) .app-sidebar__toggle');
    };

    // Основная функция обновления ширины
    const updateTopBarWidth = () => {
        if (isUpdating) return;
        isUpdating = true;

        updateElements(); // Обновляем ссылки на элементы перед использованием

        if (elements.topBarWrapper) {
            const testWidth = parseFloat(getComputedStyle(elements.topBarWrapper).width);
            const isNavClosed = elements.appNavigation?.classList.contains('app-navigation--close');

            elements.topBarOuter.parentElement.style.right = isNavClosed ? '0' : '-60px';

            if (testWidth <= 3) {
                elements.topBarOuter.style.width = isNavClosed ? '100%' : 'calc(100% - 60px)';
                if (elements.leftSidebarToggle) {
                    elements.leftSidebarToggle.style.insetInlineEnd = isNavClosed
                        ? 'calc(48px - var(--app-navigation-padding)) !important'
                        : 'calc(var(--app-navigation-padding))';
                }
                if (elements.sidebarToggle) {
                    elements.sidebarToggle.style.setProperty('--sidebar-pad', `${testWidth}px`);
                }
            } else {
                elements.topBarOuter.style.width = isNavClosed
                    ? `calc(100% - ${testWidth}px - 8px)`
                    : `calc(100% - ${testWidth}px - 68px)`;
                if (elements.leftSidebarToggle) {
                    elements.leftSidebarToggle.style.insetInlineEnd = isNavClosed
                        ? 'calc(48px - var(--app-navigation-padding)) !important'
                        : 'calc(var(--app-navigation-padding))';
                }
                if (elements.sidebarToggle) {
                    elements.sidebarToggle.style.setProperty('--sidebar-pad', `calc(${testWidth}px + 8px)`);
                }
            }
        } else {
            // console.log("topBarWrapper отсутствует");
            const isNavClosed = elements.appNavigation?.classList.contains('app-navigation--close');
            if (elements.leftSidebarToggle) {
                elements.leftSidebarToggle.style.insetInlineEnd = isNavClosed
                    ? 'calc(43px - var(--app-navigation-padding)) !important'
                    : 'calc(-10px - var(--app-navigation-padding)) !important';
            }
        }

        isUpdating = false;
    };

    // Функция для настройки наблюдателей и событий
    const setupObserversAndEvents = () => {
        updateElements();

        // Настройка ResizeObserver
        if (elements.topBarWrapper && !resizeObserver.observing) {
            resizeObserver.observe(elements.topBarWrapper);
            resizeObserver.observing = true; // Флаг, чтобы не дублировать наблюдение
        }

        // Привязка обработчиков событий
        if (elements.rightSidebarClose && !elements.rightSidebarClose.hasListener) {
            elements.rightSidebarClose.addEventListener('click', () => {
                // console.log('rightSidebarClose clicked');
                updateTopBarWidth();
            });
            elements.rightSidebarClose.hasListener = true;
        }

        if (elements.leftSidebarButtons && !elements.leftSidebarButtons.hasListener) {
            elements.leftSidebarButtons.addEventListener('click', () => {
                updateTopBarWidth();
            });
            elements.leftSidebarButtons.hasListener = true;
        }

        if (elements.leftSidebarToggle && !elements.leftSidebarToggle.hasListener) {
            elements.leftSidebarToggle.addEventListener('click', () => {
                updateTopBarWidth();
            });
            elements.leftSidebarToggle.hasListener = true;
        }

        updateTopBarWidth(); // Первоначальное обновление
    };

    // Отслеживание изменений в DOM
    const mutationObserver = new MutationObserver(() => {
        setupObserversAndEvents();
    });
    // mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Первоначальная настройка
    setupObserversAndEvents();
});


// Files
// Функция для перемещения элементов и управления видимостью

const moveElements = () => {
    const searchBox = document.querySelector('.app-files .searchBoxReplace');
    const buttonAddReplace = document.querySelector('.app-files .breadcrumb__actions');
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
    }

    // Перемещение buttonAddReplace
    if (buttonAddReplace && searchBoxActual) {
        searchBoxActual.append(buttonAddReplace);
    }

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
