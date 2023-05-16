const MyPromise = require("./myPromise");

const promise = new MyPromise((resolve, reject) => {
  // resolve("成功");
  // reject("失败");
  setTimeout(() => {
    resolve("成功");
    // reject("失败");
  });
});

// promise.then(
//   (res) => {
//     console.log(`onFulfilled ${res}`);
//   },
//   (err) => {
//     console.log(`onRejected ${err}`);
//   }
// );

// promise.then(
//   (res) => {
//     console.log(`onFulfilled 2`);
//   },
//   (err) => {
//     console.log(`onRejected 2`);
//   }
// );

promise
  .then((value) => {
    console.log(1);
    console.log("resolve", value);
    return 2;
  })
  .then((value) => {
    console.log(2);
    console.log("resolve", value);
  });

// debugger;
