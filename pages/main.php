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
    <script type="module">
        import {querySelect} from '../script/modules/common.js';
        querySelect('title').innerHTML = querySelect('title').innerHTML + ' - Главная';
    </script>
    <script type="module" src="../../script/modules/connectionJSON.js"></script>
    <script type="module" src="../../script/modules/createFilters.js"></script>
    <script type="module" src="../../script/modules/createProductsList.js"></script>
    <script type="module" src="../../script/modules/filterProducts.js"></script>
    <script type="module" src="../../script/modules/creature/createSushi.js"></script>
<?php include 'temp/footer.html'; ?>
