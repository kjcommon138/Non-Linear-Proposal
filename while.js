function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['while.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 370 && md <= 380 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(860, 910);
		inputSet = true;
  }
  
  if (md < 370 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md > 370 && md < 380) {
		//Wrong ans 1
		if(mouseX >= 110 && mouseY >= 517 && mouseX <= 150 && mouseY <= 560)
			greeting.html('Incorrect!');
		//Wrong ans 2
		if(mouseX >= 120 && mouseY >= 630 && mouseX <= 160 && mouseY <= 670)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 125 && mouseY >= 700 && mouseX <= 175 && mouseY <= 740)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 130 && mouseY >= 790 && mouseX <= 180 && mouseY <= 845)
			greeting.html('Correct!');
		//Wrong ans 5
		if(mouseX >= 140 && mouseY >= 890 && mouseX <= 175 && mouseY <= 945)
			greeting.html('Incorrect!');
	  }
}