$('#login').on('submit',fazerLogin);

function fazerLogin(evento){
    evento.preventDefault();


    $.ajax({
        url: "/login",
        method:"POST",
        data: {
            email: $("#email").val(),
            senha: $("#senha").val()
        },
        dataType: "text"
    }).done(function(){
        window.location = "/home";
    }).fail(function(xhr){
        alert("Usuário ou senha inválidos - "+xhr.status);
    })
}