import {createElem, querySelect} from './common.js';

const RANGE = querySelect('input[type="range"]'),
  PHOTOS = querySelect('.photos'),
  ARR_PHOTOS = [];

function createInstagramImage(num) {
  let img = createElem('img');

  img.setAttribute("src", "../img/instagram/" + num + ".png");
  img.setAttribute("alt", "Photo by Instagram");

  ARR_PHOTOS.push(img);
}

for(let i = 1; i <= 5; ++i) createInstagramImage(i);

ARR_PHOTOS.forEach(item => { PHOTOS.appendChild(item) });

RANGE.setAttribute('max', PHOTOS.children.length);
RANGE.setAttribute('value', Math.round(PHOTOS.children.length/2));

let rangeValue = RANGE.value;

RANGE.oninput = () => {
  if(RANGE.value > rangeValue) {
    PHOTOS.children[0].style.display = 'none';
    createInstagramImage(6);
    PHOTOS.appendChild(ARR_PHOTOS[ARR_PHOTOS.length - 1]);
    rangeValue = RANGE.value;
  }
  if(RANGE.value < rangeValue) {
    PHOTOS.children[PHOTOS.children.length - 1].style.display = 'none';
    createInstagramImage(1);
    PHOTOS.prepend(ARR_PHOTOS[ARR_PHOTOS.length - 1]);
    rangeValue = RANGE.value;
  }
}