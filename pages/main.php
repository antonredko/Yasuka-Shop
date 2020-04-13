<?php include 'temp/header.html'; ?>
    <div class="banner w100"></div>
    <div class="filters w-inh bgr-wh d-flex j-cen al-cen">
        <div class="w1140_pad15 h-inh d-flex row j-cen al-cen">
            <!-- <div class="filter font-reg s16 h24 d-flex row j-ar al-cen">
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                <p>Сыр</p>
                <i class="fa fa-times" aria-hidden="true"></i>
            </div> -->
        </div>
    </div>
    <div class="w-inh d-flex col j-cen al-cen">
        <div class="products w1140_pad15 bgr-wh d-flex row j-btw al-cen wrap">
            <!-- <div class="prod d-flex col j-ar al-cen">
                <div class="w-inh">
                    <div class="new font-reg s16 h24 d-flex j-cen al-cen">New</div>
                    <div class="discount font-reg s16 h24 d-flex j-cen al-cen">-10%</div>
                    <div class="like h-inh d-flex j-cen al-cen"><i style="font-size: 24px;" class="fa fa-thumbs-o-up s24" aria-hidden="true"></i><span class="font-reg s14 h24">12</span></div>
                </div>
                <img src="img/products/sushi/salmon.png" alt="Суши">
                <p class="title font-b dark s20 h24 tal-cen">Филадельфия с кунжутом</p>
                <p class="font-b l-grey s14 h24 tal-cen">270г / 230ккал</p>
                <p class="font-sb l-grey s14 h20 tal-cen">Лосось, авокадо, икра тобико, крем-сыр, огурец</p>
                <div class="w-inh d-flex row j-ar al-cen">
                    <p class="font-b dark s20 h24">280 &#8372;</p>
                    <button class="bgr-wh font-b dark s18 h24 d-flex al-cen"><i class="fa fa-shopping-basket" aria-hidden="true"></i>Купить</button>
                </div>
            </div> -->
        </div>
        <!-- <div class="w-inh d-flex j-cen">
            <button class="showMore font-b dark s18 h24 d-flex al-cen"><i class="fa fa-arrow-circle-down" aria-hidden="true"></i>Показать еще</button>
        </div> -->
    </div>
    <div class="w-inh d-flex col al-cen">
        <div class="stocks w1152_pad9 d-flex j-btw al-cen">
            <p class="font-b dark s30 h62">Акции</p>
            <a class="stocksAll bgr-wh font-b dark s18 h24" href="pages/stocks.php" target="_blank">
                Все акции<i class="fa fa-arrow-right s14" aria-hidden="true"></i>
            </a>
        </div>

        <?php include 'temp/stocks.html'; ?>
        
    <div class="w-inh d-flex col al-cen">
        <div class="deliv w1152_pad9 d-flex col">
            <p class="font-b dark s30 h24">Доставка</p>
            <p class="font-reg dark s14 h24 t-al-jus">Доставка еды на дом или в офис - отличный способ вкусно и сытно пообедать или поужинать блюдами, приготовленными настоящими знатоками кулинарного мастерства. Еда с доставкой от нашего сервиса - наиболее косфортный способ оценить вкус блюд различных кулинарных традиций планеты. Оперативно, недорого и без лишних хлопот. Практически круглосуточная доставка еды (до часу ночи) дает возможность уталить голод в любое время. Термосумки наших курьеров отлично сохраняют блюда горячими и поддерживают комфортную температуру освежающих напитков.</p>
        </div>
        <div class="w1152_pad9 d-flex">
            <div class="w-inh">
                <a href="#" class="font-b s20 h35">Новая фишка</a>
                <p class="font-b s40 h61">Отследить курьера</p>
                <p class="font-reg s20 h96">Смотрите, где находится ваш заказ</p>
            </div>
        </div>
    </div>
    <script type="module">
        import {querySelect} from '../script/common.js';
        querySelect('title').innerHTML = querySelect('title').innerHTML + ' - Главная';
    </script>
    <script type="module" src="../../script/connectionJSON.js"></script>
    <script type="module" src="../../script/createFilters.js"></script>
    <script type="module" src="../../script/createProductsList.js"></script>
    <script type="module" src="../../script/filterProducts.js"></script>
    <script type="module" src="../../script/creature/createSushi.js"></script>
<?php include 'temp/footer.html'; ?>
