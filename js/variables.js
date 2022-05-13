let a=1;
console.log(a);
let global_var="This is global variable";
function fun(){
    let local_variable="This is local variable";
}
fun();
console.log(global_var);
console.log(local_variable);