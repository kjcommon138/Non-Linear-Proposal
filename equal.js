function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['equal.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 168 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(182, 946);
		inputSet = true;
  }
  
  if (md < 168 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 168) {
		//Wrong ans 1
		if(mouseX >= 160 && mouseY >= 455 && mouseX <= 195 && mouseY <= 500)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 165 && mouseY >= 560 && mouseX <= 200 && mouseY <= 605)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 170 && mouseY >= 670 && mouseX <= 210 && mouseY <= 710)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 185 && mouseY >= 780 && mouseX <= 230 && mouseY <= 820)
			greeting.html('Correct!');
		//Wrong ans 5
		if(mouseX >= 186 && mouseY >= 860 && mouseX <= 220 && mouseY <= 905)
			greeting.html('Incorrect!');
	  }
}