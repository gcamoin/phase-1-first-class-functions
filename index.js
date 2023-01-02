function receivesAFunction(callback) {
    callback() 
}

function returnsANamedFunction() {
    return function randomFunction () {

    }
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}
