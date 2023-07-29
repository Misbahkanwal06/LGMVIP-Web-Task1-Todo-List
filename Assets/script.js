let inputs = document.getElementById("input");
let tasks = document.getElementById("tasks");


function todoFunc() {
  if (inputs.value !== " ") {
    let ul = document.createElement("ul");
    ul.innerHTML = inputs.value;
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";

    tasks.appendChild(ul);
    ul.appendChild(btn);
    inputs.value = " ";

    ul.querySelector("button").addEventListener("click", remove);
    function remove() {
      ul.remove();
    }

  }
  else {
    alert("please Enter text");
  }

}