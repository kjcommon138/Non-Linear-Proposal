function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['indexsize.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 29 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(810, 330);
		inputSet = true;
  }
  
  if (md < 29 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 29) {
		//Wrong ans 1
		if(mouseX >= 136 && mouseY >= 336 && mouseX <= 177 && mouseY <= 390)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 136 && mouseY >= 445 && mouseX <= 176 && mouseY <= 505)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 139 && mouseY >= 580 && mouseX <= 189 && mouseY <= 631)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 140 && mouseY >= 690 && mouseX <= 180 && mouseY <= 745)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 142 && mouseY >= 810 && mouseX <= 186 && mouseY <= 850)
			greeting.html('Incorrect!');
	  }
}