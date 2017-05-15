<?php

$recepient = "777Vasya77@mail.ru";
$sitename = "recalculate.96.lt";

$name = trim($_GET["name"]);
$text = trim($_GET["comment"]);

$pagetitle = "Новое пожелание с сайта: \"$sitename\"";
$message = "Имя: $name \nПожелание: $text ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");