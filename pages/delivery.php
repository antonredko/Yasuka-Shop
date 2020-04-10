<?php include 'temp/header.html'; ?>
    <link rel="stylesheet" href="../css/about.css">
    <link rel="stylesheet" href="../css/delivery.css">

    <div class="mainNavig d-flex j-cen">
        <div class="navig w1152_pad9 font-sb s14 h24">
            <a class="grey" href="../index.php">Главная</a> / <a class="grey" href="delivery.php">Доставка и оплата</a> 
        </div>
    </div>
    <div class="d-flex j-cen">
        <div class="w1152_pad9 font-b dark s40 h24">Доставка и оплата</div>
    </div>
    <div class="w-inh d-flex col al-cen">
        <div class="deliv w1152_pad9 d-flex col">
            <p class="font-b dark s30 h24">Доставка</p>
            <p class="font-reg dark s14 h24 t-al-jus">Доставка еды на дом или в офис - отличный способ вкусно и сытно пообедать или поужинать блюдами, приготовленными настоящими знатоками кулинарного мастерства. Еда с доставкой от нашего сервиса - наиболее косфортный способ оценить вкус блюд различных кулинарных традиций планеты. Оперативно, недорого и без лишних хлопот. Практически круглосуточная доставка еды (до часу ночи) дает возможность уталить голод в любое время. Термосумки наших курьеров отлично сохраняют блюда горячими и поддерживают комфортную температуру освежающих напитков.</p>
            <p class="font-sb dark s20 h24">Доставка бесплатная при заказе от <span>200 &#8372;</span></p>
        </div>
        <div class="w1170">
            <div class="w-inh h-inh pos-rel">
                <a href="#" class="pos-abs font-b s20 h35">Новая фишка</a>
                <p class="pos-abs font-b s40 h61">Отследить курьера</p>
                <p class="pos-abs font-reg s20 h96">Смотрите, где находится ваш заказ</p>
                <img class="pos-abs" src="../img/delivloc.png" alt="Location">
            </div>
        </div>
    </div>
    <div class="w-inh d-flex col al-cen">
        <div class="w1152_pad9 d-flex col">
            <p class="zoneTitle font-b dark s30 h24">Зоны и стоимость доставки</p>
            <div class="zone d-flex j-btw">
                <div class="d-flex al-cen">
                    <div class="zoneCircle"></div>
                    <p class="font-sb dark s16 h24">Стоимость доставки 80 &#8372;</p>
                </div>
                <p class="font-sb dark s16 h24">Заказы принимаются с 10.00 до 22:30. Доставляем до 23.00</p>
            </div>
        </div>
        <img class="w100" src="../img/map.png" alt="Зона доставки">
        <div class="pay w1152_pad9 d-flex al-cen">
            <p class="font-b dark s30 h24">Способы оплаты:</p>
            <i class="fa fa-money s40" aria-hidden="true"></i>
            <p class="font-sb dark s16 h24">Наличными</p>
            <i class="fa fa-credit-card s40" aria-hidden="true"></i>
            <p class="font-sb dark s16 h24">Карточкой курьеру</p>
        </div>
    </div>

    <!-- Блок для отслеживания курьера -->
    <!-- <div id="root-exmoto"></div>  -->

    <!-- Виджет для отслеживания курьера -->
    <!-- <script type="text/javascript" src="//exmoto.com/widget_exmoto"></script> -->

    <script type="module">
        import {querySelect} from '../script/common.js';
        querySelect('title').innerHTML = querySelect('title').innerHTML + ' - Доставка и оплата';
    </script>
<?php include 'temp/footer.html'; ?>