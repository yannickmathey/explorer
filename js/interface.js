fontColor = "black";
codeFocus = "C4G4";
displayLiveTest = false;
italic = false;



//fonction d'initialisation
$(document).ready(function () {
	chasse = 'C1';
	graisse = 'G1';
	corps = 40;
	displayScreen();
	Corps();
	define_color();
	setTimeout(function() {
		$('#rideau').fadeOut();
	}, 1000);
});




function glissementMenu() {
	var $glisseMenu = $('.n-menu');

	if ( displayLiveTest ) {
		$('.n-menu').css('position', 'relative');
	} else {
		$('.n-menu').css('position', 'absolute');
	}

	$glisseMenu.animate({
		marginTop : "-1000px",
		opacity : 0
	},
	800,
	function () {
		$glisseMenu.animate({
			marginTop : "0",
			opacity : 1
		})
	});

};

function displayScreen() {
	$("#menu1 td").click(function(event) {

		var $target = $(event.target);

		if ( ($target).is('#btnLiveTest') && !displayLiveTest ) {
			displayLiveTest = true;
			glissementMenu();

			$('#conteneurNavigator').fadeOut('fast',
				function() {
					$('#conteneurLiveTest').fadeIn(900);
					$("#menu1 td.on").delay(10000).removeClass('on');
					$("#menu1 td#btnLiveTest").addClass('on');
					$("#menu3").css("display","inline-table");
					$("#menu4").css("display","inline-table");
					$("#menu2").css("display","none");
				}
				);
		}

		if ( ($target).is('#btnNavigator') && displayLiveTest ) {
			displayLiveTest = false;
			glissementMenu();

			$('#conteneurLiveTest').fadeOut('fast',
				function() {
					$('#conteneurNavigator').fadeIn(900);
					$("#menu1 td.on").delay(10000).removeClass('on');
					$("#menu1 td#btnNavigator").addClass('on');
					$("#menu2").css("display","inline-table");
					$("#menu3").css("display","none");
					$("#menu4").css("display","none");
				}
				);
		}

	});
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
	$('.btn-color .action').on('click', function(){
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

		$("#menu3 li span").removeClass('bleu');
		$("span", this).addClass('bleu');
		codeFocus = $(this).attr("class");
		getText( codeFocus );

			//return codeFocus;
		});

});



function getText( codeFocus ) {
	var currentContent = '';
	var currentTitle = '';

	currentTitle = $('[data-focus=true] > [name=testeurTextarea]').attr('title');
	currentContent = $('[data-focus=true] > [name=testeurTextarea] span').text();

	console.log("\n\ncurrentTitle: " + currentTitle + "\ncurrentContent :" + currentContent)

	$('[data-focus=true]').fadeOut('fast', function() {console.log(currentTitle)

		// Si le texte a été modifié, laisser tel quel, sinon afficher le nom de la font séléctionnée
		if ( currentTitle == currentContent ) { 
			newLabel = tableau[codeFocus].nom;
			$('[data-focus=true] > [name=testeurTextarea] span').empty().append( newLabel );
		}

		$('[data-focus=true] > [name=testeurTextarea]').removeAttr('class');
		$('[data-focus=true] > [name=testeurTextarea]').addClass('testeurTextarea ' + codeFocus);
		$('[data-focus=true] .ajouterFont').attr('data-font', codeFocus);
		$("[data-focus=true] > [name=testeurTextarea]").attr('title', parcourirTableau(codeFocus));

		
	});
	$('[data-focus=true]').fadeIn('fast');
}



// Ajouter styles dans textarea testeur
function addline() {
	// var button = $('.addLine');

	$("#testeur").find("[data-focus='true']").attr('data-focus', 'false');
	//var font = parcourirTableau(codeFocus);
	var newTextarea = '<div class="line clearfix" data-focus="true"><div class="options"><div class="btn-tester delete" onClick="checkLineLength();">Remove line</div><div class="addLine btn-tester" onClick="addline();">Add Line</div></div><div contenteditable="true" name="testeurTextarea" title="' + tableau[codeFocus].nom + '" class="testeurTextarea ' + codeFocus + '" style="color: ' + fontColor + ';"><span>' + parcourirTableau(codeFocus) + '</span></div></div>'
	$('#testeur').append(newTextarea);
	$('#addLine').css('display', 'none');

	// button.appendTo("#testeur:last-child")

}

function checkLineLength() {
	setTimeout(function() {
		$('#testeur').each(function(){
			if($(this).find('div.line').length == 0){
				$('#addLine').slideDown();
			}
		});
	}, 1000);
}

//donner le focus au textarea séléctionné
$(function(){
	$(document).on("click", ".line", function(e) {
		$('.line').attr('data-focus', 'false');
		$(this).attr('data-focus', 'true');
	})
});

//enlever le focus au textarea séléctionné
$(document).click(function() {
    //$('[data-focus=true]').attr('data-focus', 'false');
});

$('[data-focus=true]').click(function(event) {
	event.stopPropagation();
});




// supprimer la ligne du testeur
$(function(){
	$(document).on("click", ".delete", function(e) {
		$(this).closest('.line').slideUp('slow', function(){
			$(this).closest('.line').remove();
		});
	});
});



// about open
$(function(){
	$(document).on("click", ".openAbout", function(e) {
		$(' .about ').show();
		$(' .panneau_contenu ').hide();
		$(' .gauche ').animate({
			'top': '0',
			'opacity': '1',
			'left': '0'
		},
		800, function() {}
		);
		$(' .droite ').animate({
			'bottom': '0',
			'opacity': '1',
			'right': '0'
		},
		800, function() {
			$(' .panneau_contenu ').slideDown( 'slow' );
		}
		);

	})
});

// about close
$(function(){
	$(document).on("click", ".closeAbout", function(e) {
		
		$(' .panneau_contenu ').css( 'display', 'none' );
		$(' .gauche ').animate({
			'top': '0',
			'opacity': '0',
			'left': '-2000px'
		},
		1000, function() {}
		);
		$(' .droite ').animate({
			'bottom': '0',
			'opacity': '0',
			'right': '-2000px'
		},
		1000, function() {
			$(' .about ').hide();
		}
		);
	})
});















