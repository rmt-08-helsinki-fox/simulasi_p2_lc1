let baseUrl = "http://localhost:3000/"

function authenticate() {
    if(!localStorage.getItem('access_token')) {
        $("#login-page").show()
        $("#main-page").hide()
        $("#home-page").hide()
        $("#my-gallery-page").hide()
    } else {
        $("#login-page").hide()
        $("#main-page").show()
        $("#home-page").show()
        $("#my-gallery-page").show()
    }
}

function getPhotos() {
    $.ajax({
        url: baseUrl + 'photos',
        method: 'GET',
        headers: {access_token: localStorage.getItem('access_token')
    })
    .done(photos => {
        $("#my-gallery-page").append()
    })
}


$(document).ready(() => {

})