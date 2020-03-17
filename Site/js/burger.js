$(document).ready(function(){
	$('.burger-body').click(function(event){
		$('.burger-body, .burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});