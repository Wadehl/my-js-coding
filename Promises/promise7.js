const promise = Promise.resolve().then(() => {
    return promise;
});
promise.catch(console.err);

// Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>
// 不允许在Promise链式调用里面调用自己本身