const typed = new Typed(".auto-input", {
  strings: [
    "Barış Özer.",
    " a Front-End Developer.",
    "coding.",
    "developing.",
    "learning.",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("side-menu");

// const msg = document.getElementById("msg");

function openTab(tab) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tab).classList.add("active-tab");
}

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}
