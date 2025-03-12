/* task 1
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
*/

console.log('===========TASK01===========')

function firstPos(arr) {
    for(const num of arr) {
         if(num > 0) return num;
     }
 }

 // arrow function
 const firstPos = arr => {
    for(const num of arr) {
        if(num > 0) return num;
    }
 }


console.log(firstPos([0, 3, -9,  5, 8]))
console.log(firstPos([-2, 0, -7, 10, -5]))
console.log(firstPos([1, 2, 3, -2]))

// ARRAY FUNCTION OPTION

const firstPos2 = arr => arr.filter(ele => ele > 0)[0]

// find()
const firstPos3 = arr => arr.find(ele => ele > 0)

console.log(firstPos3([0, 3, -9,  5, 8]))
console.log(firstPos3([-2, 0, -7, 10, -5]))
console.log(firstPos3([1, 2, 3, -2]))


console.log('===========TASK02===========')

/*
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])  -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])                         -> -2
*/

const lastNeg1 = arr => arr.filter(ele => ele < 0).at(-1)
const lastNeg2 = arr => findLast(ele => ele < 0) // best option

const lastNeg3 = arr => {
    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] < 0) return arr[i]
    }
}

console.log(lastNeg([0, 3, -9,  5, 8])) // -9
console.log(lastNeg([-2, 0, -7, 10, -5])) // -5
console.log(lastNeg([1, 2, 3, -2])) // -2



console.log('===========TASK03===========')

/*
Write a function named as firstLongest() which takes an array as an argument and returns 
the longest element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> 
"yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> 
"Banana"
firstLongest(["purple", "yellow", "orange"])  -> 
"purple"
*/

const firstLongest = arr => {
    let longest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }
    }
    return longest
}


const firstLongest = arr => arr.reduce((longest, ele) => ele.length >= longest.length ? ele : longest)

// not prefererd, but an option. too much going on 
const firstLongest = arr => arr.sort((a, b) => b.length - a.length)[0]

console.log(firstLongest(["red", "blue", "yellow", "white"]))
console.log(firstLongest(["Apple", "Banana", "Orange"]))
console.log(firstLongest(["purple", "yellow", "orange"]))


console.log('===========TASK04===========')
/*
Write a function named as max() which takes an array as an argument and returns 
the gratest element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
*/

function max(arr) {
    let gratest = arr[0]
    for(let i = 0; i < arr.length; i++)        
        if (arr[i] > gratest) {
            gratest = arr[i]
    }
return gratest
}

console.log(max([0, 3, 5, 8])) // 8
console.log(max([1, 2, 3, -2])) // 3
console.log(max([1, 2, 3, -2])) //


console.log('===========TASK05===========')

/*
Write a function named as min() which takes an array as an argument and returns 
the smallest element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])  -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])                 -> 1
*/

// option 1
function min(arr) {
    let smallest = arr[0]
    for(let i = 0; i < arr.length; i++)        
        if (arr[i] < smallest) {
            smallest = arr[i]
    }
return smallest
}

// option 2
const min = arr => arr.reduce((smallest, ele) => ele < smallest ? ele : smallest)

// option 3 - but not preferred
const min = arr => arr.sort((a,b) => a-b)[0]

// option 4 - PREFERRED
const min = arr => Math.min(...arr)

console.log(min([0, 3, 5, 8])) 
console.log(min([-2, 0, -7, 10, -5])) 
console.log(min([1, 2, 3, 15])) 


console.log('===========TASK07===========')
// TASK 7

// find and keep common elements between 2 arrays


const commonElements = (arr1, arr2) => {
    let result = [];

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                result.push(arr1[i])
                break
            }
        }
}
return result
}
console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]))


// short solution

const commonElements = (arr1, arr2) => arr1.filter(ele => arr2.includes(ele))

console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]))

// what if there are duplicates of the duplicates?
//[1, 2, 2, 3], [2, 3, 4, 5] returns [ 2, 2, 3 ], but you want to return the duplicate ONCE [ 2, 3 ]


const commonElements = (arr1, arr2) => {
   return arr1.reduce((common, ele) => arr2.includes(ele) && !common.includes(ele) ? common.concat(ele) : common, [])
}
console.log(commonElements([1, 2, 2, 3], [2, 3, 4, 5]))