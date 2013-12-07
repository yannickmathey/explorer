<div id="ui_fonttesteur" class="clearfix">

	<div class="btn">
		<input id="defaultSlider" type="range" min="24" max="256" value="36">
		<span id="currentValue">201</span>

		<script>
		$(function(){

			var currentValue = $('#currentValue');

			$("#defaultSlider").slider({
				max: 500,
				min: 0,
				slide: function(event, ui) {
//currentValue.html(ui.value);
$("#testeur textarea").css("font-size", value);
$("#testeur textarea").css("line-height", interlignage(value) + "px" );
console.log(value);
}
});

		});
		</script>

	</div>

	<div class="btn-2">
		<span onclick="switchSlant()">Switch slant</span>
	</div>
</div>

<div id="btn-fond" class="btn-2 btn-left btn-color">
	<span class="toggle">Background color</span>
	<div id="colorbackground" class="define_color toggle">
		<div id="picker-wrapper-fond" class="picker-wrapper">
			<div id="picker-fond"></div>
			<div id="picker-indicator-fond" class="picker-indicator"></div>
		</div>
		<div id="slider-wrapper-fond" class="slider-wrapper">
			<div id="slider-fond"></div>
			<div id="slider-indicator-fond" class="slider-indicator"></div>
		</div>

		<script type="text/javascript">

		ColorPicker.fixIndicators(
			document.getElementById('slider-indicator-fond'),
			document.getElementById('picker-indicator-fond'));

		ColorPicker(
			document.getElementById('slider-fond'),
			document.getElementById('picker-fond'),

			function(hex, hsv, rgb, pickerCoordinate, sliderCoordinate) {

				ColorPicker.positionIndicators(
					document.getElementById('slider-indicator-fond'),
					document.getElementById('picker-indicator-fond'),
					sliderCoordinate, pickerCoordinate
					);

				$("#conteneurLiveTest").css('background-color', hex);
				$("#fond").css('background-color', hex);
				$("#btn-fond").css('border-left-color', hex);

			});

		</script>
	</div>
</div>

<div id="btn-font" class="btn-2 btn-left btn-color">
	<span class="toggle">Font color</span>
	<div id="colorFont" class="define_color toggle">
		<div id="picker-wrapper-font" class="picker-wrapper">
			<div id="picker-font"></div>
			<div id="picker-indicator-font" class="picker-indicator"></div>
		</div>
		<div id="slider-wrapper" class="slider-wrapper">
			<div id="slider-font"></div>
			<div id="slider-indicator-font" class="slider-indicator"></div>
		</div>

		<script type="text/javascript">

		ColorPicker.fixIndicators(
			document.getElementById('slider-indicator-font'),
			document.getElementById('picker-indicator-font'));

		ColorPicker(
			document.getElementById('slider-font'),
			document.getElementById('picker-font'),

			function(hex, hsv, rgb, pickerCoordinate, sliderCoordinate) {

				ColorPicker.positionIndicators(
					document.getElementById('slider-indicator-font'),
					document.getElementById('picker-indicator-font'),
					sliderCoordinate, pickerCoordinate
					);

				$("#testeur textarea").css('color', hex);
				$("#btn-font").css('border-left-color', hex);

			});

		</script>
	</div>



</div>