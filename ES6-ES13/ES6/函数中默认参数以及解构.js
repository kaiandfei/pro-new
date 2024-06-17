// 第一种
function foo({ name, age } = { name: '孙凯', age: 18 }) {
  console.log(name, age);
}
// foo()
// 第二种
function foo1({ name = '孙凯', age = 18 } = {}) {
  console.log(name, age);
}
foo1()
//有默认值的函数的length属性,默认值不算，并且从有默认值后面的参数都不算length，下面length为2
function foo2(x, y, z = 10, n, m) {
  console.log(x, y, z)
}
// console.log(foo2.length);