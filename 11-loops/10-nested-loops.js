// NESTED LOOP - Loop inception

for (let i = 1; i <= 3; i++) {
    console.log('Saturday!');
    for(let j = 1; j <= 2; j++) {
        console.log('Hey');
        for(let k = 0; k <= 2; k++) {
            console.log('.')
        }
    }
}

// task, print each name, and then each letter of each name

const names = ['Jane', 'Joe'];

for(let i = 0; i < names.length; i++) {
    let currentName = names[i]
    console.log(currentName);
    
    for(let j = 0; j < currentName.length; j++) {
        console.log(currentName[j])
    }
}


let count = 0;
for(let i = 1; i <= 3; i++) {
    console.log('i =', i);
    for(let j = 1; j <= 5; j++) {
        console.log('\tj =', j);
        count++;
        console.log(count);
    }
}

console.log(count); // 15

// Advice -> no one likes nested loops, don't use them if you don't have to

let sum = 0;

for(let i = 5; i <= 10; i++) {
    sum += i;
    for(let j = 2; j <= i; j++) {
        sum += j;
        if(j === 4) break;
    }
 if(sum >= 25) break;
}

console.log(sum); // 29