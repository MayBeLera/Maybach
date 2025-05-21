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
const headerSlides = document.querySelector('.slides');
const headerSlide = document.querySelectorAll('.slide');
const prevHeaderBtn = document.getElementById('banner-prev');
const nextHeaderBtn = document.getElementById('banner-next');
const paginationContainer = document.querySelector('.pagination');

let currentIndex = 0;
const totalSlides = headerSlide.length;

function updateSliderPosition() {
  headerSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updatePagination();
}

function updatePagination() {
  const dots = document.querySelectorAll('.pagination-dot');
  dots.forEach(dot => dot.classList.remove('active'));
  
  dots[currentIndex].classList.add('active');
}

function createPaginationDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    dot.addEventListener('click', () => {
      currentIndex = i; 
      updateSliderPosition();
    });
    paginationContainer.appendChild(dot);
  }
}

createPaginationDots();
updatePagination(); 

nextHeaderBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateSliderPosition();
});

prevHeaderBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; 
  }
  updateSliderPosition();
});


// gallery-slider

const gallerySlides = document.querySelector('.gallery__slides');
const gallerySlide = document.querySelectorAll('.gallery__slide');
const galleryPrevBtn = document.getElementById('gallery__arrows-prev');
const galleryNextBtn = document.getElementById('gallery__arrows-next');

let galleryCurrentIndex = 0;
const galleryTotalSlides = gallerySlide.length;

 function updateGallerySliderPosition() {
   gallerySlides.style.transform = `translateX(-${galleryCurrentIndex * 100}%)`;
}

galleryNextBtn.addEventListener('click', () => {
   if (galleryCurrentIndex < galleryTotalSlides - 1) {
     galleryCurrentIndex++;
   } else {
      galleryCurrentIndex = 0; // Возврат к первому слайду
   }
   updateGallerySliderPosition();
 });

 galleryPrevBtn.addEventListener('click', () => {
   if (galleryCurrentIndex > 0) {
     galleryCurrentIndex--;
   } else {
     galleryCurrentIndex = galleryTotalSlides - 1; // Переход на последний слайд
   }
   updateGallerySliderPosition();
 });











// const slides = document.querySelector('.gallery__slides');
// const slide = document.querySelectorAll('.gallery__slide');
// const prevBtn = document.querySelector('.gallery__arrows-prev');
// const nextBtn = document.querySelector('.gallery__arrows-next');

// let currentIndex = 0;
// const totalSlides = slide.length;

// function updateSliderPosition() {
//   slides.style.transform = `translateX(-${currentIndex * 105}%)`;
// }

// nextBtn.addEventListener('click', () => {
//   if (currentIndex < totalSlides - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0; // Возврат к первому слайду
//   }
//   updateSliderPosition();
// });

// prevBtn.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//   } else {
//     currentIndex = totalSlides - 1; // Переход на последний слайд
//   }
//   updateSliderPosition();
// });