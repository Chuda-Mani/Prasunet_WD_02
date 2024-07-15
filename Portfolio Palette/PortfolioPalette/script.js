// // toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');


// menuIcon.onClick=() => {
//     menuIcon.classList.toggle(<i class='bx bx-x' ></i>);
//     navbar.classList.toggle('active');
// };
// // scroll sections active links
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top>= offset && top < offset + height){
//             navLinks.forEach(links  => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

    
//     let header=document.querySelector('header');
//     header.classList.toggle('sticky',window.scrollY > 100);

// };

 
ScrollReveal({
    reset: true,  // Resets any prior animations on elements
    distance: '80px', // Distance from viewport edge to start animation
    duration: 2000,  // Animation duration in milliseconds
    delay: 200       // Delay before animation starts in milliseconds
  });
  
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
  
  const typed = new Typed('.multiple-text',{
    strings: ['FrontEnd Developer' , 'Team Lead','Cambridge English: Business Certificate (BEC) Holder ','Volunteer'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:100,
    loop:true
  });
  