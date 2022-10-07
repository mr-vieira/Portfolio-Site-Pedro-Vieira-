console.log('Hi! Welcome to My UX Portfolio Site')

// Hamburger menuToggle

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle' && $(window).width() < 640) {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

// SCROLL Bar
const scrollProgress = document.getElementById('scroll-progress')
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`
})

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0'
  } else {
    document.getElementById('navbar').style.top = '-90px'
  }
  prevScrollpos = currentScrollPos

  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// Get the button:
let mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}


// SLIDESHOW GRAPHIC Design

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
