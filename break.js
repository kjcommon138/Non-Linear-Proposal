function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['break.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 210 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(650, 400);
		inputSet = true;
  }
  
  if (md < 210 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 210) {
		//Wrong ans 1
		if(mouseX >= 70 && mouseY >= 350 && mouseX <= 115 && mouseY <= 405)
			greeting.html('Correct!');
		//Right ans 2
		if(mouseX >= 805 && mouseY >= 275 && mouseX <= 835 && mouseY <= 325)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 80 && mouseY >= 670 && mouseX <= 130 && mouseY <= 700)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 795 && mouseY >= 570 && mouseX <= 835 && mouseY <= 615)
			greeting.html('Correct!');
	  }
}