const curry = function(fn) {
    return function curried(...args) {
        // 如果当前柯里化函数参数个数多于或等于fn的参数个数(fn.length)，说明已经成功柯里化
        if(args.length >= fn.length) {
            // 为fn入参
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

const add = function(a, b, c) {
    return a+b+c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2,3)); // 6