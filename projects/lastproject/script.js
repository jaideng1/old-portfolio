
var zeros = {
  r: new ComplexNumber(1,0),
  g: new ComplexNumber(-0.5,(Math.sqrt(3)/2)),
  b: new ComplexNumber(-0.5,-(Math.sqrt(3)/2))
}

var zoom = 150;
var resolution = 500;

var offset = {
  x: 0,
  y: 0
}

function setup() {
  createCanvas(500,500);
  colorMode(HSB, 100);
  noStroke()
  drawTheFractal(); 
}

function drawTheFractal() {
  
  for (let i = -250+offset.x; i < 250+offset.x; i++) {
    for (let j = -250+offset.y; j < 250+offset.y; j++) {
      let f = new Polynomal([1,0,0,-1]);
      let fp = new Polynomal(f.difr());
      let nxii = 0;
      let xn = new ComplexNumber(i/zoom,j/zoom);
      do {
        let y = f.evalulate(xn);
        let yp = fp.evalulate(xn);
        y.divide(yp);
        xn.subtraction(y);
        nxii++;
      } while (isGreaterThanNums(xn) == null && nxii < resolution);
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
