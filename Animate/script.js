
$(".clickable").click(function() {
		function animation() {
  	$(".clickable").toggleClass('gradientAnimation');
 		}
 	  function disappear() {
  	$(".clickable").css("display", "none");
  	}
    animation();
    setTimeout(disappear, 500);
 });


$(".clickable").click(function() {

	  	$(".points").addClass('pointsActive');

 });
