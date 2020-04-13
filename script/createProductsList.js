import {createElem, querySelect} from './common.js';

export function createProducts(jsonObj) {
  const  MAIN_PROD = querySelect('.w-inh.d-flex.col.j-cen.al-cen'),
    PROD = querySelect('.products');

  jsonObj.forEach(item => {
    let divProd = createElem('div'),
      details = createElem('div'),
      like = createElem('div'),
      image = createElem('img'),
      title = createElem('p'),
      weight = createElem('p'),
      composition = createElem('p'),
      priceAndBye = createElem('div'),
      price = createElem('p'),
      btn = createElem('button'),
      btnImg = createElem('i');
    
    divProd.classList.add('prod', 'd-flex', 'col', 'j-ar', 'al-cen');
    details.classList.add('w-inh');
    like.classList.add('like', 'h-inh', 'd-flex', 'j-cen', 'al-cen');
    like.innerHTML = '<i style="font-size: 24px;" class="fa fa-thumbs-o-up s24" aria-hidden="true"></i><span class="font-reg s14 h24">0</span>';
    image.src = item.img;
    image.setAttribute('alt', item.title);
    title.classList.add('title', 'font-b', 'dark', 's20', 'h24', 't-al-cen');
    title.innerText = item.title;
    weight.classList.add('font-b', 'l-grey', 's14', 'h24', 't-al-cen');
    weight.innerText = item.weight + ' / ' + item.calorie;
    composition.classList.add('font-sb', 'l-grey', 's14', 'h20', 't-al-cen');
    composition.innerText = item.composition;
    priceAndBye.classList.add('w-inh', 'd-flex', 'row', 'j-ar', 'al-cen');
    price.classList.add('font-b', 'dark', 's20', 'h24');
    price.innerText = item.price + ' грн';
    btn.classList.add('bgr-wh', 'font-b', 'dark', 's18', 'h24', 'd-flex', 'al-cen');
    btn.innerHTML = "<i class='fa fa-shopping-basket' aria-hidden='true'></i>В корзину";

    if(item.filter) divProd.setAttribute('data-filter', item.filter);
    if(item.new) {
      let nw = createElem('div');
      nw.classList.add('new', 'font-reg', 's16', 'h24', 'd-flex', 'j-cen', 'al-cen');
      nw.innerText = 'New';
      details.appendChild(nw);
    }
    if(item.discount) {
      let discount = createElem('div');
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

  let mainShowMore = createElem('div'),
    btnShowMore = createElem('button');

  mainShowMore.classList.add('w-inh', 'd-flex', 'j-cen');
  btnShowMore.classList.add('showMore', 'font-b', 'dark', 's18', 'h24', 'd-flex', 'al-cen');
  btnShowMore.innerHTML = '<i class="fa fa-arrow-circle-down" aria-hidden="true"></i>Показать еще';

  mainShowMore.appendChild(btnShowMore);
  MAIN_PROD.appendChild(mainShowMore);
}