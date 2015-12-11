function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['validstring.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 8 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(40, 380);
		inputSet = true;
  }
  
  if (md < 8 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 8) {
		//Right ans 1
		if(mouseX >= 190 && mouseY >= 440 && mouseX <= 230 && mouseY <= 490)
			greeting.html('Correct!');
		//Wrong ans 2
		if(mouseX >= 205 && mouseY >= 560 && mouseX <= 245 && mouseY <= 605)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 210 && mouseY >= 675 && mouseX <= 240 && mouseY <= 715)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 210 && mouseY >= 780 && mouseX <= 250 && mouseY <= 810)
			greeting.html('Incorrect!');
		//Right ans 5
		if(mouseX >= 210 && mouseY >= 860 && mouseX <= 250 && mouseY <= 890)
			greeting.html('Correct!');
	  }
}