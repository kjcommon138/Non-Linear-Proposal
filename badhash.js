function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['badhash.mp4']);  
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  
  if (md >= 80 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(95, 415);
		inputSet = true;
  }
  
  if (md < 80 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 80) {
		//Wrong ans 1
		if(mouseX >= 97 && mouseY >= 510 && mouseX <= 135 && mouseY <= 555)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 92 && mouseY >= 590 && mouseX <= 129 && mouseY <= 635)
			greeting.html('Correct!');
		//Wrong ans 3
		if(mouseX >= 95 && mouseY >= 680 && mouseX <= 145 && mouseY <= 725)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 107 && mouseY >= 842 && mouseX <= 132 && mouseY <= 890)
			greeting.html('Correct!');
	  }
}