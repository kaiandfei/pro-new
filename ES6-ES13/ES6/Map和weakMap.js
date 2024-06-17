// 一、map构建方法
const map1 = new Map()
const obj1 = {
  name: 'sunkai'
}
const obj2 = {
  name: 'sunshuyan'
}
map1.set(obj1, 18)
map1.set(obj2, 1)
// console.log(map1);
// 二、map构建方法
const map2 = new Map([[obj1, 18], [obj2, 1], ['age', 29]])
// console.log(map2);
// console.log(map2.size);
// console.log(map2.get(obj1));
// console.log(map2.has(obj1));
map2.delete(obj1);
// console.log(map2);
// 遍历map
// map2.forEach((item,key)=>{
//   console.log(item);
//   console.log(key);
// })

// for (const item of map2) {
//   console.log(item[0],item[1]);
// }
// for (const [key, value] of map2) {
//   console.log(key, value);
// }
// 区别一：不能使用基本数据类型   // 区别二：是弱引用
const weakmap = new WeakMap()
weakmap.set(obj1,'111')
// weakmap.set(1,'qwe')      //Invalid value used as weak map key

// console.log(weakmap.get(obj1));
// console.log(weakmap);  //WeakMap { <items unknown> }
// console.log(weakmap.has(obj1));
// console.log(weakmap.delete(obj1));
// weakmap不能遍历
let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log([...arr.keys()])
// console.log([...arr.values()])
// console.log(['q',,'a'].findIndex(x => {
//   console.log('123',x)
//    return true
//   }))

  // console.log(arr.slice(5,0));

  function fn (n){
    if(n==0) return 0
    if(n==1) return 1
    return fn(n-2)+fn(n-1)
}
console.log(fn(6));