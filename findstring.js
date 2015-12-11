function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['findstring.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 35 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(890, 620);
		inputSet = true;
  }
  
  if (md < 35 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 35) {
		//Wrong ans 1
		if(mouseX >= 120 && mouseY >= 610 && mouseX <= 160 && mouseY <= 645)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 130 && mouseY >= 725 && mouseX <= 170 && mouseY <= 765)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 135 && mouseY >= 825 && mouseX <= 175 && mouseY <= 855)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 145 && mouseY >= 900 && mouseX <= 180 && mouseY <= 935)
			greeting.html('Incorrect!');
	  }
}