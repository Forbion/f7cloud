<?php

/**
 * SPDX-FileCopyrightText: 2017 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @var \OCP\IL10N $l */
/** @var array $_ */

script('settings', [
	'usersettings',
	'templates',
	'federationsettingsview',
	'federationscopemenu',
	'settings/personalInfo',
	'vue-settings-personal-info',
]);
?>

<div id="personal-settings">

    <h2 class="settings-section__name">
        Личная информация
    </h2>

    <p class="settings-section__desc">
        Сведения о вас и ваших настройках в сервисах Forbion
    </p>

	<div class="wrapper-profile">

        <div class="title__section">
            Основная информация профиля
        </div>

        <div class="fields-wrapper">
            <div id="vue-avatar-section"></div>
            <div class="fields-inner">
                <div class="personal-settings-setting-box">
                    <div id="vue-displayname-section"></div>
                </div>
                <div class="personal-settings-setting-box">
                    <div id="vue-phone-section"></div>
                </div>
                <div class="personal-settings-setting-box">
                    <div id="vue-birthday-section"></div>
                </div>
                <div class="personal-settings-setting-box">
                    <div id="vue-location-section"></div>
                </div>
                <div class="personal-settings-setting-box">
                    <div id="vue-email-section"></div>
                </div>
                <div class="personal-settings-setting-box personal-settings-language-box">
                    <div id="vue-language-section"></div>
                </div>
            </div>
        </div>
    </div>

    <?php if ($_['profileEnabledGlobally']) : ?>
        <div class="wrapper-visible-profile">
            <div class="personal-settings-setting-box personal-settings-setting-box-profile">
                <div id="vue-profile-section"></div>
            </div>
            <div class="personal-settings-setting-box personal-settings-setting-box-detail">
                <div id="vue-details-section"></div>
            </div>
        </div>
    <?php endif; ?>

    <?php if ($_['profileEnabledGlobally']) : ?>
        <div class="settings-visible-profile">
            <div class="personal-settings-section">
                <div id="vue-profile-visibility-section"></div>
            </div>
        </div>
    <?php endif; ?>

	<span class="msg"></span>
</div>
