import {createFilters} from './createFilters.js';
import {createProducts} from './createProductsList.js';

window.onload = function() {

    document.querySelectorAll('.filter').forEach(item => {
        item.addEventListener('click', filterOn);
    });

    function filterOn() {
        this.classList.remove('filterNoActive');
        this.classList.add('filterActive');
        
        this.removeEventListener('click', filterOn);
        this.addEventListener('click', filterOff);
    }
    
    function filterOff() {
        this.classList.remove('filterActive');
        this.classList.add('filterNoActive');

        this.removeEventListener('click', filterOff);
        this.addEventListener('click', filterOn);
    }
}