$(document).ready(function () {
    $('#circleMenu').each(function() {
        var id = $(this).attr("id");
        var largeur = $(this).width();
        var hauteur = $(this).height();
        var position = $(this).offset();

        console.log(id + " : " + largeur + " / " + hauteur + " x : " + position.left + " y : " + position.top);
        
        $(this).append($('<div id="repereCentre">.</div>'));
        $('#repereCentre').css({
            position: 'absolute',
            top: hauteur / 2,
            left: largeur / 2,
            'z-index': 0
        });


        var positionCentre = $('#repereCentre').offset();
        var centreX = positionCentre.left;
        var centreY = positionCentre.top;// + 205  ;  // +210 ?? bug ?

        $('#centre').html(centreX +', '+ centreY);

        $(document).mousemove(function(e){
          var mouseX = e.pageX;
          var mouseY = e.pageY;
          $('#mouse').html(mouseX +', '+ mouseY);
        });
    });
});