"use strict";
function addLineThrough(e) {
  let li = e.path[1];
  li.classList.toggle("line-through");
}

let inputs = document.querySelectorAll("input[type='checkbox']");
console.log(inputs);

for (let input = 0; input < inputs.length; input++) {
  inputs[input].addEventListener("click", addLineThrough);
}
