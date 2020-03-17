$(document).ready(function(){
	$('.open-accordion').click(function(event){
		$('.open-accordion, .accordion').toggleClass('active');
	});
});

$(document).ready(function(){
	$('.open-fillters').click(function(event){
		$('.open-fillters, .fillters-content').toggleClass('active');
	});
});

$(document).ready(function(){
	$('.open-collection').click(function(event){
		$('.open-collection, .collection-content').toggleClass('active');
	});
});

$(document).ready(function(){
	$('.sidebar-mobile').click(function(event){
		$('.sidebar-mobile, .sidebar-categories, .sidebar-filter').toggleClass('show');
	});
});