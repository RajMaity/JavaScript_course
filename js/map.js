//Initializing a Map object
let map1=new Map([[1,2],[2,3],[3,4]]);
console.log("Map1:");
console.log(map1);

let map2=new Map([["firstname","Raj"],["lastname","Maity"],["website", "Hello World"],["anything random","Hell yeah"]]);
console.log(map2);

//map.prototype.size
console.log("Size of map1= "+map1.size);
console.log("Size of map2= "+map2.size);

//map.prototype.set()
map1.set(4,5);
map1.set(5,6);
console.log("Size of map1 changed to: "+map1.size);
console.log(map1);

//map.prototype.has()
console.log(map1.has(4)); //it checks whether the specified key is present in the map
console.log(map2.has(10)); //false

//map.prototype.get()
console.log("The value of the key 4 is: "+map1.get(4));
console.log("The first name in map2 is: "+map2.get('firstname'));

//map.prototype.delete()
map2.delete("anything random"); //It deletes both the key and the value from the map
console.log("Size of map2 is changed to: "+map2.size);
console.log(map2); //"anything random" => "Hell yeah" is deleted

//map.prototype.clear()
map2.clear();
console.log(map2.size);
console.log(map2);

//map.prototype.entries()
console.log(map1.entries);
let it=map1.entries();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//map.prototype.keys()
console.log(map1.keys());   //iterator containing all the keys

//map.prototype.values()
console.log(map1.values()); //iterator conntaining all the values