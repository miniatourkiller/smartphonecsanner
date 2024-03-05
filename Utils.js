// var url = "https://10.1.59.107:8080/"
var url = "https://636f-41-89-99-5.ngrok-free.app/"

function saveData(data){
    window.localStorage.setItem("auth", JSON.stringify(data))
}

function getData(){
    return JSON.parse(window.localStorage.getItem("auth"))
}

function logOut(){
    window.localStorage.removeItem("auth")
    window.location = "../login/index.html"
}