
// count even and positive nums -> 2

const numbers = [-2, -5, 3, 0, 5, 8, 10];

let posEven = numbers.reduce((acc, curr) => {
    if( curr > 0 && curr % 2 === 0) return acc + 1
    return acc
}, 0)

console.log(posEven)


// sum of numbers of inner arrays -> [ 6, 35, 300]
const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ];

// you can do an "inception" nested loop

const result = [];

for(const innerArr of nums) {
    let sum = 0;
    for(const num of innerArr) {
        sum += num;
    }
    result.push(sum);
}
console.log(result);



nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ];



  let sumArr = nums.map(innerArray => {
    return innerArray.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  });
  
  console.log(sumArr);


  // find all the words that have 5 letters: ['HELLO', 'APPLE',]

const words = [ 'hello', 'Tuesday', 'HEYY', 'apple']

// preferable because it's just one loop
words = [ 'hello', 'Tuesday', 'HEYY', 'apple']

const result1 = [];

for(const word of words) {
    if(word.length === 5 ) result1.push(word.toUpperCase())
}

console.log(result1)

// you can also use forEach()
words.forEach((x) => {
    if(x.length === 5) result1.push(word.toUpperCase())
})

//  filter() and map() - 2 loops so not preferable
upper5LetterWords = words.filter((word) => word.length === 5).map((word) => word.toUpperCase());
  
console.log(upper5LetterWords);


// using reduce()

words = [ 'hello', 'Tuesday', 'HEYY', 'apple']
const result3 = words.reduce((acc, curr) => {
    if(curr.length === 5) {
        acc.push(curr.toUpperCase());
    }
    return acc;
}, []);

console.log(result3)