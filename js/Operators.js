//addition
let a=2,b=3;
console.log(a+b);

//subtraction
console.log(b-a);

//multiplication
console.log(a*b);

//division
console.log(b/a);

//modulus
console.log(b%a);

//typeof
let str="GeeksforGeeks";
console.log(typeof(str));

var x = 6;
var y = 1;
// AND Operation
console.log("A & B = " + (x & y));
// OR operation
console.log("A | B = " + (x | y));
// NOT operation
console.log("~A = " + (~x));
// Sign Propagating Right Shift
console.log("A >> B = " + (x >> y));
// Zero Fill Right Shift
console.log("A >>> B = " + (x >>> y));
// Left Shift
console.log("A << B = " + (x << y));  

// ||(OR) Operator
console.log( 0 || 1 ); // 1
console.log( 1 || 3 ); // 1
console.log( null || true ); // true
console.log( -1 || -2 || -3 || -4); // -1