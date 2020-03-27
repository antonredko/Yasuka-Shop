import {reloadPage} from './modules/reloadPage.js';

const LOGOS = document.querySelectorAll('.logo');
LOGOS.forEach(item => item.addEventListener('click', reloadPage));