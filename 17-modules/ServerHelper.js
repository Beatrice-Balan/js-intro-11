

const connect = () => {
    return true
}
module.exports.connect = connect

module.exports.teardown = () => {
    return true
}


// to import:

const { connect, teardown } = require('./ServerHelper');

/*
Node.js will understand that you're referring to a .js file, as long as the file is in 
the same directory or the path is correct.
*/