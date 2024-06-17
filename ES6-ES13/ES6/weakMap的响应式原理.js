// weakmap应用场景(vue响应式)
const obj1 = {
  name: '孙凯',
  age: 18
}
function obj1NameFun1() {
  console.log('obj1的name被修改');
}
function obj1NameFun2() {
  console.log('obj1的name被修改');
}
function obj1AgeFun() {
  console.log('obj1的age被修改');
}

const weakmap = new WeakMap()
const obj1Map = new Map()
// 1、对obj1收集数据结构
obj1Map.set('name', [obj1NameFun1, obj1NameFun2])
obj1Map.set('age', [obj1AgeFun])
weakmap.set(obj1, obj1Map)
// obj1.name = 'shuyan'
// obj1.age = 20

//监听name属性，如果name被修改了执行下面代码
const targetMap = weakmap.get(obj1)
const nameFuns = targetMap.get('name')
nameFuns.forEach(item => item());

//监听age属性，如果age被修改了执行下面代码
const ageFuns = targetMap.get('age')
ageFuns.forEach(item => {
  item()
});