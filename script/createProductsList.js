const PROD = document.querySelector('.products'),
  REQ = new XMLHttpRequest();

REQ.open("GET", '../products.json');
REQ.responseType = 'json';
REQ.send();
REQ.onload = function() {
  let products = REQ.response;
  showProducts(products);
}

function showProducts(jsonObj) {
  jsonObj.forEach(item => {
    let divProd = document.createElement('div'),
      details = document.createElement('div'),
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
    image.src = item.img;
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
    
    PROD.appendChild(divProd);
    divProd.appendChild(details);
    divProd.appendChild(image);
    divProd.appendChild(title);
    divProd.appendChild(weight);
    divProd.appendChild(composition);
    divProd.appendChild(priceAndBye);
    priceAndBye.appendChild(price);
    priceAndBye.appendChild(btn);
  });
}