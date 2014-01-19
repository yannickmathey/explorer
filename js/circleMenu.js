currentWidth = "C4";
currentThickness = "G4";
var indexThickness = 0;
var indexWidth = 0;


(function(){  
	var timeoutResize;
	$(window).on('resize',function(){
		$( "#circleMenu" ).fadeOut('fast');
		
		clearTimeout(timeoutResize);
		timeoutResize = setTimeout(function(){
			setTimeout(function() {
				tracer();
			}, 200);
			$('#circleMenu').fadeIn();
		},100);
	});
})();


$(window).load(function () {

	tracer();

});


function tracer(){
		// Pour afficher le type graisse/chasse
		$("ul.recepteurGlyphe li").each(function() {

		// à supprimer à la fin
		var name = $(this).attr("name");
		$(this).append("<span class='afficheGlyphe'>" + name + "</span>");
		// END à supprimer à la fin

		// régler la largeur du li par rapport à sa hauteur (et donc du font-size?)
		var largeur = $(this).height();
		$(this).css("width", largeur);

	});

	// à supprimer à la fin
	$("#debug span#codeChasse").append(codeChasse);
	$("#debug span#codeGraisse").append(codeGraisse);
	$("#debug span#codeFocus").append(codeFocus);
	//

	$(function() {
		var tailleConteneur = $("#circleMenu").width();
		var marginTopConteneur = ($(window).height()-tailleConteneur)/2;
		$("#circleMenu").css({
			'margin-top': '' + marginTopConteneur + 'px',
			height: tailleConteneur,
		});
		//console.log(marginTopConteneur);
	});


	$("#circleMenu ul.circleMenu").each(function() {
		var largeurConteneur = $("#circleMenu").width();
		var largeurRadius = $(this).width();

		// créer des div ronds
		$(this).css("border-radius", largeurRadius);

		// positionner ul au centre
		var posTop = (largeurConteneur / 2) - ($(this).width() / 2);
		$(this).css("top", posTop);
		$(this).css("left", posTop);

		// positionner correctement le curseur repere
		var hauteurRepere = $("#repere").height();
		$("#repere p").css({
			height: hauteurRepere,
			'line-height': hauteurRepere + 'px'
		});

		//positionner le bloc resultat
		var hauteurResultat = $("#resultat").innerHeight();
		var postTop = (largeurConteneur - hauteurResultat) / 2;
		$("#resultat").css({
			top: postTop,
		});
		$("#resultat span").css({
			'line-height': hauteurResultat + 'px',
		});
		// console.log('largeurConteneur :' + largeurConteneur);
		// console.log('hauteurResultat :' + hauteurResultat);
		// console.log('postTop :' + postTop);

		// Poisitionner légendes
		$(".legende_0").css({
			top: "94%",
			left: "127%",
			color: "#ED1c24"
		})
		$(".legende_0").transition({ rotate: 30 }, 'slow');
		$(".legende_1").css({
			top: "24%",
			left: "105%",
			color: "#3FA9F5"
		})
		$(".legende_1").transition({ rotate: -24 }, 'slow');

	});





$("ul.circleMenu").each(function(id) {

		// HACK // encombrementLi pour éviter que le li dépassent du conteneur
		var encombrementLi = $("ul#circle_" + id +" li").width();

		var diametre = $("ul#circle_" + id).width() - encombrementLi;
		var rayon = diametre / 2;
		var sens = -1; // horaire = 1
		var nombreItems = $("ul#circle_" + id +" li").length;
		var angleRadians = 2 * Math.PI / nombreItems;
		var angleDegres = 180 * angleRadians / Math.PI;

		// correction hauteur cercle
		var correction = diametre + encombrementLi * 2; // -5 correction : à revoir
		$("ul#circle_" + id).css('margin-top', -encombrementLi/2); 
		$("ul#circle_" + id).css('margin-left', -encombrementLi/2); 
		$("ul#circle_" + id).css('height', correction); 
		$("ul#circle_" + id).css('min-width', correction);  // à revoir
		var angleItem = Math.PI / 2 ; // Pour placer le premier item à gauche


		// Positionner les éléments autour d'un axe
		$("ul#circle_" + id +" li").each(function(index) {

			// Correction positionnment li centrés au sein du ul en fonction de la largeur de ceux-ci
			var correctionPositionnement = $(this).width() / 2;

			var x = rayon * Math.cos(angleItem);
			$(this).css('top', x + rayon + correctionPositionnement);

			var y = rayon * Math.sin(angleItem) * sens;
			$(this).css('left', y + rayon + correctionPositionnement);

			angleItem = angleItem + angleRadians;

		});

		rotation(id, angleDegres, nombreItems );

	});



}


// rotation au clic
function rotation(id, angleDegres, nombreItems) {
	
	$("ul#circle_" + id + " li").click(function() {
		var total_li = $("ul#circle_" + id + " li").size() / 2 + 1 ;
		// console.log("nb li du cercle " + id + " :" + total_li);		
		var reverse = false;
		var index = $(this).index();
		if (id < 2) { index = index -1; }
		$("ul#circle_" + id).transition({ rotate: angleDegres * index - ( 360 / nombreItems * 2 ) * index }, 'slow');
		
		type = $(this).attr("name");
		var temp = type.substr(0,1);
		if(temp == 'C') {
			currentWidth = type;
			console.log(currentWidth);
		}
		else if(temp == 'G') {
			currentThickness = type;
			console.log(currentThickness);
		}
		

		// Pour redresser les elements li
		$("ul#circle_" + id + " li").each(function() {
			$(this).transition({ rotate: -angleDegres * index + ( 360 / nombreItems * 2 ) * index }, 'slow');
		});
		// Pour redresser la légende
		$("#legende_" + id).each(function() {
			var target = $(this);
			$(this).transition({ rotate: 180 }, 'slow');
		});

	});
	//console.log("----");
};



$(document).keydown(function(e){
	
	switch(e.which) {
        case 38:
        var angleDegres = 45;
        var nombreItems = 8;
        var id = 1;
        indexThickness++;
        

        $("ul#circle_" + id).transition({ rotate: angleDegres * indexThickness - ( 360 / nombreItems * 2 ) * indexThickness }, 'slow');
        $("ul#circle_" + id + " li").each(function() {
        	$(this).transition({ rotate: -angleDegres * indexThickness + ( 360 / nombreItems * 2 ) * indexThickness }, 0);
        });

        var temp = parseInt(currentThickness.substr(1,1)) + 1;
        if ( temp == 9 ) { temp = 1 }
		currentThickness = 'G' + temp;

		sentinelle();
		break;

    	case 40:
    	var angleDegres = 45;
    	var nombreItems = 8;
    	var id = 1;
        indexThickness--;
        
    	
    	$("ul#circle_" + id).transition({ rotate: angleDegres * indexThickness - ( 360 / nombreItems * 2 ) * indexThickness }, 'slow');
        $("ul#circle_" + id + " li").each(function() {
        	$(this).transition({ rotate: -angleDegres * indexThickness + ( 360 / nombreItems * 2 ) * indexThickness }, 0);
        });

    	var temp = parseInt(currentThickness.substr(1,1)) - 1;
        if ( temp == 0 ) { temp = 8 }
		currentThickness = 'G' + temp;

		sentinelle();
		break;

        case 39:
        var angleDegres = 60;
        var nombreItems = 6;
        var id = 0;
        indexWidth++;
        

        $("ul#circle_" + id).transition({ rotate: angleDegres * indexWidth - ( 360 / nombreItems * 2 ) * indexWidth }, 'slow');
        $("ul#circle_" + id + " li").each(function() {
        	$(this).transition({ rotate: -angleDegres * indexWidth + ( 360 / nombreItems * 2 ) * indexWidth }, 0);
        });

        var temp = parseInt(currentWidth.substr(1,1)) + 1;
        if ( temp == 7 ) { temp = 1 }
		currentWidth = 'C' + temp;

		sentinelle();
		break;

        case 37:
        var angleDegres = 60;
        var nombreItems = 6;
        var id = 0;
        indexWidth--;
        

        $("ul#circle_" + id).transition({ rotate: angleDegres * indexWidth - ( 360 / nombreItems * 2 ) * indexWidth }, 'slow');
        $("ul#circle_" + id + " li").each(function() {
        	$(this).transition({ rotate: -angleDegres * indexWidth + ( 360 / nombreItems * 2 ) * indexWidth }, 0);
        });

        var temp = parseInt(currentWidth.substr(1,1)) - 1;
        if ( temp == 0 ) { temp = 6 }
		currentWidth = 'C' + temp;

		sentinelle();
		break;

        default: return; // exit this handler for other keys
    }
	e.preventDefault();
});


// Pour attribuer le caractère selectionné aux différents blocs
$(function() {

	//initialisation (regular, normal)
	var codeChasse = "C4";
	var codeGraisse = "G4"; 
	var codeFocus = "C4G4";
	
	// clic cercle glyphes
	$("ul.glyphes li").click(function() {
		var contenu = $(this).html();
		$(".conteneur").empty().append(contenu);
	});

	// clic cercle chasse
	$("ul#circle_0 li").click(function() {
		codeChasse = $(this).attr("name");
		codeFocus = codeChasse + codeGraisse;
		$("ul#circle_1 li").each(function(){
			var sonCode = $(this).attr("name");
			$(this).attr("class", codeChasse + sonCode);
		});
		$("#resultat").attr("class", codeFocus );
		//$("#testeur").attr("class", codeFocus );
		$("#debug span#codeChasse").empty().append(codeChasse);
		$("#debug span#codeFocus").empty().append(codeFocus);
		$('[data-focus=true] > [name=testeurTextarea]').removeAttr('class');
			$('[data-focus=true] > [name=testeurTextarea]').addClass('testeurTextarea ' + codeFocus);
			$('[data-focus=true] .listeAjouter').attr('data-font', codeFocus);
			$("[data-focus=true] > [name=testeurTextarea]").attr('title', parcourirTableau(codeFocus));
		$("#nomVariante").empty().append(parcourirTableau(codeFocus) + " ");
		$("#repere span").empty().append(parcourirTableau(codeFocus) + " ");
		$('[data-focus=true] > [name=testeurTextarea]').empty().append('<span>' + parcourirTableau(codeFocus) + '</span>');
		//changer class du li cliqué
		$(this).removeAttr('class');
		$(this).attr('class', codeFocus);
		$('#resultat .listeAjouter').attr('data-font', codeFocus);
		currentWidth = codeChasse;
	});

	// clic cercle graisse
	$("ul#circle_1 li").click(function() {
		codeGraisse = $(this).attr("name");
		codeFocus = codeChasse + codeGraisse;
		$("ul#circle_0 li").each(function(){
			var sonCode = $(this).attr("name");
			$(this).attr("class", sonCode + codeGraisse );
		});
		$("#resultat").attr("class", codeFocus );
		//$("#testeur").attr("class", codeFocus );
		$("#debug span#codeGraisse").empty().append(codeGraisse);
		$("#debug span#codeFocus").empty().append(codeFocus);
		$('[data-focus=true] > [name=testeurTextarea]').removeAttr('class');
			$('[data-focus=true] > [name=testeurTextarea]').addClass('testeurTextarea ' + codeFocus);
			$('[data-focus=true] .listeAjouter').attr('data-font', codeFocus);
			$("[data-focus=true] > [name=testeurTextarea]").attr('title', parcourirTableau(codeFocus));
		$("#repere span").empty().append(parcourirTableau(codeFocus) + " ");
		$("#nomVariante").empty().append(parcourirTableau(codeFocus) + " ");		
		$('[data-focus=true] > [name=testeurTextarea]').empty().append('<span>' + parcourirTableau(codeFocus) + '</span>');
		//changer class du li cliqué
		$(this).removeAttr('class');
		$(this).attr('class', codeFocus);
		$('#resultat .listeAjouter').attr('data-font', codeFocus);
		currentThickness = codeGraisse;
	});

});


function sentinelle(){
	//$("ul.recepteurGlyphe li").fadeToggle();
	$("ul#circle_0 li").each(function(){
			var sonCode = $(this).attr("name");
			$(this).attr("class", sonCode + currentThickness );
		});
	$("ul#circle_1 li").each(function(){

			var sonCode = $(this).attr("name");
			$(this).attr("class", currentWidth + sonCode);
	});
	codeFocus = currentWidth + currentThickness;
	$("#resultat").attr("class", codeFocus );
	$("#repere span").empty().append(parcourirTableau(codeFocus) + " ");
	
	getText();

	$("#menu3 li").attr('style', '');
	$("#menu3 li." + codeFocus).css('color', 'white');
	//$("ul.recepteurGlyphe li").fadeToggle();
}







