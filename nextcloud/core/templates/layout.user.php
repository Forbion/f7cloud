<?php

$getUserAvatar = static function (int $size) use ($_): string {
    return \OC::$server->getURLGenerator()->linkToRoute('core.avatar.getAvatar', [
        'userId' => $_['user_uid'],
        'size' => $size,
        'v' => $_['userAvatarVersion']
    ]);
};

$nonceManager = \OC::$server->get(\OC\Security\CSP\ContentSecurityPolicyNonceManager::class);

?><!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>" data-locale="<?php p($_['locale']); ?>" translate="no" >
<head data-user="<?php p($_['user_uid']); ?>" data-user-displayname="<?php p($_['user_displayname']); ?>" data-requesttoken="<?php p($_['requesttoken']); ?>">
    <meta charset="utf-8">
    <title>
        <?php
        p(!empty($_['pageTitle']) && $_['pageTitle'] !== $_['application'] ? $_['pageTitle'].' - ' : '');
        p(!empty($_['application']) ? $_['application'].' - ' : '');
        p($theme->getTitle());
        ?>
    </title>
    <meta name="csp-nonce" nonce="<?php p($_['cspNonce']); /* Do not pass into "content" to prevent exfiltration */ ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0<?php if (isset($_['viewport_maximum_scale'])) {
        p(', maximum-scale=' . $_['viewport_maximum_scale']);
    } ?>">

    <?php if ($theme->getiTunesAppId() !== '') { ?>
        <meta name="apple-itunes-app" content="app-id=<?php p($theme->getiTunesAppId()); ?>">
    <?php } ?>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="<?php p((!empty($_['application']) && $_['appid'] != 'files')? $_['application']:$theme->getTitle()); ?>">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="<?php p($theme->getColorPrimary()); ?>">
    <link rel="icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon.ico')); /* IE11+ supports png */ ?>">
    <link rel="apple-touch-icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
    <link rel="apple-touch-icon-precomposed" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
    <link rel="mask-icon" sizes="any" href="<?php print_unescaped(image_path($_['appid'], 'favicon-mask.svg')); ?>" color="<?php p($theme->getColorPrimary()); ?>">
    <link rel="manifest" href="<?php print_unescaped(image_path($_['appid'], 'manifest.json')); ?>" crossorigin="use-credentials">
    <?php emit_css_loading_tags($_); ?>
    <?php emit_script_loading_tags($_); ?>
    <?php print_unescaped($_['headers']); ?>

    <link rel="stylesheet" href="/themes/forbion/css/app.css">

    <?php
    $cssMapping = [
        '/apps/mail' => '/themes/forbion/css/pages/app-mail/_app-mail.css',
        '/apps/files' => '/themes/forbion/css/pages/app-files/_app-files.css',
        '/apps/calendar' => '/themes/forbion/css/pages/app-calendar/_app-calendar.css',
        '/apps/contacts' => '/themes/forbion/css/pages/app-contacts/_app-contacts.css',
        '/apps/deck' => '/themes/forbion/css/pages/app-deck/_app-deck.css?'.rand(1,1000),
        '/apps/tasks' => '/themes/forbion/css/pages/app-tasks/_app-tasks.css',
        '/settings' => '/themes/forbion/css/pages/page-settings/_page-settings.css',
        '/settings/users' => '/themes/forbion/css/pages/page-settings/_page-users.css',
        '/apps/spreed' => '/themes/forbion/css/pages/app-spreed/_app-spreed.css',
        '/call' => '/themes/forbion/css/pages/app-spreed/_app-spreed.css',
        '/apps/notes' => '/themes/forbion/css/pages/app-notes/_app-notes.css'
    ];

    $currentUri = $_SERVER['REQUEST_URI'] ?? '';
    foreach ($cssMapping as $path => $cssFile) {
        if (strpos($currentUri, $path) !== false) {
            echo '<link rel="stylesheet" href="' . htmlspecialchars($cssFile) . '">';
            if ($path === '/apps/spreed' || $path === '/call') break;
        }
    }
    ?>

    <script nonce="<?=$nonceManager->getNonce()?>" src="/themes/forbion/js/scripts.js"></script>
    <script type="text/javascript" src="https://only.forbion.ru/web-apps/apps/api/documents/api.js"></script>
</head>
<body id="<?php p($_['bodyid']);?>" <?php foreach ($_['enabledThemes'] as $themeId) {
    p("data-theme-$themeId ");
}?> data-themes=<?php p(join(',', $_['enabledThemes'])) ?>>
<?php include 'layout.noscript.warning.php'; ?>
<?php include 'layout.initial-state.php'; ?>

<div id="skip-actions">
    <?php if ($_['id-app-content'] !== null) { ?><a href="<?php p($_['id-app-content']); ?>" class="button primary skip-navigation skip-content"><?php p($l->t('Skip to main content')); ?></a><?php } ?>
    <?php if ($_['id-app-navigation'] !== null) { ?><a href="<?php p($_['id-app-navigation']); ?>" class="button primary skip-navigation"><?php p($l->t('Skip to navigation of app')); ?></a><?php } ?>
</div>
<?php

$headerStyle = (isset($_GET['iframe']) && $_GET['iframe'] === 'true') ? 'style="display: none;"' : '';
?>
<header id="header" class="header-new" <?= $headerStyle ?>>
    <div class="l-wrapper">
        <a href="/" class="logo__header">
            <img src="/themes/forbion/images/logo-header.svg" alt="logo">
        </a>
        <nav class="app-menu">
            <ul class="app-menu__list">
                <li class="app-menu-entry">
                    <a href="/apps/f7mail/" class="app-menu-entry__link">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/mail.svg" alt="mail">
                        </span>
                        <span class="app-menu-entry__label">Почта</span>
                    </a>
                </li>
                <li class="app-menu-entry">
                    <a href="/apps/files/" class="app-menu-entry__link">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/files.svg" alt="files">
                        </span>
                        <span class="app-menu-entry__label">Файлы</span>
                    </a>
                </li>
                <li class="app-menu-entry">
                    <a href="/apps/calendar/" class="app-menu-entry__link">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/calendar.svg" alt="calendar">
                        </span>
                        <span class="app-menu-entry__label">Календарь</span>
                    </a>
                </li>
                <li class="app-menu-entry">
                    <a href="/apps/contacts/" class="app-menu-entry__link">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/contacts.svg" alt="contacts">
                        </span>
                        <span class="app-menu-entry__label">Контакты</span>
                    </a>
                </li>
                <li class="app-menu-entry">
                    <a href="/apps/spreed/" class="app-menu-entry__link">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/conferences.svg" alt="conferences">
                        </span>
                        <span class="app-menu-entry__label">Конференции</span>
                    </a>
                </li>
<!--                <li class="app-menu-entry">-->
<!--                    <a href="/settings/user/security" class="app-menu-entry__link">-->
<!--                        <span class="app-menu-enty__icon">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">-->
<!--                                <circle cx="14" cy="9" r="8.55" fill="#F5F5F5" stroke="black" stroke-width="0.9" />-->
<!--                                <circle cx="14" cy="9" r="5.55" fill="#E0E0E0" stroke="black" stroke-width="0.9" />-->
<!--                                <path d="M1 26.2893V13.71C1 12.2133 2.21331 11 3.71 11H24.29C25.7867 11 27 12.2133 27 13.71V26.2893C27 27.7864 25.7864 29 24.2893 29H3.71067C2.21361 29 1 27.7864 1 26.2893Z" fill="#F5F5F5" stroke="black" stroke-width="0.903555" />-->
<!--                                <path-->
<!--                                        d="M10.9994 21.3169C10.6739 21.3169 10.3974 21.189 10.1699 20.9331C9.94251 20.6772 9.82879 20.3662 9.82879 20C9.82879 19.6338 9.94251 19.3228 10.1699 19.0669C10.3974 18.811 10.6739 18.6831 10.9994 18.6831C11.3249 18.6831 11.6014 18.811 11.8288 19.0669C12.0562 19.3228 12.1699 19.6338 12.1699 20C12.1699 20.3662 12.0562 20.6772 11.8288 20.9331C11.6014 21.189 11.3249 21.3169 10.9994 21.3169ZM10.9994 23.375C11.7075 23.375 12.3261 23.1498 12.8554 22.6994C13.3847 22.25 13.7246 21.7069 13.8751 21.0701H15.6823L16.3602 21.655C16.4071 21.6893 16.4555 21.7169 16.5054 21.7378C16.5553 21.7587 16.6102 21.7689 16.6703 21.7685C16.7303 21.768 16.785 21.7578 16.8345 21.7378C16.884 21.7169 16.9324 21.6845 16.9797 21.6408L17.8402 20.8917L18.6087 21.5573C18.6637 21.5982 18.7229 21.6313 18.7863 21.6565C18.8493 21.6817 18.9108 21.6883 18.9708 21.6764C19.0309 21.6646 19.0892 21.6446 19.1458 21.6165C19.2025 21.5885 19.2532 21.548 19.298 21.4952L20.2124 20.3988C20.2653 20.337 20.3029 20.2735 20.3253 20.2083C20.3473 20.1436 20.3583 20.0728 20.3583 19.9957C20.3583 19.9187 20.3466 19.8485 20.3234 19.7853C20.3001 19.722 20.2619 19.6607 20.2086 19.6012L19.766 19.1026C19.7111 19.0407 19.6519 18.9965 19.5885 18.9699C19.525 18.9432 19.4595 18.9299 19.3919 18.9299H13.8751C13.7271 18.3045 13.3902 17.764 12.8643 17.3084C12.3388 16.8528 11.7172 16.625 10.9994 16.625C10.1539 16.625 9.4424 16.9498 8.86493 17.5995C8.28831 18.2487 8 19.0488 8 20C8 20.9512 8.28873 21.7516 8.8662 22.4012C9.44367 23.0509 10.1547 23.3752 10.9994 23.3743"-->
<!--                                        fill="#70B62B"-->
<!--                                />-->
<!--                            </svg>-->
<!--                        </span>-->
<!--                        <span class="app-menu-entry__label">Пароли</span>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li class="app-menu-entry">-->
<!--                    <a href="/apps/contacts/" class="app-menu-entry__link">-->
<!--                        <span class="app-menu-enty__icon">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="29" viewBox="0 0 26 29" fill="none">-->
<!--                                <path d="M4 25.2893V3.71C4 2.21331 5.21331 1 6.71 1H22.29C23.7867 1 25 2.21331 25 3.71V25.2893C25 26.7864 23.7864 28 22.2893 28H6.71067C5.21361 28 4 26.7864 4 25.2893Z" fill="#F5F5F5" stroke="black" stroke-width="0.903555" />-->
<!--                                <path d="M4 26V3C4 1.89543 4.89543 1 6 1H8V28H6C4.89543 28 4 27.1046 4 26Z" fill="#F5F5F5" stroke="black" stroke-width="0.903555" />-->
<!--                                <path-->
<!--                                        d="M1.1626 13.6755V14.3201C1.1626 14.6944 1.466 14.9978 1.84026 14.9978H5.48493C5.8592 14.9978 6.1626 14.6944 6.1626 14.3201V13.6755C6.1626 13.3012 5.8592 12.9978 5.48493 12.9978H1.84026C1.466 12.9978 1.1626 13.3012 1.1626 13.6755Z"-->
<!--                                        fill="#F5F5F5"-->
<!--                                        stroke="black"-->
<!--                                        stroke-width="0.903555"-->
<!--                                />-->
<!--                                <path-->
<!--                                        d="M1.1626 19.6777V20.3223C1.1626 20.6966 1.466 21 1.84026 21H5.48493C5.8592 21 6.1626 20.6966 6.1626 20.3223V19.6777C6.1626 19.3034 5.8592 19 5.48493 19H1.84026C1.466 19 1.1626 19.3034 1.1626 19.6777Z"-->
<!--                                        fill="#F5F5F5"-->
<!--                                        stroke="black"-->
<!--                                        stroke-width="0.903555"-->
<!--                                />-->
<!--                                <path d="M1 7.67767V8.32233C1 8.6966 1.3034 9 1.67767 9H5.32233C5.6966 9 6 8.6966 6 8.32233V7.67767C6 7.3034 5.6966 7 5.32233 7L1.67767 7C1.3034 7 1 7.3034 1 7.67767Z" fill="#F5F5F5" stroke="black" stroke-width="0.903555" />-->
<!--                                <circle cx="16.5" cy="12.4375" r="2.0625" fill="#70B62B" />-->
<!--                                <path d="M16.5 15.1875C14.1966 15.1875 12.8578 16.9963 12.4838 18.0888C12.3854 18.3761 12.6212 18.625 12.925 18.625H20.075C20.3788 18.625 20.6146 18.3761 20.5162 18.0888C20.1422 16.9963 18.8034 15.1875 16.5 15.1875Z" fill="#70B62B" />-->
<!--                            </svg>-->
<!--                        </span>-->
<!--                        <span class="app-menu-entry__label">Контакты</span>-->
<!--                    </a>-->
<!--                </li>-->
                <li class="app-menu-entry">
                    <span class="app-menu-entry__link-more">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/more.svg" alt="more">
                        </span>
                        <span class="app-menu-entry__label">Еще</span>
                    </span>
                </li>
            </ul>
            <ul class="app-menu__list hidden-app-menu__list">
<!--                <li class="app-menu-entry">-->
<!--                    <a href="/apps/mail/" class="app-menu-entry__link">-->
<!--                        <span class="app-menu-enty__icon">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25" viewBox="0 0 31 25" fill="none">-->
<!--                                <path d="M1 3.33195V22.2722C1 22.8812 1.36501 23.4309 1.92631 23.6671C2.11218 23.7454 2.31181 23.7857 2.51347 23.7857H14.2872H21.3335H28.1001C28.2854 23.7857 28.4696 23.7573 28.6463 23.7015L28.7223 23.6775C29.4771 23.4392 29.9903 22.7391 29.9903 21.9476V3.33195C29.9903 2.33004 29.1781 1.51782 28.1761 1.51782H15.4951H2.81413C1.81221 1.51782 1 2.33004 1 3.33195Z" fill="#F5F5F5" stroke="black" stroke-width="0.907066"></path>-->
<!--                                <path d="M29.5785 20.5535L17.4516 8.17127C16.3816 7.07877 14.6218 7.08216 13.5561 8.17876L1.75937 20.3169C1.27243 20.8179 1.00003 21.4891 1.00003 22.1877V22.6527C1.00003 23.0415 1.1994 23.4031 1.52818 23.6107C1.70922 23.725 1.91896 23.7857 2.13308 23.7857H3.41589L8.16288 23.7857L21.7535 23.7857L28.3797 23.7857C30.0271 23.7857 30.4021 21.643 29.5785 20.5535Z" stroke="black" stroke-width="0.907066"></path>-->
<!--                                <path d="M1.63846 4.39857L14.8989 16.0094C15.2425 16.3102 15.7562 16.3087 16.098 16.0058L29.54 4.09441C29.8325 3.83517 30 3.46302 30 3.07214C30 2.7761 29.9038 2.48808 29.7259 2.25144L29.582 2.06001C29.33 1.72469 28.9826 1.47328 28.5853 1.33869L28.0101 1.14386C27.7289 1.0486 27.434 1 27.1371 1H22.841H16.0351H12.4121H8.78904H2.57812C1.03955 1 0.661144 2.87867 1.28989 3.99863C1.37708 4.15393 1.50446 4.28124 1.63846 4.39857Z" fill="#F5F5F5" stroke="black" stroke-width="0.907066"></path>-->
<!--                                <path d="M15.0422 6.5331C14.7955 6.5331 14.5681 6.62806 14.3593 6.81946C14.1506 7.01087 13.9925 7.28302 13.8867 7.63592C13.7815 7.98882 13.7279 8.3021 13.7279 8.575C13.7279 8.93912 13.8017 9.20828 13.9485 9.38024C14.0962 9.55221 14.2788 9.63894 14.4965 9.63894L14.668 10.3791C14.5397 10.4113 14.407 10.427 14.2691 10.427C13.7935 10.427 13.3991 10.2625 13.0852 9.93352C12.9876 9.83109 12.9048 9.71744 12.8377 9.59333C12.6894 9.32043 12.6148 8.99669 12.6148 8.62136C12.6148 7.94621 12.8042 7.33012 13.1821 6.77385C13.6406 6.09571 14.2274 5.75702 14.9438 5.75702C14.999 5.75702 15.0527 5.75926 15.1041 5.7645L15.0422 6.53236V6.5331Z" fill="#70B62B"></path>-->
<!--                                <path d="M17.5203 5.50581C17.0104 5.03029 16.2984 4.79253 15.3852 4.79253C14.6091 4.79253 13.9515 4.95179 13.4118 5.2688C12.872 5.58581 12.4649 6.03218 12.1913 6.60863C11.9177 7.18434 11.7813 7.78397 11.7813 8.40679C11.7813 8.89876 11.882 9.35558 12.0832 9.77652C12.1295 9.87372 12.1817 9.96868 12.2383 10.0621C12.5432 10.5593 12.9719 10.9212 13.5228 11.1493C14.0738 11.3773 14.7045 11.4917 15.415 11.4917C16.1255 11.4917 16.6883 11.396 17.1804 11.2053C17.6732 11.0147 18.0698 10.7276 18.371 10.3463H19.2857C18.9994 10.9294 18.5603 11.3855 17.9669 11.7167C17.2877 12.0958 16.4602 12.2857 15.4836 12.2857C14.5069 12.2857 13.7219 12.1257 13.0353 11.8057C12.3479 11.485 11.8372 11.0132 11.5017 10.3881C11.167 9.76232 11 9.08193 11 8.34697C11 7.53948 11.1901 6.78807 11.5711 6.09124C11.952 5.39516 12.4739 4.87179 13.1352 4.52262C13.7964 4.17496 14.5524 4 15.403 4C16.1247 4 16.7659 4.14131 17.328 4.42244C17.8894 4.70356 18.318 5.10431 18.614 5.62245C18.9107 6.14059 19.0591 6.70732 19.0591 7.32191C19.0591 8.05388 18.8339 8.71632 18.3844 9.30773C17.82 10.0547 17.0969 10.4277 16.2149 10.4277C15.9778 10.4277 15.7982 10.3866 15.6774 10.3029C15.5574 10.2199 15.4769 10.098 15.4373 9.93727C15.2047 10.1623 14.9475 10.3096 14.6672 10.3799L14.4957 9.6397C14.659 9.6397 14.8118 9.59932 14.955 9.51858C15.0638 9.46175 15.1712 9.37128 15.2771 9.24717C15.4291 9.07222 15.5596 8.81651 15.6707 8.48006C15.781 8.14435 15.8362 7.83183 15.8362 7.54098C15.8362 7.21724 15.7609 6.96751 15.611 6.79405C15.4604 6.61985 15.2711 6.53312 15.0422 6.53312L15.1041 5.76526C15.5328 5.80264 15.8563 5.99554 16.0733 6.34396L16.1806 5.86544H17.3146L16.666 8.95408C16.6264 9.14997 16.6056 9.27633 16.6056 9.33315C16.6056 9.40493 16.622 9.45876 16.6555 9.49465C16.6891 9.53054 16.7278 9.54848 16.7733 9.54848C16.9105 9.54848 17.0887 9.46549 17.3056 9.29876C17.5979 9.08044 17.8342 8.7881 18.0146 8.42024C18.195 8.05239 18.2852 7.67182 18.2852 7.27855C18.2852 6.61611 18.0608 6.0561 17.6135 5.59628C17.5837 5.56563 17.5524 5.53572 17.5203 5.50581Z" fill="#70B62B"></path>-->
<!--                            </svg>-->
<!--                        </span>-->
<!--                        <span class="app-menu-entry__label">Заметки</span>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li class="app-menu-entry">-->
<!--                    <a href="/apps/contacts/" class="app-menu-entry__link">-->
<!--                        <span class="app-menu-enty__icon">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">-->
<!--                                <path d="M28 12.6762V19.3238C28 20.8018 26.8018 22 25.3237 22H3.67625C2.1982 22 1 20.8018 1 19.3238V9.67625C1 8.1982 2.1982 7 3.67625 7H14.8915C15.6012 7 16.282 7.28196 16.7839 7.78386L18.2161 9.21614C18.718 9.71804 19.3988 10 20.1085 10H25.3238C26.8018 10 28 11.1982 28 12.6762Z" fill="#F5F5F5" stroke="black" stroke-width="0.892083"></path>-->
<!--                                <path d="M5 1V22H25V1H5Z" fill="#F5F5F5" stroke="black" stroke-width="0.892083"></path>-->
<!--                                <path d="M4 3V25H23V3H4Z" fill="#FCFEFC" stroke="black" stroke-width="0.892083"></path>-->
<!--                                <path d="M1 17.6762V26.3238C1 27.8018 2.1982 29 3.67625 29H26.3237C27.8018 29 29 27.8018 29 26.3238V14.6762C29 13.1982 27.8018 12 26.3238 12H12.7791C12.0774 12 11.4038 12.2756 10.9033 12.7675L9.41252 14.2325C8.91203 14.7244 8.23837 15 7.53665 15H3.67625C2.1982 15 1 16.1982 1 17.6762Z" fill="#F5F5F5" stroke="black" stroke-width="0.892083"></path>-->
<!--                                <path d="M6 6H21" stroke="#70B62B" stroke-width="0.892083" stroke-linecap="square"></path>-->
<!--                                <path d="M6 8H21" stroke="#70B62B" stroke-width="0.892083" stroke-linecap="square"></path>-->
<!--                                <path d="M6 10H21" stroke="#70B62B" stroke-width="0.892083" stroke-linecap="square"></path>-->
<!--                            </svg>-->
<!--                        </span>-->
<!--                        <span class="app-menu-entry__label">Контакты</span>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li class="app-menu-entry">-->
<!--                    <a href="/settings/user/security" class="app-menu-entry__link">-->
<!--                        <span class="app-menu-enty__icon">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">-->
<!--                                <circle cx="14" cy="9" r="8.55" fill="#F5F5F5" stroke="black" stroke-width="0.9" />-->
<!--                                <circle cx="14" cy="9" r="5.55" fill="#E0E0E0" stroke="black" stroke-width="0.9" />-->
<!--                                <path d="M1 26.2893V13.71C1 12.2133 2.21331 11 3.71 11H24.29C25.7867 11 27 12.2133 27 13.71V26.2893C27 27.7864 25.7864 29 24.2893 29H3.71067C2.21361 29 1 27.7864 1 26.2893Z" fill="#F5F5F5" stroke="black" stroke-width="0.903555" />-->
<!--                                <path-->
<!--                                        d="M10.9994 21.3169C10.6739 21.3169 10.3974 21.189 10.1699 20.9331C9.94251 20.6772 9.82879 20.3662 9.82879 20C9.82879 19.6338 9.94251 19.3228 10.1699 19.0669C10.3974 18.811 10.6739 18.6831 10.9994 18.6831C11.3249 18.6831 11.6014 18.811 11.8288 19.0669C12.0562 19.3228 12.1699 19.6338 12.1699 20C12.1699 20.3662 12.0562 20.6772 11.8288 20.9331C11.6014 21.189 11.3249 21.3169 10.9994 21.3169ZM10.9994 23.375C11.7075 23.375 12.3261 23.1498 12.8554 22.6994C13.3847 22.25 13.7246 21.7069 13.8751 21.0701H15.6823L16.3602 21.655C16.4071 21.6893 16.4555 21.7169 16.5054 21.7378C16.5553 21.7587 16.6102 21.7689 16.6703 21.7685C16.7303 21.768 16.785 21.7578 16.8345 21.7378C16.884 21.7169 16.9324 21.6845 16.9797 21.6408L17.8402 20.8917L18.6087 21.5573C18.6637 21.5982 18.7229 21.6313 18.7863 21.6565C18.8493 21.6817 18.9108 21.6883 18.9708 21.6764C19.0309 21.6646 19.0892 21.6446 19.1458 21.6165C19.2025 21.5885 19.2532 21.548 19.298 21.4952L20.2124 20.3988C20.2653 20.337 20.3029 20.2735 20.3253 20.2083C20.3473 20.1436 20.3583 20.0728 20.3583 19.9957C20.3583 19.9187 20.3466 19.8485 20.3234 19.7853C20.3001 19.722 20.2619 19.6607 20.2086 19.6012L19.766 19.1026C19.7111 19.0407 19.6519 18.9965 19.5885 18.9699C19.525 18.9432 19.4595 18.9299 19.3919 18.9299H13.8751C13.7271 18.3045 13.3902 17.764 12.8643 17.3084C12.3388 16.8528 11.7172 16.625 10.9994 16.625C10.1539 16.625 9.4424 16.9498 8.86493 17.5995C8.28831 18.2487 8 19.0488 8 20C8 20.9512 8.28873 21.7516 8.8662 22.4012C9.44367 23.0509 10.1547 23.3752 10.9994 23.3743"-->
<!--                                        fill="#70B62B"-->
<!--                                />-->
<!--                            </svg>-->
<!--                        </span>-->
<!--                        <span class="app-menu-entry__label">Пароли</span>-->
<!--                    </a>-->
<!--                </li>-->
                <li class="app-menu-entry">
                    <a href="/apps/deck/" class="app-menu-entry__link">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/cards.svg" alt="cards">
                        </span>
                        <span class="app-menu-entry__label">Карточки</span>
                    </a>
                </li>
                <li class="app-menu-entry">
                    <a href="/apps/tasks/" class="app-menu-entry__link">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/tasks.svg" alt="tasks">
                        </span>
                        <span class="app-menu-entry__label">Задачи</span>
                    </a>
                </li>
                <li class="app-menu-entry">
                    <a href="/apps/notes/" class="app-menu-entry__link">
                        <span class="app-menu-enty__icon">
                            <img src="/themes/forbion/images/menu/notes.svg" alt="notes">
                        </span>
                        <span class="app-menu-entry__label">Заметки</span>
                    </a>
                </li>
                <span class="setting-hidden-menu">
                    <img src="/themes/forbion/images/menu/settings.svg" alt="settings">
                </span>
            </ul>
        </nav>
        <div class="user-control__header">
<!--            <div class="header-right">-->
<!--            </div>-->
            <div class="unified-search__wrapper">
                <div id="unified-search"></div>
            </div>
<!--            <a href="/u/--><?php //p($_['user_uid']);?><!--" class="name__user">-->
            <a class="name__user" style="cursor: default;">
                <?php p($_['user_uid']); ?>
            </a>
            <div id="user-menu"></div>
<!--            <div id="contactsmenu"></div>-->
            <div class="help-online__user">
                <a target ="_blank" href = "https://lk.forbion.ru/accounts/login/">
                    <img src="/themes/forbion/images/help_online_user.png">
                </a>
            </div>
        </div>
    </div>
</header>

<main id="content" class="app-<?php p($_['appid']) ?>">
    <h1 class="hidden-visually" id="page-heading-level-1">
        <?php p((!empty($_['application']) && !empty($_['pageTitle']) && $_['application'] != $_['pageTitle'])
            ? $_['application'].': '.$_['pageTitle']
            : (!empty($_['pageTitle']) ? $_['pageTitle'] : $theme->getName())
        ); ?>
    </h1>
    <?php print_unescaped($_['content']); ?>
</main>
<div id="profiler-toolbar"></div>
</body>
</html>