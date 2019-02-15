function script_enviar_contacto() {


        $("#enviar-correo-contacto").attr("disabled", true);

        $(".c_error").remove();

        var sendMail = false;

        var s_nombre = $('#campo_nombre').val();
        var s_correo = $('#campo_correo').val();
        var s_mensaje = $('#campo_mensaje').val();
        



        if (s_nombre.length == 0) {
                $('#campo_nombre').after("<span class='c_error'>Please enter your name</span>");
                sendMail = false;
        } else {
                sendMail = true;
        }

        if (s_correo.length == 0) {
                $('#campo_correo').after("<span class='c_error'>Please enter your email address</span>");
                sendMail = false;
        } else {
                sendMail = true;
        }

        if (s_mensaje.length == 0) {
                $('#campo_mensaje').after("<span class='c_error'>Please enter your message</span>");
                sendMail = false;
        } else {
                sendMail = true;
        }



        if (sendMail == true) {

                var datos = {

                        "nombre": $('#campo_nombre').val(),

                        "compania": $('#campo_compania').val(),

                        "correo": $('#campo_correo').val(),

                        "telefono": $('#campo_telefono').val(),

                        "mensaje": $('#campo_mensaje').val()

                };

                $.ajax({

                        data: datos,
                        // hacemos referencia al archivo contacto.php
                        url: 'contacto.php',

                        type: 'post',

                        beforeSend: function () {
                                $("#enviar-correo-contacto").val("Sending");

                        },

                        success: function (response) {

                                $('form')[0].reset();
                                $("#enviar-correo-contacto").val("Send");
                                $(".c_information p").html("Message sent");
                                $(".c_information").fadeIn('slow');
                                $("#enviar-correo-contacto").removeAttr("disabled");



                        }

                });

        } else {
                $("#enviar-correo-contacto").removeAttr("disabled");
        }

}