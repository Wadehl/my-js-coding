var a = 10;
console.log(window.a); // 10

console.log(b); // undefined 原因在于变量提升：执行过程：var b -> console.log -> b=20 
var b = 20;

var c = 30;
var c = 40;
console.log(c); // 40 var可以重复定义

var d = 10;
function fun() {
    d = 20;
}
fun();
console.log(d); // 20

// 如果改为以下，则函数内的变量变为局部变量
var d = 10;
function fun2() {
    var d = 20;
}
fun2();
console.log(d); // 10