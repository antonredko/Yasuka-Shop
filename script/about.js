import {reloadPage} from './modules/reloadPage.js';

const ABOUT = document.querySelector('.navig').getElementsByTagName('a')[1];
ABOUT.addEventListener('click', reloadPage);