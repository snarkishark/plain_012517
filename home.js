//holy god

/*functions I'll need:

-featured slideshow
-pull info when hovering over images in galleries
-enlarge w click? should all be big though anyway.... unless you're on mobile? ignore mobile for now
- hover over a project for info

-timeline nav

-mininav scrolling instead of w css, grab to scroll (also buttons like w big)

- scroll from featured to main

- call img from featured; go to that spot in a project

REFINE:
-put project images into galleries
-associate those with their thumbnails
-scroll through galleries
-pull sidebar in and out
-skip buttons end gray
*/
var galleries = [];

$(document).ready(function(){
//load up projects into gallery array
$(".project").each(function(i){
	$(this).data("gallery",i);//persistent name
	galleries[i]=[];
	
	//for each image in the gallery, add it into the next lvl array
	$(".big img",this).each(function(j){
		galleries[i][j] = $(this);
		$(this).hide()
				.data("index",j);
		
		
	});

	$(".miniNav img",this).each(function(k){
	$(this).addClass("inactive")//so they don't hover yet
		   .data("index", k)//give them their data index to match big image
		   .hover(function(){
			 $(this).toggleClass("active inactive");
			 console.log("hover");
		   })
		   .click(function(){
		   		index = $(this).data("index");
		   		gallery = $(this).parent().parent().data("gallery");
			   displayImage(gallery, $(this).data("index"));
			   
		   });

		   displayImage(i,0);
	});
	


});

});

//clicking the "skip" buttons calls new images
$(".skip img").click(function(){
	gallery = $(this).parent().parent().data("gallery");


	var current = $(this).parent().siblings(".big").children(".current").data("index");
	var next = current + 1;
	var previous = current - 1;	


	if($(this).hasClass("forward")){
		
		if (next < galleries[gallery].length ){
			displayImage(gallery,next);

		}else{
			//do nothing
		}
	}else if (current > 0){
			
			displayImage(gallery,previous);
	}else{
			//do nothing
			
	}
});

function displayImage(gallery,index){


	thisGallery = galleries[gallery][index].parent();
	galleries[gallery][index].show();
	galleries[gallery][index].siblings().hide().removeClass("current");
	galleries[gallery][index].addClass("current");

	//console.log(gallery,index);
	

	/*
	$("#skip").show().contents().removeClass("end");	
	if (index == 0){
		$(".back").addClass("end");		
	}else if (index == (images.length-1)){
		$(".forward").addClass("end");
	}*/
	
	
}
