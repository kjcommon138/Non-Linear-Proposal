function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['string1.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 45 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(75, 415);
		inputSet = true;
  }
  
  if (md < 45 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 45) {
		//Right ans 1
		if(mouseX >= 140 && mouseY >= 470 && mouseX <= 180 && mouseY <= 515)
			greeting.html('Correct!');
		//Right ans 2
		if(mouseX >= 155 && mouseY >= 590 && mouseX <= 190 && mouseY <= 630)
			greeting.html('Correct!');
		//Right ans 3
		if(mouseX >= 165 && mouseY >= 685 && mouseX <= 195 && mouseY <= 730)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 165 && mouseY >= 790 && mouseX <= 205 && mouseY <= 825)
			greeting.html('Incorrect!');
		//Right ans 4
		if(mouseX >= 180 && mouseY >= 880 && mouseX <= 210 && mouseY <= 930)
			greeting.html('Correct!');
	  }
}