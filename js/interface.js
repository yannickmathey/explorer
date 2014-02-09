cart = [];
cartTEMP = [];
fontColor = "#ffffff";
codeFocus = "C4G4";
displayLiveTest = false;
italic = false;



//fonction d'initialisation
$(document).ready(function () {
	nombreItemPanier();
	chasse = 'C1';
	graisse = 'G1';
	corps = 40;
	var panier = {};
	displayScreen();
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
			displayLiveTest = true;
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
			displayLiveTest = false;
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
	var n = cart.length;
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

// Ajouter current font
$(function(){
	$(document).on("click", ".ajouterFont", function(e) {

		var content = $(this).attr("data-font");

		remplirPanier(content, "font");
		nombreItemPanier();
		//console.log(cart);

	});
});

// Ajouter both slants
$(function(){
	$(document).on("click", ".ajouterSlants", function(e) {

		var content = $(this).attr("data-font");

		remplirPanier(content, "slants");
		nombreItemPanier();
		//console.log(cart);

	});
});

// Ajouter pack
$(function(){
	$(document).on("click", ".ajouterFamille", function(e) {

		var content = $(this).attr("data-font");

		remplirPanier(content, "famille");
		nombreItemPanier();
		//console.log(cart);

	});
});


function remplirPanier(content, type) {

	if (content != "" ) {

		cartTEMP = [];

		if ( type == "slants" ) {

			content = content.substr(0,4);
			if ( $.inArray(content, cart) == -1 ) {
				cart.push( content );
			}
			else {
				console.log(content);
				$("#contenuPanier ul a[name=" + content + "]").css('background-color', 'red').slideUp(800);
			}
			cartTEMP.push( content );

			content += "I";

			if ( $.inArray(content, cart) == -1 ) {
				cart.push( content );
			}
			else {
				console.log(content);
				$("#contenuPanier ul a[name=" + content + "]").css('background-color', 'red').slideUp(800);
			}
			//cartTEMP.push( content );

			//cart.push( content+"I" );
			console.log("addSlant");

		}

		if ( type == "famille" ) {

			for (var i = 1; i <= 8; i++) {
				laFamille = content.substr(0,2) + "G" + i;
				cart.push( laFamille );
				cart.push( laFamille + "I" );
				cartTEMP.push( laFamille );
				cartTEMP.push( laFamille + "I" );
			};
		}

		if ( $.inArray(content, cart) == -1 ) {
			cart.push( content );
			cartTEMP.push( content );
		}

		cart = cart.filter(function(e){return e});
		var removeDoublons = [];
		$.each(cart, function(i, el){
		    if($.inArray(el, removeDoublons) === -1) removeDoublons.push(el);
		});
		cart = removeDoublons;

	}
	//$("#contenuPanier ul").empty();

	for ( var i = 0; i < cartTEMP.length; i++ ) {

			if ( type == 'slants' ) {
				if(i > 1) {
            		return false;
            	}
            	else {
            		cartTEMP[i] = cartTEMP[i].substr(0,4);
					$("#contenuPanier ul").append("<a class='slants' href='#' name='" + cartTEMP[i] + "'><li class='nomVarPano '>" + parcourirTableau(cartTEMP[i], 'famille') + "<span class='btnSupprimer' id='btn-" + cartTEMP[i] + "'>✕</span></li></a>");
					return false;
				}
				//cartTEMP = [];
			}
			if ( type == 'famille' ) {
				if(i > 0) {
            		return false;
            	}
            	else {
					$("#contenuPanier ul").append("<a class='famille' href='#' name='" + cartTEMP[i] + "'><li class='nomVarPano '>" + parcourirTableau(cartTEMP[i], 'famille') + "<span class='btnSupprimer' id='btn-" + cartTEMP[i] + "'>✕</span></li></a>");
					return false;
				}
				//cartTEMP = [];
			}
			else { 
				$("#contenuPanier ul").append("<a href='#' name='" + cartTEMP[i] + "'><li class='nomVarPano'>" + parcourirTableau(cartTEMP[i]) + "<span class='btnSupprimer' id='btn-" + cartTEMP[i] + "'>✕</span></li></a>");
				//cartTEMP = [];
			}
			



		//$("#contenuPanier ul").append("<a href='#' name='" + cart[i] + "'><li class='nomVarPano'>" + parcourirTableau(cart[i]) + "<span class='btnSupprimer' id='btn-" + cart[i] + "'>✕</span></li></a>");

		// Nettoyer les doublons

	}
	



	// console.log("après ajout = " + cart );
	//$("#contenuPanier ul").html(contenuPanier + "<a href='#' name='" + id + "'><li class='nomVarPano'>" + parcourirTableau(id) + "<span class='btnSupprimer' id='btn-" + id + "'>✕</span></li></a>");

};

// toggle italic
$(document).on("click", ".toggleItalic", function(e) {
	if (italic) { italic = false } else { italic = true }
	$("span.conteneur").toggleClass("italic");
	$("#resultat").toggleClass("italic");
	var codeFocus = currentWidth+currentThickness;
	if ( italic ) {
		codeFocus = codeFocus.substr(0,4);
		codeFocus += "I";
	}
	else {
		codeFocus = codeFocus.substr(0,4);
	}
	$('[name=addCart]').attr('data-font', codeFocus);
	$('[data-focus=true] > [name=testeurTextarea] span').toggleClass("italic");
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


// supprimer un item dans le panier
$(function(){
	$(document).on("click", "span.btnSupprimer", function(e) {
		var itemtoRemove = $(this).parents().eq(1).attr("name");

		cart = $.grep(cart, function(value) { return value !== itemtoRemove; });
		cart = cart.filter(function(e){return e});
		console.log("après remove = " + cart );
		$(this).parents().eq(1).remove();

		remplirPanier();
		nombreItemPanier();
	}
	);
});




// changer le corps du testeur
function Corps() {


	$('[data-focus=true] > [name=testeurTextarea]').css("font-size", corps);
	$('[data-focus=true] > [name=testeurTextarea]').css("line-height", interlignage(corps) + "px" );


	$(function(){

		var currentValue = $('#currentValue');

		$('#defaultSlider').change(function(){
			var corps = this.value;
			currentValue.html(this.value);
			$('[data-focus=true] > [name=testeurTextarea]').css("font-size", corps + "px" );
			$('[data-focus=true] > [name=testeurTextarea]').css("line-height", interlignage(corps) + "px" );
			//console.log(corps);
		});

		$('#defaultSlider').change();


	});


	function interlignage(corps){

		var rapportCorpsInterLignage = 1.4;
		if(corps<=40){
			rapportCorpsInterLignage = 1.6;
		}
		if(corps>=140){
			rapportCorpsInterLignage = 1.2;
		}
		else {
			rapportCorpsInterLignage = 1.4;
		}

		var interlignage = Math.floor(Math.round((corps * rapportCorpsInterLignage) * 100) / 100);
		return interlignage;
	}

};


// changer le style au clic du menu3
$(function() {

	$("#menu3 li").on('click',function() {

		$("#menu3 li").attr('style', '');
		$(this).css('color', 'white');
		codeFocus = $(this).attr("class");
		getText();

			//return codeFocus;
	});

});



function getText( el ) {
	var currentContent = '';
	var currentTitle = '';

	$('[data-focus=true]').fadeOut('slow', function() {

		$('[data-focus=true] > [name=testeurTextarea]').removeAttr('class');
		$('[data-focus=true] > [name=testeurTextarea]').addClass('testeurTextarea ' + codeFocus);
		$('[data-focus=true] .ajouterFont').attr('data-font', codeFocus);
		$("[data-focus=true] > [name=testeurTextarea]").attr('title', parcourirTableau(codeFocus));

		currentTitle = $('[data-focus=true] > [name=testeurTextarea]').attr('title');
		currentContent = $('[data-focus=true] > [name=testeurTextarea] span').text();

		// Si le texte a été modifié, laisser tel quel, sinon afficher le nom de la font séléctionnée
		tableau.filter(function (font) {
			if (font.nom == currentContent) {
				$('[data-focus=true] > [name=testeurTextarea] span').empty().append('<span>' + parcourirTableau(codeFocus) + '</span>');
				return font.nom == currentContent;
			}
		});
	});
	$('[data-focus=true]').fadeIn('fast');
}



// Ajouter styles dans textarea testeur
$(function(){
	$('#testeur').find('#addLine').each(function() {
		$("#addLine").on('click', function() {
			var button = $('#addLine');
			$("#testeur").find("[data-focus='true']").attr('data-focus', 'false');
			//var font = parcourirTableau(codeFocus);
			var newTextarea = '<div class="line clearfix" data-focus="true"><div class="options"><button class="delete">&#10005;</button><img class="ajouterFont" data-font="' + codeFocus + '" src="./img/panier.png" /></div><div contenteditable="true" name="testeurTextarea" title="' + codeFocus + '" class="testeurTextarea ' + codeFocus + '" style="color: ' + fontColor + ';"><span>' + parcourirTableau(codeFocus) + '</span></div></div>'
			$('#testeur').append(newTextarea);

			button.appendTo("#testeur:last-child")
		});
	});
});

//donner le focus au textarea séléctionné
$(function(){
	$(document).on("click", ".line", function(e) {
		$('.line').attr('data-focus', 'false');
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






















