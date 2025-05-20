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



const slides = document.querySelector('.gallery__slides');
const slide = document.querySelectorAll('.gallery__slide');
const prevBtn = document.querySelector('.gallery__arrows-prev');
const nextBtn = document.querySelector('.gallery__arrows-next');

let currentIndex = 0;
const totalSlides = slide.length;

function updateSliderPosition() {
  slides.style.transform = `translateX(-${currentIndex * 105}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Возврат к первому слайду
  }
  updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // Переход на последний слайд
  }
  updateSliderPosition();
});