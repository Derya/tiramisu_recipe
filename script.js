var displayPics = true;

$(document).ready(function()
{
	// strikethrough toggler for ingredients list
	$('li').click(function()
	{
		$(this).toggleClass("ingListStrike");
	});

	// function for toggling the hiding of all the pictures
	$('#imgHiderButton').click(function()
	{
		// first, toggle the button
		$(this).toggleClass('buttonSelected'); 

		if (displayPics)
		{
			// hide the pictures
			$('.thumbnail').css("display","none");
			// resize the div making up the center piece of the page
			$('#recipe').width("658px");
			// i'm not sure how to tell the div #recipe to refresh its
			// height, but if i could figure out how that would go here
		}
		else
		{
			// unhide the pictures, make the recipe div big enough
			$('.thumbnail').css("display","inline-block");
			$('#recipe').width("1078px");
		}
		
		displayPics = !displayPics;
		//console.log(displayPics);
	});

});