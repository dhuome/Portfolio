//navigation bar effect on scroll

window.addEventListener("scroll", function() {
const header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0 );
});

//portfolio model

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtn = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modelClick){
    portfolioModals[modelClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click",() => {
        portfolioModal(i);
    });
});

portfolioCloseBtn.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click",() => {
        portfolioModals.forEach((portfolioModelView) => {
            portfolioModelView.classList.remove("active");
        });
    });
});

//scroll button

const scrollTopbtn = document.querySelector(".scrollToTop-btn")
window.addEventListener("scroll", function(){
    scrollTopbtn.classList.toggle("active" ,window.scrollY >500);
});

scrollTopbtn.addEventListener("click",() =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//navigation menu items active on page scroll

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        } else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//dark/light theme

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme" ,getCurrentTheme());
    localStorage.setItem("saved-icon" ,getCurrentTheme());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//responsive navigation bar

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) =>{
    navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
    });
});

//scroll reveal

ScrollReveal({
    reset: true,
    distance:'60px',
    duration:1000,
    delay:100
});
ScrollReveal().reveal('.home .info h2,.section-title-01,.section-title-02', {delay:500, origin:'left'});
ScrollReveal().reveal('.home .info h3 , .home .info p , .about-info .btn', {delay:600, origin:'right'});
ScrollReveal().reveal('.home .info .btn ', {delay:700, origin:'bottom'});
ScrollReveal().reveal('.media-icons i , .contact-left li', {delay:500, origin:'left', interval:200});
ScrollReveal().reveal('.home-img , .about-img', {delay:500, origin:'right'});
ScrollReveal().reveal('.about .description , .contact-right', {delay:600, origin:'right'});
ScrollReveal().reveal('.contact-left h2', {delay:700, origin:'left'});
ScrollReveal().reveal('.portfolio .img-card ', {delay:800, origin:'bottom',interval:200});
ScrollReveal().reveal('footer .group', {delay:500, origin:'top',interval:200});














