document.getElementById("heading").innerText = "<p style='color:blue;'>Welcome to the DOM Manipulation Example</p>";

var heading = document.createElement("h1");

heading.innerText = "This is a dynamically created heading";

var div = document.getElementById("root");
div.appendChild(heading);

//JS will be loaded after the DOM is ready