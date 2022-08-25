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

// HERO SLIDER PROTOTYPE

var MainSlider = function () {
  this.constructor();
};

MainSlider.prototype = {
  constructor: function () {
    this.hero = document.querySelector('section.hero');
    this.mainSlider = this.hero.querySelector('div.swiper');
    this.slides = this.hero.querySelectorAll('div.swiper-slide');
    this.sliderBulletsBox = this.hero.querySelector('div.hero__bullets');
    this.btnPrev = this.hero.querySelector('button.slides__nav-button-left');
    this.btnNext = this.hero.querySelector('button.slides__nav-button-right');
    this.timer = null;
    this.scrollButton = this.hero.querySelector('button.hero__more-cta');

    // Create slider bullets
    for (var i = 0; i < this.slides.length; i++) {
      var bullet = document.createElement('span');
      if (i === 0) bullet.classList.add('active');
      this.sliderBulletsBox.append(bullet);
    }
    this.bullets = this.sliderBulletsBox.querySelectorAll('span');

    // Scroll button event
    this.scrollButton.addEventListener(
      'click',
      function () {
        var offset;
        if (window.innerWidth > 959) offset = 60;
        else offset = 100;
        window.scrollTo({
          top: this.hero.offsetHeight - offset,
          behavior: 'smooth',
        });
      }.bind(this)
    );

    // Brakpoint event
    this.breakpoint = window.matchMedia('(max-width:59.99rem)');
    this.breakpoint.addListener(this.checkBreakpoint.bind(this));
    this.checkBreakpoint();
  },
  setBullet: function (index) {
    for (var i = 0; i < this.bullets.length; i++) {
      if (index === i) this.bullets[i].setAttribute('class', 'active');
      else this.bullets[i].removeAttribute('class');
    }
  },
  checkBreakpoint: function () {
    var speed, effect;

    if (this.swiper !== undefined) this.swiper.destroy(true, true);
    if (this.breakpoint.matches === true) {
      speed = 300;
      effect = 'slide';
    } else {
      speed = 1000;
      effect = 'fade';
    }

    this.startSwiper(speed, effect);
  },
  startSwiper: function (speed, effect) {
    // Create swiper instance
    this.swiper = new Swiper(this.mainSlider, {
      loop: true,
      speed: speed,
      effect: effect,
      fadeEffect: { crossFade: true },
    });

    // Slide change swiper event
    this.swiper.on(
      'slideChange',
      function () {
        clearTimeout(this.timer);
        this.setBullet(this.swiper.realIndex);
        this.timer = setTimeout(
          function () {
            this.swiper.slideNext(speed, true);
          }.bind(this),
          9000
        );
      }.bind(this)
    );

    // Slider button events
    this.btnNext.addEventListener(
      'click',
      function () {
        this.swiper.slideNext(speed, true);
      }.bind(this)
    );

    this.btnPrev.addEventListener(
      'click',
      function () {
        this.swiper.slidePrev(speed, true);
      }.bind(this)
    );

    // Start auto slide
    this.timer = setTimeout(
      function () {
        this.swiper.slideNext(speed, true);
      }.bind(this),
      9000
    );
  },
};

// CARRUSEL SLIDER PROTOTYPE
var DirectorySlider = function () {
  this.constructor();
};

DirectorySlider.prototype = {
  constructor: function () {
    this.container = document.querySelector('div.directory');
    this.wrapper = this.container.querySelector('div.directory__wrapper');
    this.items = this.container.querySelectorAll('div.directory__position');
    this.current = 0;
    this.btnLeft = this.container.querySelector('button[data-mode="left"]');
    this.btnRight = this.container.querySelector('button[data-mode="right"]');
    this.itemWidth = this.items[0].offsetWidth;

    this.btnLeft.addEventListener(
      'click',
      function () {
        this.scroll('left');
      }.bind(this)
    );

    this.btnRight.addEventListener(
      'click',
      function () {
        this.scroll('right');
      }.bind(this)
    );

    window.addEventListener(
      'resize',
      function () {
        this.itemWidth = this.items[0].offsetWidth;
        this.wrapper.scrollLeft = 0;
        this.current = 0;
      }.bind(this)
    );
  },
  scroll: function (dir) {
    switch (dir) {
      case 'left':
        if (this.current > 0) this.current--;
        this.wrapper.scrollLeft = this.items[this.current].offsetLeft;
        break;
      case 'right':
        if (
          (this.items.length - this.current) * this.itemWidth >
          this.wrapper.offsetWidth
        )
          this.current++;
        this.wrapper.scrollLeft = this.items[this.current].offsetLeft;
        break;
    }
  },
};

// FOOTER PROTOTYPE

var Footer = function () {
  this.constructor();
};

Footer.prototype = {
  constructor: function () {
    this.container = document.querySelector('footer');
    this.toggles = this.container.querySelectorAll('button.footer__toggle');

    for (var i = 0; i < this.toggles.length; i++) {
      this.toggles[i].addEventListener('click', function () {
        if (this.getAttribute('data-state') === 'off')
          this.setAttribute('data-state', 'on');
        else this.setAttribute('data-state', 'off');
      });
    }
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
  // CREATE NAVIGATION INSTANCE
  new Navigation();
  new Footer();
  new backToTop();

  // Create main slider instance
  if (document.querySelector('section.hero') !== null) new MainSlider();

  // Create directory slider instance
  if (document.querySelector('div.directory') !== null) new DirectorySlider();
});
