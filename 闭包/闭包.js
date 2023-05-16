function outerFunction() {
    let outerVariable = 'Kevin';
    return function innerFunction() {
        console.log(outerVariable);
    }
}

let closure = outerFunction();
closure();