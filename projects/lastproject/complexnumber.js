class ComplexNumber {
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }
  add(num) {
    this.a = this.a+num.a;
    this.b = this.b+num.b;

  }
  subtraction(num) {
    this.a = this.a-num.a;
    this.b -= num.b;
  }
  multiply(num) {
    let a = this.a;
    let b = this.b;
    let c = num.a;
    let d = num.b;
    this.a = (a*c) - (b*d);
    this.b = (a*d) + (b*c);
  }
  divide(num) {
    let a = this.a;
    let b = this.b;
    let c = num.a;
    let d = num.b;
    this.a = ((a*c) + (b*d))/((c*c) + (d*d));
    this.b = ((b*c) - (a*d))/((c*c) + (d*d));
  }
  powr(x) {
    let a = this.a;
    let b = this.b;
    let ncn = new ComplexNumber(a,b);
    if (x == 0) {
      return new ComplexNumber(1,0);
    }
    for (let i = 1; i < x; i++) {
      ncn.multiply(new ComplexNumber(a,b));
    }
    return ncn;
  }
  dist(other) {
    let a = this.a;
    let b = this.b;
    let c = other.a;
    let d = other.b;
    let a1 = 0;
    let b1 = 0;
    if (a > c) {
      a1 = a-c;
    } else {
      a1 = c-a;
    }
    if (b > d) {
      b1 = b-d;
    } else {
      b1 = d-b;
    }
    return Math.sqrt((a1*a1)+(b1*b1))
  }
}
