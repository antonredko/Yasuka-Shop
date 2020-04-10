<?php include 'temp/header.html'; ?>

<script type="module">
    import {querySelect} from '../script/common.js';
    querySelect('title').innerHTML = querySelect('title').innerHTML + ' - Акции';
</script>
<?php include 'temp/footer.html'; ?>