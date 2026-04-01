<?php
function render($views,$params = []) {
    extract($params);

    ob_start();
    require __DIR__."/$views.php";
    $content = ob_get_clean();

    require __DIR__."/layout.php";
}