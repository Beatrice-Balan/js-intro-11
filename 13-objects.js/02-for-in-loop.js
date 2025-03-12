const batch = {
    number: 11,
    program: 'SDET',
    numberOfStudents: 20
};

console.log(batch.number) // 11
console.log(batch.program) // SDET
console.log(batch.numberOfStudents) // 20
console.log(batch.startDate) // undefined -> you don't have it

// you want to pull ALL the propreties, values -> loop through all because you might have a ton of prop

// for in loop does NOT work, because let's say batch.key -> it looks for a property called "key"

// this is the correct format to output the values : 11, SDET, 20
for(const key in batch) {
    console.log(batch[key])
}

// this outputs the key values (labels): number, program, umberOfStudents
for(const key in batch) {
    console.log(key)
}

// see below output
for(const key in batch) {
    console.log(key, batch[key])
}
/*
number 11
program SDET
numberOfStudents 20
*/


const arr = ['Rome', 'Berlin', 'Chicago']

// if you loop through an array like an object, keys are the indexes
// BUT we do NOT do this stuff, at least not in general
for(const key in arr) {
    console.log(key, arr[key])
}

/* Output:
0 Rome
1 Berlin
2 Chicago
*/