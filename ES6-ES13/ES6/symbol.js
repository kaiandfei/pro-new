const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol('sun')
const s4 = Symbol('kai')
//Symbol()传的参数是描述
// console.log(s4.description);   //kai
const obj = {
  [s1]: 'sunkai',
  [s2]: '孙书言',
}
// console.log(obj[s1]);                             //  { [Symbol()]: 'sunkai', [Symbol()]: '孙书言' }
// console.log(Object.keys(obj));                    //  []
// console.log(Object.getOwnPropertySymbols(obj))    //  [ Symbol(), Symbol() ]
//需要通过Object.getOwnPropertySymbols获取Symbol的key
const keys = Object.getOwnPropertySymbols(obj)
for (const key of keys) {
  // console.log(obj[key]); //sunkai  孙书言
}

//创建相同的Symbol使用Symbol.for()传参相同
const sa = Symbol.for('aa')
const qw = Symbol.for('aa')
console.log(sa === qw);  //true
const key = Symbol.keyFor(sa)
console.log(key);        //aa
const sd = Symbol.for(key)
console.log(sd);        //Symbol(aa)
console.log(sd === qw);  //true