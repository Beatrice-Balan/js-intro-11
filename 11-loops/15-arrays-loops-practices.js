/* TASK 9
Find the sum of the first 3 and last 3 elements
*/

// option 1
const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];

let first3 = nums.slice(0, 3);
let last3 = nums.slice(-3);
let sum = 0;

for(let i = 0; i < 3; i++) {
   sum += first3[i] + last3[i];
}

console.log(sum);

