var answer = '[]';

function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['link.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
  window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();

  //Code for input box
  if (md >= 30 && !inputSet) {
		input = createInput('');
		input.position(597, 182);
		
		inputButton = createButton('submit');
		inputButton.position(757, 182);
		inputButton.mousePressed(checkAnswer);
		
		greeting = createElement('h2', saying);
		greeting.position(847, 182);
		
		textAlign(CENTER);
		textSize(50);
		
		inputSet = true;
	}
	
	//Code to remove input elements
	if(md < 30 && inputSet) {
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