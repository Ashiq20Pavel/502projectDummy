

const form = document.getElementById("loginForm")
const email = document.getElementById("email")
const password = document.getElementById("password")

const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    let valid = true

    emailError.textContent = ""
    passwordError.textContent = ""
    email.classList.remove("is-invalid")
    password.classList.remove("is-invalid")

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required."
        email.classList.add("is-invalid")
        valid = false
    } else if (!email.checkValidity()) {
        emailError.textContent = "Please enter a valid email."
        email.classList.add("is-invalid")
        valid = false
    }
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required."
        password.classList.add("is-invalid")
        valid = false
    }

    if (!valid) return

    alert("Login successful!")
    window.location.href = "../../dashboard/index.html"
})