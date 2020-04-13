import {getElemByClass} from './common.js';


document.addEventListener('DOMContentLoaded', function() {
    const STOCKS = getElemByClass('stock');

    if(/Главная/.test(document.title)) {
        
        // console.log('Главная');
    }
    else if(/Акции/.test(document.title)) {

        // console.log('Акции');
    }

    console.log(STOCKS);
});