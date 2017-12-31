/*SECCION 1
function animacion1(){
    $('.first').waypoint(function(){
    $('.first').addClass('animated bounceInLeft opacidad');
    },{
     offset: '90%'
    });
}
function animacion2(){
    $('.second').waypoint(function(){
    $('.second').addClass('animated bounceInRight');
    },{
     offset: '50%'
    });
}
animacion1();
animacion2();
*/


$('#1').click(function(){
   $('#conocenos').css("background-image", "url(img/secciones/2.jpg)");
    $('.menu2 ul li').css("color", "white");
    $('#1').css("color", "rgba(244, 188, 36, 1)");
    $('.text').html("<p> En la CDMX se conjugan en cada espacio, siglos de historia con el espíritu vanguardista de esta nueva era.</p>");
});


$('#2').click(function(){
   $('#conocenos').css("background-image", "url(img/secciones/2-1.jpg)");  
    $('.menu2 ul li').css("color", "white");
    $('#2').css("color", "rgba(244, 188, 36, 1)");
    $('.text').html("<p> La CDMX es experta en ser sede de los eventos más importantes del mundo, lo que le ha dado el título de la Capital de los Grandes Eventos. </p>");
});
$('#3').click(function(){
   $('#conocenos').css("background-image", "url(img/secciones/2-2.jpg)");
    $('.menu2 ul li').css("color", "white");
    $('#3').css("color", "rgba(244, 188, 36, 1)");
    $('.text').html("<p> La CDMX tiene el aeropuerto más grande de Latinoamérica, opera con 27 líneas aéreas y conecta con más de 100 destinos internacionales y nacionales. </p>");
});
