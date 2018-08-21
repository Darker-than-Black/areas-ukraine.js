var id; //ID block on click
var scale = 1;
var valueScale = 0.1;
var cursorX, cursorY;

$(function() {
    $('.land').click(function(event) {
    	//console.log(event);
    	if($('.land').hasClass('active')) {
    		$('.land').removeClass('active');
    		$('.description').find(id).removeClass('border');
    	}
    	id = "#"+event.currentTarget.id;
    	console.log(id);
    	$('.description').find(id).addClass('border');
    	$(id).addClass('active');
    });

    $('#normalize').click(function(){
		$('svg').css({
		  	'transform':'scale('+ 1 + ')',
		  	'transform-origin': '50% 50%'
		});
	});

	function updateScale() {
		$('svg').css({
		  	'transform':'scale('+ scale + ')',
		  	'transform-origin': cursorX + 'px ' + cursorY + 'px'
		});
	};

	document.getElementById('map').onwheel = function(e) {
		//console.log(e); 
		cursorX = e.clientX;
		cursorY = e.clientY;
		if(scale >= .65 && scale <=2) {
			if(event.deltaY<0) {
				scale += valueScale;
				console.log(scale);
				
			} else {
				scale -= valueScale;
				console.log(scale);
			}
			updateScale();
		} else if(scale < .65) {
			scale += valueScale;
		} else {
			scale -= valueScale;
		}
	};
});