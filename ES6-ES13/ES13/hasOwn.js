const obj = {
  name:'sunkai',
  // hasOwn和hasOwnProperty区别一是防止对象方法重写
  hasOwnProperty: function(){
    return 'aaa'
  }
}

console.log(obj.hasOwnProperty('name')); //'aaa'
console.log(Object.hasOwn(obj,'name'));  //true    

// 区别二
const info = Object.create(null)
info.name='shuyan'
console.log(Object.hasOwn(info,'name')); //true
console.log(info.hasOwnProperty('name')); //info.hasOwnProperty is not a function