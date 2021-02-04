let baseUrl = 'http://localhost:3003'

function auth(){
  if(!localStorage.access_token){
    $('#login-page').show()
    $('#home-page').hide()
    $('#main-page').hide()
    $('#my-gallery-page').hide()
  } else {
    $('#login-page').hide()
    $('#home-page').show()
    $('#main-page').show()
    $('#my-gallery-page').show()
  }
}

$(document).ready(function(){
  auth()
})

$('.login-btn').click(function(event){
  event.preventDefault()
  let email = $('#email').val()
  let password = $('#password').val()

  $.ajax({
    method: 'POST',
    url: `${baseUrl}/login`,
    data: {
      email,
      password
    }
  })
  .done(response=>{
    localStorage.setItem('access_token', response.access_token)
    auth()
  })
  .fail((jqHXR, textStatus)=>{
    console.log(jqHXR, textStatus)
  })
  .always(()=>{
    $('#email').val('')
    $('#password').val('')
  })
})

$('#logout').click(function(event){
  event.preventDefault()
  localStorage.clear()
  auth()
})