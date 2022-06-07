//Preferred method of Object declaration in js
let student={
	name:"Raj Maity",            //key: property
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
bird.displayInfo=function(){
	console.log("This function displays info!!");
}
console.log("Can crow fly: "+bird.fly);
console.log("Number of wings: "+bird.wings);
console.log("Number of beak: "+bird.beak);
bird.displayInfo();

//constructors
function bike(model,company){
	this.model= model;
	this.company= company;
}
var kawasaki=new bike("ninja300","Kawasaki");
var honda=new bike("honda cbr 150r","Honda");
console.log(kawasaki.model);
console.log(honda.company);