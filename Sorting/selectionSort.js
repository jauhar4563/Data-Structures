function selection(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i;
        for(let j = i + 1; j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}
let arr = [3,1,5,6,3,2,6,8];
console.log(selection(arr))