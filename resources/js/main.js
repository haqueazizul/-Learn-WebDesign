

$(document) .ready(function(){

	//STICKY MENUE
	$(".js--services-section").waypoint(function(direction){
		if (direction == "down") {
			$("nav").addclass("sticky");

		}
		else{
			$("nav").removeclass("sticky");


		}


	});
		





//MIXITUP
var mixer = mixitup('.container');

});