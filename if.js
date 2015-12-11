var answer = 'TURN LEFT';

function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['ProgQuizIfStatements.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();  

  //Code for input box
  if (md >= 51.5 && md < 55  && !inputSet) {
		input = createInput('');
		input.position(860, 960);
		
		inputButton = createButton('submit');
		inputButton.position(1025, 960);
		inputButton.mousePressed(checkAnswer);
		
		greeting = createElement('h2', saying);
		greeting.position(860, 910);
		
		textAlign(CENTER);
		textSize(50);
		
		inputSet = true;
	}
	
	//Code to remove input elements
	if(md < 51.5 && inputSet) {
		input.remove();
		inputButton.remove();
		greeting.remove();
		inputSet = false;
	}
	
}

//CODE FOR INPUT BOX
function checkAnswer() {
  if(input.value().trim().toUpperCase() == answer)
	greeting.html('Correct!');
  else
	greeting.html('Incorrect!');
}

//THIS IS THE CODE FOR ACTION mouseClicked()
function mouseClicked() {
      //Code for xy coordinate multiple choice
      if (md > 51.5 && md < 55) {
		//Turn Left Choice
		if(mouseX >= 690 && mouseY >= 740 && mouseX <= 825 && mouseY <= 810)
			greeting.html('Correct!');
		//Go home Choice
		if(mouseX >= 690 && mouseY >= 845 && mouseX <= 825 && mouseY <= 895)
			greeting.html('Incorrect!');
		//Turn Right Choice
		if(mouseX >= 1090 && mouseY >= 740 && mouseX <= 1230 && mouseY <= 810)
			greeting.html('Incorrect!');
		//I don't know Choice
		if(mouseX >= 1090 && mouseY >= 845 && mouseX <= 1250 && mouseY <= 895)
			greeting.html('Incorrect!');
	  }
}