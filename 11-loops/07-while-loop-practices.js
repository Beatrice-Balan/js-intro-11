// output all the even numebrs from 0 to 50 (both inclusive) -> 0, 2, 4, 6, 8 ... 50

// WHILE loop
let i = 0 // this is global, you can't re-declare it

while(i <= 50) {
    if(i % 2 === 0) console.log(i)
        i++
}

console.log(i) // 51 it will print even numbers between 0 and 50 and then also 51

// or
while(i <= 50) {
    console.log(i)
    i += 2
}


// FOR loop solution
for(let i = 0; i <= 50; i+=2) {
    console.log(i)
}

// or
for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0) console.log(i)
}

console.log(i) // reference error, i is not defined


// sum of numbers 3 - 7 (both inclusive) -> 3 + 4 + 5 + 6 + 7

// for loop
let sum = 0

for( let i = 3; i <= 7; i++) {
    sum += i
}

console.log(sum)

// while loop
let sum2 = 0
let num = 3
while(num <= 7) {
    sum2 += i
    num++
}

console.log(sum2)