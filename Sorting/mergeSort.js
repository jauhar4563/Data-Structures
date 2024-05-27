function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    const sortArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortArr.push(leftArr.shift())
        }else{
            sortArr.push(rightArr.shift())
        }
    }
    return [...sortArr, ...leftArr , ...rightArr]
}

const arr = [4,6,8,5,2,1,7];
console.log(mergeSort(arr));