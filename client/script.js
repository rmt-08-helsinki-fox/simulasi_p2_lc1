$(document).ready(() =>{

    auth()

})

function auth() {
    if(!localStorage.getItem("access_token")) {
        $("#login-page").show()
        $("#main-page").hide()
        $("#home-page").hide()
    } else {

    }
    
}

/*
login 
auth

*/