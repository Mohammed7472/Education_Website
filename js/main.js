// Fixed Header
document.onscroll = function () {
  document
    .querySelector("header")
    .classList.toggle("scroll", window.scrollY > 80);
};
// Show/Hide FAQS Answer
document.querySelectorAll(".faqs .question").forEach((ques) => {
  ques.addEventListener("click", (e) => {
    ques.classList.toggle("show");
    ques.querySelector(".icon i").className = ques.classList.contains("show")
      ? "fa-solid fa-minus"
      : "fa-solid fa-plus";
  });
});
// Show/Hide Toggle-Menu
let linksList = document.querySelector("header .links");
let toggleBtn = document.querySelector("header .toggle-menu");
let closeBtn = document.querySelector("header .close-btn");
toggleBtn.onclick = function () {
  linksList.classList.toggle("show");
  closeBtn.classList.add("show");
  this.classList.toggle("hide");
};

closeBtn.onclick = function () {
  linksList.classList.remove("show");
  toggleBtn.classList.remove("hide");
  this.classList.remove("show");
};
