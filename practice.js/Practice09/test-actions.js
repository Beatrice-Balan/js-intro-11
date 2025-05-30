import { Actions } from './Actions.js'

/*
Create a test method called as test1()
- Invoke visitUrl(), login() and validateTitle() synchronously in this method (use then() and catch() methods)
- Validate the output is as below

    OUTPUT:
    URL visited successfully
    Logged in successfully
    Title validated successfully
*/

// Individual catch blocks for each async method executed
function test1() {
    Actions.visitUrl('https://www.techglobalschool.com')
      .then((data) => {
        console.log(data);
        Actions.login('TechGlobal', 'Test1234')
          .then((data)=> {
            console.log(data);
            Actions.validateTitle('Batch11')
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              })
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
 test1();
  
  // One catch block to handle all the async methods and possible failures may come up


  function test2() {
    Actions.visitUrl('https://www.techglobalschool.com')
        .then((data) => {
            console.log(data)
            return Actions.login('TechGlobal', 'Test1234')
        })
        .then((data) => {
            console.log(data)
            return Actions.validateTitle('Batch11')
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
  }

  test2()


// you add console log because you want to see the results, otherwise you don't need it
  async function test3() {
    try {
        console.log(await Actions.visitUrl('https://www.techglobalschool.com'));
        console.log(await Actions.login('TechGlobal', 'Test1234'));
        console.log(await Actions.validateTitle('Batch11'));
    } catch (err) {
        console.log(err);
    }
}

// test3()


// same, you store in variable, and then console.log cso you can see results in browser
async function test4() {
    try {
        const urlVisitStatus = await Actions.visitUrl('https://www.techglobalschool.com');
        console.log(urlVisitStatus);
        
        const loginStatus = await Actions.login('TechGlobal', 'Test1234');
        console.log(loginStatus);
        
        const titleValidationStatus = await Actions.validateTitle('Batch11');
        console.log(titleValidationStatus);
    } catch (err) {
        console.log(err);
    }
}

test3()