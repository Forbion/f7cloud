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
document.addEventListener('DOMContentLoaded', function () {
    const topBarOuter = document.querySelector('.app-talk .top-bar-outer');
    const topBarWrapper = document.querySelector('.app-talk .top-bar__wrapper');

    const rightSidebarClose = document.querySelector('.app-talk .app-sidebar__close');
    const leftSidebarToggle = document.querySelector('.app-talk .app-navigation-toggle-wrapper');

    function updateTopBarWidth() {
        // console.log('updateTopBarWidth');
        if (topBarWrapper) {

            // Получаем ширину блока .test
            const testWidth = parseFloat(window.getComputedStyle(topBarWrapper).width);

            const sidebarToggle = document.querySelector('.app-talk .app-sidebar__toggle');
            const appNavigation = document.querySelector('.app-navigation');

            console.log('testWidth',testWidth);
            if (!(testWidth > 3)) {
                // console.log('ширина меньше 3');
                // Устанавливаем новую ширину для .top-bar-outer
                if (appNavigation.classList.contains('app-navigation--close')) {
                    // console.log('Элемент имеет класс app-navigation--close');
                    topBarOuter.style.width = `calc(100%)`;
                    topBarOuter.parentElement.style.right = '0';
                    leftSidebarToggle.style.insetInlineEnd = 'calc(60px - var(--app-navigation-padding)) !important';
                } else {
                    // console.log('Элемент НЕ имеет класс app-navigation--close');
                    topBarOuter.style.width = `calc(100% - 60px)`;
                    topBarOuter.parentElement.style.right = '-60px';
                    leftSidebarToggle.style.insetInlineEnd = 'calc(var(--app-navigation-padding))';
                }

                // sidebarToggle.style.insetInlineEnd = `calc(${sidebarToggleWidth}px + 25px)`;
                sidebarToggle.style.setProperty('--sidebar-pad', `${testWidth}px`);
            } else {
                // console.log('Ширина больше 3');
                // Устанавливаем новую ширину для .top-bar-outer
                if (appNavigation.classList.contains('app-navigation--close')) {
                    // console.log('Элемент имеет класс app-navigation--close');
                    topBarOuter.style.width = `calc(100% - ${testWidth}px - 8px)`;
                    topBarOuter.parentElement.style.right = '0';
                    leftSidebarToggle.style.insetInlineEnd = 'calc(60px - var(--app-navigation-padding)) !important';
                } else {
                    // console.log('Элемент НЕ имеет класс app-navigation--close');
                    topBarOuter.style.width = `calc(100% - ${testWidth}px - 68px)`;
                    topBarOuter.parentElement.style.right = '-60px';
                    leftSidebarToggle.style.insetInlineEnd = 'calc(var(--app-navigation-padding))';
                }


                sidebarToggle.style.setProperty('--sidebar-pad', `calc(${testWidth}px + 8px)`);
                // sidebarToggle.style.insetInlineEnd = `calc(${sidebarToggleWidth}px + ${testWidth}px + 25px)`;
            }
        }
    }

    // Наблюдатель за изменениями размеров блока .test
    const resizeObserver = new ResizeObserver(function (entries) {
        for (let entry of entries) {
            // Если изменились размеры блока .test, обновляем ширину .top-bar-outer
            updateTopBarWidth();
        }
    });

    // Начинаем наблюдение за изменениями размеров блока .test
    if (topBarWrapper) {
        resizeObserver.observe(topBarWrapper);
    }

    if (rightSidebarClose) {
        rightSidebarClose.addEventListener('click', function() {
            updateTopBarWidth();
        });
    }

    if (leftSidebarToggle) {
        leftSidebarToggle.addEventListener('click', function() {
            updateTopBarWidth();
        });
    }

    updateTopBarWidth();
});