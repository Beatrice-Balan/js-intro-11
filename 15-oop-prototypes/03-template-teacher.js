// teacher prototype with fname, lname, age, field properties.

// BEFORE ES6:

function Teacher(fname, lname, age, field) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field = field;
}

// add 2 prototype methods (void and logs)

Teacher.prototype.teach = function () {
    console.log(`${this.fname} teaches ${this.field}.`)
}

Teacher.prototype.giveHomework = function () {
    console.log(`${this.fname} gives homework.`)
}


// Create 4 Teacher Objects/Instances
const teacher1 = new Teacher('John', 'Doe', 35, 'Math');
const teacher2 = new Teacher('Jane', 'Donnely', 55, 'English');
const teacher3 = new Teacher('Sarah', 'Elly', 43, 'Art');
const teacher4 = new Teacher('Adam', 'Bayer', 33, 'Science');


const teachers = [teacher1, teacher2, teacher3, teacher4];

// Find the oldest Teacher -> Jane

let oldestTeacher = teachers.reduce((oldest, curr) => {
    if(curr.age > oldest.age) oldest = curr
    return oldest
}, teachers[0])

console.log('Oldest Teacher is', oldestTeacher.fname)



// Find the average age of the teachers -> 39

let teachersAvgAge = teachers.map(teacher => teacher.age).reduce((sum, age) => sum + age, 0)/ teachers.length

console.log(teachersAvgAge)

const sumOfAges = teachers.reduce((acc, curr) => acc += curr.age, 0)
console.log( 'Sum of ages:', sumOfAges)
console.log( 'Avg of ages:', sumOfAges / 2)

// Find the youngest teacher -> Adam Bayer

let youngestTeacher = teachers.reduce((youngest, curr) => {
    if (curr.age < youngest.age) youngest = curr
    return youngest
}, teachers[0])

console.log(`Youngest Teacher is ${youngestTeacher.fname} ${youngestTeacher.lname}`)


// Get all the fullnames of the teachers -> ['John Doe', 'Jane Donnely', 'Sarah Elly', 'Adam Bayer']

let allTeachersnames = teachers.map((x) => `${x.fname} ${x.lname}`)
console.log(allTeachersnames)




/*
teacher1.teach()
teacher2.teach()
teacher3.teach()
teacher4.teach()


teacher1.giveHomework()
teacher2.giveHomework()
teacher3.giveHomework()
teacher4.giveHomework()
*/