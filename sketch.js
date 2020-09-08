function setup() {
  createCanvas(700, 120);
  }

  function draw() {
  background(204);
  for (var x = 20; x < width; x += 20) {
  var mx = mouseX / 10;
  var desplazamientoA = random(-mx, mx);
  var desplazamientoB = random(-mx, mx);
  line(x + desplazamientoA, 20, x - desplazamientoB, 100);
  }
  }
  