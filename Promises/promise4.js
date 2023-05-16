Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)

// 当then里面传入的值不是函数的时候，会出现值穿透传递的情况
// 相当于Promise.resolve(1).then((res) => {console.log(res)});