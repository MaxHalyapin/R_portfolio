jQuery($ => {


    // Обрабатываем нажатие кнопки «Просмотр товара»
    $(document).on("click", ".skills", function () {

        // Здесь будет получение ID товара
        // Получаем ID товара
        // const id = $(this).attr("data-id");
        // Чтение записи товара на основе данного идентификатора
        $.getJSON("http://localhost/TGU_ajax/api/product/skills_one.php?id=" + 1, data => {

            // Здесь будет кнопка для просмотра всех товаров
            // Начало HTML


            let skills_html = `
             <div class="table-experience">
    <table class="table">
        <thead>
        <tr class="header-table">
            <th>Место работы</th>
            <th>Должность</th>
            <th>Период работы</th>
            <th>Обязаности</th>

        </tr>
        </thead>
        <tbody>

        <tr>
            <td>`+ data.place + `</td>
            <td>`+ data.dolgnost + `</td>
            <td>`+ data.period + `</td>
            <td>`+ data.responsibilities + `</td>
        </tr>

        </tbody>

    </table>
</div>

            `;
// Вставка HTML в «page-content» нашего приложения
            $("#page-content").html(skills_html);

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