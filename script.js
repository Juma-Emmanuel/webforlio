/*================togle icon navbar===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

/*================scroll section active link===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    });

    /*================sticky navbar===============*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================ remove togle icon  and navbar when click navbar link (scroll)===============*/
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

function showToast(ContainerID, message) {
    var toastContainer = document.getElementById(ContainerID);
  
    // Create a new toast element
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
  
    // Add the toast to the container
    toastContainer.appendChild(toast);
  
    // Remove the toast after a certain duration
    setTimeout(function() {
      toastContainer.removeChild(toast);
    }, 1000); // Toast will be removed after 3 seconds (3000 milliseconds)
  }


/*================Scroll reveal===============*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { orgin: 'top' });
ScrollReveal().reveal('.home-img, .card1, .card2, .project-box, .form-container', { orgin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { orgin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { orgin: 'right' });

/*================typed js===============*/
var typingEffect = new Typed('.multiText', {

    strings: ['Project manager', 'Web designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});