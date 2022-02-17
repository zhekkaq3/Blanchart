// ==================   dropdowns  ==========================
// =================  open with click on button  ===========
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dropdowns__btn').forEach(function (dropdownBtn) {
    dropdownBtn.addEventListener('click', function (event) {

      const path = event.currentTarget.dataset.path

      if (!event.currentTarget.classList.contains('dropdown__xz')) {
        document.querySelectorAll('.dropdown__content-list').forEach(function (dropdown) {
          dropdown.classList.remove('dropdown__is-active')
        });

        document.querySelectorAll('.dropdowns__btn').forEach(function (drpbtn) {
          drpbtn.classList.remove('dropdown__xz')
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('dropdown__is-active')
        document.querySelector(`[data-path="${path}"]`).classList.add('dropdown__xz')
      } else {
        document.querySelector(`[data-target="${path}"]`).classList.remove('dropdown__is-active')
        document.querySelector(`[data-path="${path}"]`).classList.remove('dropdown__xz')
      }
    });
  });
});

// ====  close dropdown if the user clicks outside of it ======
window.onclick = function (event) {
  if (!event.target.matches('.dropdowns__btn')) {

    let dropdowns = document.getElementsByClassName("dropdown__content-list");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('dropdown__is-active')) {
        openDropdown.classList.remove('dropdown__is-active');
        document.querySelectorAll('.dropdowns__btn').forEach(function (drpbtn) {
          drpbtn.classList.remove('dropdown__xz')
        });
      }
    }
  }
}


//  =================  selects ==========================

const castomSelect = () => {
  const element = document.querySelector('.select-box__choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
  });
  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

castomSelect();

// ==========   bgrounds-slider   =================

const swiper1 = new Swiper('.bg-swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5100,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

});

//  ============ gallery slider  ===============

const swiper2 = new Swiper('.gallery-block__slider-box', {

  slidesPerView: 1,

  // loop: true,
  spaceBetween: 50,
  autoHeight: false,
  direction: 'horizontal',
  slidesPerColumn: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  breakpoints: {
    220: {
      slidesPerView: 1,
    },

    621: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    },

    1430: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
    },


  },
});

//  ===========  issues slider ==============

const swiperIssues = document.querySelector('.left-side__slider-box');

function issuesSlides() {
  if (window.innerWidth > 620 && swiperIssues.dataset.pc == 'false') {
    swiper3 = new Swiper(swiperIssues, {
      slidesPerView: 2,
      autoHeight: true,
      loop: true,
      slidesPerGroup: 1,
      spaceBetween: 34,
      direction: 'horizontal',
      breakpoints: {

        620: {
          slidesPerView: 2,
          spaceBetween: 34,
        },

        1024: {
          slidesPerView: 2,
          spaceBetween: 49,
        },

        1430: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3,
        },

      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.left-side__pagination',
        type: 'fraction',
      },
      centeredSlidesBounds: true,
    });
    swiperIssues.dataset.pc = 'true';
  };
  if (window.innerWidth <= 620) {
    swiperIssues.dataset.pc = 'false';
    if (swiperIssues.classList.contains('swiper-container-initialized')) {
      swiper3.destroy();
    };
  };
};

issuesSlides();

window.addEventListener('resize', () => {
  issuesSlides();
});


//  ============ projects slider ==============

const swiper4 = new Swiper('.partners-slider__slider-box', {

  slidesPerView: 1,
  autoHeight: false,
  loop: true,
  slidesPerGroup: 1,
  direction: 'horizontal',
  spaceBetween: 34,
  centeredSlidesBounds: true,
  breakpoints: {

    220: {
      slidesPerView: 1,
      spaceBetween: 34,
      slidesPerGroup: 1,
    },

    531: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },

    1430: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },

  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//  ============ events mobile slider =========
let swiper320;

const slider320 = document.querySelector('.section-events__card-box');

function mobileSlide() {
  if (window.innerWidth <= 620 && slider320.dataset.mobile == 'false') {
    swiper5 = new Swiper(slider320, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      direction: 'horizontal',
      centeredSlidesBounds: true,
      autoHeight: true,
      slideClass: 'section-events__item',
      wrapperClass: 'section-events__list',
      pagination: {
        el: '.section-events__pagination',
        type: 'bullets',
        clickable: true,
      },
    });
    slider320.dataset.mobile = 'true';
  }
  if (window.innerWidth > 620) {
    slider320.dataset.mobile = 'false';
    if (slider320.classList.contains('swiper-container-initialized')) {
      swiper5.destroy();
    };
  };
};

mobileSlide();

window.addEventListener('resize', () => {
  mobileSlide();
});


//  ============ Accordion  ====================

$('.accordion').accordion({
  active: 0,
  animate: 50,
  heightStyle: "content",
  icons: false,
  collapsible: true,
});


//  ==================  tabs   =========================

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.admin-block__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.admin-block__btn').forEach(function (button) {
        button.classList.remove('pushed')
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('pushed')

      document.querySelectorAll('.content-block__accordion-content-btn').forEach(function (btn) {
        btn.classList.remove('artist-pushed')
      });

      document.querySelector(`[data-start="${path}"]`).classList.add('artist-pushed')

      document.querySelectorAll('.content-block__tab-box').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      });

      document.querySelectorAll('.content-block__artists-description').forEach(function (elm) {
        elm.classList.remove('artist-descr-is-active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      document.querySelector(`[data-default="${path}"]`).classList.add('artist-descr-is-active')

      $(".accordion").accordion("refresh");

    });
  });
});


//  ==============  artists btn in catalog   ================

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.content-block__accordion-content-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.content-block__accordion-content-btn').forEach(function (btn) {
        btn.classList.remove('artist-pushed')
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('artist-pushed')

      document.querySelectorAll('.content-block__artists-description').forEach(function (tabContent) {
        tabContent.classList.remove('artist-descr-is-active')
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('artist-descr-is-active')

    });
  });
});

//  ============= styles for items in accrdion  ========

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.content-block__accordion-item').forEach(function (items) {
    items.addEventListener('click', function (event) {

      if (event.currentTarget.classList.contains('item-colored')) {
        event.currentTarget.classList.remove('item-colored')
      } else {
        document.querySelectorAll('.content-block__accordion-item').forEach(function (smthng) {
          smthng.classList.remove('item-colored')
        });
        event.currentTarget.classList.add('item-colored')
      }
    });
  });
});


//  ============= show hidden block in section-events ======

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.section-enents__btn').addEventListener('click', function () {

    document.querySelectorAll('.section-events__item:nth-child(n+3)').forEach(function (xzEl) {
      xzEl.classList.add('hidden-block-show')
    });

    document.querySelector('.section-enents__btn').classList.add('section-enents__btn-hidden')
  });
});

// =========== checked label ===============

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.admin-issues__label').forEach(function (label) {
    label.addEventListener('change', function (event) {
      if (!event.currentTarget.classList.contains('checked-label')) {
        event.currentTarget.classList.add('checked-label')
      } else {
        event.currentTarget.classList.remove('checked-label')
      }
      event.stopPropagation();
    });
  });
});

//=============== input only nums  ================

$(".admin-issues__input").keypress(function (e) {
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    return false;
  }
});


// ==================  map  ===========================
ymaps.ready(init);
function init() {

  var myMap = new ymaps.Map("blanchard-map", {

    center: [55.76, 37.61],

    zoom: 15,
    controls: [],
  }, {
    suppressMapOpenBlock: true
  });

  var myMap2 = new ymaps.Map("blanchard-mobile-map", {

    center: [55.75846306898368, 37.601079499999905],

    zoom: 15,
    controls: [],
  }, {
    suppressMapOpenBlock: true
  });

  var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/contacts/point.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
    }
  });
  myMap.controls.add(zoomControl);
  myMap2.controls.add(zoomControl);
  // Размещение геообъекта на карте.

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.add('geolocationControl')
  myMap.controls.remove('searchControl')
  myMap.controls.remove('routeButton')
  myMap.controls.remove('trafficControl')
  myMap.controls.remove('typeSelector')
  myMap.controls.remove('fullscreenControl')
  myMap.controls.remove('rulerControl')

  myMap2.geoObjects.add(myPlacemark);
  myMap2.controls.add('geolocationControl')
  myMap2.controls.remove('searchControl')
  myMap2.controls.remove('routeButton')
  myMap2.controls.remove('trafficControl')
  myMap2.controls.remove('typeSelector')
  myMap2.controls.remove('fullscreenControl')
  myMap2.controls.remove('rulerControl')
}

//  ===============  mask ===============

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

//  ============  validate  ==============

new JustValidate('.left-side__form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 20,
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = document.querySelector("input[type='tel']").inputmask.unmaskedvalue()
        return Number(phone) && phone.length == 10
      }
    },
  },
  messages: {
    name: {
      minLength: 'Минимальная длинна - 3 символа',
      required: 'Поле обязательно для заполнения!',
    },

    tel: {
      required: 'Поле обязательно для заполнения!',
      function: 'Номер не соответсвует формату',
    }
  },
});

// ========= popups ================

function popuping() {
  if (window.innerWidth > 1200) {
    $('.gallery-block__popup-link').magnificPopup({
      type: 'inline',
      // mainClass: '.gallery-block__slider-box',
    });
  };

  if (window.innerWidth <= 1200) {
    $('.gallery-block__popup-link').magnificPopup({
      type: 'inline',
      mainClass: '.gallery-block__slider-box',
      prependTo: '.gallery-block__slider-box'
    });
  };
};

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function () {
    if (window.innerWidth < 1200 && document.querySelector('.mfp-content')) {
      document.querySelector('.bg-popup').classList.add('bg-popup-on')
    };
  });
});

popuping();

window.addEventListener('resize', () => {
  popuping();
});


function closePopup() {
  $.magnificPopup.close();
  if (document.querySelector('.bg-popup').classList.contains('bg-popup-on') || document.querySelector('.mfp-content')) {
    document.querySelector('.bg-popup').classList.remove('bg-popup-on')
  }
}

//  ========  scroll  to =============

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};

//  ============ menu burger ==================
const burgerIcon = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav-box');

if (burgerIcon) {
  burgerIcon.addEventListener("click", function (el) {
    document.body.classList.toggle('fixed');
    burgerIcon.classList.toggle('burger-btn-active');
    burgerMenu.classList.toggle('burger-menu-open');
    document.querySelector('.entrance__btn').classList.toggle('entrance__btn-burger')
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav__link').forEach(function (el) {

    el.addEventListener('click', function (event) {
      document.body.classList.remove('fixed');
      burgerIcon.classList.remove('burger-btn-active');
      burgerMenu.classList.remove('burger-menu-open');
      document.querySelector('.entrance__btn').classList.remove('entrance__btn-burger')
    });
  });
});

//  =============  top search  ===========

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.top-search__activator').addEventListener('click', function (event) {
    document.querySelector('.top-search__input').classList.toggle('top-search__input--active');
    document.querySelector('.top-search__activator').classList.toggle('top-search__activator--off');
    document.querySelector('.top-search__submit').classList.toggle('top-search__submit-on');
    document.querySelector('.logo__link').classList.toggle('logo__link-off');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    let object = document.querySelector('.header__top-search-box');
    if (!object.contains(event.target)) {
      document.querySelector('.top-search__input').classList.remove('top-search__input--active');
      document.querySelector('.top-search__activator').classList.remove('top-search__activator--off');
      document.querySelector('.top-search__submit').classList.remove('top-search__submit-on');
      document.querySelector('.logo__link').classList.remove('logo__link-off');

    }
  });
});


// ==============  checkboxes select ===========



document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.admin-issues__blocklegend').addEventListener('click', function () {
    document.querySelectorAll('.admin-issues__checkbox').forEach(function (el) {
      if (document.querySelector('.admin-issues__blocklegend').classList.contains('admin-issues__blocklegend--active')) {
        if (!el.checked) {
          el.parentElement.classList.add('admin-issues__item-on');
        }
      } else {
        if (!el.checked) {
          el.parentElement.classList.remove('admin-issues__item-on');
        }
      }
    })

    document.querySelector('.admin-issues__blocklegend').classList.toggle('admin-issues__blocklegend--active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    let object = document.querySelector('.admin-issues__fieldset-checkbox');

    if (!object.contains(event.target)) {
      document.querySelectorAll('.admin-issues__checkbox').forEach(function (e) {

        if (!e.checked) {
          e.parentElement.classList.remove('admin-issues__item-on');
        }
      });

      document.querySelector('.admin-issues__blocklegend').classList.add('admin-issues__blocklegend--active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    document.querySelectorAll('.admin-issues__checkbox').forEach(function (e) {
      if (e.checked) {
        e.parentElement.classList.add('cross-on');
      } else {
        e.parentElement.classList.remove('cross-on');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.ch-btn').forEach(function (e) {
    e.addEventListener('click', function (event) {
      e.parentElement.querySelector('.admin-issues__checkbox').checked = false;
    });
  });
});
