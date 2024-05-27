function binarySort(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    for(let i=leftIndex;leftIndex<=rightIndex;i++){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if(arr[middleIndex]==target){
            return middleIndex;
        }
        else{
            if(target>arr[middleIndex]){
                leftIndex = middleIndex+1;
            }
            else{
                rightIndex = middleIndex-1;
            }
        }
    }
    return -1; 
}
let array = [1,3,4,5,8,10,14,25]
console.log(binarySort(array,25))