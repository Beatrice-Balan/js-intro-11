// resolve & reject -> this is how they're usually called, but you can name the whatever

function connectToServer() {
    return new Promise((resolve, reject) => {
        const serverUp = false;
        if(serverUp) resolve('server connection is complete...')
            else reject('ERROR: Server is down')
    })
}

connectToServer()
    .then((data) => {
        console.log(data)
    })
    .catch((failure) => {
        console.log(failure)
    })