// NOT (!), OR (||), AND (&&)

console.log( 3 ** 2 < 10 && !false && (5 % 2) == !false); //true && true && true -> true

let b1 = !(!(('Hello' === 'Hello' || 5 > 5) && (3 * 5) >= 3 ** 4));
console.log(b1); // false

// !(!( True || False) && false) -> !(!(True && false) -> !(!false) -> !(true) -> false

let age = 15;
if(age >= 16) {
    // let them get DL
} else {
    // not allowed
}

// 16 <= age is teh same as age >= 16 same as !(age < 16)

let loggedIn = true;
let enoughBalance = true

if(loggedIn && enoughBalance) {
    // allow transaction
} else {
    // require them to log in
}

if(!loggedIn) {
    // require them to log in
} else {
    // allow transaction
}








