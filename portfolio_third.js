const third_section = document.querySelector(".third_section"),
  img = third_section.querySelector(".third_section_img"),
  des = third_section.querySelector(".description");

function third_showUp() {
  var totalScrollHeight = document.documentElement.scrollHeight;
  if (pageYOffset >= totalScrollHeight * (5 / 12)) {
    img.classList.add("left_to_right");
    des.classList.add("right_to_left");
  }
}
window.addEventListener("scroll", third_showUp);
