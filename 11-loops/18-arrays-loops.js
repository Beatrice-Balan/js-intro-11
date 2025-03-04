/* TASK 13
find the first even number in the array
*/

const nums = [-1, 1, 3, 0, 2, 6, 8]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i])
        break
    }
}

// option 2 - somewhat preferred, more readable
let firstEven;

for(const num of nums) {
    if(num % 2 === 0) {
        firstEven = num[i];
        break;
    }
}

console.log(firstEven)

// TASK 14
// find first city with odd length

const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

for (const city of cities) {
    if(city.length % 2 !== 0) {
        console.log(city)
        break
    }
}

// option 2 - store into variable

cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for (const city of cities) {
    if(city.length % 2 !== 0) {
        firstOddLengthCity = city;
        break;
    }
}

console.log(firstOddLengthCity)


// TASK 15
// FIND ALL CITIES THAT HAVE LENGTH > 5

cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];

const citiesLength5 = [];

for(i = 0; i < cities.length; i++) {
    if(cities[i].length > 5) {
        citiesLength5.push(cities[i]);
    }
}

console.log(citiesLength5);
