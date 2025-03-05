/*some()

Tests if at least one element in an array passes a condition (returns true).
Stops checking as soon as it finds one match.
Returns true if any element satisfies the condition, otherwise false.

Syntax:
array.some(callback(element, index, array))

every()
Tests if all elements in an array pass a condition.
Stops checking as soon as it finds one element that doesn’t satisfy the condition.
Returns true if all elements satisfy the condition, otherwise false.

It stops as soon as it encounters the first element that fails the condition. 
This behavior is called short-circuiting, which helps improve performance.

Syntax:
array.every(callback(element, index, array))

BOTH return a boolean value:

every() returns:
true if all elements in the array satisfy the condition.
false if any element fails the condition.

some() returns:
true if at least one element in the array satisfies the condition.
false if none of the elements satisfy the condition.
*/


const numbers = [1, 2, 3, 4, 5];

// check if all the numbers are are positive

let flag = true; // i assume all the numbers are positive

for(const num of numbers) {
    if(num <= 0) {
        flag = false;
        break; // no need to check the rest since you're checking if ALL match
    }
}
console.log(flag)

numbers.forEach((x) => {
    if(x <= 0) flag = false
})

// every

let allPositive = numbers.every((x) => x > 0)
console.log(allPositive)


const cities = ['Chicago', 'Berlin', 'Rome']

// check if any city has 6 letters -> true

let some6 = cities.some((x) => x.length === 6)
console.log(some6); // true