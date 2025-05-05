// Loader JS
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  });


const navLinks = document.querySelectorAll('.nav-link') 
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', ()=> {
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active')
        })
        navLink.classList.add('active')
    })
})


// When the page is scrolled, check which section is in view
document.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(function(section, index) {
        const rect = section.getBoundingClientRect();
        
        const isInViewport = rect.top <= 80 && rect.bottom >= 80;
        
        if (isInViewport) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
});



// Get references to elements
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const homeSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  const homeBottom = homeSection.offsetHeight;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > homeBottom) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}



document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
        bsCollapse.hide();
    });
}); 