const throttle = function(fn, delay) {
    let timer = null;
    return function() {
        if(timer) return;
        let args = arguments;
        timer = setTimeout(()=>{
            fn.apply(this, args);
            timer = null;
        }, delay * 1000);
    }
}

const throttleFirst = function(fn, delay) {
    let timer = null;
    let firstCall = true;
    return function() {
        const args = arguments;
        if(firstCall) {
            fn.apply(this, args);
            firstCall = false;
        } else {
            if(timer) return;
            timer = setTimeout(()=>{
                fn.apply(this, args);
                timer = null;
            }, delay * 1000);
        }
    }
}