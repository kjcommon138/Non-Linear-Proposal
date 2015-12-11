function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['var1.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 45 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(175, 900);
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
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 45) {
		//Wrong ans 1
		if(mouseX >= 175 && mouseY >= 700 && mouseX <= 215 && mouseY <= 740)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 185 && mouseY >= 800 && mouseX <= 215 && mouseY <= 850)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 605 && mouseY >= 690 && mouseX <= 640 && mouseY <= 730)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 605 && mouseY >= 815 && mouseX <= 645 && mouseY <= 860)
			greeting.html('Correct!');
		//Wrong ans 5
		if(mouseX >= 915 && mouseY >= 690 && mouseX <= 945 && mouseY <= 730)
			greeting.html('Incorrect!');
		//Wrong ans 6
		if(mouseX >= 910 && mouseY >= 800 && mouseX <= 950 && mouseY <= 845)
			greeting.html('Incorrect!');
	  }
}