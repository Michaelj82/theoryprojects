let input = [3,1,1,1,2]; 


//merge sort function that gets rid of duplicates
function merge(left, right){
    const newList = [];

    while(left.length && right.length){
        if (left[0] > right[0]){

            newList.push(left.shift());
        }else{
            newList.push(right.shift());
        }
    }

    //if want to include duplicates, get rid of if statement in the below 2 while loops
    while (left.length){

        let value = left.shift();

        if (newList.includes(value) === true){

        }else{
            newList.push(value)

            
        }

    }

    while(right.length){
        let value = right.shift();

        if (newList.includes(value) === true){

        }else{
            newList.push(value)

            
        }    }

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


//binary search tree

const Node = (data) => {
    let state = {
        data: data,
        left: null,
        right: null,

    }


    return Object.assign(
     {data, left, right},
       
    )
}
