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
<?php $custom_hidden = true; ?>
<?php if (!$_['isFairUseOfFreePushService'] and !$custom_hidden) : ?>
	<div class="section">
		<div class="warning">
			<?php p($l->t('This community release of Nextcloud is unsupported and instant notifications are unavailable.')); ?>
		</div>
	</div>
<?php endif; ?>

<div id="personal-settings">
    <h2 class="settings-section__name">
        Личная информация
    </h2>
    <p class="settings-section__desc">
        Сведения о вас и ваших настройках в сервисах Forbion
    </p>
	<div id="vue-avatar-section"></div>
	<?php if ($_['profileEnabledGlobally']) : ?>
		<div class="personal-settings-setting-box personal-settings-setting-box-profile">
			<div id="vue-profile-section"></div>
		</div>
		<div class="personal-settings-setting-box personal-settings-setting-box-detail">
			<div id="vue-details-section"></div>
		</div>
	<?php else: ?>
		<div class="personal-settings-setting-box personal-settings-setting-box-detail--without-profile">
			<div id="vue-details-section"></div>
		</div>
	<?php endif; ?>
	<div class="personal-settings-setting-box">
		<div id="vue-displayname-section"></div>
	</div>
	<div class="personal-settings-setting-box">
		<div id="vue-email-section"></div>
	</div>
	<div class="personal-settings-setting-box">
		<div id="vue-phone-section"></div>
	</div>
	<div class="personal-settings-setting-box">
		<div id="vue-location-section"></div>
	</div>
	<div class="personal-settings-setting-box">
		<div id="vue-birthday-section"></div>
	</div>
	<div class="personal-settings-setting-box personal-settings-language-box">
		<div id="vue-language-section"></div>
	</div>
	<div class="personal-settings-setting-box personal-settings-locale-box">
		<div id="vue-locale-section"></div>
	</div>
	<div class="personal-settings-setting-box">
		<div id="vue-fdow-section"></div>
	</div>
	<div class="personal-settings-setting-box">
		<div id="vue-website-section"></div>
	</div>
	<div class="personal-settings-setting-box">
		<div id="vue-twitter-section"></div>
	</div>
	<div class="personal-settings-setting-box">
		<div id="vue-fediverse-section"></div>
	</div>

	<?php if ($_['profileEnabledGlobally'] && !$custom_hidden) : ?>
		<div class="personal-settings-setting-box">
			<div id="vue-organisation-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-role-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-headline-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-biography-section"></div>
		</div>
	<?php endif; ?>
	<span class="msg"></span>

	<div id="personal-settings-group-container"></div>
</div>
<?php if ($_['profileEnabledGlobally'] and !$custom_hidden) : ?>
	<div class="personal-settings-section">
		<div id="vue-profile-visibility-section"></div>
	</div>
<?php endif; ?>
