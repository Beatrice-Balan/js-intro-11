/*
Create a function takes a number and returns true if the numebr is even, if odd return false
*/

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(13));
console.log(isEven(-6));



/*
Write a function named initials which takes 2 arguments as fname and lname and 
return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.
*/

function initials(fName, lName) {
    return `${fName[0]}.${lName[0]}.`
}

console.log(initials('John', 'Doe'))
console.log(initials('Anna', 'Maria'))


/*
same but make it with lowercase uppercase
*/

function inits(fullname) {
    return `${fullname[0].toUpperCase()}${fullname.split(' ')[1][0].toUpperCase()}`;
  }  

console.log(inits('john doe'))


function inits(fullname) {
    return `${fullname[0].toUpperCase()}${fullname.split(' ')[1][0].toUpperCase()}`;
  }

// solution 1


function inits(fullname) {
    return `${fullname[0].toUpperCase()}${fullname[fullname.indexOf(' ') + 1].toUpperCase()}`;
  }
  
  let fullname = 'alexander mark';
  console.log(inits(fullname));

