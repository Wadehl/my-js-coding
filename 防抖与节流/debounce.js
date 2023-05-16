const debounce = function(fn, delay) {
    let timer = null;
    return function() {
        if(timer) clearTimeout(timer);
        let args = arguments;
        timer = setTimeout(()=>{
            fn.apply(this, args);
        }, delay * 1000);
    }
}
