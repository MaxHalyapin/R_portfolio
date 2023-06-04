<?php
?>
<!-- Триггер/Открыть модальный -->

<!-- Модальный -->
<div id="myModal" class="modal">
        <!-- Модальное содержание -->
        <div class="modal-content">

            <section class="modal-form">
                <div class="container feedback-form">
                    <span onclick="close_modal()" class="close">&times;</span>
                    <div class="feedback-form__header">
                        Связаться со мной

                    </div>
                    <form enctype="multipart/form-data" method="post" id="form">
                        <div class="feedback-form__content">
                            <input oninput="checkParams()" type="text" class="input-box" name="name" placeholder="ФИО *" id="name" autocomplete="off" required>
                            <input oninput="checkParams()" type="text" class="input-box" name="email" placeholder="email *" id="email" autocomplete="off" required>
                            <input oninput="checkParams()" placeholder="Номер *" name="number" type="text" autocomplete="off" id="number" required>
                            <textarea oninput="checkParams()" class="input-box-message-box" name="message" placeholder="Введите текст *" id="message" autocomplete="off" required></textarea>
                            <!--<input type="file" name="userfile[]" multiple id="userfile" class="w100" accept="image/*">-->
                            <p id="p" class="pb">
                                Заполните все поля!
                            </p>
                            <script>
                                function checkParams() {
                                    var name = $.trim($('#name').val());
                                    var email = $.trim($('#email').val());
                                    var number = $.trim($('#number').val());
                                    var message = $.trim($('#message').val());
                                    /*var checkbox1 = $('#cakecheck').prop('checked');
                                    var checkbox2 = $('#drinkcheck').prop('checked');
                                    var checkbox3 = $('#personaldata').prop('checked');*/

                                    if (/*checkbox1 && checkbox2 && checkbox3 &&*/ name.length > 0 && email.length > 0 && number.length > 0 && message.length > 0) {
                                        $('#submit').prop('disabled', false);
                                        $('#p').prop('hidden', true);
                                        $('#submit').addClass("button_active");

                                    } else {
                                        $('#submit').prop('disabled', true);
                                        $('#p').prop('hidden', false);
                                        $('#submit').removeClass("button_active");
                                    }
                                }
                            </script>

                            <div class="button-form">
                                <button  class="button " value="Отправить сообщение" id="submit" disabled>Отправить сообщение</button>
                                <a onclick="close_modal()" class="button_close close_button perf" href="index.php">Закрыть</a>

                                <!--<span class="close">Закрыть</span>-->
                            </div>


                        </div>
                    </form>
                </div>
            </section>
        </div>

</div>
