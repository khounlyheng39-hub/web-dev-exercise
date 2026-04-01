<?php

try {
    $pdo=new PDO("sqlite:./../../SQLite3/sqlexercise.sqlite3");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(pdo::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("DB connection falied:". $e->getMessage());

}