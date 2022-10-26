console.log('bruh')
let input = [5,9,3,6,10,5,76,3,48,76,2]; 

function merge(left, right){
    const newList = [];

    while(left.length && right.length){
        if (left[0] > right[0]){
            newList.push(left.shift());
        }else{
            newList.push(right.shift());
        }
    }
    while (left.length){
        newList.push(left.shift())
    }

    while(right.length){
        newList.push(right.shift())
    }

    return newList
}

function mergeSort(originalList){

    if (originalList.length <= 1){
        return originalList
    }else{

        const half = Math.ceil(originalList.length/2);

        const firstHalf = originalList.slice(0, half)
        const secondHalf = originalList.slice(half)

        return merge(mergeSort(firstHalf),mergeSort(secondHalf))


    }


}





let bruh = mergeSort(input)
console.log(bruh)