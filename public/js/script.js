'use strict';

window.addEventListener("DOMContentLoaded", (event) => {

  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");


  // contact form variables
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  //document.getElementsByClassName("place-name").innerHTML = "Miami Eye and Retina";
  
  // sidebar toggle functionality for mobile
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
  // custom select variables


  // element toggle function
  const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

  // add event to all form input field
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {

      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });
  }

  const activatePage = (targetPage) => {
    if (!targetPage) return;

    pages.forEach((page) => {
      const isActive = page.dataset.page === targetPage;
      page.classList.toggle("active", isActive);
      if (isActive) {
        window.scrollTo(0, 0);
      }
    });

    navigationLinks.forEach((navLink) => {
      const navTarget = navLink.dataset.pageTarget;
      navLink.classList.toggle("active", navTarget === targetPage);
    });
  };

  // Ensure the blog section is active when loading a blog post route
  const currentPath = window.location.pathname;
  if (currentPath.startsWith("/posts")) {
    activatePage("blog");
  }

  // add event to all nav link
  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      activatePage(this.dataset.pageTarget);
    });
  });
});


window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "AW-618975445");


window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-3M4H31MEGT");

{/* <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-WTTKGT83"
    height="0"
    width="0"
    style="display: none; visibility: hidden"></iframe>
</noscript> */}

