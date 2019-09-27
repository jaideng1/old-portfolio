
var zeros = {
  r: new ComplexNumber(1,0),
  g: new ComplexNumber(-0.5,(Math.sqrt(3)/2)),
  b: new ComplexNumber(-0.5,-(Math.sqrt(3)/2))
}

function setup() {
  createCanvas(500,500);
  colorMode(HSB, 100);
  noStroke()
  drawthething();
}

function drawthething() {

  for (let i = -250; i < 250; i++) {
    for (let j = -250; j < 250; j++) {
      let f = new Polynomal([1,0,0,-1]);
      let fp = new Polynomal(f.difr());
      let nxii = 0;
      let xn = new ComplexNumber(i/150,j/150);
      do {
        let y = f.evalulate(xn);
        let yp = fp.evalulate(xn);
        y.divide(yp);
        xn.subtraction(y);
        nxii++;
      } while (isGreaterThanNums(xn) == null && nxii < 100);
      let color = isGreaterThanNums(xn) || 0;

      fill(color,100,100);
      rect((i+250),(j+250),1,1);

    }
  }
}

var res = 0.5;

function isGreaterThanNums(c) {

  if (c.dist(zeros.r) <= res) {

    return 0;
  }
  if (c.dist(zeros.g) <= res) {
    return 66;
  }
  if (c.dist(zeros.b) <= res) {
    return 33;
  }
  return null;
}


function draw() {

}
