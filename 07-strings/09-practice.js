let str = 'Beatrice is practicing';
let shortStr = str1.slice(-5);
console.log(shortStr); //icing

// assume you have a string from teh srver so you don't know

let str1;

let res1 = str1.slice(-5);

console.log(res1);

/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Then, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str2 = 'Beatrice is practicing'

let newString = str2.slice(0, 3) + str2.slice(-3)
console.log(newString); 



