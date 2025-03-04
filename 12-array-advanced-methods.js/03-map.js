// map() creates a new array by applying the provided function to each element in the array.
// it always returns the smae size array

array.map(function(element, index, array) {
    // code to execute
  });


// example
const numbers = [ 5, 3, 2, 20 ];

numbers.map((num) => {
    if(num % 2 === 0) return 'even';
    return 'odd'
});

// turnery operator

numbers = [ 5, 3, 2, 20 ];
const oddEven = numbers.map((num) => num % 2 === 0 ? 'even':'odd');

console.log(oddEven); // [ 'odd', 'odd', 'even', 'even' ]


// task -> each sentence's first word -> ['Good', 'I', 'It'];

const sentences = ['Good evening', 'I like arrays', 'It is Monday'];

const firstWord = sentences.map((sentence) => sentence.split(' ')[0])

// or firstWord = sentence.slice(0, sentence.indexOf(' '))

console.log(firstWord)


// Create a new array storing the given salaries with 2 decimals
// [1000.23, 5234.35, 721.98, 3452.50]

const salaries = [1000.2342, 5234.34533, 721.9786, 3452.50];

const salary2Decimals = salaries.map((salary) => salary.toFixed(2))

console.log(salary2Dec); // [ '1000.23', '5234.35', '721.98', '3452.50' ]