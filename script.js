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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzDSN6DTHqrlP4WPjqU-ZjCFRgQF22rl1yXj9bHhb57D6xBHbt7e6lZRY-XwUrLiiDlUQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        msg.innerHTML = "Message Sent Successfully";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 3000);
        form.reset();
      }
    })
    .catch((error) => console.error("Error!", error.message));
});

const msg = document.getElementById("msg");

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
