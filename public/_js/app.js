// // JavaScript by Moches (c) 2022
// console.log('Sitio informativo en Certificación Sello IDI');
// console.log('Con acceso a herramienta de auto-diagnóstico.');
// console.log('Inclusión, Diversidad e Igualdad.');
// console.log('(c) 2022 - Sello Idi');

// NAVIGATION PROTOTYPE

var Navigation = function () {
  this.constructor();
};

Navigation.prototype = {
  constructor: function () {
    this.header = document.querySelector('header');
    // this.servicesToggle = document.querySelector('button.sub-menu__toggle');
    // this.servicesDrop = document.querySelector('div.sub-menu__drop');
    // this.backdrop = document.querySelector('div.backdrop');
    // this.timer = null;
    this.menuToggle = document.querySelector('button.main-header-menu-toggle');
    this.mobileMenu = document.querySelector('nav.mobile-nav');

    // FADE HEDAER ON SCROLL
    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 10) this.header.classList.add('solid');
        else this.header.classList.remove('solid');
      }.bind(this)
    );

    // SERVICES TOGGLE EVENTS FOR SUBMENUS
    // this.servicesToggle.addEventListener(
    //   'mouseenter',
    //   function () {
    //     clearTimeout(this.timer);
    //     this.showServicesMenu.call(this);
    //   }.bind(this)
    // );

    // this.servicesToggle.addEventListener(
    //   'mouseleave',
    //   function () {
    //     this.timer = setTimeout(this.hideServicesMenu.bind(this), 100);
    //   }.bind(this)
    // );

    // SERVICES DROPDOWN EVENTS
    // this.servicesDrop.addEventListener(
    //   'mouseenter',
    //   function () {
    //     clearTimeout(this.timer);
    //   }.bind(this)
    // );

    // this.servicesDrop.addEventListener(
    //   'mouseleave',
    //   function () {
    //     this.timer = setTimeout(this.hideServicesMenu.bind(this), 100);
    //   }.bind(this)
    // );

    // Mobile menu events
    this.menuToggle.addEventListener(
      'click',
      function () {
        if (this.menuToggle.getAttribute('data-state') === 'off') {
          this.showMobileMenu();
        } else {
          this.hideMobileMenu();
        }
      }.bind(this)
    );
  },
  //   showServicesMenu: function () {
  //     this.servicesDrop.setAttribute('style', 'display: block');
  //     setTimeout(
  //       function () {
  //         this.servicesToggle.setAttribute('data-state', 'on');
  //       }.bind(this),
  //       20
  //     );
  //     this.backdrop.setAttribute('style', 'display: block');
  //     setTimeout(
  //       function () {
  //         this.backdrop.setAttribute('data-state', 'on');
  //       }.bind(this),
  //       20
  //     );
  //   },
  //   hideServicesMenu: function () {
  //     this.servicesToggle.setAttribute('data-state', 'off');
  //     this.servicesDrop.removeAttribute('style');
  //     this.backdrop.setAttribute('data-state', 'off');
  //     this.backdrop.removeAttribute('style');
  //   },
  showMobileMenu: function () {
    document.body.classList.add('noscroll');
    this.menuToggle.setAttribute('data-state', 'on');
    this.mobileMenu.setAttribute('data-state', 'on');
    this.header.classList.add('solid');
  },
  hideMobileMenu: function () {
    this.menuToggle.setAttribute('data-state', 'off');
    this.mobileMenu.setAttribute('data-state', 'off');
    this.header.classList.remove('solid');
    document.body.classList.remove('noscroll');
  },
};

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
  new Navigation();
  new backToTop();
});
