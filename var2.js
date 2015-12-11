function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['var2.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 26 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(200, 845);
		inputSet = true;
  }
  
  if (md < 26 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 26) {
		//Wrong ans 1
		if(mouseX >= 190 && mouseY >= 600 && mouseX <= 230 && mouseY <= 640)
			greeting.html('Incorrect!');
		//Wrong ans 2
		if(mouseX >= 615 && mouseY >= 600 && mouseX <= 660 && mouseY <= 645)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 195 && mouseY >= 730 && mouseX <= 240 && mouseY <= 775)
			greeting.html('Incorrect!');
		//Right ans 4
		if(mouseX >= 615 && mouseY >= 725 && mouseX <= 660 && mouseY <= 775)
			greeting.html('Correct!');
	  }
}