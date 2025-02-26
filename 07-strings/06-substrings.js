let school = 'TechGlobal School';

let s1 = school.slice(0, 4); // 'Tech'
let s2 = school.slice(4, 10); // 'Global'
let s3 = school.slice(0, 10); // TechGlobal
let s4 = school.slice(11); // School


console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

console.log(school.slice(4)); // Global School -> it starts at index 4 and all the way to the end

// first index is included the last one is NOT


let city = 'Los Angeles';
city.substring(0, 3)

console.log(city.substring(0, 3)); // los
console.log(city.substring(4)); // los


// DIFFERENCE between .slice() and .substring()

console.log('Apple'.slice(2, 10)); // 'ple'
console.log('Apple'.substring(2, 10)); // 'ple'
// -> even if the last index doesn't exist, it will just assume you meant till the end

console.log('Orange'.slice(-10, 10)); // 'Orange'
console.log('Orange'.substring(-10, 10)); // 'Orange'

// counts backwords
console.log('Banana'.slice(1, -1)); // anan
console.log('Banana'.slice(1, -2)); // ana
console.log('Banana'.slice(0, -5)); // B
console.log('Banana'.slice(0, -6)); // empty space
console.log('12345'.slice(-1)); // 5

// any negative number is equivalent to 0
console.log('Banana'.substring(1, -1)); // B
console.log('Banana'.substring(0, -2)); // empty
console.log('Banana'.substring(3, -5)); // Ban


console.log('Chicago'. slice(-5, -2));
console.log('Chicago'. slice(-1, -4));

/* slice()
TASK: used to extract substrings from a string
ARGUMENTS: takes one or two index arguments
RETURN: returns a substring including startindex, excluding endIndex
    NOTE: it allows negative indexes and counts backwords
DOES NOT CHANGE ORIGINAL VALUE
STATIC OR INSTANCE?  Instance
*/



