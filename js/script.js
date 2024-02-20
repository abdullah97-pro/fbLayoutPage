data = {
    title: "Heading 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos pariatur iusto rerum deleniti quaerat corporis accusantium modi, beatae id possimus minus repudiandae vel quae placeat consequatur necessitatibus reiciendis quasi!",
    img: "https://th.bing.com/th?id=ORMS.08ea98915db459c2a80c765c57c11bb3&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0",
    alt: "This country lost one of its biggest markets after 'aiding' the US"
}

// create h1 tag
var title = document.createElement("h1");
// insert value into tag
title.textContent = data.title;

// create p tag
var content = document.createElement("p");
content.textContent = data.content;

// create img tag
var img = document.createElement("img");
img.src = data.img;
img.alt = data.alt;

// append element into the container
var container = document.getElementById("container");
// append h1
container.appendChild(title);
// append p
container.appendChild(content);
// append img
container.appendChild(img);
