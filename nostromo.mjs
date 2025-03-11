import content from "./content.js";
const title = document.getElementById("contentTitle");
const text = document.getElementById("contentText");

window.changeText = changeText;

function changeText(clickedElement) {
  const id = clickedElement.id;
  var button = document.getElementsByClassName("button");
  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove("selected");
  }
  title.innerHTML = content[id].title;
  text.innerHTML = content[id].texto;
  button[id].classList.add("selected");
}

changeText(b1);
