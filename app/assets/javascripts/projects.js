	$(document).ready(function(){
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		$('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});
	});


	// var tid = setInterval( function () {
	// 			console.log("i am here");
 //    			if ( document.readyState !== 'complete' ) return;
 //    			clearInterval( tid );       
    

 //    			var hover = document.getElementsByClassName("");
    			
 //    			for (var i = 0; i < hover.length; i++) {
 //    				console.log("adding event");
 //    				hover[i].addEventListener("mouseover", myFunction);
	// 			}
 //    			var myFunction = function(){
 //    				this.classList.add("flip");
 //    				console.log("yaha bhi");
 //    			}

 //    			// do your work
	// 		  }, 100 );