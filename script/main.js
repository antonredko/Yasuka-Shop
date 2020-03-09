const LOGOS = document.querySelectorAll('.logo');

// Перезагрузка страницы
function reloadPage(){
    window.location.reload();
}
LOGOS.forEach(item => item.addEventListener('click', reloadPage));