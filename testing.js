function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['testing.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();  
  
  if (md >= 25 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(170, 725);
		inputSet = true;
  }
  
  if (md < 25 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 25) {
		//Wrong ans 1
		if(mouseX >= 155 && mouseY >= 290 && mouseX <= 195 && mouseY <= 330)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 170 && mouseY >= 415 && mouseX <= 205 && mouseY <= 450)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 170 && mouseY >= 520 && mouseX <= 200 && mouseY <= 560)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 175 && mouseY >= 625 && mouseX <= 200 && mouseY <= 665)
			greeting.html('Correct!');
	  }
}