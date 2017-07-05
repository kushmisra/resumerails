jQuery(document).ready(function(){
	console.log("document is ready");

	jQuery('.hover').hover(function(){
			console.log("hover hua");
			jQuery(this).addClass('flip');
		},function(){
			jQuery(this).removeClass('flip');
		});

	
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

