function findLargest(numbers){
    let x=numbers[0];
    if(numbers.length === 0){
        return undefined;
    }
    for(i=1;i<numbers.length;i++){
        if (numbers[i]>x){
            x=numbers[i];
        }
}
console.log(x);
}
function findSmallest(numbers){
    
    let x=numbers[0];
    if(numbers.length === 0){
        return undefined;
    }
    for (i=1;i<numbers.length;i++){
        if (numbers[i]<x){
            x=numbers[i];
        }
    }
    console.log(x);
}


findLargest([3, 17, 8, 22, 5])
findSmallest([3, 17, 8, 22, 5]) 
