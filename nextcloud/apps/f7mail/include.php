<?php

// Name this file as "include.php" to enable it.

//header('Strict-Transport-Security: max-age=31536000');

/**
 * Uncomment to use gzip compressed output
 */
//define('USE_GZIP', 1);

/**
 * Uncomment to use brotli compressed output
 */
//define('USE_BROTLI', 1);

/**
 * Uncomment to enable multiple domain installation.
 */
//define('MULTIDOMAIN', 1);

/**
 * Uncomment to disable APCU.
 */
//define('APP_USE_APCU_CACHE', false);

/**
 * Custom 'data' folder path
 */

require_once  '/var/www/nextcloud/lib/base.php';

function autoload_directory($directory) {
    // Проверяем, существует ли директория
    if (!is_dir($directory)) {
        return false;
    }

    // Открываем директорию
    if ($handle = opendir($directory)) {
        // Читаем содержимое директории
        while (false !== ($entry = readdir($handle))) {
            // Пропускаем текущую и родительскую директории
            if ($entry == "." || $entry == "..") {
                continue;
            }

            $path = $directory . DIRECTORY_SEPARATOR . $entry;

            // Если это файл и имеет расширение .php
            if (is_file($path) && pathinfo($path, PATHINFO_EXTENSION) == 'php') {
                require_once $path;
            }
            // Если это директория, можно рекурсивно загрузить и её содержимое
            elseif (is_dir($path)) {
                autoload_directory($path);
            }
        }
        closedir($handle);
    }
    return true;
}

// Использование
autoload_directory(__DIR__ . '/lib/');



//require_once '/var/www/nextcloud/apps/f7mail/snappymail/v/0.0.0/include.php';

/**
 * Additional configuration file name
 */
//define('APP_CONFIGURATION_NAME', $_SERVER['HTTP_HOST'].'.ini');

