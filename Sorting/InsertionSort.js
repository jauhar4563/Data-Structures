function insertion(arr){
    for(i = 1;i<arr.length;i++){
        let numberToInsert = arr[i];
        j = i-1
        while(i>j && arr[j]> numberToInsert){
            arr[j+1]= arr[j];
            j--;
        }
        arr[j+1] = numberToInsert;
    }
    return arr
}
const array = [3,4,2,1,6,3,5,3];
console.log(insertion(array)) 