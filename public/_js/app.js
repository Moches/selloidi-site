// // JavaScript by Moches (c) 2022
// console.log('Sitio informativo en Certificación Sello IDI');
// console.log('Con acceso a herramienta de auto-diagnóstico.');
// console.log('Inclusión, Diversidad e Igualdad.');
// console.log('(c) 2022 - Sello Idi');

// // Interaction Start

// const navSlide = () => {
//   const toggle = document.querySelector('.toggle');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');

//   // console.log(toggle);
//   // console.log(nav);
//   // console.log(navLinks);

//   toggle.addEventListener('click', () => {
//     nav.classList.toggle('.nav-active');
//   });
// };

// navSlide();

// Accordion for FAQs

// var accordion = document.getElementsByClassName('accordion');
// var i;

// console.log(accordion);

// for (i = 0; i<acc.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//     var panel = this.nextElementSibling;
//     if (panel.style.display === 'block') {
//       panel.style.display = 'none';
//     } else {
//       panel.style.display = 'block';
//     }
//   });
// }

// BACK TO TOP PROTOTYPE
var backToTop = function () {
  this.constructor();
};

backToTop.prototype = {
  constructor: function () {
    this.trigger = document.querySelector('button.back-to-top');

    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 900) this.trigger.classList.add('active');
        else this.trigger.classList.remove('active');
      }.bind(this)
    );

    this.trigger.addEventListener('click', function () {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  },
};

// START ON DOM AND CONTENT LOAD
document.addEventListener('DOMContentLoaded', function () {
  // ADD BACK TO TOP INSTANCE
  new backToTop();
});
