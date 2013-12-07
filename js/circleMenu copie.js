$(document).ready(function () {
	
	// HACK // fontSize pour éviter que le li dépassent du conteneur
	var fontSize = $("ul#circleWidth li").width();
	var diametre = $("ul#circleWidth").width() - fontSize;
	$("ul#circleWidth").css('min-height', diametre + fontSize*2);
	
	var rayon = diametre / 2;
	// console.log(rayon);
	
	var centreCircleX = rayon;
	var centreCircleY = rayon;
	
	// console.log(centreCircleX + " " + centreCircleY);
	
	var nombreItems = $("ul#circleWidth li").length;
	// console.log(nombreItems);
	
	var angle = 2 * Math.PI / nombreItems;
	console.log("/////// " + angle + " ///// angle d\'une portion");
	var angleItem = Math.PI ;
	
	$("ul#circleWidth li").each(function(index) {
		
		$(this).attr('name', index + 1);
		var x = rayon*Math.cos(angleItem);
		var anglePortion = 180 * angle / Math.PI * index -90;
		$(this).attr('rel', anglePortion);

		$(this).css('top', x + rayon);
		var y = rayon*Math.sin(angleItem) * -1;
		$(this).css('left', y + rayon);
		
		console.log(index + " " + angleItem);
		angleItem = angleItem + angle;
	});
	
	$("ul#circleWidth li").click(function() {
		
		//debug
		var contentCliqué = $(this).html();
		console.log("cliqué: " + contentCliqué);
		//
		
		var index = $(this).attr("name") ;
		var anglePortion = 180 * angle / Math.PI * index -90 ;
		console.log("anglePortion: " + anglePortion);
		
		var newIndex = 0;
		$('ul#circleWidth').transition({ rotate: anglePortion }, 'slow');
		
		//debug
		var anglePortionI = 180 * angle / Math.PI - 90;
		console.log("angle d'une section >> radians: " + angle + " | degrees: "  + anglePortionI );
		//
		
		$(function() {
			
			$('ul#circleWidth li').each(function() {
				
				$(this).transition({ rotate: -anglePortion }, 'slow');
				$(this).attr("name", newIndex);
				
				//debug
				var content = $(this).html();
				console.log("contenu: " + content + " ||| index li: " + $(this).index() + " nouvel index: " + newIndex + " degrés: " + anglePortion + " radians: " + anglePortion*Math.PI/180);
				//
				
				newIndex++;
			});
			console.log("----------------------------------------------------------------------------------------------------------------------------");
		});
		
		
	});
	
});