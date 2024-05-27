function bubble(arr){
    let swapped
    do{
        swapped = false;
        for(i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped = true;
            }
        }
    }while(swapped)
    return arr;
}

let arr = [1,3,5,6,3,2];
console.log(bubble(arr))