<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Panorama</title>
<link rel="icon" type="image/icon" href="https://productiontype.com/web/favicon.ico">

<!--
<link rel="stylesheet" type="text/css" href="css/url_fonts.php" />
<link rel="stylesheet" type="text/css" href="css/style.css?v=<?php echo rand(); ?>" />
<link rel="stylesheet" type="text/css" href="css/circleMenu.css?v=<?php echo rand(); ?>" />
<link rel="stylesheet" type="text/css" href="css/font.css" />
<link rel="stylesheet" type="text/css" href="css/italic.css" />
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
<link rel="stylesheet" type="text/css" href="css/responsive.css?v=<?php echo rand(); ?>" />
<link rel="stylesheet" type="text/css" href="css/new.css?v=<?php echo rand(); ?>" />
-->
<link rel="stylesheet" type="text/css" href="src/style-min.css?v=<?php echo rand(); ?>" />

<!--
<script src="js/tableau.js?v=<?php echo rand(); ?>"></script>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>
<script src="js/circleMenu.js?v=<?php echo rand(); ?>"></script>
<script src="js/interface.js?v=<?php echo rand(); ?>"></script>
<script src="js/jquery.transit.min.js"></script>
<script type="text/javascript" src="js/colorpicker.min.js"></script>
-->
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>
<script src="src/script.min.js?v=<?php echo rand(); ?>"></script>

<script language="javascript">
    $(document).ready(function()
    {
        $('#javascriptKo').hide();
    });
</script>


</head>

<body class="">


<div id="wrap">

<?php
    // include 'include/menu.php';
    include 'include/newMenu.php';
    include 'include/navigator.php';
    include 'include/liveTest.php';
?>

</div><!-- END #wrap -->

<div id="debug">
    <p>chasse: <span id="codeChasse"></span></p>
    <p>graisse: <span id="codeGraisse"></span></p>
    <p>focus: <span id="codeFocus"></span></p>
    <p>mouse: <span id="mouse"></span></p>
    <p>centre: <span id="centre"></span></p>
    <p>hover: <span id="elementHover"></span></p>
</div>


<div id="javascriptKo">Warning :<br/> Javascript seems disabled on your browser.<br/>Please enable it.</div>


<div class="about">
    <div class="panneau gauche BGvert"></div>
    <div class="panneau droite BGvert"></div>
    <div class="panneau_contenu C4G1 blanc clearfix">
        <p style="text-align: right;"><span class=" glyphicon glyphicon-cross closeAbout"></span> </p>
        <p>Panorama is not a family, it is a typeface system. It pushes beyond the usual barriers that limit familial proportions, elaborating a core design into an expansive gamut of widths (six) and weights (eight).  The project began in 2003, exploring the malleability of typographic shapes. How far can one stretch a face before it breaks from its basic nature as a quiet, congenial sans? Levée let his imagination (and mechanical automation) wander, interrupting only when necessary to correct a curve or maintain the spirit of the original design. The result is an unusual kit of parts. An arsenal of nearly boundless possibilities, from ethereal thin to blinding black, with an uncommonly handy series of steps in between.</p>
        <p class="credits">Design & code: <a href="https://twitter.com/_____________y" target="_blank">Yannick Mathey</a>.</p>
    </div>
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46791265-1', 'productiontype.com');
  ga('send', 'pageview');

</script>

</body>
</html>
