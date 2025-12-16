var heading = document.getElementById("heading");

heading.addEventListener("mouseover", function cb() {
    heading.innerHTML = "<span style='color:red;'>You hovered over the heading!</span>";
});

function validateName() {
    var nameInput = document.getElementById("name").value;
    var messageDiv = document.getElementById("msg");
    var button = document.getElementById("button");

    if(nameInput.length < 5) {
        messageDiv.innerText = "<span style='color:red;'>Name must be at least 5 characters long.</span>";
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}