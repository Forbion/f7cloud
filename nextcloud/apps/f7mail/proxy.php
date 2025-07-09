<?php
$url = $_GET['url'] ?? '';
if(preg_match('|/apps/f7mail/\?/Raw/|', $url)) {
    header('Content-Type: ' . mime_content_type($url));
    readfile($url);
} else {
    header('HTTP/1.0 403 Forbidden');
}