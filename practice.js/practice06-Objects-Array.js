/* task 1
You are given a JS Array below:
•	Count how many users are older than 30   			-> 2
•	Count how many users live in Chicago     			-> 2
•	Count how many users live in IL     				-> 3
•	Count how many users’ emails has Gmail domain  		-> 2
•	Find and store all the users name younger than 35    		-> [ 'Tech', 'Jane', 'Alex' ]
•	Find average of ages of all users    				-> 28


*/

const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
  ];

  // Count how many users are older than 30

  /* Option 1
  let olderThan30 = 0;

  for(let user of users) {
    if(user.age > 30) olderThan30++;
  }

  console.log(olderThan30) // 2
  */

const olderThan30 = users.reduce((counter, user) => user.age > 30 ? counter + 1 : counter, 0)
console.log(olderThan30) // 2


// How many users live in chicago

const liveChicago = users.reduce((counter, user) => user.address.city === 'Chicago' ? counter + 1 : counter, 0)
console.log(liveChicago)


// Count how many users live in IL 

const liveIL = users.reduce((counter, user) => user.address.state === 'IL' ? counter + 1 : counter, 0)
console.log(liveIL)


// Count how many users’ emails has Gmail domain

const hasGmail = users.reduce((count, user) => user.email.includes('gmail') ? count + 1 : count, 0)
console.log(hasGmail) // 2

// loop
let gmailDomain = 0

for(let user of users) {
    const [username, emailDomain] = user.email.split('@')
    if (emailDomain === 'gmail.com') gmailDomain++
}

console.log(gmailDomain) // 2




// Find and store all the users name younger than 35    

// reduce BETTER:

const youngerThan35 = users.reduce((nameArr, user) => user.age < 35 ? nameArr.concat(user.firstName) : nameArr, [])
console.log(youngerThan35) 


// filter map
const youngUsers = users.filter(user => user.age < 35).map(user => user.firstName)

console.log(youngUsers)


//filter only, and push
const under35 = []

users.filter(user => {
    if (user.age < 35) {
        under35.push(user.firstName)
    }
})

console.log(under35)





// Find average of ages of all users 

const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length

console.log(averageAge) 




