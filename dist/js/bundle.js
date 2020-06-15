/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const menuScreen = document.querySelector(".menu-screen");

function scrollToElement(element) {
  window.scrollTo({
    behavior: "smooth",
    top: element.offsetTop,
  });
}

document.querySelector(".menu").addEventListener("click", () => {
  menuScreen.classList.add("active");
});

document.querySelector(".close").addEventListener("click", () => {
  menuScreen.classList.remove("active");
});

const links = document.querySelectorAll(".menu-screen a");

links.forEach((link) => {
  link.addEventListener("click", function (ev) {
    if (window.scrollTo) ev.preventDefault();

    menuScreen.classList.remove("active");

    const paths = this.href.split("/");
    const selector = paths[paths.length - 1];

    scrollToElement(document.querySelector(selector));
  });
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./assets/scss/app.scss
var app = __webpack_require__(0);

// CONCATENATED MODULE: ./assets/js/slider/slider.js
class Slider {
  constructor({ elements, animationFunc, speed = 1000 }) {
    this.elements = elements;
    this.animationFunc = animationFunc;
    this.speed = speed;

    this.index = 0;
    this.size = elements.length;

    this.innerNext = this.innerNext.bind(this);
    this.stop = this.stop.bind(this);

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  innerNext() {
    this.index++;
    if (this.index >= this.size) this.index = 0;

    this.animationFunc(this.elements[this.index]);
  }

  innerPrev() {
    this.index--;
    if (this.index < 0) this.index = this.size - 1;

    this.animationFunc(this.elements[this.index]);
  }

  prev() {
    this.innerPrev();
    if (this.interval) {
      this.stop();
      this.play();
    }
  }

  next() {
    this.innerNext();
    if (this.interval) {
      this.stop();
      this.play();
    }
  }

  play() {
    this.interval = setInterval(this.innerNext, this.speed);
  }

  stop() {
    clearInterval(this.interval);
  }
}

// CONCATENATED MODULE: ./assets/js/slider/elements.js
/* harmony default export */ var slider_elements = ([
  {
    title: "Lorem Ipsum",
    subtitle: "Lorem",
    image: "../public/images/5.jpg",
    text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis`,
  },
  {
    title: "Lorem Ipsum",
    subtitle: "Ipsum",
    image: "../public/images/4.jpg",
    text: `2 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC`,
  },
  {
    title: "Ipsum Second",
    subtitle: "Lorem",
    image: "../public/images/3.jpg",
    text: `Making it over 2000 years old. Richard McClintock,`,
  },
  {
    title: "Ipsum Second",
    subtitle: "Ipsum",
    image: "../public/images/6.jpg",
    text: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail`,
  },
]);

// CONCATENATED MODULE: ./assets/js/preloader/preloader.js
class Preloader {
  static preloadImages({ images, completed }) {
    const promises = images.map((imagePath) =>
      Preloader.preloadImage({ imagePath })
    );

    Promise.all(promises).then(completed);
  }

  static preloadImage({ imagePath }) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imagePath;
      image.onload = resolve;
    });
  }
}

// CONCATENATED MODULE: ./assets/js/slider/sliderDOM.js




const sliderText = document.getElementById("slider-text");
const sliderTitle = document.getElementById("slider-title");
const sliderSubtitle = document.getElementById("slider-subtitle");
const sliderImage = document.getElementById("slider-image");
const sliderTextContent = document.getElementById("slider-text-content");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const slider = new Slider({
  elements: slider_elements,

  animationFunc(element) {
    sliderTextContent.classList.add("hide");
    sliderImage.classList.add("hide");

    setTimeout(() => {
      sliderTitle.innerHTML = element.title;
      sliderSubtitle.innerHTML = element.subtitle;
      sliderImage.src = element.image;
      sliderText.innerHTML = element.text;

      sliderTextContent.classList.remove("hide");
      sliderImage.classList.remove("hide");
    }, 600);
  },

  speed: 5000,
});

slider.play();

leftArrow.addEventListener("click", slider.prev);
rightArrow.addEventListener("click", slider.next);

const imagesPath = slider_elements.map((el) => el.image);

Preloader.preloadImages({
  images: imagesPath,
  completed() {
    document.querySelector(".controls").style.visibility = "visible";
  },
});

// CONCATENATED MODULE: ./assets/js/maps/styles.js
const blue = "#f5f5f5";
const label = "#2C3E50";
const accentRed = "#ff5972";
const green = "#468c56";
const black = "#1f1f21";
const lightBlue = "#6DBCDB";
const roads = "#eadf8f";
const transit = "#d3ba74";

const styles = [
  { elementType: "geometry", stylers: [{ color: blue }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.fill", stylers: [{ color: label }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: accentRed }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: label }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: blue }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: green }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: black }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: lightBlue }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: label }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: roads }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: roads }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: transit }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: lightBlue }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: label }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: label }],
  },
];

/* harmony default export */ var maps_styles = (styles);

// CONCATENATED MODULE: ./assets/js/maps.js


function initMap() {
  const coords = {
    lat: 19.427025,
    lng: -99.167665,
  };

  const map = new google.maps.Map(document.getElementById("mapa"), {
    center: coords,
    zoom: 17,
    styles: maps_styles,
  });

  const marker = new google.maps.Marker({
    position: coords,
    map,
    title: "Facilito Store",
  });
}

initMap();

// EXTERNAL MODULE: ./assets/js/menu.js
var menu = __webpack_require__(1);

// CONCATENATED MODULE: ./assets/js/entry.js





if (navigator.serviceWorker) {
  navigator.serviceWorker.register("../sw.js");
}


/***/ })
/******/ ]);