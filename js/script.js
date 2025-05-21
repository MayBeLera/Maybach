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




const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('banner-prev');
const nextBtn = document.getElementById('banner-next');
const paginationContainer = document.querySelector('.pagination');

let currentIndex = 0;
const totalSlides = slide.length;

// Функция для обновления позиции слайдера
function updateSliderPosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  updatePagination();
}

// Функция для обновления состояния пагинации
function updatePagination() {
  // Удаляем класс active у всех точек
  const dots = document.querySelectorAll('.pagination-dot');
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Добавляем класс active к текущей точке
  dots[currentIndex].classList.add('active');
}

// Создание точек пагинации
function createPaginationDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('pagination-dot');
    dot.addEventListener('click', () => {
      currentIndex = i; // Устанавливаем текущий индекс на выбранный слайд
      updateSliderPosition();
    });
    paginationContainer.appendChild(dot);
  }
}

// Инициализация пагинации
createPaginationDots();
updatePagination(); // Устанавливаем активную точку при загрузке

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




// const slides = document.querySelector('.slides');
// const slide = document.querySelectorAll('.slide');
// const prevBtn = document.getElementById('banner-prev');
// const nextBtn = document.getElementById('banner-next');

// let currentIndex = 0;
// const totalSlides = slide.length;

// function updateSliderPosition() {
//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;
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