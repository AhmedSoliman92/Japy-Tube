
$(window).scroll(function () {
    var scrl = $(window).scrollTop();
    if (scrl < 60) {
        $('.header-1').removeClass('fixedbar');
    } else {
        $('.header-1').addClass('fixedbar');
    }
});


var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i, slides;
    slides = document.getElementsByClassName("slides")
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {slideIndex = slides.length}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display = "block";
}





if($(".swiper-container").hasClass("team-member-silder")) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        allowTouchMove: true,
        loop: true,
        centeredSlides: true,
        slideToclickedslide: true,
        effect: "coverflow",
        grabcursor: true,
        autoplay: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 200,
            modifier: 1,
            slideShadows: false
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                centeresSlides: false,
                effect: "slide"
            }
        }
    });
}