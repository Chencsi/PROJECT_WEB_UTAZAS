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
    document.querySelector('.navbar-nav a:first-child').classList.add('active');
    for (let i = 0; i < links.childElementCount; i++) {
        navLinks.push(linksChilds[i])
    }
}

// Változók
let navLinks = [];
let links = document.getElementById('links');
let linksChilds = links.children;

let lastPos = 0;
let currPos = 0;
let ticking = false;

function scrollFunction() {
    if (window.scrollY > 10){
        document.getElementById('nav').classList.add('bg-dark');
    } else {
        document.getElementById('nav').classList.remove('bg-dark');
    }
}

// function scrollFunction() {
//     currPos = window.scrollY;
//     for (let i = 0; i < links.childElementCount; i++) {
//         if (linksChilds[i].classList.contains('active')){
//             activeLink = [linksChilds[i], i]
//         }
//     }
//     setTimeout(function() {
//         if (currPos > lastPos) {
//             activeLink[0].classList.remove('active');
//             linksChilds[activeLink[1] + 1].classList.add('active');
//             // for (let i = 0; i < links.childElementCount; i++) {
//             //     if (activeLink[1] + 1 != i) {
//             //         activeLink[i].classList.remove('active');
//             //     }
//             // }
//         } else {
//             activeLink[0].classList.remove('active');
//             linksChilds[activeLink[1] - 1].classList.add('active');
//         }
//         lastPos = window.scrollY;
//     }, 1000)
// }

// document.addEventListener('scroll', function(e) {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       console.log(lastKnownScrollPosition)
//       ticking = false;
//     });

//     ticking = true;
//   }
// });


// let lastKnownScrollPosition = 0;
// let ticking = false;
// var elmnt = document.getElementById("ajanlataink");
// function doSomething(scrollPos) {

// }
// document.addEventListener('scroll', function(e) {
//   lastKnownScrollPosition = window.scrollY;

//   elmnt.scrollIntoView();
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       alert('asd');
//       ticking = false;
//     });

//     ticking = true;
//   }
// });