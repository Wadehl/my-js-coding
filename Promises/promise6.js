Promise.resolve(1)
    .then(res => {
        console.log(res);
        return 2;
    })
    .catch(err => {
        return 3;
    })
    .then(res => {
        console.log(res);
    });

// 1 -> 2

Promise.resolve().then(() => {
    return new Error('error!!!');
}).then(res => {
    console.log("then: ", res);
}).catch(err => {
    console.log("catch: ", err);
});

// catch: Error error!!!