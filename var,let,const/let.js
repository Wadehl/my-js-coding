// // 只在所处代码块有效
// {
//     let a = 10;
// }
// console.log(a); // ReferenceError: a is not defined. 

// // 不存在变量提升
// console.log(b);
// let b = 20; // ReferenceError: Cannot access 'b' before initialization

// // 作用域内存在let时，作用域不受外界影响 —— 暂时性死区
// var c = 123;
// if (true) {
//     c = 'abc'; // ReferenceError: Cannot access 'c' before initialization
//     let c;
// }

// // 【同一个作用域内】不允许重复定义
// let d = 30;
// let d = 40;
// console.log(d); // SyntaxError: Identifier 'd' has already been declared

// 这种情况没有问题，因为不是同一个作用域内
let d = 20;
{
    let d = 30;
    console.log(d); //30
}
console.log(d); // 20