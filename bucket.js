function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['bucket.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 35 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(467, 412);
		inputSet = true;
  }
  
  if (md < 35 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 35) {
		//Wrong ans 1
		if(mouseX >= 101 && mouseY >= 532 && mouseX <= 150 && mouseY <= 575)
			greeting.html('Incorrect!');
		//Right ans 2
		if(mouseX >= 110 && mouseY >= 620 && mouseX <= 157 && mouseY <= 662)
			greeting.html('Incorrect!');
		//Wrong ans 3
		if(mouseX >= 112 && mouseY >= 722 && mouseX <= 170 && mouseY <= 762)
			greeting.html('Correct!');
		//Wrong ans 4
		if(mouseX >= 121 && mouseY >= 826 && mouseX <= 163 && mouseY <= 857)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 126 && mouseY >= 905 && mouseX <= 166 && mouseY <= 937)
			greeting.html('Correct!');
	  }
}