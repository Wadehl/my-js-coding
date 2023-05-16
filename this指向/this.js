function fun() {
  console.log(this); // 普通函数
}
fun(); // 浏览器环境-Window，Node环境-global

const Obj = {
  name: "Kevin",
  showName: function () {
    console.log(this.name, this);
  },
};

Obj.showName(); // Kevin Obj
const getName = Obj.showName; // undefined Window(Node环境 - global)
getName();

function ShowName() {
    this.name = "Kevin";
}

const GetName = new ShowName();
console.log(GetName.name); // Kevin
console.log(ShowName.name); // ShowName