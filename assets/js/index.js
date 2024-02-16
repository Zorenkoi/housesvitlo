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

////////////////////////////////////////////////////////////////////////////

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
