const baseURL = 'http://localhost:3000'

$(document).ready(function(){

  checkAuth()

  $("#login-page").submit(function(event){
    login(event)
  })

  $("#logout").click(function(){
    logout()
  })
});

function checkAuth(){
  if(localStorage.access_token){
    $("#login-page").hide()
    $("#main-page").show()
    $("#home-page").show()
    $("#my-gallery-page").show()
  } else {
    $("#login-page").show()
    $("#main-page").hide()
    $("#home-page").hide()
    $("#my-gallery-page").hide()
  }
}

function login(event){
  event.preventDefault()
  let email = $("#email").val()
  let password = $("#password").val()
  $.ajax({
    method: 'POST',
    url: `${baseURL}/login`,
    data: {
      email,
      password
    }
  })
  .done(response => {
    let access_token = response
    localStorage.setItem('access_token', access_token)
    checkAuth()
  })
  .fail(err => {
    console.log(err)
  })
  .always(() => {
    $("#email").val('')
    $("#password").val('')
  })
}

function logout(){
  localStorage.removeItem('access_token')
  checkAuth()
}

function showPhotos(){
  
}