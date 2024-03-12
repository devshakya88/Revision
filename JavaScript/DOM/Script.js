// let heading = document.getElementById("heading1");
// console.dir(heading);


// var heading2 = document.getElementsByClassName("head");

// heading2.textContent = 'Hello, world!'


var div = document.querySelector("div");
div.style.fontSize = "30px";
div.style.backgroundColor = "green";

let newBtn = document.createElement("button");
newBtn.innerText = "Click me"
div.append(newBtn);