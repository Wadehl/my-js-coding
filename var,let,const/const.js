// const a = 10;
// a = 20; // TypeError: Assignment to constant variable.

// // 声明的时候必须定义值
// const b; // SyntaxError: Missing initializer in const declaration

// // 定义对象
// const c = {};

// 对对象重新赋值是不允许的，但是可以对对象的值进行赋值
c = {}; // TypeError: Assignment to constant variable.
c.prop = 30;
console.log(c.prop); // 30