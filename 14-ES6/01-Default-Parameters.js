/*Default parameters in JavaScript allow you to set default values for function parameters. 
If no value is provided for a parameter when the function is called, 
the default value is used.
*/

function sum(num1, num2 = 0) {
    return num1 + num2;
}

console.log(sum(3)) // 3 (3 + 0)


function greet(name = 'my dear', time = 'Morning') {
    if(time === 'evening') console.log('Good evening', name)
        else console.log('Good morning', name)
}

greet('Linda', 'evening') // Good evening Linda
greet('Linda') // Good morning Linda
greet() // Good evening Linda
