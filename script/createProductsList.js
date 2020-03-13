import createFilters from './createFilters';

const MAIN_FILTERS = document.querySelector('.filters'),
  FILTERS = MAIN_FILTERS.querySelector('.w1140_pad15'),
  MAIN_PROD = document.querySelector('.w-inh.d-flex.col.j-cen.al-cen'),
  PROD = document.querySelector('.products'),
  REQ = new XMLHttpRequest();
  
REQ.open("GET", '../data/products.json');
REQ.responseType = 'json';
REQ.send();
REQ.onload = function() {
  let products = REQ.response;
  createFilters(products);
  createProducts(products);
}

function createProducts(jsonObj) {
  jsonObj.forEach(item => {
    let divProd = document.createElement('div'),
      details = document.createElement('div'),
      like = document.createElement('div'),
      image = document.createElement('img'),
      title = document.createElement('p'),
      weight = document.createElement('p'),
      composition = document.createElement('p'),
      priceAndBye = document.createElement('div'),
      price = document.createElement('p'),
      btn = document.createElement('button'),
      btnImg = document.createElement('i');
    
    divProd.classList.add('prod', 'd-flex', 'col', 'j-ar', 'al-cen');
    details.classList.add('w-inh');
    like.classList.add('like', 'h-inh', 'd-flex', 'j-cen', 'al-cen');
    like.innerHTML = '<i style="font-size: 24px;" class="fa fa-thumbs-o-up s24" aria-hidden="true"></i><span class="font-reg s14 h24">0</span>';
    image.src = item.img;
    image.setAttribute('alt', item.title);
    title.classList.add('title', 'font-b', 'dark', 's20', 'h24');
    title.innerText = item.title;
    weight.classList.add('font-b', 'l-grey', 's14', 'h24');
    weight.innerText = item.weight + ' / ' + item.calorie;
    composition.classList.add('font-sb', 'l-grey', 's14', 'h20');
    composition.innerText = item.composition;
    priceAndBye.classList.add('w-inh', 'd-flex', 'row', 'j-ar', 'al-cen');
    price.classList.add('font-b', 'dark', 's20', 'h24');
    price.innerText = item.price + ' грн';
    btn.classList.add('bgr-wh', 'font-b', 'dark', 's18', 'h24', 'd-flex', 'al-cen');
    btn.innerHTML = "<i class='fa fa-shopping-basket' aria-hidden='true'></i>Купить";

    if(item.new) {
      let nw = document.createElement('div');
      nw.classList.add('new', 'font-reg', 's16', 'h24', 'd-flex', 'j-cen', 'al-cen');
      nw.innerText = 'New';
      details.appendChild(nw);
    }
    if(item.discount) {
      let discount = document.createElement('div');
      discount.classList.add('discount', 'font-reg', 's16', 'h24', 'd-flex', 'j-cen', 'al-cen');
      discount.innerText = item.discount;
      details.appendChild(discount);
      
      if(discount == details.children[1]) details.children[1].style.marginLeft = '10px';
    }
    
    PROD.appendChild(divProd);
    details.appendChild(like);
    divProd.appendChild(details);
    divProd.appendChild(image);
    divProd.appendChild(title);
    divProd.appendChild(weight);
    divProd.appendChild(composition);
    divProd.appendChild(priceAndBye);
    priceAndBye.appendChild(price);
    priceAndBye.appendChild(btn);
  });

  let mainShowMore = document.createElement('div'),
    btnShowMore = document.createElement('button');

  mainShowMore.classList.add('w-inh', 'd-flex', 'j-cen');
  btnShowMore.classList.add('showMore', 'font-b', 'dark', 's18', 'h24', 'd-flex', 'al-cen');
  btnShowMore.innerHTML = '<i class="fa fa-arrow-circle-down" aria-hidden="true"></i>Показать еще';

  mainShowMore.appendChild(btnShowMore);
  MAIN_PROD.appendChild(mainShowMore);
}