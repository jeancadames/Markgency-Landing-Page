const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const navToggler = document.querySelector("[data-nav-toggler]");
const closeBtns = document.querySelectorAll('#close');
const fixedModalTerms = document.querySelector('.fixed-container#terms');
const fixedModalConditions = document.querySelector('.fixed-container#privacy');

const closeModal = function (){
  closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', ()=> {
      fixedModalTerms.style.display = 'none';
      fixedModalConditions.style.display = 'none';
    })
  });
}


closeModal();

const showTerms = function(){
  fixedModalTerms.style.display = 'block';
  document.body.classList.add('overlay');
}

const showPrivacy = function(){
  fixedModalConditions.style.display = 'block';
  document.body.classList.add('overlay');
}

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});