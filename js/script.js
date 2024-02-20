// create h1 tag
var title = document.createElement("h1");
// insert value into tag
title.textContent = "Heading 1";


// append element into the container
var container = document.getElementById("container");
container.appendChild(title);