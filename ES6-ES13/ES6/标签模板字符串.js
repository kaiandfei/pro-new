// 第一个参数是数组（被切成多块,一个${}就是两块，两个就是三块），第二个参数是模板字符串中第一个${},以此类推第三个参数是第二个${}
function foo(m,n,x,e) {
  console.log(m,n,x,e);
  console.log(arguments)
}
let name='孙凯'
let age=18
// foo`wo${name}shisunkai${age}aa${age}`


let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  let result = '';
  let i = 0;
  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }
  return result;
}
console.log('msg',msg)