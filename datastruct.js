function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['datastruct.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 125 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(18, 57);
		inputSet = true;
  }
  
  if (md < 125 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 85) {
		//Wrong ans 1
		if(mouseX >= 60 && mouseY >= 125 && mouseX <= 92 && mouseY <= 160)
			greeting.html('Incorrect!');
		//Wrong ans 2
		if(mouseX >= 90 && mouseY >= 240 && mouseX <= 105 && mouseY <= 285)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 50 && mouseY >= 530 && mouseX <= 90 && mouseY <= 565)
			greeting.html('Incorrect!');
		//Right ans 4
		if(mouseX >= 40 && mouseY >= 810 && mouseX <= 90 && mouseY <= 855)
			greeting.html('Correct!');
	  }
}