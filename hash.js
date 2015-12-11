function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['hash.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 60 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(25, 400);
		inputSet = true;
  }
  
  if (md < 60 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 60) {
		//Wrong ans 1
		if(mouseX >= 120 && mouseY >= 455 && mouseX <= 150 && mouseY <= 500)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 115 && mouseY >= 560 && mouseX <= 155 && mouseY <= 595)
			greeting.html('Correct!');
		//Wrong ans 3
		if(mouseX >= 120 && mouseY >= 655 && mouseX <= 160 && mouseY <= 685)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 125 && mouseY >= 760 && mouseX <= 165 && mouseY <= 790)
			greeting.html('Correct!');
		//Wrong ans 5
		if(mouseX >= 120 && mouseY >= 865 && mouseX <= 165 && mouseY <= 910)
			greeting.html('Incorrect!');
	  }
}