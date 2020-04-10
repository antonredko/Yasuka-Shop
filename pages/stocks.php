<?php include 'temp/header.html'; ?>
    <link rel="stylesheet" href="../css/about.css">
    <link rel="stylesheet" href="../css/delivery.css">
    
    <div class="mainNavig d-flex j-cen">
        <div class="navig w1152_pad9 font-sb s14 h24">
            <a class="grey" href="../index.php">Главная</a> / <a class="grey" href="stocks.php">Акции</a>
        </div>
    </div>
    <div class="w-inh d-flex col al-cen">
    
    <?php include 'temp/stocks.html'; ?>
    
    <script type="module">
        import {querySelect} from '../script/common.js';
        querySelect('title').innerHTML = querySelect('title').innerHTML + ' - Акции';
    </script>
<?php include 'temp/footer.html'; ?>