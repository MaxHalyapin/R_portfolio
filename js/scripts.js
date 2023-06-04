$(function () {
    let header = $('.header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }
    });
});
$(function () {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
            })
        }
    });
});
function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

    // Делает элемент e относительно позиционируемым и перемещает его влево и вправо.
    // Первым аргументом может быть объект элемента или значение атрибута id требуемого
    // элемента. Если во втором аргументе передать функцию, она будет вызвана с элементом e
    // в виде аргумента по завершении воспроизведения анимации. Третий аргумент определяет
    // величину смещения элемента e. По умолчанию принимает значение 5 пикселов.
    // Четвертый аргумент определяет, как долго должен воспроизводиться эффект.
    // По умолчанию эффект длится 500 мсек.
    function shake(e, oncomplete, distance, time) {
    // Обработка аргументов
    if (typeof e === "string")
    e = document.getElementByld(e);

    if (!time) time = 500;
    if (!distance) distance = 5;

    var originalStyle = e.style.cssText;	// Сохранить оригинальный стиль e
    e.style.position = "relative";			// Сделать относит. позиционируемым
    var start = (new Date()).getTime();		// Запомнить момент начала анимации
    animate();								// Запустить анимацию

    // Эта функция проверяет прошедшее время и изменяет координаты e.
    // Если анимацию пора завершать, восстанавливает первоначальное состояние
    // элемента e. Иначе изменяет координаты e и планирует следующий свой вызов.
    function animate() {
    var now = (new Date()).getTime();	// Получить текущее время
    var elapsed = now-start;			// Сколько прошло времени с начала?
    var fraction = elapsed / time;		// Доля от требуемого времени?

    if (fraction < 1) {
    // Если рано завершать анимацию
    // Вычислить координату x элемента e как функцию от доли общего
    // времени анимации. Здесь используется синусоидальная функция,
    // а доля общего времени воспроизведения умножается на 4pi,
    // поэтому перемещение взад и вперед выполняется дважды.
    var x = distance * Math.sin(fraction*4*Math.PI);
    e.style.left = x + "px";

    // Попробовать вызвать себя через 25 мсек или в конце запланированного
    // отрезка общего времени воспроизведения. Мы стремимся сделать
    // анимацию гладкой, воспроизводя ее со скоростью 40 кадров/сек.
    setTimeout(animate, Math.min(25, time-elapsed));
}
    else {	// Иначе анимацию пора завершать
    e.style.cssText = originalStyle;	// Восстановить первонач. стиль
    if (oncomplete) oncomplete(e);		// Вызвать ф-цию обратного вызова
}
}
}

    // Растворяет e от состояния полной непрозрачности до состояния полной прозрачности
    // за указанное количество миллисекунд. Предполагается, что, когда вызывается
    // эта функция, e полностью непрозрачен. oncomplete - необязательная функция,
    // которая будет вызвана с элементом e в виде аргумента по завершении анимации.
    // Если аргумент time не задан, устанавливается интервал 500 мсек.
    // Эта функция не работает в IE, но ее можно модифицировать так, чтобы
    // в дополнение к свойству opacity она использовала нестандартное
    // свойство filter, реализованное в IE.
    function fadeOut(e, oncomplete, time) {
    if (typeof e === "string")
    e = document.getElementByld(e);

    if (!time) time = 100;

    // В качестве простой "функции перехода", чтобы сделать анимацию немного
    // нелинейной, используется Math.sqrt: сначала растворение идет быстро,
    // а затем несколько замедляется.
    var ease = Math.sqrt;
    var start = (new Date()).getTime();		// Запомнить момент начала анимации
    animate();	// И запустить анимацию

    function animate() {
    var elapsed = (new Date()).getTime()-start;	// Прошедшее время
    var fraction = elapsed/time;				// Доля от общего времени

    if (fraction < 1) {	// Если не пора завершать
    var opacity = 1 - ease(fraction);		// Вычислить непрозрачн.
    e.style.opacity = String(opacity);		// Установить ее в e
    setTimeout(animate,	Math.min(25, time-elapsed));
}
    else {	// Иначе завершить
    e.style.opacity = "0";	// Сделать e полностью прозрачным
    if (oncomplete) oncomplete(e); // Вызвать ф-цию обратного вызова
}
}
}
function palitra0() {
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    rootStyles.getPropertyValue('--hover-color');
    root.style.setProperty('--hover-color', '#DA7B93');

    var root1 = document.querySelector(':root');
    var rootStyles1 = getComputedStyle(root1);
    rootStyles1.getPropertyValue('--gran-color');
    root1.style.setProperty('--gran-color', '#2E151B');

    var root2 = document.querySelector(':root');
    var rootStyles2 = getComputedStyle(root2);
    rootStyles2.getPropertyValue('--text-color');
    root1.style.setProperty('--text-color', '#376E6F');

    var root3 = document.querySelector(':root');
    var rootStyles3 = getComputedStyle(root3);
    rootStyles3.getPropertyValue('--content-color');
    root1.style.setProperty('--content-color', '#2F4454');

    var root4 = document.querySelector(':root');
    var rootStyles4 = getComputedStyle(root4);
    rootStyles4.getPropertyValue('--border-color');
    root1.style.setProperty('--border-color', '#1C3334');

}
function palitra1() {
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    rootStyles.getPropertyValue('--hover-color');
    root.style.setProperty('--hover-color', '#66FCF1');

    var root1 = document.querySelector(':root');
    var rootStyles1 = getComputedStyle(root1);
    rootStyles1.getPropertyValue('--gran-color');
    root1.style.setProperty('--gran-color', '#1F2833');

    var root2 = document.querySelector(':root');
    var rootStyles2 = getComputedStyle(root2);
    rootStyles2.getPropertyValue('--text-color');
    root1.style.setProperty('--text-color', '#C5C6C7');

    var root3 = document.querySelector(':root');
    var rootStyles3 = getComputedStyle(root3);
    rootStyles3.getPropertyValue('--content-color');
    root1.style.setProperty('--content-color', '#0B0C10');

    var root4 = document.querySelector(':root');
    var rootStyles4 = getComputedStyle(root4);
    rootStyles4.getPropertyValue('--border-color');
    root1.style.setProperty('--border-color', '#ffffff');

}

function palitra2() {
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    rootStyles.getPropertyValue('--hover-color');
    root.style.setProperty('--hover-color', '#FFCB9A');

    var root1 = document.querySelector(':root');
    var rootStyles1 = getComputedStyle(root1);
    rootStyles1.getPropertyValue('--gran-color');
    root1.style.setProperty('--gran-color', '#116466');

    var root2 = document.querySelector(':root');
    var rootStyles2 = getComputedStyle(root2);
    rootStyles2.getPropertyValue('--text-color');
    root1.style.setProperty('--text-color', '#D1E8E2');

    var root3 = document.querySelector(':root');
    var rootStyles3 = getComputedStyle(root3);
    rootStyles3.getPropertyValue('--content-color');
    root1.style.setProperty('--content-color', '#2C3531');

    var root4 = document.querySelector(':root');
    var rootStyles4 = getComputedStyle(root4);
    rootStyles4.getPropertyValue('--border-color');
    root1.style.setProperty('--border-color', '#ffffff');
}

function palitra3() {
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    rootStyles.getPropertyValue('--hover-color');
    root.style.setProperty('--hover-color', '#5CDB95');

    var root1 = document.querySelector(':root');
    var rootStyles1 = getComputedStyle(root1);
    rootStyles1.getPropertyValue('--gran-color');
    root1.style.setProperty('--gran-color', '#ff6d55');

    var root2 = document.querySelector(':root');
    var rootStyles2 = getComputedStyle(root2);
    rootStyles2.getPropertyValue('--text-color');
    root1.style.setProperty('--text-color', 'rgba(150,103,55,0.64)');

    var root3 = document.querySelector(':root');
    var rootStyles3 = getComputedStyle(root3);
    rootStyles3.getPropertyValue('--content-color');
    root1.style.setProperty('--content-color', '#000000');

    var root4 = document.querySelector(':root');
    var rootStyles4 = getComputedStyle(root4);
    rootStyles4.getPropertyValue('--border-color');
    root1.style.setProperty('--border-color', '#ffffff');
}



// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}

function close_modal(){
    modal.style.display = "none";
}
/*// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}
close_button.onclick=function (){
    modal.style.display = "none";
}*/

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // активация слайдера
    new ItcSimpleSlider('.itcss', {
        loop: true,
        autoplay: true,
        swipe: true
    });
});

/*
$(document).ready(function(){

    $('input[type="tel"]').inputmask('+7 (999) 999 99 99', {
        clearMaskOnLostFocus: true,
    });

    $('.js-form-validate').submit(function () {
        var form = $(this);
        var field = [];
        form.find('input[data-validate]').each(function () {
            field.push('input[data-validate]');
            var value = $(this).val(),
                line = $(this).closest('.some-form__line');
            for(var i=0;i<field.length;i++) {
                if( !value ) {
                    line.addClass('some-form__line-required');
                    setTimeout(function() {
                        line.removeClass('some-form__line-required')
                    }.bind(this),2000);
                    event.preventDefault();
                }
            }
        });
    });
});
*/

