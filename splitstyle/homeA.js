/* make some galleries*/
$(document).ready(function(){

	var gallery = [];//will populate with project objects
	
	loadProjects(gallery);
	loadThumbnails();
	//displayImage;
	


/*Project object to associate images and thumbnails
TAKES string 'name' array 'images' array 'thumbnails'*/
function Project(name,images,thumbnails) {
	this.name=name;
	this.images=images;
	this.thumbnails=thumbnails;
	//this.addProperties
};
/*a function to find projects and put them into an array as Project objects
TAKES an array 'gallery' RETURNS nothing*/
function loadProjects(gallery){

	//identify all the projects (standard class)
	$(".project").each(function(i){
		var name = $(this).attr("data-project-name");	//pull name from html data-*
		var images = [];	//array for images
		$(this).children("*[data-project-name='"+name+"'] > img").each(function(j){//select images that are children of data-*
			images[j]=$(this); //populate array
			$(this).hide();//don't show until chosen
			images[0].show();
		});		
		gallery[i] = new Project(name, images);//create the new object
		
	});

};
/*A function to find a project by name
TAKES a string 'name', RETURNS a Project object*/
function getAssociatedProject(name){
	var findName = name;//the name we are looking for
	for(i = 0; i < gallery.length; i ++){//step through all objects in gallery array
		var projectName = gallery[i].name;//get the name of current Project
		if(projectName === findName){//if matching, return this Project
			return gallery[i];
		}else{
			//do nothing
		};
	};
};
/*A function to populate thumbnail images and associate them with 
appropriate Project objects
TAKES nothing RETURNS array 'allThumbnails' of every thumbnail*/
function loadThumbnails(){
	$(".miniNav").each(function(i){
		var name = $(this).attr("data-project-name");
		var thumbnails = [];
		var associatedProject = getAssociatedProject(name);
		$(this).children("*[data-project-name='"+name+"'] img").each(function(j){
			thumbnails[j]=$(this);
			addThumbListeners($(this),j,associatedProject);
		});
		associatedProject.thumbnails = thumbnails;

	});
};

/*A function to add event listeners to thumbnails to control
hover and click behavior
TAKES img 'thumbnail' int 'index' and Project object 'associatedProject'
RETURNS nothing */
function addThumbListeners(thumbnail,index,associatedProject){
	thumbnail.hover(function(){
		$(this).toggleClass("active inactive");
		console.log("hover");
	})
	.click(function(){
		displayImage(index,associatedProject);

	});

};

/*A function to display images chosen from thumbnails
TAKES int 'index' Project object 'associated Project'
RETURNS nothing*/
function displayImage(index,associatedProject){
	$(associatedProject.images).each(function(i){
		$(this).hide();
	});
	associatedProject.images[index].show();
	jumpTo(associatedProject);
};

/*a function to scroll to the displayed image
TAKES a Project object RETURNS nothing*/
function jumpTo(project){
	name = project.name;
	$('html, body').animate({
		scrollTop: $( "#display > *[data-project-name='"+name+"']" ).offset().top
	}, 500);
	return false;
};
});