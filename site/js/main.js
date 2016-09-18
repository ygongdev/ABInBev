var video = $("#droneVideo");
var videoLink = $("#videoLink");
var sidebarContent = $("#sidebar-content");
var sidebarButton = $("#sidebar-close");
var sidebar = $('#sidebar');
var sidebarClosed = true;
var videoOff = true;
video.css('display', 'none');

/* sidebar slide aniamtion */
sidebar.css('margin-left', '-155px');
sidebarButton.on("click", function(){

	if (!sidebarClosed){
		sidebar.animate({marginLeft: "-155px"});
		$('#sidebar-close > span').removeClass('glyphicon-arrow-left');
		$('#sidebar-close > span').addClass('glyphicon-arrow-right');
	}else{
		sidebar.animate({marginLeft: "0px"});
		$('#sidebar-close > span').removeClass('glyphicon-arrow-right');
		$('#sidebar-close > span').addClass('glyphicon-arrow-left');
	}

	sidebarClosed = !sidebarClosed;
});

var highlightInterval = null;
var currentLayer = null;

videoLink.on("click", function(){
	videoOff = !videoOff;
	
	if (!videoOff){
		videoLink.text("Disable LiveStream");
		videoLink.css('color', 'red');
		video.css('display', 'block');
		
		var index = 0;
		highlightInterval = setInterval(function() {
			if (currentLayer != null) {
				resetLayer(currentLayer);
			}
			highlightLayer(layers[index]);
			currentLayer = layers[index];
			index = (index+1)%layers.length;
		}, 2000);
	}else{
		videoLink.text("Enable LiveStream");
		videoLink.css('color', 'green');		
		video.css('display', 'none');
		
		if (currentLayer != null) {
			resetLayer(currentLayer);
		}
		clearInterval(highlightInterval);
	}
})




