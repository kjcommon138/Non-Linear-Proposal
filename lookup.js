function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['lookup.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 30 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(450, 530);
		inputSet = true;
  }
  
  if (md < 30 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 30) {
		//Wrong ans 1
		if(mouseX >= 126 && mouseY >= 536 && mouseX <= 170 && mouseY <= 580)
			greeting.html('Correct!');
		//Right ans 2
		if(mouseX >= 135 && mouseY >= 640 && mouseX <= 170 && mouseY <= 670)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 140 && mouseY >= 730 && mouseX <= 165 && mouseY <= 760)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 140 && mouseY >= 825 && mouseX <= 180 && mouseY <= 865)
			greeting.html('Incorrect!');
	  }
}