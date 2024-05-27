
function linearSearch(arr,value){
    for(let i = 0; i<arr.length;i++){
        if(arr[i]==value){
            return i
        }

    }
    return null;
}

let array = [1,3,4,5,8,10,14,25]
console.log(linearSearch(array,23))