//Declaring arrays
var House=["1BHK","2BHK","3BHK","4BHK"]; //Initialization of Arrays
for(let i=0;i<House.length;i++)
	console.log(House[i]);
console.log(House[1]+" "+House[2]);

let length=House.length;   //Length of Arrays
console.log("Length of House array: "+length);

//Basic Array Methods
var number_arr=[1,2,3,4,5];

//Array.push()
number_arr.push(6);
console.log(number_arr);

//Array.unshift()
number_arr.unshift(0);
console.log(number_arr);

//Array.pop()
number_arr.pop();
console.log(number_arr);

//Array.shift()
number_arr.shift();
console.log(number_arr);

//Array.splice()
number_arr.splice(1,2,"first","second");
console.log(number_arr);