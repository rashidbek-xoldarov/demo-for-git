var elOpenBtn = document.querySelector(".modal-open-btn");
var elModal = document.querySelector(".modal");
var elCloseModal = document.querySelector(".modal-close-btn");

elOpenBtn.addEventListener("click", function () {
  elModal.classList.add("open");
});

elCloseModal.addEventListener("click", function () {
  elModal.classList.remove("open");
});

elModal.addEventListener("click", function () {
  elModal.classList.remove("open");
});
