<?php include 'temp/header.html'; ?>
    <link rel="stylesheet" href="../css/about.css">

    <div class="mainNavig d-flex j-cen">
        <div class="navig w1152_pad9 font-sb s14 h24">
            <a class="grey" href="../index.php">Главная</a> / <a class="grey" href="about.php">О компании</a> 
        </div>
    </div>
    <div class="d-flex j-cen">
        <div class="w1152_pad9 font-b dark s40 h24">О компании</div>
    </div>
    <div class="slider w-inh d-flex j-cen al-cen">
        <div class="circle d-flex j-cen al-cen"><i class="fa fa-arrow-left s18" aria-hidden="true"></i></div>
        <div class="slide"><img src="../img/slides/slide_1.png" alt="Суши"></div>
        <div class="slide"><img src="../img/slides/slide_2.png" alt="Пицца"></div>
        <div class="slide"><img src="../img/slides/slide_3.png" alt="Wok"></div>
        <div class="circle d-flex j-cen al-cen"><i class="fa fa-arrow-right s18" aria-hidden="true"></i></div>
    </div>
    <div class="slider-dots d-flex j-cen t-al-cen">
        <span class="dot bgr-wh"></span> 
        <span class="dot bgr-wh"></span> 
        <span class="dot bgr-wh"></span>
    </div>
    <div class="w-inh d-flex j-cen">
        <p class="font-reg dark s20 h29 t-al-jus">Доставка еды на дом или в офис - отличный способ вкусно и сытно пообедать или поужинать блюдами, приготовленными настоящими знатоками кулинарного мастерства. Еда с доставкой от нашего сервиса - наиболее комфортный способ оценить вкус блюд различных кулинарных традиций планеты. Оперативно, недорого и без лишних хлопот.</p>
    </div>
    <div class="w-inh d-flex j-cen">
        <div class="inst w1152_pad9 d-flex j-btw al-cen">
            <p class="font-b dark s30 h62">Мы в инстаграм</p>
            <a class="bgr-wh font-b dark s18 h24" href="https://www.instagram.com/?hl=ru" target="_blank">
                Инстаграм<i class="fa fa-arrow-right s14" aria-hidden="true"></i>
            </a>
        </div>
    </div>
    <div class="photos w-inh d-flex">
        <!-- <img src="../img/instagram/1.png" alt="Photo by Instagram"> -->
    </div>
    <div class="w-inh d-flex j-cen al-cen">
        <input type="range" class="w1152_pad9" step="1" min="1">
    </div>

    <script type="module">
        import {querySelect} from '../script/common.js';
        querySelect('title').innerHTML = querySelect('title').innerHTML + ' - О нас';
    </script>
    <script type="module" src="../script/slider.js"></script>
    <script type="module" src="../script/range.js"></script>
<?php include 'temp/footer.html'; ?>