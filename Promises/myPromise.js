// MyPromise.js
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    } else {
      return new MyPromise((resolve) => {
        resolve(value);
      });
    }
  }

  static reject(err) {
    return new MyPromise((_resolve, reject) => {
      reject(err);
    });
  }

  // 存储成功的参数
  res = null;
  // 存储失败的参数
  err = null;
  // 初始状态
  status = PENDING;

  // 存储成功/失败的回调函数
  onFulfilledCallbackQueue = new Array();
  onRejectedCallbackQueue = new Array();

  resolve = (res) => {
    // 如果成功且状态为PENDING
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.res = res;
      // 如果有成功的回调函数就执行
      while (this.onFulfilledCallbackQueue.length > 0) {
        this.onFulfilledCallbackQueue.shift()(res);
      }
    }
  };
  reject = (err) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.err = err;
      // 如果有失败的回调函数就执行
      while (this.onRejectedCallbackQueue.length > 0) {
        this.onRejectedCallbackQueue.shift()(err);
      }
    }
  };

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (res) => res;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.res);
            if (x === promise2) {
              return reject(
                new TypeError("Chaining cycle detected for promise #<Promise>")
              );
            }
            if (x instanceof MyPromise) {
              x.then(resolve, reject);
            } else {
              resolve(x);
            }
          } catch (err) {
            reject(err);
          }
        });
      } else if (this.status === REJECTED) {
        onRejected(this.err);
      } else if (this.status === PENDING) {
        this.onFulfilledCallbackQueue.push(onFulfilled);
        this.onRejectedCallbackQueue.push(onRejected);
      }
    });
    return promise2;
  }
}

// MyPromise.deferred = function () {
//   let dfd = {};
//   dfd.promise = new MyPromise((resolve, reject) => {
//     dfd.resolve = resolve;
//     dfd.reject = reject;
//   });
//   return dfd;
// };

if (typeof module !== "undefined" && module.exports) {
  // 在 Node.js 环境中
  module.exports = MyPromise;
}
