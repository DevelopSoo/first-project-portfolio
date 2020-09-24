const fifthSection = document.querySelector(".fifth_section"),
  pyTitle = fifthSection.querySelector("#PYTHON"),
  firstVideo = document.querySelector(".scrapped"),
  secondVideo = document.querySelector(".flask_des");

function fifth_showUp() {
  var totalScrollHeight = document.documentElement.scrollHeight;
  if (pageYOffset >= totalScrollHeight * (9 / 12)) {
    pyTitle.classList.add("showing");
    firstVideo.classList.add("left_to_right");
    secondVideo.classList.add("right_to_left");
  }
}
window.addEventListener("scroll", fifth_showUp);
