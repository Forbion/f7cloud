<?php
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2011-2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
?>
<!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>" data-locale="<?php p($_['locale']); ?>" translate="no" >
	<head
<?php if ($_['user_uid']) { ?>
	data-user="<?php p($_['user_uid']); ?>" data-user-displayname="<?php p($_['user_displayname']); ?>"
<?php } ?>
 data-requesttoken="<?php p($_['requesttoken']); ?>">
		<meta charset="utf-8">
		<title>
			<?php
				p(!empty($_['pageTitle']) ? $_['pageTitle'] . ' – ' : '');
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
		<meta name="theme-color" content="<?php p($theme->getColorPrimary()); ?>">
		<link rel="icon" href="<?php print_unescaped(image_path('core', 'favicon.ico')); /* IE11+ supports png */ ?>">
		<link rel="apple-touch-icon" href="<?php print_unescaped(image_path('core', 'favicon-touch.png')); ?>">
		<link rel="mask-icon" sizes="any" href="<?php print_unescaped(image_path('core', 'favicon-mask.svg')); ?>" color="<?php p($theme->getColorPrimary()); ?>">
		<link rel="manifest" href="<?php print_unescaped(image_path('core', 'manifest.json')); ?>" crossorigin="use-credentials">
		<?php emit_css_loading_tags($_); ?>
		<?php emit_script_loading_tags($_); ?>
        <?php
            if (isset($_['headers'])) {
            $_['headers'] = preg_replace(
            '/<meta[^>]*(property|name)=["\'](og:|twitter:)(title|description|image)["\'][^>]*>/i',
            '',
            $_['headers']
            );
            }
        ?>
        <?php print_unescaped($_['headers']); ?>

        <meta name="description" content="облачное рабочее место">
        <meta property="og:title" content="Forbion F7">
        <meta property="og:description" content="облачное рабочее место">
        <meta property="og:image" content="https://prod-general.f7cloud.ru/themes/forbion/favicon.png">
        <meta property="og:favicon" content="https://prod-general.f7cloud.ru/themes/forbion/favicon.png">
        <meta property="og:type" content="website">
        <meta property="og:url" content="<?= (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] ?>">
        
        <link rel="stylesheet" href="/themes/forbion/css/app.css">
        <?php if (strpos($_SERVER['REQUEST_URI'], '/login') !== false) { ?><link rel="stylesheet" href="/themes/forbion/css/pages/page-login/_page-login.css"><?php } ?>
    </head>
	<body id="<?php p($_['bodyid']);?>">
		<?php include 'layout.noscript.warning.php'; ?>
		<?php include 'layout.initial-state.php'; ?>
		<div class="wrapper">
			<div class="v-align">
				<?php if ($_['bodyid'] === 'body-login'): ?>
					<header>
						<div id="header">
							<div class="logo"></div>
						</div>
					</header>
				<?php endif; ?>
				<main>
					<h1 class="hidden-visually">
						<?php p($theme->getName()); ?>
					</h1>
					<?php print_unescaped($_['content']); ?>
				</main>
			</div>
		</div>
		<?php
		$longFooter = $theme->getLongFooter();
?>
		<footer class="guest-box <?php if ($longFooter === '') {
			p('hidden');
		} ?>">
			<p class="info">
				<?php print_unescaped($longFooter); ?>
			</p>
		</footer>
	</body>
</html>
