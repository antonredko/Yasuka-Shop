let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);  
}

function prevSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide"),
        dots = document.getElementsByClassName("dot");

    if(n > slides.length) slideIndex = 1;

    if(n < 1) slideIndex = slides.length;

    for(let i = 0; i < slides.length; i += 1) {
        slides[i].style.display = "none";
    }

    for(let i = 0; i < dots.length; i += 1) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

setInterval(() => { nextSlide() }, 5000);

document.querySelectorAll('.circle')[2].addEventListener('click', prevSlide);
document.querySelectorAll('.circle')[3].addEventListener('click', nextSlide);

document.querySelectorAll('.dot')[0].onclick = () => { currentSlide(1) };
document.querySelectorAll('.dot')[1].onclick = () => { currentSlide(2) };
document.querySelectorAll('.dot')[2].onclick = () => { currentSlide(3) };