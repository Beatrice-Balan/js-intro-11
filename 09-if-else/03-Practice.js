/* TASK01
English exam
Passing score is 60 or above

We will write a program to check if we pass the exam or failed.

60 or above -> PASS
else -> FAIL

TEST WITH EDGE SCENARIOS: 59, 60, 61

Nice to test: 30, 100
Still nice to test: 'Hello', null, undefined
*/

let examScore =  60;

if(examScore >= 60) {
    console.log('PASS')
} 
else {
    console.log('FAIL')
}

// ONE STATEMENT LINE - short omitting curly braces - in this case you can omit curly braces

if(examScore >= 60)  console.log('PASS')
else console.log('FAIL')

/* TASK02
Retirement age is 65

We will write a program to check if we can be retired or not.

age is greater than or equal 65 -> YOU CAN GET RETIRED
else -> YOU CANNOT GET RETIRED!!!
*/

let age = 64;

if(age >= 65) {
    console.log('YOU CAN GET RETIRED')
}
else {
    console.log('YOU CANNOT GET RETIRED')
}