function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['string.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
  
  if (md >= 75 && !inputSet) {
	    greeting = createElement('h2', saying);
		greeting.position(7, 385);
		inputSet = true;
  }
  
  if (md < 75 && inputSet) {
	    greeting.remove();
		inputSet = false;
  }
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {

		//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
      //Code for xy coordinate multiple choice
      if (md >= 75) {
		//Right ans 1
		if(mouseX >= 45 && mouseY >= 430 && mouseX <= 85 && mouseY <= 470)
			greeting.html('Correct!');
		//Right ans 2
		if(mouseX >= 50 && mouseY >= 540 && mouseX <= 85 && mouseY <= 575)
			greeting.html('Correct!');
		//Wrong ans 3
		if(mouseX >= 60 && mouseY >= 650 && mouseX <= 105 && mouseY <= 670)
			greeting.html('Incorrect!');
		//Wrong ans 4
		if(mouseX >= 55 && mouseY >= 740 && mouseX <= 100 && mouseY <= 780)
			greeting.html('Incorrect!');
		//Wrong ans 5
		if(mouseX >= 60 && mouseY >= 865 && mouseX <= 100 && mouseY <= 905)
			greeting.html('Incorrect!');
	  }
}