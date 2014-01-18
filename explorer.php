<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Panorama</title>
<link rel="stylesheet" type="text/css" href="css/url_fonts.php" />
<link rel="stylesheet" type="text/css" href="css/style.css?v=<?php echo rand(); ?>" />
<link rel="stylesheet" type="text/css" href="css/circleMenu.css" />
<link rel="stylesheet" type="text/css" href="css/font.css" />
<link rel="stylesheet" type="text/css" href="css/italic.css" />
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="http://code.jquery.com/ui/1.8.21/jquery-ui.min.js"></script>
<script src="js/circleMenu.js?v=<?php echo rand(); ?>"></script>
<script src="js/interface.js?v=<?php echo rand(); ?>"></script>
<script src="js/hoverCircles.js"></script>
<script src="js/tableau.js?v=<?php echo rand(); ?>"></script>
<script src="js/jquery.transit.min.js"></script>
<script type="text/javascript" src="js/colorpicker.min.js"></script>

<script language="javascript">
    $(document).ready(function()
    {
        $('#javascriptKo').hide();
    });
</script>


</head>

<body>


<div id="wrap">

<?php
	include 'include/menu.php';
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

</body>
</html>
