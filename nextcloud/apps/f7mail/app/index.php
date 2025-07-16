<?php

if (!defined('APP_VERSION')) {
    define('APP_VERSION', '2.38.2');
}

if (file_exists('/var/www/nextcloud/apps/f7mail/snappymail/v/0.0.0/include.php')) {
    include '/var/www/nextcloud/apps/f7mail/snappymail/v/0.0.0/include.php';
} else {
    echo '[105] Missing snappymail/v/' . APP_VERSION . '/include.php';
    // opcache_reset is a terrible solution
//	is_callable('opcache_reset') && opcache_reset();
    // opcache_invalidate will not do everything
    is_callable('opcache_invalidate') && opcache_invalidate(__FILE__, true);
    exit(105);
}
