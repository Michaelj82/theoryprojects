let input = [3,1,1,1,2,7,9,4,6,5,77,66,4,22,45,78]; 


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
//takes sorted list

//Node Class factory
const Node = (data, left, right) => {
    let state = {
        data: data,
        left: left,
        right: right,

    }


    return Object.assign(
     {state, data, left, right},

    )
}

const treeBuilder = () => ({
    buildTree: function(array, start, end){

        if (start === end){
            return null;
        }

        
        let middleIndex = Math.floor((array.length)/2)

        let middle = array[middleIndex]
        
        let node = Node(middle, null, null);

        let leftArray = array.slice(0, middleIndex-1)

        let rightArray = array.slice(middleIndex+1, -1)


        node.left = this.buildTree(leftArray, 0, leftArray.findIndex(leftArray[middleIndex-1]))
        node.right = this.buildTree(rightArray, rightArray.findIndex(rightArray[middleIndex+1]), (rightArray[-1]))

        return node

    }
})
//Tree class factory

const Tree = (list) => {
    let state = {
        list: list,
    }



    return Object.assign(
    {state},
    treeBuilder()

    )    
}

let tree = Tree()
tree.list = bruh
let treeArray = tree.list


tree.buildTree(treeArray, 0, treeArray.findIndex(treeArray[-1]))

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  prettyPrint(tree)