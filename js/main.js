//ТАЙМЕР
function updateTimer() {
  const timerElement = document.querySelector(".hero__timer-ticker");
  let startTime = new Date();
  startTime.setHours(4, 51, 16, 0);

  function updateDisplay() {
    startTime.setSeconds(startTime.getSeconds()-1);
    const timeString = startTime.toLocaleTimeString("en-US", { hour12: false });
    timerElement.textContent = timeString;
  }

  updateDisplay();
  setInterval(updateDisplay, 1000);
}

window.addEventListener("load", updateTimer);



//СЛАЙДЕР
const mainImage = document.getElementById('slider__full-image');
const smallImages = document.querySelectorAll('.slider__small-image');

smallImages.forEach((smallImage, index) => {
  smallImage.addEventListener('click', () => {
    mainImage.src = smallImage.src;

    smallImages.forEach((image) => {
      image.classList.remove('active');
    });

    smallImage.classList.add('active');
  });
});




//РЕЙТИНГ
const stars = document.querySelectorAll(".product__rating-star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-rating"));

    stars.forEach((s, index) => {
      const svgStar = s.querySelector(".star");
      svgStar.classList.toggle("star--fill", index < rating);
    });
  });
});


//СМЕНА СТРЕЛКИ НА СЕЛЕКТЕ
const selectWrappers = document.querySelectorAll('.form__select-wrapper');

selectWrappers.forEach((selectWrapper) => {
  const select = selectWrapper.querySelector('.form__select');

  select.addEventListener('click', () => {
    selectWrapper.classList.toggle('open', select.open);
  });

  select.addEventListener('blur', () => {
    selectWrapper.classList.remove('open');
  });
});