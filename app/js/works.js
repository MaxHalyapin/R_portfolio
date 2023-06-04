jQuery($ => {

    // Обрабатываем нажатие кнопки «Просмотр товара»
    $(document).on("click", ".works", function () {


        let works_html = `
        <div class="block-works__rowq">
    <div class="block-works__itema"><p class="p1">Ag-grid</p>
        <img class="image1" src="img/Ag-grid.jpg" alt="Ag-grid" width="400" height="300">
    </div>
    <div class="block-works__itemd"><p class="p2">Dart</p>
        <img class="image2" src="img/ajax.jpg" alt="Dart" width="400" height="300">
    </div>
</div>

            `;
// Вставка HTML в «page-content» нашего приложения
        $("#page-content").html(works_html);

// Изменяем заголовок страницы
        function changePageTitle(page_title) {

            // Изменение заголовка страницы
            $("#page-title").text(page_title);

            // Изменение заголовка вкладки браузера
            document.title = page_title;
        }
    });
});