

$(".gradient").click(function() {

		function animation() {
  	$(".gradient").toggleClass('gradientAnimation');

 		}

 	  function disappear() {
  	$(".gradient").css("display", "none");
  	}

    animation();
    setTimeout(disappear, 500)
 });
