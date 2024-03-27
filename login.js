const register = document.getElementById("register");
const login=document.getElementsByClassName("form")[0];

register.addEventListener("click",registration)

function registration(){
    location.href="register.html";
}

login.addEventListener("submit",validate)
function validate(e){
    e.preventDefault()

    let username= e.target.user.value
    console.log(e.target.user)
    let password=e.target.pass.value

    let email=localStorage.getItem("email")
    let pass = localStorage.getItem("pass")

    if (username==email && password==pass )
    {
        location.href="home.html"
    }
    else{
        alert("wrong username or password")
    }


}