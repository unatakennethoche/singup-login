document.addEventListener("DOMContentLoaded", () => {
  
  const signUpForm = document.getElementById("sign-up");
  const nameSignUp = document.getElementById("name");
  const emailSignUp = document.getElementById("email");
  console.log(nameSignUp)
  const passwordSignUp = document.getElementById("password");
  console.log(passwordSignUp)
  const signupBtn=document.getElementById("signup-btn")
  
  const users = [];

  const validateInput = (e) => {
    e.preventDefault();

    let isValid = true;
    if (nameSignUp.value === "") {
      isValid = false;
      document.querySelectorAll(".error-span")[0].textContent = "This field is required";
    }

    if (emailSignUp.value === "") {
      isValid = false;
      document.querySelectorAll(".error-span")[1].textContent = "This field is required";
    } else if (!validateEmail(emailSignUp.value)) {
      isValid = false;
      document.querySelectorAll(".error-span")[1].textContent = "Enter a valid email";
    }

    if (passwordSignUp.value === "") {
      isValid = false;
      document.querySelectorAll(".error-span")[2].textContent = "This field is required";
    } else if (passwordSignUp.value.length < 7 || passwordSignUp.value.length > 15) {
      isValid = false;
      document.querySelectorAll(".error-span")[2].textContent = "Your password must not be greater than 7 and less than 15";
    }
    const getUsers = JSON.parse(localStorage.getItem("users"));

    const users = getUsers ? getUsers : [];
    if (isValid) {
      users.push({
        userName: nameSignUp.value,
        email: emailSignUp.value,
        password: passwordSignUp.value,
      });
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "./index-login.html";
    }
   
  };

  signupBtn.addEventListener("click", validateInput);
 
  
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
});


// login,js
const loginForm=document.getElementById("login");
const loginEmail=document.getElementById("login-email");
const loginPass=document.getElementById("login-pass");
const loginBtn=document.getElementById("login-btn")

const validateLogin=(e)=>{
e.preventDefault()
const users = JSON.parse(localStorage.getItem("users")) || [];
    

const user=users.find((user)=>user.email===loginEmail.value && user.password===loginPass.value);
if(user){
  document.querySelectorAll(".login-error-span")[0].style.display="none"
alert("Your login is successful");
loginForm.reset()

}
else{
  
document.querySelectorAll(".login-error-span")[0].textContent="Your Email or password is Invalid"
loginForm.reset()
}

}

loginForm.addEventListener("submit",validateLogin )

