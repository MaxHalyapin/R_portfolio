<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// подключение файла для соединения с базой и файл с объектом
include_once "../config/Database.php";
include_once "../objects/Contact.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// подготовка объекта
$contact = new Contact($db);
$_GET["id"]=1;
// установим свойство ID записи для чтения
$contact->id = isset($_GET["id"]) ? $_GET["id"] : die();

// получим детали товара
$contact->readOne();

if ($contact->name != null) {

    // создание массива
    $contact_arr = array(
        "id" =>  $contact->id,
        "name" => $contact->name,
        "age" => $contact->age,
        "surname" => $contact->surname,
        "address" => $contact->address,
        "number" => $contact->number,
        "email" => $contact->email
    );

    // код ответа - 200 OK
    http_response_code(200);

    // вывод в формате json
    echo json_encode($contact_arr);
} else {
    // код ответа - 404 Не найдено
    http_response_code(404);

    // сообщим пользователю, что такой товар не существует
    echo json_encode(array("message" => "Товар не существует"), JSON_UNESCAPED_UNICODE);
}