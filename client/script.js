const base_url = 'http//localhost:3000'

$(document).ready(()=>{
  function authenticate() {
    if (!localStorage.getItem('access_token')) {
      $('#login-page').show()
      $('#main-page').hide()
      $('#home-page').hide()
      $('#my-gallery-page').hide()    
    } else {
      $('#login-page').hide()
      $('#main-page').show()
      $('#home-page').show()
      $('#my-gallery-page').show()   
    }
  }

  authenticate()
  $('#loginbtn').on('submit', (event) => {
    event.preventDefault()
    login()
    authenticate()
  })

  //logout
  $("#logoutBTN").on('click', event => {
    event.preventDefault()
    logout()
  })

})

//login
function login() {
  const email = $('#email').val()
  const password = $('#password').val()
  $.ajax({
    url: base_url + 'users/login',
    data: {
      email,
      password
    }
  })
  .done((response)=> {
    console.log(response);
    localStorage.setItem('access_token', response.access_token)
    getAllPhotos()
  })
  .fail((xhr, text)=>{
    console.log(xhr, text);
  })
}

//getAllPhotos
function getAllPhotos() {
  $.ajax({
    url: base_url + '/photos',
    headers: { 
      access_token: localStorage.getItem('access_token')
    }
  })
  .done((response)=> {
    response.forEach(value => {
      $('#main-page').append(`
        <section id="my-gallery-page">
          <div class="card-custom uk-card uk-card-default uk-card-hover uk-card-body">
              <i class="trash far fa-minus-square"></i>
              <img src="${value.imageUrl}" alt="image">
          </div>
        </section>
      `)
    });
    console.log(response);

  })
  .fail((xhr, text)=> {
    console.log(xhr, rext);
  })

}

//logout
function logout() {
  localStorage.clear()
  authenticate()
}