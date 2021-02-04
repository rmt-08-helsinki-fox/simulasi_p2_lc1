const base_url = "http://localhost:3000/";

function auth() {
  if (!localStorage.getItem("access_token")) {
    $("#login-page").show(); //jangan lupa id pake #
    $("#home-page").show();
    $("#main-page").hide();
    $("#my-gallery-page").hide();
  } else {
    $("#login-page").hide(); 
    $("#home-page").hide();
    $("#main-page").show();
    $("#my-gallery-page").show();
    getPhotos(); 
  }
}

function postLogin() {
  let password = $("#password").val();
  let email = $("#email").val();
  $.ajax({

    url: base_url + "login",
    method: "POST",
    data: {
      email,
      password,
    },
  })
    .done((res) => {
      console.log(res);
      localStorage.setItem("access_token", res.access_token); 
      auth();
    })
    .fail((xhr, text) => {
      console.log(xhr, text);
    });
}

function postRegister() {

}

function getPhotos() {
  $.ajax({
    url: base_url + "photos",
    method: "GET",
    headers: {
      token: localStorage.getItem("access_token"),
    },
  })
    .done((arrphotos) => {
        console.log(arrphotos)

      $("#my-gallery-page").empty()
      arrphotos.forEach((photo) => {
        $("#my-gallery-page").append(`
          <div
          class="card-custom uk-card uk-card-default uk-card-hover uk-card-body"
        >
          <i class="trash far fa-minus-square"></i>
          <img
            src="${photo.imageUrl}"
            alt="image"
          />
        </div>
          `);
      });
    })
    .fail((xhr, text) => {
      console.log(xhr, text);
    });
}

function postLogout() {
    localStorage.clear();
    auth();
}

$(document).ready(() => {
  console.log("masuk script lhoo");
  auth();
  $("#loginForm").on("submit", (event) => {
    console.log("masuk login submit lhoo");
    event.preventDefault();
    postLogin();
  })

  $("#navbar-logout").on("click", (event) => {
      event.preventDefault();
      postLogout();
  })
  
});
