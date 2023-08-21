// document.addEventListener("DomToLoad",function() {
//     const RegisterForm = document.getElementById("register-form");
//     const LoginForm = document.getElementById("login-form");

//     RegisterForm.addEventListener("submit", function(e){
// const name = document.getElementById("name").value;
// const surname = document.getElementById("surname").value;
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;

// localStorage.setItem(name,surname,email,password);
// alert("registerd sucessfully")
//     })
//     LoginForm.addEventListener("submit", function(e){
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         const storedPasssword = localStorage.getItem(password)
//         if(password===storedPasssword){
// alert("login sucessfully")

//         }else{
//             alert("failed to login")
//         }

//         const storedemail = localStorage.getItem(email)
//         if(email===storedemail){
// alert("login sucessfully")

//         }else{
//             alert("failed to login")
//         }
// })
// })