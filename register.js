const login = document.getElementsByClassName("login")[0];

const register= document.getElementsByClassName("form")[0];

const pass = /^(?=.*[$#@!%*&]).{8,}$/
login.addEventListener("click",backToLogin)

function backToLogin(){
    location.href="login.html"
}

register.addEventListener("submit",addstudent)

function addstudent(e){
    e.preventDefault();

    let emailaddress=e.target.email.value;
    let password= e.target.pass.value;
    let confirmpassword=e.target.Cpass.value;

    if(!pass.test(password)){
        alert("password must content a special character")
        console.log(password)
    }

    if(password!=confirmpassword){
        alert("password and condirm password did not match")
    }
    localStorage.setItem("email",emailaddress)
    localStorage.setItem("pass",password)

    alert("registration succesfull")

}
