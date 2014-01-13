//fonction d'initialisation
$(document).ready(function () {
	nombreItemPanier();
	chasse = 'C1';
	graisse = 'G1';
	corps = 40;
	var panier = {};
	displayScreen();
	CaretFinTexte();
	classONmenu3();
	Corps();
	define_color();
	setTimeout(function() {
		$('#rideau').fadeOut();
	}, 1000);
});


function glissementMenu() {
	var $glisseMenu = $('#menu_lateral');

	$glisseMenu.animate({
		marginLeft : "-1000px",
		opacity : 0
	},
	400,
	function () {
		$glisseMenu.animate({
			marginLeft : "0",
			opacity : 1
		})
	});

};




function displayScreen() {
	$("#menu1 li").click(function(event) {

		var $target = $(event.target);

		if ( ($target).is('#btnLiveTest') ) {
			glissementMenu();

			$('#conteneurNavigator').fadeOut('fast',
				function() {
					$('#conteneurLiveTest').fadeIn(900);
					$("#menu1 li.on").delay(10000).removeClass('on');
					$("#menu1 li#btnLiveTest").addClass('on');
					$("#menu3").css("display","block");
					$("#menu4").css("display","block");
					$("#menu2").css("display","none");
				}
				);
		}

		else {
			glissementMenu();

			$('#conteneurLiveTest').fadeOut('fast',
				function() {
					$('#conteneurNavigator').fadeIn(900);
					$("#menu1 li.on").delay(10000).removeClass('on');
					$("#menu1 li#btnNavigator").addClass('on');
					$("#menu2").css("display","block");
					$("#menu3").css("display","none");
					$("#menu4").css("display","none");
				}
				);
		}

	});
};

function nombreItemPanier() {
	var n = $("#contenuPanier li").length;
	if (n==0){
		$("#empty").css("display", "block");
		$("#nombreItemPanier").css("display", "none");
	}
	else{
		$("#nombreItemPanier").html(n);
		$("#empty").css("display", "none");
		$("#nombreItemPanier").css("display", "block");
	}
};

$(function listeAjouter() {
	$(".listeAjouter").click(function() {
		var content = $("#resultat").attr("class");
		var panier = {};
		panier[''] = content;

		//$("#contenuPanier ul").html("<li>" + content + "</li>");

		remplirPanier(content);
		nombreItemPanier();
		supprimer();

	});
});


function remplirPanier(id) {
	var contenuPanier = $("#contenuPanier ul").html();

	/*
	// Vérifier si la fonte n'est pas déjà dans le panier ::

	var duplicata = false;

	$("#contenuPanier ul a").each(function(id) {
		var codeVariante = $(this).attr("name");
		console.log(">>" + codeVariante);
		if(codeVariante == id) {
			duplicata = true ;
			return duplicata;
		}
		else {};

		alert('ok');

		if(duplicata == false) {
			$("#contenuPanier ul").html(contenuPanier + "<a href='#' name='" + id + "'><li>" + parcourirTableau(id) + "<span class='btnSupprimer' id='btn-" + id + "'>✕</span></li></a>");
		}
		else {};
		console.log(duplicata);
	});
*/

$("#contenuPanier ul").html(contenuPanier + "<a href='#' name='" + id + "'><li class='nomVarPano'>" + parcourirTableau(id) + "<span class='btnSupprimer' id='btn-" + id + "'>✕</span></li></a>");

};

$(document).on("click", ".toggleItalic", function(e) {
	$("span.conteneur").toggleClass("italic");
	$("#resultat").toggleClass("italic");
	$('[data-focus=true] > span').toggleClass("italic");
});


function define_color() {
	$('.btn-color span').on('click', function(){
		$target = $(this).parent();

		$target.find('.toggle').toggle().toggleClass('clearfix');
		$(document).mouseup(function (e) {
			var container = $(".define_color");
			if (!container.is(e.target) && container.has(e.target).length === 0)  {
				container.hide();
				$('span.toggle').show();
			}
		});
	})

}

function supprimer() {
	$("span.btnSupprimer").click(function(){
		var aSupprimer = $(this).parents().eq(1).remove();
		nombreItemPanier();
	}
	);
};


var indexThickness = 1;
var indexWidth = 1;


$(document).keydown(function(e){

	switch(e.which) {
	        case 37: // left
	        var angleDegres = 45;
	        var nombreItems = 8;
	        var id = 1;
	        $("ul#circle_" + id).transition({ rotate: angleDegres * indexThickness - ( 360 / nombreItems * 2 ) * indexThickness }, 'slow');
	        $("ul#circle_" + id + " li").each(function() {
	        	$(this).transition({ rotate: -angleDegres * indexThickness + ( 360 / nombreItems * 2 ) * indexThickness }, 'slow');
	        });
	        if (indexThickness > 7) { indexThickness = 0 }
	        	else { indexThickness = indexThickness + 1; }
	        console.log("indexThickness : " + indexThickness);
	        break;

	    	case 39: // right
	    	var angleDegres = 45;
	    	var nombreItems = 8;
	    	var id = 1;
	    	$("ul#circle_" + id).transition({ rotate: angleDegres * -1 * indexThickness - ( 360 / nombreItems * 2 ) * indexThickness }, 'slow');
	    	$("ul#circle_" + id + " li").each(function() {
	    		$(this).transition({ rotate: -angleDegres * -1 * indexThickness + ( 360 / nombreItems * 2 ) * indexThickness }, 'slow');
	    	});
	    	if (indexThickness = 0) { indexThickness = 8 }
	    		else { indexThickness = indexThickness - 1; }
	    	console.log("indexThickness : " + indexThickness);
	    	break;

	        case 38: // up
	        var angleDegres = 60;
	        var nombreItems = 6;
	        var id = 0;
	        $("ul#circle_" + id).transition({ rotate: angleDegres * indexWidth - ( 360 / nombreItems * 2 ) * indexWidth }, 'slow');
	        $("ul#circle_" + id + " li").each(function() {
	        	$(this).transition({ rotate: -angleDegres * indexWidth + ( 360 / nombreItems * 2 ) * indexWidth }, 'slow');
	        });
	        if (indexWidth > 6) { indexWidth = 0 }
	        	else { indexWidth = indexWidth + 1; }
	        console.log("indexWidth : " + indexWidth);
	        break;

	        case 40: // down
	        var angleDegres = 60;
	        var nombreItems = 6;
	        var id = 0;
	        $("ul#circle_" + id).transition({ rotate: angleDegres * -1 * indexWidth - ( 360 / nombreItems * 2 ) * indexWidth }, 'slow');
	        $("ul#circle_" + id + " li").each(function() {
	        	$(this).transition({ rotate: -angleDegres * -1 * indexWidth + ( 360 / nombreItems * 2 ) * indexWidth }, 'slow');
	        });
	        if (indexWidth <= 0) { indexWidth = 6 }
	        	else { indexWidth = indexWidth - 1; }
	        console.log("indexWidth : " + indexWidth);
	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault();
	});


// Placer le caret (curseur) à la fin du textarea
function moveCaretToEnd(el) {
	if (typeof el.selectionStart == "number") {
		el.selectionStart = el.selectionEnd = el.value.length;
	} else if (typeof el.createTextRange != "undefined") {
		el.focus();
		var range = el.createTextRange();
		range.collapse(false);
		range.select();
	}
}

function CaretFinTexte() {
	/*
	var textarea = document.getElementById("testeurTextarea");
	textarea.onfocus = function() {
		moveCaretToEnd(textarea);

	    // Work around Chrome's little problem
	    window.setTimeout(function() {
	    	moveCaretToEnd(textarea);
	    }, 1);
	};
	*/
}


// à faire (.on sur fonte utilisée)
function classONmenu3() {

}



// changer le corps du testeur
function Corps() {


	$('[data-focus=true]').css("font-size", corps);
	$('[data-focus=true]').css("line-height", interlignage(corps) + "px" );


	$(function(){

		var currentValue = $('#currentValue');

		$('#defaultSlider').change(function(){
			var corps = this.value;
			currentValue.html(this.value);
			$('[data-focus=true]').css("font-size", corps + "px" );
			$('[data-focus=true]').css("line-height", interlignage(corps) + "px" );
			//console.log(corps);
		});

		$('#defaultSlider').change();


	});


	function interlignage(corps){

		var rapportCorpsInterLignage = 1.4

		/*
		if(corps<=40){
			rapportCorpsInterLignage = 1.6;
		}
		if(corps>=140){
			rapportCorpsInterLignage = 1;
		}
		else {
			rapportCorpsInterLignage = 1.4;
		}
		*/

		var interlignage = Math.floor(Math.round((corps * rapportCorpsInterLignage) * 100) / 100);
		return interlignage;
	}

};


// changer le style au clic du menu3
$(function() {

	$("#menu3 li").on('click',function() {
		codeFocus = $(this).attr("class");
		$('[data-focus=true]').fadeOut('slow', function() {
			$('[data-focus=true]').removeAttr('class');
			$('[data-focus=true]').addClass('testeurTextarea ' + codeFocus);
			$("[data-focus=true]").attr('title', parcourirTableau(codeFocus));
			var currentContent = $('[data-focus=true] > span').html();
			var currentTitle = $('[data-focus=true]').attr('title');

			console.log(
				'currentContent = ' + currentContent
				+ ' & ' +
				'currentTitle = ' + currentTitle
				);

			// Si le text a été modifié, laisser tel quel, sinon afficher le nom de la font séléctionnée
			tableau.filter(function (person) { 
				if (person.nom == currentContent) {
					$('[data-focus=true] > span').empty().append(parcourirTableau(codeFocus));
					return person.nom == currentContent;
				}
			 });


			$('[data-focus=true]').fadeIn('slow');
			return codeFocus;
		});

	});

});

// Ajouter styles dans textarea testeur
$(function(){
	$('#testeur').find('#addLine').each(function() {
		$("#addLine").on('click', function() {
			var button = $('#addLine');
			$("#testeur").find("[data-focus='true']").attr('data-focus', 'false');
			//var font = parcourirTableau(codeFocus);
			var newTextarea = '<div class="line clearfix"><div class="options"><button class="delete">&#10005;</button></div><div contenteditable="true" data-focus="true" name="testeurTextarea" title="' + codeFocus + '" class="testeurTextarea" style="color: white;"><span>Panorama Regular</span></div></div>'
			$('#testeur').append(newTextarea);

			button.appendTo("#testeur:last-child")
		});
	});
});

//donner le focus au textarea séléctionné
$(function(){
	$(document).on("click", "[name=testeurTextarea]", function(e) {
		$('[name=testeurTextarea]').attr('data-focus', 'false');
		$(this).attr('data-focus', 'true');
	})
});


// supprimer la ligne du testeur
$(function(){
	$(document).on("click", ".delete", function(e) {
		$(this).closest('.line').slideUp('slow', function(){
			$(this).closest('.line').remove();
		});
		
	})
});






















