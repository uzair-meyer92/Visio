$(document).ready(function() {
    // Mobile menu toggle
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
    });
    // Slider functionality
    let currentSlide = 0;
    const slides = $('.slide');
    const slideCount = slides.length;
    // Create slider dots
    for (let i = 0; i < slideCount; i++) {
        $('.slider-nav').append('<div class="slider-nav-dot"></div>');
    }
    // Set initial active dot
    $('.slider-nav-dot').first().addClass('active');
    // Function to move to specific slide
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }
        currentSlide = index;
        $('.slider').css('transform', `translateX(-${currentSlide * 100}%)`);
        $('.slider-nav-dot').removeClass('active');
        $('.slider-nav-dot').eq(currentSlide).addClass('active');
    }
    // Next and previous arrows
    $('.next').click(function() {
        goToSlide(currentSlide + 1);
    });
    $('.prev').click(function() {
        goToSlide(currentSlide - 1);
    });
    // Click on dots
    $('.slider-nav-dot').click(function() {
        goToSlide($(this).index());
    });
    // Auto slide every 5 seconds
    setInterval(function() {
        goToSlide(currentSlide + 1);
    }, 5000);
    // Window resize handling for responsive design
    $(window).resize(function() {
        goToSlide(currentSlide);
    });
});


function toggleMenu() {
    const overlay = document.getElementById("menuOverlay");
    overlay.classList.toggle("active");
}

window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};
