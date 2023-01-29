const submit = document.querySelector(".submit");
const firstName = document.querySelector("#fName");
const lastName = document.querySelector("#lName");
const email = document.querySelector("#email");
const password = document.querySelector("#password"); 
const form = document.getElementById("form")
const message = form.querySelector("p");

//////////////////FORM PREVENTDEFAULT//////////////////////////////////////


form.addEventListener("submit",(e) => {
    e.preventDefault();
    validateInputs();
});
//////////////////errormesg//////////////////////////////////////

const errormesg = (element, message) => {
    const formParent = element.parentElement;
    const img = formParent.querySelector("img");
    const errormsg = formParent.querySelector("p");

    errormsg.innerText = message;
    img.style.display = 'block'
}
//////////////////successmesg//////////////////////////////////////

const successmesg = (element, message) => {
    const formParent = element.parentElement;
    const img = formParent.querySelector("img");
    const errormsg = formParent.querySelector("p");

    errormsg.innerText = "";
    img.style.display = 'none'
}
//////////////////VALIDEMAIL//////////////////////////////////////
const isValidEmail = email => {
    const regEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    return regEmail.test(String(email).toLowerCase());
    //return reg.test()
    //.test(any  string method)
}
//////////////////validateInputs//////////////////////////////////////

function validateInputs () {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
//firstName
    if(firstNameValue === ""){
        errormesg(firstName, "First Name cannot be empty")
    }else{
        successmesg(firstName)
        firstName.classList.add("focus")
    }
//lastName
    if(lastNameValue === ""){
        errormesg(lastName, "Last Name cannot be empty")
    }else{
        successmesg(lastName)
        lastName.classList.add("focus")
    }
//password
    if(passwordValue === ""){
        errormesg(password, "Passwoed cannot be empty")
    }else if(passwordValue.length < 8){
        errormesg(password,  "password must be at least 8 character")
    }else{   
        successmesg(password)
        password.classList.add("focus")
    } 
//email
    if(emailValue === ""){
        errormesg(email, "Looks like this is not email")
    }else if(!isValidEmail(emailValue)){
        errormesg(email, "provid a valid email address")
    }else{
        successmesg(email)
        email.classList.add("focus")
    }

}