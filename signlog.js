let submitButton = document.querySelector(".submit")
let error = document.querySelector(".error")

let signUpText = document.querySelector(".signUpText")
let instead = document.querySelector(".instead")


let signUp = document.querySelector(".signUp")
let signIn = document.querySelector(".signIn")


submitButton.addEventListener("click", () => {
    let password = document.querySelector(".pass")
    let username = document.querySelector(".user")

    if (password.value.length>4 && username.value.length>1){
            localStorage.setItem("password", password.value);
            localStorage.setItem("username", username.value);
            error.innerHTML = "Sign Up Completed Continue to Sign In page"
    }

    else {
        error.innerHTML = "Sign Up Failed"
    }
})

let signUpVar = false;

instead.addEventListener("click", () => {
    if (signUpVar == false) {
        signUpText.innerHTML = "Sign In"
        signUp.style.display = 'none'
        signIn.style.display = 'block'
        instead.innerHTML = "Sign Up Instead"
        signUpVar = true;
        error.innerHTML = "";
        document.title = "Sign In"
    }

    else if (signUpVar == true) {
        signUpText.innerHTML = "Sign Up"
        signUp.style.display = 'block'
        signIn.style.display = 'none'
        instead.innerHTML = "Sign In Instead"
        signUpVar = false;
        document.title = "Sign Up"
        error.innerHTML = "";
    }
})



let logSubmit = document.querySelector(".submitLogIn")

logSubmit.addEventListener("click", () => {

    let logUser= document.querySelector(".userLogIn")
    let logPassword = document.querySelector(".passLogIn")

    let usernameRecieved = localStorage.getItem("username");
    let passwordRecieved = localStorage.getItem("password");

    if (logPassword.value == passwordRecieved && logUser.value == usernameRecieved){
        error.innerHTML = "Log In Successful"
    }

    else {
        error.innerHTML = "Log In Failed"
    }
})
