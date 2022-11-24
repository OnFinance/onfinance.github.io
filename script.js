const ethCoin = document.querySelector('.ci1')
const walletElement = document.querySelector('.ci2');
const featurescreen = document.querySelector('.ftimg');

//for on scroll animation
window.addEventListener('scroll', () => {
    var value = window.scrollY;
    // console.log(value);
    if (value > 0 && value < 387 ) {
        walletElement.style.transform = `translate(0,-${(value)/1.5}px) rotate(-10deg)`;
        ethCoin.style.transform = `translate(0,${(value)/1.5}px) rotate(10deg)`;
    }
    if(value > 600 && value < 1140){
        featurescreen.style.transform = `translate(0,-${(value-600)}px)`;
    }
});

// popup

const popup = document.querySelector('.popupBox');
const popupclose = document.querySelector('.popupclosebtn');
const popupopen = document.querySelectorAll('.specialRewards');

const OpenPopup = () => {
    popup.classList.remove('hidden');
}
const ClosePopup = () => {
    popup.classList.add('hidden');
}
popupopen.forEach(item => {
    item.addEventListener('click', () => {
        OpenPopup();
    })
});

popupclose.addEventListener('click', () => {
    ClosePopup();
});

const hamburger = document.querySelector('.hamburger');
const navmodal = document.querySelector('.navoptions');
const BarsIcon = document.querySelector('.fa-bars');
const CloseIcon = document.querySelector('.fa-close');

hamburger.addEventListener('click', () => {
    navmodal.classList.toggle('navmodal-active');
    BarsIcon.classList.toggle('hidden');
    CloseIcon.classList.toggle('hidden');
});

// carousel

$(document).ready(function(){

    $(".gallerycarousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                items: 1,
            },
            1180: {
                items: 3,
            },
        },
    });
    // $(".testcarousel").owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     margin: 10,
    //     autoplay: true,
    //     autoplayTimeout: 1500,
    //     autoplayHoverPause: true,
    //     center: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             stagePadding: 0,
    //         },
    //         550:{
    //             items: 1,
    //             stagePadding: 100,
    //         },
    //         650:{
    //             items: 1,
    //             stagePadding: 150,
    //         },
    //         750:{
    //             items: 1,
    //             stagePadding: 200,
    //         },
    //         850:{
    //             items: 1,
    //             stagePadding: 250,
    //         },
    //         950:{
    //             items: 1,
    //             stagePadding: 300,
    //         },
    //         1100: {
    //             items: 3,
    //             // stagePadding: 20,
    //         },
    //         1200:{
    //             items: 3,
    //             // stagePadding: 70,
    //         },
    //         1300:{
    //             items: 3,
    //             stagePadding: 0,
    //         }
    //     },
    // });
    
//     setTimeout(OpenPopup,1500);
});

//form in jquery

(function ($) {
    "use strict";
    $('#email-form').ajaxChimp({
        url: 'https://quomodosoft.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                ClosePopup();
                console.log(resp.msg);
                $('#email-input').val('');
            }
        }
    });
    $('#email-form-footer').ajaxChimp({
        url: 'https://quomodosoft.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                ClosePopup();
                console.log(resp.msg);
                $('#signup-input').val('');
            }
        }
    });
})(jQuery);
