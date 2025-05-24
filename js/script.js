// burger-menu
document.addEventListener('click', burgerInit);

function burgerInit(e){
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.nav__link');

    if(!burgerIcon && !burgerNavLink) return;
    if(document.documentElement.clientWidth > 900) return;

    if(!document.body.classList.contains('body--opened-menu')){
        document.body.classList.add('body--opened-menu')
    }else{
        document.body.classList.remove('body--opened-menu')
    }
}



// header-slider
const swiper = new Swiper(".header__slider", {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner-next",
        prevEl: ".banner-prev",
      },
      autoplay: {
      delay: 5000,
    },
    });



// gallery-slider
new Swiper(".gallery__slider", {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      
      navigation: {
        nextEl: ".gallery__arrows-next",
        prevEl: ".gallery__arrows-prev ",
      },
    900: {
              slidesPerView: 10,
            }
    });



// modal-window
const modal = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.open-modal'); 

modalButtons.forEach(button => {
     button.addEventListener('click', openModal);
});

 function openModal(e) {
     e.preventDefault();
    document.body.classList.toggle('body--opened-modal');
}

modal.addEventListener('click', closeModal)

  function closeModal (e) {
   e.preventDefault()
   const target = e.target;

  if(target.closest('.modal__cancel') || target.classList.contains('modal')){
     document.body.classList.remove('body--opened-modal')
  }
}



   // Маска для телефона
   const inputsTel = document.querySelectorAll('input[type="tel"]');
   const im = new Inputmask('+7 (999) 999-99-99')
   im.mask(inputsTel)




