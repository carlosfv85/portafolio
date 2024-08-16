// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


import{p as i,b as a}from"./p-e26ac56f.js";
(()=>{const a=import.meta.url,e={};
return""!==a&&(e.resourcesUrl=new URL(".",a).href),i(e)})().then((i=>a([["p-5c60b45e",[[1,"ion-icon",{mode:[1025],color:[1],ariaLabel:[1537,"aria-label"],ariaHidden:[513,"aria-hidden"],ios:[1],md:[1],flipRtl:[4,"flip-rtl"],name:[1],src:[1],icon:[8],size:[1],lazy:[4],sanitize:[4],svgContent:[32],isVisible:[32]}]]]],i)));