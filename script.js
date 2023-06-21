/*---------------------------------------------------------*/
/*---------------------toggle icon------------------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*---------------------------------------------------------*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('top nav a');

window.onscroll = () =>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top<offset+height){
      navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('top nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /*================sticky navbar===============*/
  let header = document.querySelector('top');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*================ remove togle icon  and navbar when click navbar link (scroll)===============*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
/*================Scroll reveal===============*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .top', { orgin: 'top' });
ScrollReveal().reveal('.home-img, .box2,  .project-box, .contact1 form', { orgin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .box1, .about-img', { orgin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { orgin: 'right' });

/*=====<i class="fa-regular fa-x"></i>===========typed js===============*/
const typed = new Typed('.multiple-text', {

  strings: ['Frontend Developer', 'Data Analyst', 'Django Framework specialist'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*---------------------------------------------------------*/
function scrollToSection(targetId){
    const target=document.querySelector(targetId);
    target.scrollIntoView({behaviour: 'smooth'});
}
window.addEventListener('scroll', function(){
  var floatingElement = document.getElementById('float');
  var contentHeight = document.getElementById('content');
  var scrollPosition = window.pageYOffset;

  if (scrollPosition > contentHeight){
    floatingElement.style.top = '10px';
  }
  else{
    floatingElement.style.top = '-100px';
  }

  
});

    function toggleVisibility(sectionIds,show) {
    var body = document.body;
    var selector="body > *";
    for(var i=0; i< sectionIds.length;i++){
      selector +=":not(#"+sectionIds[i] + ")";
       }

    var otherElements = document.querySelectorAll(selector);
    for (var j=0;j<sectionIds.length;j++){
        
    var section = document.getElementById(sectionIds[j]);
    if (show){
       body.style.overflow = "hidden";
      otherElements.forEach(function(element) {
        element.style.display = "none";
      });
      section.style.display = "block";
    } else {
      body.style.overflow = "auto";
      otherElements.forEach(function(element) {
        element.style.display = "block";
      });
      section.style.display = "none";
    }
  }
  }
 
