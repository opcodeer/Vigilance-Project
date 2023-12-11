hamburger = document.querySelector('.hamburger');
navbar = document.querySelector('.navbar');
mainnav = document.querySelector('.mainnav');
navtext = document.querySelector('.navtext');
masterhead = document.querySelector('.masterhead');
main = document.querySelector('.main');
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('v-class');
    mainnav.classList.toggle('h-nav');
    navtext.classList.toggle('vs-class');
    hamburger.classList.toggle("cross");
});
const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        if (!ent.isIntersecting) {
            mainnav.classList.add("sticky");
        } else {
            mainnav.classList.remove("sticky");
            main.classList.add("margintop");
        }
    },
    {
        root: null,
        rootMargin: "0px",
        threshold: 1
    }
);

const resizeObserver = new ResizeObserver(() => {
    if (window.innerWidth <= 1190) {
        observer.observe(masterhead);
    } else {
        observer.unobserve(masterhead);
        mainnav.classList.remove("sticky");
    }
});

resizeObserver.observe(document.body);

// Initial check for the observer when the page loads
if (window.innerWidth <= 1190) {
    observer.observe(masterhead);
}
var currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText ='\u00A0' + currentYear + '\u00A0';
