<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// подключение файла для соединения с базой и файл с объектом
include_once "../config/Database.php";
include_once "../objects/Skill.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// подготовка объекта
$skills = new Skill($db);
$_GET["id"]=1;
// установим свойство ID записи для чтения
$skills->id = isset($_GET["id"]) ? $_GET["id"] : die();

// получим детали товара
$skills->readOne();

if ($skills->place != null) {

    // создание массива
    $skills_arr = array(
        "id" =>  $skills->id,
        "place" => $skills->place,
        "period" => $skills->period,
        "dolgnost" => $skills->dolgnost,
        "responsibilities" => $skills->responsibilities

    );

    // код ответа - 200 OK
    http_response_code(200);

    // вывод в формате json
    echo json_encode($skills_arr);
} else {
    // код ответа - 404 Не найдено
    http_response_code(404);

    // сообщим пользователю, что такой товар не существует
    echo json_encode(array("message" => "Товар не существует"), JSON_UNESCAPED_UNICODE);
}