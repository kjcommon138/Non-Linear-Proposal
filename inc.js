function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['inc.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();  
  
  if (md >= 39 && md <= 43 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(100, 350);
		inputSet = true;
  }
  
  if (md < 39 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 39 && md < 45) {
		//Wrong ans 1
		if(mouseX >= 120 && mouseY >= 470 && mouseX <= 155 && mouseY <= 510)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 126 && mouseY >= 570 && mouseX <= 160 && mouseY <= 620)
			greeting.html('Correct!');
		//Wrong ans 3
		if(mouseX >= 130 && mouseY >= 750 && mouseX <= 165 && mouseY <= 785)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 135 && mouseY >= 860 && mouseX <= 170 && mouseY <= 890)
			greeting.html('Incorrect!');
	  }
}