function preload() {
  
}

function setup() {
  setupVid(1600, 1000, ['intro.mp4']);
  back.mousePressed(mindmap);
}

function mindmap() {
	window.location.replace('anotherMind.html');
}

function draw() {
  drawVid();
}