const students = ['John', 'Alex', 'Jessie', 'Jane', 'Omar', 'Omar'];

students.includes('John'); // true
students.includes('John', 1); // false, searching "John" AFTER the index provided, ignores its existence before that index
students.includes('Omar'); // true
students.includes('Max'); // false
students.includes('jane'); // false, case sensitive

/* 
.includes()
TASK: checks if the array has the specified element
ARGUMENTS: takes element as an argument
    NOTE: it can take a second argument which is the start index of the search
RETURN: boleean (true if it exists, otehrwise false)
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY? No
*/

students.indexOf('Jane'); // 3
students.lastIndexOf('Jane'); // 3

students.indexOf('Omar'); // 4
students.lastIndexOf('Omar'); // 5

students.indexOf('Heidi'); // -1 -> it has to return a number, since it doesn't exist, it returns an invalid index


/* 
.indexOf()
TASK: checks if the array has the specified element and returns the FIRST index of the matching element
ARGUMENTS: takes element as an argument
RETURN: it returns a valid index if the element exists
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY? No
*/

/* 
.lastIndexOf()
TASK: checks if the array has the specified element and returns the LAST index of the matching element
ARGUMENTS: takes element as an argument
RETURN: it returns a valid index if the element exists
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY? No
*/













