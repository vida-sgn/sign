const container = document.querySelector(".container")
const signUpBtn = document.querySelector("#signInBtn")
const signInBtn = document.querySelector("#signUpBtn")

signUpBtn.addEventListener("click",()=>container.classList.add("signMode"))
signInBtn.addEventListener("click",()=>container.classList.remove("signMode"))