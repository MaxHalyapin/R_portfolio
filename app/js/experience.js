jQuery($ => {

    // Обрабатываем нажатие кнопки «Просмотр товара»
    $(document).on("click", ".experience", function () {


            let experience_html = `
            <div class="table-experience">
    <table class="table">
        <thead>
        <tr class="header-table">
            <th>Направление</th>
            <th>Языки</th>
            <th>Уровень</th>

        </tr>
        </thead>
        <tbody>

        <tr>
            <td rowspan="3">Frontend</td>
            <td>html</td>
            <td>basic</td>

        </tr>
        <tr>

            <td>javascript</td>
            <td>basic</td>

        </tr>
        <tr>

            <td>css</td>
            <td>basic</td>

        </tr>

        <tr>

            <td rowspan="2">Backend</td>
            <td>php</td>
            <td>junior</td>
        </tr>
        <tr>


            <td>laravel</td>
            <td>junior</td>
        </tr>
        </tbody>

    </table>
</div>
            `;
// Вставка HTML в «page-content» нашего приложения
            $("#page-content").html(experience_html);

// Изменяем заголовок страницы
        function changePageTitle(page_title) {

            // Изменение заголовка страницы
            $("#page-title").text(page_title);

            // Изменение заголовка вкладки браузера
            document.title = page_title;
        }
        });
    });

