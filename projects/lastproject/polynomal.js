

class Polynomal {
  constructor(nums) {
    this.nums = nums;
    this.backup = nums.slice();
    this.drvt = 0;

  }
  // copy(poly) {
  //   let xna = [];
  //   for (let j = 0; j < this.backup.length; j++) {
  //     this.nums.push(this.backup[j]);
  //   }
  // }
  difr() {
    let n = this.nums.slice();
    let a = [];
    n.pop();
    for (let i = 1; n.length > 0; i++) {
      let nx = n.pop();
      //Get Derivitive
      a.unshift((i*nx));
    }
    return a;
  }
  evalulate(x) {
    let a = new ComplexNumber(0,0);
    let n = this.nums.slice();
    for (let i = 0; n.length > 0; i++) {
      let nxa = n.pop();
      let c = x.powr(i);
      c.multiply(new ComplexNumber(nxa, 0));
      a.add(c);
    }
    return a;
  }
}

let arr = [3,1];
let polynml = new Polynomal(arr);


function npn(a,b) {
  return new ComplexNumber(a,b);
}

//ax^n
//n*ax^n-1
