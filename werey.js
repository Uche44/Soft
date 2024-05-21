alert("hello soft buddies");
const hairLong = document.getElementById("hairlong");

function newColor() {
  // hairLong.classList.add("hover");
  hairLong.style.backgroundColor = "lightgray";
  hairLong.innerText = "Wealth Creation Experts at your disposal";
  hairLong.style.fontSize = "40px";
  hairLong.style.display = "flex";
  hairLong.style.alignItems = "center";
  hairLong.style.justifyContent = "center";
  hairLong.style.color = "rgba(22, 22, 227, 0.8)";
}
function oldColor() {
  hairLong.style.backgroundColor = "rgba(22, 22, 227, 0.8)";
  hairLong.innerText = "";
}
const body = document.body;
const div = document.createElement("div");
body.append(div);
div.innerHTML = "Hi There";
div.style.height = "130px";
div.style.width = "130px";
div.style.backgroundColor = "yellow";
