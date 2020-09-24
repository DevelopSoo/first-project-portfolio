const body = document.querySelector("body");
const section = document.querySelector(".first_section_js");
const h1 = section.querySelector("h1");
const div = section.querySelector(".first_div");
const html = section.querySelector(".html_js"),
  icon = section.querySelector("i"),
  js = section.querySelector(".js_js"),
  py = section.querySelector(".py_js"),
  click = section.querySelector(".click");

function first_showUp() {
  var totalScrollHeight = document.documentElement.scrollHeight;

  if (pageYOffset >= totalScrollHeight * (1 / 12)) {
    h1.classList.add("showing");
    div.classList.add("showing");
    icon.classList.add("showing");
    html.classList.add("showing");
    js.classList.add("showing");
    py.classList.add("showing");
    click.classList.add("showing");
  }
}

window.addEventListener("scroll", first_showUp);
//window.addEventListener("scroll", first_showUp);

//init();
