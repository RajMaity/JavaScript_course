function sort(arr,n){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length-i;j++){
            if(arr[j]<arr[j-1]){
                let temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }
    }
    return arr;
}

function bubbleSort(){
    let n = prompt("Enter the size of array :"+"size of array");
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=prompt("Enter the element" + "elements");
    }
    let ans=sort(arr,n);
    console.log(ans);
}