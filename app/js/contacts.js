jQuery($ => {


    // Обрабатываем нажатие кнопки «Просмотр товара»
    $(document).on("click", ".contacts", function () {

        // Здесь будет получение ID товара
        // Получаем ID товара
       // const id = $(this).attr("data-id");
        // Чтение записи товара на основе данного идентификатора
        $.getJSON("http://localhost/TGU_ajax/api/product/contact_one.php?id=" + 1, data => {

            // Здесь будет кнопка для просмотра всех товаров
            // Начало HTML


            let contacts_html = `
            <section class="hero">
    <div class="hero__text">
        <p class="hero__p">Имя: `+ data.name + ` ` + data.surname + ` </p>
        <p class="hero__p">Телефон: ` + data.number + `</p>
        <p class="hero__p">Email: ` + data.email + `</p>
        <p class="hero__p">Место проживания: ` + data.address + `</p>

    </div>

    <img class="hero__img" src="img/fotographiya.jpg" alt="Фотография" height="300" width="300">
</section>

            `;
// Вставка HTML в «page-content» нашего приложения
            $("#page-content").html(contacts_html);

// Изменение заголовка страницы
function changePageTitle(page_title) {

    // Изменение заголовка страницы
    $("#page-title").text(page_title);

    // Изменение заголовка вкладки браузера
    document.title = page_title;
}
});

});
});