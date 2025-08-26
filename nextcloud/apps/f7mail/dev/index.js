import { showScreenPopup } from 'Knoin/Knoin';
import { AccountPopupView } from 'View/Popup/Account';
import { showMessageComposer } from 'Common/UtilsUser';

if (window.location.pathname === '/apps/f7mail/' && window.location.hash.startsWith('#/new-letter/')) {
    const queryString = window.location.search;
    window.location.href = '/apps/f7mail/' + queryString;
}

//активное меню
const menuItems = document.querySelectorAll('.menu li');

function setActiveMenuItemByClick() {
    menuItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            menuItems.forEach(item => item.classList.remove('active'));

            this.classList.add('active');

            if(document.querySelector('#V-PopupsCompose')) {
                if (index === 0) {
                    history.pushState({}, '', '/apps/f7mail/#/new-letter/');
                    document.querySelector('#V-PopupsCompose').classList.add('active');
                } else {
                    document.querySelector('#V-PopupsCompose').classList.remove('active');
                }
            }
        });
    });
}

setActiveMenuItemByClick();

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('buttonEdit')) {

        history.pushState({}, '', '/apps/f7mail/#/new-letter/');

        document.querySelectorAll('#rl-menu ul.menu li.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('#rl-menu ul.menu li')[0]?.classList.add('active');

        const popupNewLetter = document.querySelector('#V-PopupsCompose');

        if(popupNewLetter) {
            document.querySelector('#V-PopupsCompose').classList.add('active');
        }
    }
    if (event.target.classList.contains('buttonReply')) {

        history.pushState({}, '', '/apps/f7mail/#/new-letter/');

        document.querySelectorAll('#rl-menu ul.menu li.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('#rl-menu ul.menu li')[0]?.classList.add('active');

        const popupNewLetter = document.querySelector('#V-PopupsCompose');

        if(popupNewLetter) {
            document.querySelector('#V-PopupsCompose').classList.add('active');
        }
    }
    if (event.target.classList.contains('buttonReplyAll')) {

        history.pushState({}, '', '/apps/f7mail/#/new-letter/');

        document.querySelectorAll('#rl-menu ul.menu li.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('#rl-menu ul.menu li')[0]?.classList.add('active');

        const popupNewLetter = document.querySelector('#V-PopupsCompose');

        if(popupNewLetter) {
            document.querySelector('#V-PopupsCompose').classList.add('active');
        }
    }
    if (event.target.classList.contains('letterMailCustom')) {

        history.pushState({}, '', '/apps/f7mail/#/new-letter/');

        document.querySelectorAll('#rl-menu ul.menu li.active').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('#rl-menu ul.menu li')[0]?.classList.add('active');

        const popupNewLetter = document.querySelector('#V-PopupsCompose');

        if(popupNewLetter) {
            document.querySelector('#V-PopupsCompose').classList.add('active');
        }
    }

    //кастом - для того чтобы убрать ошибку null window.parent.OCA.Onlyoffice.context для onlyoffice в письме
    if (event.target.classList.contains('attachmentIcon')) {
        window.parent.OCA = window.parent.OCA || {};
        window.parent.OCA.Onlyoffice = window.parent.OCA.Onlyoffice || {};
        window.parent.OCA.Onlyoffice.context = '';
    }
});

function setActiveMenuItem() {

    const currentURL = window.location.href;

    const popupNewLetter = document.querySelector('#V-PopupsCompose');

    if(popupNewLetter) {
        document.querySelector('#V-PopupsCompose').classList.remove('active');
    }

    function setActive(index) {
        menuItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    if (currentURL.includes('/mailbox/')) {
        setActive(1);
    } else if (currentURL.includes('/settings/')) {
        setActive(2);
    } else {
        setActive(1);
    }
}

setActiveMenuItem();
window.addEventListener('popstate', setActiveMenuItem);
window.addEventListener('hashchange', setActiveMenuItem);

//добавление учетки
const addNewAccountButton = document.querySelector('.addNewAccountCustom');

function handleAddNewAccountClick() {
    setTimeout(function () {
        showScreenPopup(AccountPopupView);
    }, 50)
}

addNewAccountButton.addEventListener('click', handleAddNewAccountClick);

//кнопка новое письмо
const addNewLetterMailButton = document.querySelector('.letterMailCustom');

function handleAddNewLetterMail() {
    showMessageComposer();
}

addNewLetterMailButton.addEventListener('click', handleAddNewLetterMail);

export default {};