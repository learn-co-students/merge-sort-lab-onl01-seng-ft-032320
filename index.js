

function findMinAndRemoveSorted(array) {
    return array.shift()
    
}

function findMinAndRemoveSortedBetweenTwo(array1,array2) {
    let arrayOneMin = array1[0];
    let arrayTwoMin = array2[0];

    if (arrayOneMin < arrayTwoMin) {
        return array1.shift()
    } else {
        return array2.shift()
    }
}


function merge(array1, array2) {
    let sorted = []
    while(array1.length != 0 && array2.length != 0) {
        let currentMin = findMinAndRemoveSortedBetweenTwo(array1, array2)
        sorted.push(currentMin)
    }
    return sorted.concat(array1).concat(array2)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0,midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    if (array.length < 2) {
        return array
        
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}

