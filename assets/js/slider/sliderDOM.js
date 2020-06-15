import Slider from "./slider";
import elements from "./elements";
import Preloader from "../preloader/preloader";

const sliderText = document.getElementById("slider-text");
const sliderTitle = document.getElementById("slider-title");
const sliderSubtitle = document.getElementById("slider-subtitle");
const sliderImage = document.getElementById("slider-image");
const sliderTextContent = document.getElementById("slider-text-content");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const slider = new Slider({
  elements,

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

const imagesPath = elements.map((el) => el.image);

Preloader.preloadImages({
  images: imagesPath,
  completed() {
    document.querySelector(".controls").style.visibility = "visible";
  },
});
