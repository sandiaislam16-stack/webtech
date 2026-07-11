const correctUser = "admin";
const correctPass = "4567";

let attemptsleft = 3;

function checkLogin() {

    let userInput = document.getElementById("username").value;
    let passInput = document.getElementById("password").value;
    let messageElement = document.getElementById("message");

    if (userInput == correctUser && passInput == correctPass) {

        messageElement.style.color = "blue";
        messageElement.innerHTML = "Login Successful! Welcome.";

    }
    else {

        attemptsleft--;

        messageElement.style.color = "red";

        if (attemptsleft > 0) {

            messageElement.innerHTML =
                `Wrong username or password. You have ${attemptsleft} attempts left.`;

        }
        else {

            messageElement.innerHTML =
                "Account locked. 0 attempts left.";

        }

    }

}