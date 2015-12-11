var playing = false;
var p5vid;
var button;
var back;

//Div for video time in seconds
var timeDiv, test;

//variable for font
var f = "Georgia";

var input, inputButton, greeting, timeSlider;
var inputSet = false, timeUpdating = false;
var saying = '';

function setupVid(widthVid, heightVid, vidNames) {
  var myCanvas = createCanvas(widthVid, heightVid);
  
  //video setup and stuff
  p5vid = createVideo(vidNames);
  p5vid.hide();
  p5vid.showControls(); 
  p5vid.size(400, 250);
  button = createButton('Play');
  timeSlider = createSlider(0,100,0);
  button.mousePressed(toggleVid);
  timeSlider.changed(vidSeek);
  timeSlider.mousePressed(slideDragged);
  back = createButton('Mindmap');

  //Division to see time of video in seconds
  md = p5vid.time();
  timeDiv = createDiv(md);
}

function drawVid() {
  background(150);
  image(p5vid, 0, 0, 1600, 1000);
  md = p5vid.time();

  //outputs number of time in seconds
  timeDiv.html(md);
  
  //update time slider
  seekTimeUpdate();
}

function toggleVid() {
  if (playing) {
    p5vid.pause();
    button.html('play');
	timeUpdating = false;
  } else {
    p5vid.loop();
    button.html('pause');
	timeUpdating = true;
  }
  playing = !playing;
}

function slideDragged() {
	timeUpdating = false;
}

//CODE TO SEEK THROUGH TIME IN VIDEO
function vidSeek() {
	var timeSeek = p5vid.duration() * (timeSlider.value() / 100);
	p5vid.time(timeSeek);
	timeUpdating = true;
}

//CODE TO UPDATE VALUE OF SLIDER
function seekTimeUpdate() {
	if(timeUpdating) {
		var newTime = md * (100 / p5vid.duration());
		timeSlider.value(newTime);
	}
}