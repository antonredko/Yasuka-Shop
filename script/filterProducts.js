import {querySelectAll} from './common.js';
import {createFilters} from './createFilters.js';
import {createProducts} from './createProductsList.js';

document.addEventListener('DOMContentLoaded', function() {
    querySelectAll('.filter').forEach(item => {
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
});
