import {createElem} from './createElem.js';

const RANGE = document.querySelector('input[type="range"]'),
  PHOTOS = document.querySelector('.photos'),
  ARR_PHOTOS = [];

function createInstagramImage(num, elem) {
  let el = createElem(elem);

  el.setAttribute("src", "../img/instagram/" + num + ".png");
  el.setAttribute("alt", "Photo by Instagram");

  ARR_PHOTOS.push(el);
}

for(i = 1; i <= 5; ++i) {
  createInstagramImage(i, 'img');
}

ARR_PHOTOS.forEach(item => {
  PHOTOS.appendChild(item)
});

// RANGE.oninput = () => {
//   PHOTOS.children[0].style.display = 'none';
// }