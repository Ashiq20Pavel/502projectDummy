
const form = document.getElementById("registrationForm")

const nameInput = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const roleRadios = document.querySelectorAll('input[name="role"]')
const terms = document.getElementById("terms")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const confirmPasswordError = document.getElementById("confirmPasswordError")
const roleError = document.getElementById("roleError")
const termsError = document.getElementById("termsError")

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/

form.addEventListener("submit", function (event) {
    event.preventDefault()
    let valid = true;

    [nameError, emailError, passwordError, confirmPasswordError, roleError, termsError].forEach(e => e.textContent = "");
    [nameInput, email, password, confirmPassword].forEach(i => i.classList.remove("is-invalid"))

    let roleSelected = false
    roleRadios.forEach(r => { if (r.checked) roleSelected = true })
    if (!roleSelected) {
        roleError.textContent = "Please select a role."
        valid = false
    }

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required."
        nameInput.classList.add("is-invalid")
        valid = false
    }

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
    } else if (!passwordPattern.test(password.value)) {
        passwordError.textContent = "Password must be at least 6 chars, include uppercase, lowercase, and special character."
        password.classList.add("is-invalid")
        valid = false
    }

    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Please confirm password."
        confirmPassword.classList.add("is-invalid")
        valid = false
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match."
        confirmPassword.classList.add("is-invalid")
        valid = false
    }

    if (!terms.checked) {
        termsError.textContent = "You must accept the terms."
        valid = false
    }

    if (!valid) return

    alert("You have successfully registered!")
    form.reset()
    window.location.href = "../../dashboard/index.html"
})

form.addEventListener("reset", function (event) {
    [nameError, emailError, passwordError, confirmPasswordError, roleError, termsError].forEach(e => e.textContent = "");
    [nameInput, email, password, confirmPassword].forEach(i => i.classList.remove("is-invalid"))
})