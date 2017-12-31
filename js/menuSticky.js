//LOADER
setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#000000');
}, 3000);
	
//MENU
function menusticky(){
    var altura= $('header').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
            $('header #fila-logo').addClass('ocultar-fila-logo');
			$('header').addClass('menu-fixed');
            $('header nav.Menu ul li:nth-child(1)').css("display", "block");
            
		} else {
            $('header #fila-logo').removeClass('ocultar-fila-logo');
			$('header').removeClass('menu-fixed');
            $('header nav.Menu ul li:nth-child(1)').css("display", "none");
		}
	});
 
}

function menuRespons(){
    var iconoMenu= $('.iconoMenu');
    
    iconoMenu.click(function(){
        $('header .navMenu #menuArca ul').toggle(1000);
    });
    
}

menuRespons();
menusticky();


