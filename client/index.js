let baseUrl = "http://localhost:3000"



$(document).ready
 

function login(){
    let email = $("#email").val()
    let password = $("#password").val()

     $.ajax({
           method: "POST",
           url : `${baseUrl}/login`,
           data :{ email, password}
     })

     .done(response=>{
         localStorage.setItem('token', response.token)
     })

     .fail(err=>{
         console.log(err)
     })
     .always(()=>{
        $("#email").val('')
     $("#password").val('')
     })
}

function register() {
    
}