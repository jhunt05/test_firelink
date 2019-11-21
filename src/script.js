// Menu 

function menu() {
  const menu = document.querySelector('.nav__list');
  const menuIcon = document.querySelector('.nav__icon')

  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('nav__list_show');
  });
}

menu();

// Slider 

function slider() {
  const sliderImages = document.querySelectorAll('.slider__image');
  const leftBtn = document.querySelector('.slider__btn-left');
  const rightBtn = document.querySelector('.slider__btn-right');
  const dots = document.querySelectorAll('.slider__dot')

  let i = 0;
  let activeDot = 0;

  leftBtn.addEventListener('click', function showPrevSlide() {
    sliderImages[i].classList.remove('slider__image_active');
    i--;

    if (i < 0) {
      i = sliderImages.length-1;
    }

    sliderImages[i].classList.add('slider__image_active');

    const oldActiveDot = dotsList.findIndex((dot) => (
      dot.classList.contains('slider__dot_active')));

    dots[oldActiveDot].classList.remove('slider__dot_active');
    
    if (activeDot === 0) { 
      dots[activeDot].classList.remove('slider__dot_active');
      activeDot = dots.length - 1;
      dots[activeDot].classList.add('slider__dot_active');
    } else {
      dots[activeDot].classList.remove('slider__dot_active');
      dots[--activeDot].classList.add('slider__dot_active');
    }
  });

  rightBtn.addEventListener('click', function showNextSlide() {
    sliderImages[i].classList.remove('slider__image_active');
    i++;

    if (i >= sliderImages.length) {
      i = 0;
    }

    sliderImages[i].classList.add('slider__image_active');

    const oldActiveDot = dotsList.findIndex((dot) => (
      dot.classList.contains('slider__dot_active')));
    
    dots[oldActiveDot].classList.remove('slider__dot_active');

    if (activeDot === dots.length - 1) {
      dots[activeDot].classList.remove('slider__dot_active');
      activeDot = 0;
      dots[activeDot].classList.add('slider__dot_active');
    } else {
      dots[activeDot].classList.remove('slider__dot_active');
      dots[++activeDot].classList.add('slider__dot_active');
    }
   
  });

  const dotsList = [...dots];
}

slider();