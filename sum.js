function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['sum.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 34 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(53, 286);
		inputSet = true;
  }
  
  if (md < 34 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 34) {
		//Wrong ans 1
		if(mouseX >= 60 && mouseY >= 365 && mouseX <= 90 && mouseY <= 400)
			greeting.html('Correct!');
		//Right ans 2
		if(mouseX >= 75 && mouseY >= 480 && mouseX <= 100 && mouseY <= 520)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 65 && mouseY >= 575 && mouseX <= 100 && mouseY <= 605)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 70 && mouseY >= 745 && mouseX <= 105 && mouseY <= 790)
			greeting.html('Incorrect!');
	  }
}