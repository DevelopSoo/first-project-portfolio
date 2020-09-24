const fourth_section = document.querySelector(".fourth_section"),
  fourth_title = document.querySelector("#JAVASCRIPT"),
  video = document.querySelector(".video"),
  description = document.querySelector(".fourth_description"),
  link = document.querySelector(".js_link");

function fourth_showUp() {
  var totalScrollHeight = document.documentElement.scrollHeight;
  if (pageYOffset >= totalScrollHeight * (7 / 12)) {
    fourth_title.classList.add("showing"); // 아래서 위
    video.classList.add("left_to_right"); // 왼 - 오
    description.classList.add("right_to_left"); // 오 - 왼
    link.classList.add("showing"); // 아래서 위
  }
}

window.addEventListener("scroll", fourth_showUp);
