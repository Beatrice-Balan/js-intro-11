function gotoCarvana(callback) {
    setTimeout(() => {
      console.log('Carvana website is loaded...');
      callback();
    }, 500);
  }

  function clickOnFinancing(callback) {
    setTimeout(() => {
        console.log('Carvana financing page is loaded...')
        callback()
      }, 1000);
  }

  function validateHeading(expected) {
    setTimeout(() => {
        console.log(`${expected} heading is loaded...`)
      }, 750);
  }


  // before ES6
  function test1() { // takes at least 2250
    setTimeout(() => {
        gotoCarvana()

        setTimeout(() => {
            clickOnFinancing()
                setTimeout(() => {
                    validateHeading('FINANCING MADE EASY')
                }, 750)
        }, 1000)
    }, 500)
  }

  test1();
/* test1() RESULT:
Carvana website is loaded...
FINANCING MADE EASY heading is loaded...
Carvana financing page is loaded...
  */

function test() {
    gotoCarvana(() => {
        clickOnFinancing(() => {
            validateHeading('FINANCING MADE EASY')

        })
    })
}