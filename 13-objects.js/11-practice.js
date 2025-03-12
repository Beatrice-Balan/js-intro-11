const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching Movies'],
    examScores: {
        first: 60,
        second: 75,
        third: 80,
        fourth: 100,
        final: 90
    }
}

console.log(student)

// Print hobbies
// Print examScores
//Print FIRST hobby
// average of the exams

console.log(student.hobbies)
console.log(student.examScores)
console.log(student.hobbies[0])

// option if you know how many items you have
// console.log((student.examScores.midterm + student.examScores.final) / 2) // 75

const allExamvalues = Object.values(student.examScores) // [60, 75 80, 100, 90]
let avg = allExamvalues.reduce((acc, curr) => acc + curr, 0) / allExamvalues.length

console.log(`Average of exam scores: ${avg}`) // 81