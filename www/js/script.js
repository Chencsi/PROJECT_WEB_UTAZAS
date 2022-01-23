// Navigációhoz tartozó függvény
function navFunction(event) {
    for (let i = 0; i < navLinks.length; i++) {
        linksChilds[i].classList.remove('active');
    }
    event.target.classList.add('active');
}

// Ez a függvény fut le, amikor betölt az oldal
function mainFunction() {
    // Linkek listához adása, oldal tetejére görgetés
    window.scrollTo(0, 0);
    document.querySelector('.navbar-nav a:first-child').classList.add('active');
    for (let i = 0; i < links.childElementCount; i++) {
        navLinks.push(linksChilds[i])
    }
}

// Változók
let navLinks = [];
let links = document.getElementById('links');
let linksChilds = links.children;