<?php

$recepient = "konstaninmarkevich@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$surname = trim($_POST["surname"]);
$message = trim($_POST["message"]);
$msg = "Имя: $name \Фамилия: $surname \nТекст: $message";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $msg, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");