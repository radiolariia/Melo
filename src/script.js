//navbar hider
let topScroll = 0;
let isHidden = false;
let header = document.querySelector('.site__header');
let navLinks = document.querySelector('.main-nav__links');
let shouldBeHidden;

window.addEventListener('scroll', function () {
    let newTop = window.pageYOffset || window.document.documentElement.scrollTop;
    shouldBeHidden = newTop > 50 && newTop > topScroll;

    if (isHidden !== shouldBeHidden) {
        isHidden = shouldBeHidden;
        header.classList.toggle('site__header_hidden');
        window.innerWidth > 768 ? navLinks.classList.toggle('main-nav__links_hidden') : null;
    }
    topScroll = newTop;
});

//draggable carousel
const slider = document.querySelector('.carousel__list');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (event) => {
    isDown = true;
    slider.classList.add('carousel__list_active');
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('carousel__list_active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (event) => {
    if(!isDown) return;
    event.preventDefault();
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});