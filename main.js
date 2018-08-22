var id; //ID block on click
var scale = 1;
var valueScale = 0.1;
var cursorX = 0;
var cursorY = 0;

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

    $('#normalizeMap').click(function(){
    	cursorX = 0; cursorY = 0;
		$('svg').css({
		  	'transform':'scale('+ 1 + ')',
		  	'transform-origin': '50% 50%'
		});
	});

	$('#increaseMap').click(function(){
		console.log(cursorX);
		scale+=valueScale;
		resizeMap();
	});

	$('#reduceMap').click(function(){
		scale-=valueScale;
		resizeMap();
	});

	function resizeMap() {
		if(scale >= .65 && scale <=2) {
			if(cursorX == 0 && cursorY == 0) {
				$('svg').css({
					'transform':'scale('+ scale + ')',
				  	'transform-origin': '50% 50%'
				});
			} else {
				$('svg').css({
					'transform':'scale('+ scale + ')',
				  	'transform-origin': cursorX  + 'px ' + cursorY + 'px'
				});
			}
		} else if(scale < .65) {
			scale += valueScale;
		} else {
			scale -= valueScale;
		}
	}

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
				//console.log(scale);
				
			} else {
				scale -= valueScale;
				//console.log(scale);
			}
			updateScale();
		} else if(scale < .65) {
			scale += valueScale;
		} else {
			scale -= valueScale;
		}
	};
});