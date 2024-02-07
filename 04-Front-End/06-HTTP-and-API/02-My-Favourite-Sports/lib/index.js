// TODO: write your code here!
// document.querySelectorAll(".clickable").forEach((icon) => {
//   icon.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("active");
//   });
// });

const icon = document.querySelectorAll(".clickable");

const AddToggleClass = (tog) => {
  tog.currentTarget.classList.toggle("active");
};

const BindButton = (btn) => {
  btn.addEventListener("click", AddToggleClass);
};

icon.forEach(BindButton);
