// example of module (reusable code)

module.exports = {
//const UIHelper = {
    component: 'User Interface',
    getURL: function() {
        return 'EXAMPLE URL'
    },
    navigateBack: function() {
        return 'BACK'
    },
    navigateForward: function() {
        return 'FORWARD'
    },
    refresh: function() {
        return 'REFRESH'
    }
}

function hello() {
    return 'Hello'
}

//}

// you are explorting UIHelper as an object:
module.exports = UIHelper;

//you are exporting UIHelper as a property
module.exports.UIHelper = UIHelper


// export as object

module.exports = { UIHelper }