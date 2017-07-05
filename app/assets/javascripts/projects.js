jQuery(document).ready(function(){
		// set up hover panels
		console.log("document is ready");
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		jQuery('.hover').hover(function(){
			console.log("hover hua");
			jQuery(this).addClass('flip');
		},function(){
			jQuery(this).removeClass('flip');
		});
	});