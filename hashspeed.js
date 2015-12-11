function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['hashspeed.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 5 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(140, 955);
		inputSet = true;
  }
  
  if (md < 5 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 5) {
		//Wrong ans 1
		if(mouseX >= 145 && mouseY >= 335 && mouseX <= 195 && mouseY <= 381)
			greeting.html('Correct!');
		//Right ans 2
		if(mouseX >= 142 && mouseY >= 493 && mouseX <= 210 && mouseY <= 544)
			greeting.html('Correct!');
		//Wrong ans 3
		if(mouseX >= 152 && mouseY >= 673 && mouseX <= 202 && mouseY <= 720)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 160 && mouseY >= 880 && mouseX <= 205 && mouseY <= 926)
			greeting.html('Incorrect!');
	  }
}