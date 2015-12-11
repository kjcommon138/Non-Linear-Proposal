function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['fastenough.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();  
  if (md >= 16 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(190, 785);
		inputSet = true;
  }
  
  if (md < 16 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 16) {
		//Wrong ans 1
		if(mouseX >= 158 && mouseY >= 280 && mouseX <= 195 && mouseY <= 330)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 160 && mouseY >= 398 && mouseX <= 200 && mouseY <= 440)
			greeting.html('Correct!');
		//Wrong ans 3
		if(mouseX >= 170 && mouseY >= 493 && mouseX <= 213 && mouseY <= 532)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 185 && mouseY >= 610 && mouseX <= 221 && mouseY <= 650)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 195 && mouseY >= 705 && mouseX <= 240 && mouseY <= 750)
			greeting.html('Incorrect!');
	  }
}