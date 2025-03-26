class DBHelper {
    static DB_USERNAME = 'JOHN DOE';
    static DE_PASSWORD = 'JOHN1234';

    connect() {
        return true
    }
}


// common JS
module.exports = DBHelper
// import:
// const DBHelper = require('./DBHelper')

// export as object
module.exports = { DBHelper }
// import as object:
const { DBHelper } = require('./fileName');

// export as a property:
module.exports.DBHelper = DBHelper;
// to import as prop:
const { DBHelper } = require('./fileName');