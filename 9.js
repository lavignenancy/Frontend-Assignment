function findCheck(arr,target){
for(i=0;i<arr.length;i++){
    if(arr[i]===target){
        console.log('found it!');
        return;
    }
}
console.log("Not found!");
}
findCheck([1,2,3,4,5],7);
findCheck([1,2,3,4,5],4);
