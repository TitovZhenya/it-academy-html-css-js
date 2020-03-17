$(document).ready(function(){
	$(".product-choice").menu();
	});		
	(function($){				
	jQuery.fn.menu = function(options){
			var createTabs = function(){
			choice = this;
			i = 0;
			
			showPage = function(i){
				$(choice).children("div").children("div").hide();
				$(choice).children("div").children("div").eq(i).show();
				$(choice).children("ul").children("li").removeClass("active");
				$(choice).children("ul").children("li").eq(i).addClass("active");
			}
								
			showPage(0);				
			
			$(choice).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;                        
			});
			
			$(choice).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});				
		};		
		return this.each(createTabs);
	};	
})(jQuery);		



