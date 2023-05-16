Promise.reject('err!!!')
    .then((res) => {
        console.log('success', res);
    }, (err) => {
        console.log('error', err);
        // throw new Error(err);
    }).catch(err => {
        console.log('catch', err);
    });

// 需要注意：then一共接收两个函数，第一个用于接收成功的参数 onFulfilled，第二个用于捕获失败的参数 onRejected
// 因此reject的err已经被then捕获，不会传输到catch
// 如果希望catch也能捕获到err，可以在onRejected中throw new Error(err)

// 输出：error: err!!!