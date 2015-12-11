function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['testing2.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 53 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(40, 406);
		inputSet = true;
  }
  
  if (md < 53 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		//createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 53) {
		//Right ans 1
		if(mouseX >= 145 && mouseY >= 470 && mouseX <= 180 && mouseY <= 505)
			greeting.html('Correct!');
		//Wrong ans 2
		if(mouseX >= 160 && mouseY >= 570 && mouseX <= 180 && mouseY <= 610)
			greeting.html('Incorrect!');
		//Right ans 3
		if(mouseX >= 160 && mouseY >= 690 && mouseX <= 175 && mouseY <= 715)
			greeting.html('Correct!');
		//Right ans 4
		if(mouseX >= 160 && mouseY >= 785 && mouseX <= 200 && mouseY <= 815)
			greeting.html('Correct!');
		//Right ans 4
		if(mouseX >= 170 && mouseY >= 885 && mouseX <= 205 && mouseY <= 915)
			greeting.html('Correct!');
	  }
}