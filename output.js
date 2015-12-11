function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['output.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 73 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(1030, 825);
		inputSet = true;
  }
  
  if (md < 73 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 73) {
		//Wrong ans 1
		if(mouseX >= 1015 && mouseY >= 275 && mouseX <= 1040 && mouseY <= 320)
			greeting.html('Incorrect!');
		//Wrong ans 2
		if(mouseX >= 1015 && mouseY >= 505 && mouseX <= 1040 && mouseY <= 540)
			greeting.html('Incorrect!');
		//Right ans 4
		if(mouseX >= 1025 && mouseY >= 625 && mouseX <= 1060 && mouseY <= 665)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 1035 && mouseY >= 730 && mouseX <= 1075 && mouseY <= 780)
			greeting.html('Incorrect!');
	  }
}