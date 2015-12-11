var answer = 'url, end_point';

function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['return.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();

  //Code for input box
  if (md >= 195 && !inputSet) {
		input = createInput('');
		input.position(666, 625);
		
		
		inputButton = createButton('submit');
		inputButton.position(850, 625);
		inputButton.mousePressed(checkAnswer);
		
		greeting = createElement('h2', saying);
		greeting.position(1010, 625);
		
		textAlign(CENTER);
		textSize(50);
		
		inputSet = true;
	}
	
	//Code to remove input elements
	if(md < 195 && inputSet) {
		input.remove();
		inputButton.remove();
		input2.remove();
		greeting.remove();
		inputSet = false;
	}
	
}

//CODE FOR INPUT BOX
function checkAnswer() {
	if((input.value().trim() == answer) && (input2.value().trim() == answer2))
		greeting.html('Correct!');
	else
		greeting.html('Incorrect!');
}

function mouseClicked() {
			//Tests for X and Y
		createDiv('Mouse X :' + mouseX + 'Mouse Y :' + mouseY);
}