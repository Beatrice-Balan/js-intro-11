// Using callbacks before ES6
// Issue: Results in "callback hell" due to deeply nested structures, 
// making the code harder to read and maintain.

function gotoAmazon1(callback, error) {
    const bool = true;
    setTimeout(() => {
      if(bool) { 
        console.log('Amazon is loaded...');
        callback();
      }
      else error();
    }, 500);
  }

  function clickOnLocationHeaderItem1(callback, error) {
    const bool = true;
    setTimeout(() => {
      if(bool) {
        console.log('Location header item is clicked...');
        callback();
      }
      else error();
    }, 200);
  }

  function validateDialogIsVisible1(callback, error) {
    let bool = true;
    setTimeout(() => {
      if(bool) {
        console.log('Dialog is visible...');
        callback();
      }
      else error();
    }, 300);
  }

  // test1 BEFORE ES6
  function test1() {
    gotoAmazon1(() => {
      clickOnLocationHeaderItem1(() => {
        validateDialogIsVisible1(() => {
          console.log('Location dialod visibility test case PASSED!');
        },
        () => {
          console.log('Location dialod visibility test case FAILED!');
        });
      },
      () => {
        console.log('Location header item FAILED!');
      });
    },
    () => {
      console.log('Go to amazon FAILED!');
    });
  }

  test1();
  
  
  
  /* AFTER ES6 - using promises an then-catch methods
  How it works: Each function returns a Promise. 
  The .then() method chains success callbacks, and .catch() handles errors.
  
  Improvement: Reduces nesting and makes the flow of operations clearer.
  */
  function gotoAmazon2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let bool = true;
        if (bool) {
          console.log("Amazon is loaded...");
          resolve();
        } else {
          reject("ERROR: Go to amazon FAILED!");
        }
      }, 500);
    });
  }
  
  function clickOnLocationHeaderItem2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let bool = true;
        if (bool) {
          console.log("Location header item is clicked...");
          resolve();
        } else {
          reject("Location header item FAILED!");
        }
      }, 200);
    });
  }
  
  function validateDialogIsVisible2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let bool = true;
        if (bool) {
          console.log("Dialog is visible...");
          resolve();
        } else {
          reject("Location dialod visibility test case FAILED!");
        }
      }, 300);
    });
  }


  function test2() {
    gotoAmazon2()
        .then(() => clickOnLocationHeaderItem2())
        .then(() => validateDialogIsVisible2())
        .catch((err) => console.log(err))
  }

  test2()


  /* AFTER ES6 - using promises with async-await
  
  How it works: Introduced in ES2017, async/await allows you to write asynchronous code
    in a synchronous style.

    Improvement: Makes the code even cleaner and easier to read. 
Error handling with try/catch blocks is straightforward and localized.

  */
  async function test3() {
    try{
        await gotoAmazon2()
        await clickOnLocationHeaderItem2()
        await validateDialogIsVisible2()
    }
    catch(err) {
        console.log(err)
    }
  }

  test3()







