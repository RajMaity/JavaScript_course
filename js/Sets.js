//Initialization of set
let set1=new Set("Foooood");
console.log("Size of set1 is: "+set1.size);
console.log(set1);

//Set.prototype.add()
set1.add("Food").add("Water").add("Air");
console.log("Now the size is: "+set1.size);
console.log(set1);

//Set.prototype.delete()
set1.delete("Water");
set1.add("Animal").add("Animal");
console.log(set1);

//Set.prototype.clear()
set1.clear();
console.log(set1);

//Set.prototype.enteries()
let set2=new Set();
set2.add(50);
set2.add(40);
set2.add(30);
set2.add(20);
set2.add(10);
console.log(set2);
let getEnteriesArry=set2.entries();
console.log(getEnteriesArry.next().value);
console.log(getEnteriesArry.next().value);
console.log(getEnteriesArry.next().value);

//Set.prototype.has()
console.log(set2.has(50));

//set.prototype.values()
console.log(set2.values());
var it=set2.values();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//set.prototype.keys()
console.log(set2.keys());   //same as set.prototype.values() 
