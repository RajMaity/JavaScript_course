// let a=1;
// console.log(a);
// let global_var="This is global variable";
// function fun(){
//     let local_variable="This is local variable";
// }
// fun();
// console.log(global_var);
// console.log(local_variable);


var global_var="This is a global variable";
function fun(){
    var local_var="This is a local variable";
    console.log(local_var);
    console.log(global_var);
}
fun();