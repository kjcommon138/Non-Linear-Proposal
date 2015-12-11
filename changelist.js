var answer = 'stooges[2] = Shemp';

function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['changelist.mp4']);  
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();

  //Code for input box
  if (md >= 5 && !inputSet) {
		input = createInput('');
		input.position(110, 845);
		
		inputButton = createButton('submit');
		inputButton.position(297, 845);
		inputButton.mousePressed(checkAnswer);
		
		greeting = createElement('h2', saying);
		greeting.position(375, 845);
		
		textAlign(CENTER);
		textSize(50);
		
		inputSet = true;
	}
	
	//Code to remove input elements
	if(md < 5 && inputSet) {
		input.remove();
		inputButton.remove();
		greeting.remove();
		inputSet = false;
	}
	
}

//CODE FOR INPUT BOX
function checkAnswer() {
  if(input.value().trim() == answer)
	greeting.html('Correct!');
  else
	greeting.html('Incorrect!');
}

function mouseClicked() {
			//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
}