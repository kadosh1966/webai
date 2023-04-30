function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('miCanvas');
}

function draw() {
  background(255, 255, 255);

  strokeWeight(2);
  stroke(0, 0, 0);

  var xoff = 0.0;
  var yoff = 0.0;
  var r = 200;

  for (var x = 0; x <= width; x += 30) {
    for (var y = 0; y <= height; y += 30) {
      var ang = noise(xoff, yoff) * TWO_PI;
      var vx = x + r * cos(ang);
      var vy = y + r * sin(ang);
      line(x, y, vx, vy);
      xoff += 0.1;
    }
    yoff += 0.1;
  }
}
