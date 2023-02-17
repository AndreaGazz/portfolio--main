/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .gallery__text, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .images, .contact__input',{interval: 200}); 

/*===== IMAGE VIEWER =====*/
// Using jQuery
//$(".images img").each(function() {
//    $(this).click(function() {
//        $("#full-image").attr("src", $(this).attr("src"));
//        $('#image-viewer').show();
//    });
//})

//$("#image-viewer .close").click(function() {
//    $('#image-viewer').hide();
//});

// Using vanilla js
 const fullImage = document.querySelector('#full-image')
 const imageViewer = document.querySelector('#image-viewer')
 document.querySelectorAll(".images img").forEach(image => {
     image.addEventListener('click', () => {
         fullImage.src = image.src
         imageViewer.style.display = 'block'
     })
 })

 document.querySelector('#image-viewer .close').addEventListener('click', () => {
     imageViewer.style.display = 'none'
 })
 /*$('.arrow-next').click(function() {
    var currentSlide = $('.active-slide'),
      nextSlide = currentSlide.next(),
      currentDot = $('.active-dot'),
      nextDot = currentDot.next();
  
    if (nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
  
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });
  
  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide'),
      prevSlide = currentSlide.prev(),
      currentDot = $('.active-dot'),
      prevDot = currentDot.prev();
  
    if (prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
  
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
  
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
  
  // this bit will resize the sliders height to make it responsive
  $(window).on('load resize', function() {
    var x = $('.active-slide img').height() + "px";
  
    $('.slider').css('min-height', x);
    $('p').text(x);
  });*/