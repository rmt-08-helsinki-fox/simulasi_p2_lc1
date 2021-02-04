function login() {
  const email = $("email").val();
  const password = $("password").val();
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/users/login",
    data: {
      email,
      password,
    },
  })
    .done((user) => {
      console.log(user);
      localStorage.setItem("token", user.accessToken);
    })
    .fail((xhr, text) => {
      console.log(xhr, text);
    })
    .always((_) => {
      $("email").val("");
      $("password").val("");
    });
}

$(document).ready(() => {
  $("#form-login").on("submit", (e) => {
    e.preventDefault();
    login();
  });
});
