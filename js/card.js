 
     
      	
  $(document).ready(function() {
  		var $page1 = $('#page1'),
  		$page2 = $('#base2'),
  		$page3 = $('#base3'),
  		$background = $('#background');

  		   (function () {
	     var $primaryAnchors = $('ul.nav a');
	     var $page = $('html,body')

	     $primaryAnchors.click(function (event) {
	         event.preventDefault(); 
	     $page.stop(true); 
		 $page.animate({scrollTop:$($(this).attr('href')).position().top+"px"}, 1500, 'swing');
	     });

     })(); 




  $(window).on('scroll', function() {	  
	 	var y = $(window).scrollTop(); 
	 	yOffset = y/2,
	 	thirdOffset = y/3 -(1/3)*$page3.offset().top,
	 	reverseOffset = -y/2,
		scale = 1 + y/100 -(1/100)*$page2.offset().top;
		if(scale<1) {
			scale = 1
		}
		var nextscale = 1 + (y/100 -(1/100)*$page1.offset().top)*2;
		if(scale<1) {
			scale = 1
		}
	 		if(y>=0 && y<992) 	{
	 			$page1.css({height:700});
	 		}
	 		if(y>=100 && y<800) 	{
	 			$page2.css('background-position', '0px ' + thirdOffset + 'px' );
	 			$page3.css('background-position', '0px ' + thirdOffset + 'px' );
	 		}
	 		if(y>=800 && y<1592) 	{
	 			$page3.css('background-position', '0px ' + thirdOffset + 'px' );
	 		}
	 		if(y>=200 && y<1892) 	{
	 		}
	 	$page1.css('background-position', '0px ' + yOffset + 'px' );
	 	$page2.css('background-position', '0px ' + reverseOffset + 'px' );
	 	$background.css('background-position', '0px ' + reverseOffset + 'px' );
  });	
  });   