//Preferred method of Object declaration in js
let student={
	name:"Raj Maity",
	marks:91,
	school:"Delhi Public School",
};
console.log("My name is: "+student.name);
console.log("My marks in 12th was: "+student.marks);

//2nd method
let bird=new Object();
bird.wings=2;
bird.name="Crow";
bird.beak=1;
bird.fly=true;
console.log("Can crow fly: "+bird.fly);
console.log("Number of wings: "+bird.wings);
console.log("Number of beak: "+bird.beak);