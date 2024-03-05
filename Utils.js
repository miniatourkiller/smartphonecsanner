var url = "https://192.168.116.32:8080/"
// var url = "https://068b-154-159-237-233.ngrok-free.app/"

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