function get() {
    return 'GET';
}

function post() {
    return 'POST'
}

function del() {
    return 'DELETE'
}

function update() {
    return 'UPDATE'
}

// exporting as properties of module.exports
module.exports.get = get;
module.exports.post = post;
module.exports.del = del;
module.exports.update = update;

// import as properties:
const{ post, del } = require('./APIHelper.js')


// This approach creates an APIHelper object 
// that groups your functions together and exports the entire object

const APIHelper = {
    get,
    del,
    post,
    update
}

module.exports = APIHelper

// to import as object:
const APIHelper = require('./APIHelper.js')



// BUT BETTER PUT THEM IN A CLASS RIGHT OFF THE BAT:
// AND then just export the class

class APIHelper1 {
    get() {
        return 'GET';
    }

    post() {
        return 'POST';
    }

    del() {
        return 'DELETE';
    }

    update() {
        return 'UPDATE';
    }
}


