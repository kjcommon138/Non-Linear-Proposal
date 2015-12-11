function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['worst.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 148 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(425, 455);
		inputSet = true;
  }
  
  if (md < 148 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 148) {
		//Wrong ans 1
		if(mouseX >= 36 && mouseY >= 520 && mouseX <= 66 && mouseY <= 553)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 35 && mouseY >= 658 && mouseX <= 63 && mouseY <= 695)
			greeting.html('Correct!');
		//Wrong ans 3
		if(mouseX >= 35 && mouseY >= 857 && mouseX <= 61 && mouseY <= 857)
			greeting.html('Correct!');
	  }
}