<?php
?>
<header class="header" width="100%">
  <div class="block-sidebar">
    <div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
      <button class="navigation__item2" id="button" value="0" onclick='palitra0();'>Базовый</button>
      <button class="navigation__item2" id="button" value="1" onclick='palitra1();'>Темный</button>
      <button class="navigation__item2" id="button" value="2" onclick='palitra2();'>Темно-голубой</button>
      <button class="navigation__item2" id="button" value="0" onclick='palitra3();'>Яркий</button>


    </div>
    <div id="main">
      <button class="openbtn" title="Изменение цвета" onclick="openNav()">☰</button>
    </div>
  </div>


  <div class="header__name">
    <div class="header__logo">
      <a class="tooltip" href="index.php" title="Главное"><img src="img/logo.svg" alt="логотип">
        <span class="tooltiptext">Главная</span></a>
    </div>
    <div class="header__text">
      <p class="text-logo" id="page-title">веб-разработчик</p>
    </div>
  </div>

  <nav class="navigation">
    <a class="navigation__item perf" href="index.php" title="Главное" >Главная</a>
    <a class="navigation__item experience" title="Навыки">Навыки</a>
    <a class="navigation__item skills" title="Опыт">Опыт</a>
    <a class="navigation__item works" title="Работы">Работы</a>
    <a class="navigation__item contacts" id="#" title="Контакты">Контакты</a>
    <a class="navigation__item" id="myBtn" class="myBtn">Связаться</a>

  </nav>

</header>