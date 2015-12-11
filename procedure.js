function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['procedure.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();  
  
  if (md >= 137 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(30, 335);
		inputSet = true;
  }
  
  if (md < 137 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 137) {
		//Wrong ans 1
		if(mouseX >= 80 && mouseY >= 385 && mouseX <= 113 && mouseY <= 422)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 85 && mouseY >= 527 && mouseX <= 117 && mouseY <= 575)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 90 && mouseY >= 675 && mouseX <= 125 && mouseY <= 705)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 100 && mouseY >= 820 && mouseX <= 130 && mouseY <= 855)
			greeting.html('Incorrect!');
	  }
}