const swiper = new Swiper('.swiper-certificaciones', {
    slidesPerView: 'auto',
    spaceBetween: 1,
    loop: true,
    speed: 3000, // Velocidad del desplazamiento
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    freeMode: true,
    grabCursor: true,
    mousewheel: true
});