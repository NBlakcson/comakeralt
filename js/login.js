/**
 * Globale var's
 */
var objPeople = [{
    username: "TestUser",
    password: "Test"
}]

function addButtonActions(){
    var loginButton = document.getElementById("buttonLogin");
    
    loginButton.addEventListener("click", function () {
        getLogin();
    });
}



function getLogin() {
    var user = document.getElementById("usernameInput").value;
    var pass = document.getElementById("passwordInput").value;

    for (i = 0; i < objPeople.length; i++) {
        if (user == objPeople[i].username && pass == objPeople[i].password) {
            console.log(user + " is logged in!!!");
            location.href = "home.html";
            return
        }
    }
    console.log("incorrect username or password");
}

addButtonActions();