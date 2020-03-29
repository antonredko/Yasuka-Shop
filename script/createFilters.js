export function createFilters(jsonObj) {
    const MAIN_FILTERS = document.querySelector('.filters'),
        FILTERS = MAIN_FILTERS.querySelector('.w1140_pad15');

    let arrayFilters = [];

    jsonObj.forEach(item => {
        if(item.filter){
            if(/, /.test(item.filter)) {
                Array.from(item.filter.split(', ')).forEach(item => {
                    arrayFilters.push(item);
                });
            }
            else if(/,/.test(item.filter)){
                Array.from(item.filter.split(',')).forEach(item => {
                    arrayFilters.push(item);
                });
            }
            else arrayFilters.push(item.filter);
        }
        MAIN_FILTERS.style.height = '125px';
    });
  
    arrayFilters = Array.from(new Set(arrayFilters));
    arrayFilters.forEach(item => {
        let filter = document.createElement('div');
        filter.classList.add('filter', 'filterNoActive', 'font-reg', 's16', 'h24', 'd-flex', 'row', 'j-ar', 'al-cen');
        filter.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i><p class="filterName">' + item + '</p><i class="fa fa-times" aria-hidden="true"></i>';
        FILTERS.appendChild(filter);
    });
}