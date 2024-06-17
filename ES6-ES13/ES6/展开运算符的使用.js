const names = ['sun', 'kai']
const name = '孙凯'
function foo(x, y) {
  console.log(x, y);
}
//函数调用时
foo(...names)
foo(...name)

//构建数组的时候
const arr = [...names, ...name]
console.log(arr);

//构建对象时(ES9)
const info = { name: 'sunkai', age: 18 }
const obj = { ...info, address: '南京',...names }
console.log(obj);

//展开运算符是浅拷贝