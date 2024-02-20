// create h1 tag
var title = document.createElement("h1");
// insert value into tag
title.textContent = "Heading 1";

// create p tag
var content = document.createElement("p");
content.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos pariatur iusto rerum deleniti quaerat corporis accusantium modi, beatae id possimus minus repudiandae vel quae placeat consequatur necessitatibus reiciendis quasi!";


// append element into the container
var container = document.getElementById("container");
// append h1
container.appendChild(title);
// append p
container.appendChild(content);
