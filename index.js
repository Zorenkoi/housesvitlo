new Swiper(".exsamples-swiper", {
  navigation: {
    prevEl: ".examples-prev",
    nextEl: ".examples-next",
  },
  pagination: {
    el: ".examples-pagination",
    clickable: true,
  },
  loop: true,
});

new Swiper(".instructions-swiper", {
  navigation: {
    prevEl: ".instructions-prev",
    nextEl: ".instructions-next",
  },
  loop: true,
});
new Swiper(".spaceman-swiper", {
  navigation: {
    prevEl: ".spaceman-prev",
    nextEl: ".spaceman-next",
  },
  loop: true,
});
new Swiper(".reviews-swiper", {
  navigation: {
    prevEl: ".reviews-prev",
    nextEl: ".reviews-next",
  },
  loop: true,
  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
});

const accordionItems = document.querySelectorAll(".acardion-item");
const accordionButtons = document.querySelectorAll(".acardion-item-top");

accordionButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const activeId = e.target.dataset.id;
    const activeItem = document.getElementById(activeId);

    if (activeItem.classList.contains("active")) {
      activeItem.classList.remove("active");
    } else {
      accordionItems.forEach((item) => {
        item.classList.remove("active");
      });
      activeItem.classList.add("active");
    }
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.getElementById("container");
//   const line = document.getElementById("line");

//   let isDragging = false;

//   // Обработка событий для компьютеров
//   line.addEventListener("mousedown", function (event) {
//     isDragging = true;
//   });

//   document.addEventListener("mouseup", function () {
//     isDragging = false;
//   });

//   document.addEventListener("mousemove", function (event) {
//     if (isDragging) {
//       handleMove(event.clientX);
//     }
//   });

//   // Обработка событий для мобильных устройств
//   line.addEventListener("touchstart", function (event) {
//     isDragging = true;
//     event.preventDefault();
//   });

//   document.addEventListener("touchend", function () {
//     isDragging = false;
//   });

//   document.addEventListener("touchmove", function (event) {
//     if (isDragging) {
//       handleMove(event.touches[0].clientX);
//     }
//   });

//   // Функция для обработки движения
//   function handleMove(clientX) {
//     const containerRect = container.getBoundingClientRect();
//     const positionX = clientX - containerRect.left;

//     // Ограничиваем перемещение линии в пределах контейнера
//     const newPositionX = Math.max(0, Math.min(positionX, containerRect.width));

//     line.style.left = newPositionX + "px";

//     // Выводим информацию о расстоянии
//     const distanceToLeft = newPositionX;
//     const distanceToRight = containerRect.width - newPositionX;

//     console.clear();
//     console.log("Расстояние до левого края:", distanceToLeft, "пикселей");
//     console.log("Расстояние до правого края:", distanceToRight, "пикселей");
//   }
// });
