// INTERVIEW QUESTION!

function funcA(callbackfunc) {
    console.log('This is A!');
    callbackfunc();
}


function funcB() {
    console.log('This is B!');
}

funcA(funcB)

// funcA takes another function as a parameter/ argument -> Higher order functiuon
// funcB is passed as an argument to another function -> Callback function

function visitUrl(callbackFunc) {
    let serverUp = true
    if (serverUp) {
        console.log('URL visited...');
        callbackFunc()
}
    else console.log('ERROR, server down!')
}

function searchData() {
    console.log(`Data returned`)
}

visitUrl(searchData);
