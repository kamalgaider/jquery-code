$("document").ready(function(){

//$("#para").css("color","orange");
//$("#msg").html("Item added !!");

$("#cartMsg").hide();
$("#msg").hide();

$("#apple").draggable();
$("#orange").draggable();
$("#banana").draggable();
$("#strawberry").draggable();
$("#grapes").draggable();
$("#peach").draggable();

$("#cartDiv").droppable({
	activeClass: "highlight",
	hoverClass: "hoverDroppable",

	drop: function(event, ui){
		//Parameters for hide -scale, fade, explode, slide, puff, shake, clip, pulsate
		ui.helper.hide("scale");
		var item = $(ui.draggable).attr("id");
		$("#msg").html(item + " added");

		$("#msg").show();
		$('#msg').delay(500).fadeOut(400)
	},


	activate: function(event, ui){
		$("#cartMsg").html("drop item here!");
		$("#cartMsg").show();
	},

	deactivate: function(event, ui){
		$("#cartMsg").hide();
	},

	over: function(event, ui){
		$("#cartMsg").html("drop it!!");
		$("#cartMsg").show();
	},

	out: function(event, ui){
		$("#cartMsg").html("drop item here!");
		$("#cartMsg").show();
	}

});
})
