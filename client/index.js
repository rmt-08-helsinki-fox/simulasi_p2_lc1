const base_URL = 'http://localhost:3000' 

$(document).ready(function(){
    $('#button-for-login').click((event) => { 
        event.preventDefault()
        const email = $('#email').val()
        const password = $('#password').val()
        $.ajax({ 
            url : `${base_URL}/user/login`,
            method :'POST',
            data : {email,password}
        }) 
        .done((response) => { 
            localStorage.setItem('access_token',response.access_token)
        }) 
        .fail((err) => { 
            console.log(err)
        }) 
        .always (() => { 
            $('#email').val('')
            $('#password').val('')
        })
    })
});