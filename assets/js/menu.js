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
