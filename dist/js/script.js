let positions = {
    home: $('#Home').offset().top,
    about: $('#About').offset().top,
    service: $('#Service').offset().top,
    video: $('#Video').offset().top,
    whyUs: $('#WhyUs').offset().top,
    language: $('#Language').offset().top,
    contact: $('#Contact').offset().top
};// end positions

let $window = $(window);
let $nav = $('nav');
let $nav_toggle = $('.nav-toggle');
let $nav_mobileLinks = $('.mobile-links');
let $nav_links = $('ul.links');
let $nav_arrow = $('.arrow');

$('#Service .popup').on('click', (e) => {
    if (e.target !== e.currentTarget) return;
    service_closePopup();
});

$('#Video .videoPopup').on('click', (e) => {
    if (e.target !== e.currentTarget) return;
    $('#Video .videoPopup').removeClass('active');
});

$('#Video .fa-youtube').on('click', () => {
    $('#Video .videoPopup').addClass('active');
});

$window.on('scroll' , nav_scroll);
$window.on('scroll' , nav_updateActiveLinks);

$nav_toggle.on('click' , ()=>{
    $nav_mobileLinks.toggleClass('active');
    $nav_toggle.toggleClass('active');
});// end nav-toggle click

$nav_arrow.on('click' , () => scrollTo_(0 , 600));

services_generateCards();

$('#Service .service-card p span').on('click' , service_openPopup);

about_generate();

whyUs_generateCards();

sector_generatePopup();

language_generatePopup();

$("#Language .part-1 .buttons .button1").on('click' , () =>{
    $("#Language .part-1 .sector-popup").addClass("active");
});

$("#Language .part-1 .buttons .button2").on('click' , () =>{
    $("#Language .part-1 .language-popup").addClass("active");
});

$("#Language .part-1 .sector-popup").on('click' , (e) => {
    if (e.target !== e.currentTarget) return;
    $("#Language .part-1 .sector-popup").removeClass("active");
});

$("#Language .part-1 .language-popup").on('click' , (e) => {
    if (e.target !== e.currentTarget) return;
    $("#Language .part-1 .language-popup").removeClass("active");
});

//_______________________________________________________________PLUGINS_______________________________________________________________

//-----------------------------------wow-----------------------------------

new WOW({
    animateClass: 'animate__animated'
}).init();

//-----------------------------------end wow-----------------------------------

//-----------------------------------gsap-----------------------------------

//header word animation

//control variables
const typingSpeed = 0.5;
const pauseDuration = 1.5;
const deletingSpeed = 0.5;

document.querySelectorAll(".typed-word").forEach(element => {
    const words = element.dataset.words
        .split(",")
        .map(word => word.trim());

    const word = document.createElement("span");
    const cursor = document.createElement("span");
    word.className = "word";
    cursor.className = "cursor";
    element.append(word, cursor);
    let index = 0;
    let showWord = () => {

        word.textContent = words[index];

        const width = word.getBoundingClientRect().width;

        // Word starts completely hidden
        
        gsap.set(word, {
            clipPath: "inset(0 100% 0 0)"
        });

        // Cursor starts at the beginning

        gsap.set(cursor, {
            left: 0
        });

        //create animation timeline
        const timeline = gsap.timeline();

        //typing animation
        timeline.to(word, {
            clipPath: "inset(0 0% 0 0)",
            duration: typingSpeed,
            ease: "none"
        });

        //move cursor to the end of the word
        timeline.to(cursor, {
            left: width,
            duration: typingSpeed,
            ease: "none"
        }, "<");

        //pause before delete
        timeline.to({}, {
            duration: pauseDuration
        });

        //delete animation
        timeline.to(word, {
            clipPath: "inset(0 100% 0 0)",
            duration: deletingSpeed,
            ease: "none"
        });

        //move cursor to the beginning
        timeline.to(cursor, {
            left: 0,
            duration: deletingSpeed,
            ease: "none"
        }, "<");

        // Next word
        timeline.call(() => {
            index = (index + 1) % words.length;
            showWord();
        });
    }

    showWord();
});

// end word animation

//-----------------------------------end gsap-----------------------------------

//-----------------------------------swiper-----------------------------------

const swiper = new Swiper(".photos-swiper", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 10,

    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },

        576: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },

        768: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },

        1000: {
            slidesPerView: 4,
            slidesPerGroup: 4
        },

        1200: {
            slidesPerView: 5,
            slidesPerGroup: 5
        }
    }
});

//-----------------------------------end swiper-----------------------------------

//_______________________________________________________________END PLUGINS_______________________________________________________________


