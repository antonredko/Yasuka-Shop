const LOGOS = document.querySelectorAll('.logo'),
    ABOUT = document.querySelector('.navig').getElementsByTagName('a')[1];

// Перезагрузка страницы
function reloadPage(){
    window.location.reload();
}
LOGOS.forEach(item => item.addEventListener('click', reloadPage));
ABOUT.addEventListener('click', reloadPage);