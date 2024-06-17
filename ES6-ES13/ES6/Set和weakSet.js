const set = new Set()
set.add(10)
set.add(20)
set.add(30)
console.log(set);
set.delete(10)
console.log(set);
console.log(set.has(20));
// set.clear()
// console.log(set);
console.log(set.size);
//set支持遍历
set.forEach(item => {
  console.log(item);
})
for (const item of set) {
  console.log(item);
}
//set转数组
const arr = [...set]
console.log(arr);
const arrSet = Array.from(set)
console.log(arrSet);

// 区别一：weakset只能存放对象类型
// 区别二：weakset是一个弱引用

const obj = {
  name:'孙凯'
}
const weakset= new WeakSet()
//建立弱引用，obj = null,浏览器会回收
weakset.add(obj)
//建立强引用，obj = null,浏览器不会回收
set.add(obj)


const newSet = new Set('111')
console.log(newSet);

// Invalid value used in weak set
// weakset.add(1)
// console.log(weakset);