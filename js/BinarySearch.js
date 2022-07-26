function search(arr,target){
    let start=0,end=arr.length-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(target<arr[mid])
        end=mid-1;
        else if(target>arr[mid])
        start=mid+1;
        else
        return mid;
    }
    return -1;
}

function binarySearch(){
    let n=prompt("Enter the length of array:" +"n");
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=prompt("Enter the element:");
    }
    let target=prompt("Enter the target element:" +"target");
    let index=search(arr,target);
    alert("Index of the target element is: "+index);
    console.log("Index of the target element is: "+index);
}