const second_section = document.querySelector(".second_section"),
  title = document.querySelector("#HTML"),
  imgBox = document.querySelector(".img_box");

function scrollLeft() {
  var scroll = imgBox.scrollLeft;
  window.addEventListener("scroll", scrollLeft);
}

scrollLeft(); // 왜 전혀 효과가 없지,,,?

function second_showUp() {
  var totalScrollHeight = document.documentElement.scrollHeight;
  if (pageYOffset >= totalScrollHeight * (3 / 12)) {
    second_section.classList.add("showing");
  }
}
window.addEventListener("scroll", second_showUp);
