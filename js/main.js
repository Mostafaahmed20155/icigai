//PARALLAX EFFECT
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

//STICKY NAV BAR
window.addEventListener("scroll", () => {
    var navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle("sticky", window.scrollY > 0)
})

//FACEBOOK
function fbIconSelected() {
    document.querySelector('.fb-icon').src = "./img/Icon awesome-facebook-f-selected.svg";
}
function fbIconNotSelected() {
    document.querySelector('.fb-icon').src = "./img/Icon awesome-facebook-f.svg";
}
//LINKED IN
function linkedinIconSelected() {
    document.querySelector('.linkedin-icon').src = "./img/Icon awesome-linkedin-in-selected.svg";
}
function linkedinIconNotSelected() {
    document.querySelector('.linkedin-icon').src = "./img/Icon awesome-linkedin-in.svg";
}
//INSTGRAM
function instIconSelected() {
    document.querySelector('.inst-icon').src = "./img/Icon awesome-instagram-selected.svg";
}
function instIconNotSelected() {
    document.querySelector('.inst-icon').src = "./img/Icon awesome-instagram.svg";
}
//INSTGRAM
function twtIconSelected() {
    document.querySelector('.twt-icon').src = "./img/Icon awesome-twitter-selected.svg";
}
function twtIconNotSelected() {
    document.querySelector('.twt-icon').src = "./img/Icon awesome-twitter.svg";
}

//SIDE NAV-BAR
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

//AOS
  AOS.init();

//PRODUCTS SECTION
const prod1 = document.getElementById('prod1');
const prod2 = document.getElementById('prod2');
const prod3 = document.getElementById('prod3');
const prod4 = document.getElementById('prod4');
const prod5 = document.getElementById('prod5');
const prod6 = document.getElementById('prod6');
const prodTitle = document.querySelector(".product-title");
const prodDetails = document.querySelector(".product-details");


