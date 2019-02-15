$(document).ready(function () {



    //--------------------------------------FUNCIONES---------------------------------------





    //-----------------------------------CLICK PARA SUBIR A CADA SECCION ARRIBA------------------------------------


    $(".link-top-inicio, .link-top-nosotros, .link-top-servicios, .link-top-software, .link-top-contacto").click(function (evento) {
        evento.preventDefault();
        var offset = $($(this).attr('href')).offset().top;
        $('html,body').animate({
            scrollTop: offset
        }, 500);
    });


    $(".link-inicio, .link-nosotros, .link-servicios, .link-software, .link-contacto").click(function (evento) {
        evento.preventDefault();
        $('.navbar-toggle:visible').click();
    });



    $('.menu-contacto .btn-rojo').click(function (evento) {
        evento.preventDefault();
        $('.btn-rojo').removeClass("active");
        $(this).addClass("active");
    });


    //------------------------------------------------------CLICK PARA SUBIR A CADA SECCION ARRIBA--------------------------------------------------















});