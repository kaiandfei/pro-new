// 一、逻辑或运算 ||=
let msg = undefined
// 以前的做法
// msg = msg || 'default value'
// 现在的做法
msg ||= 'default value'
console.log(msg);

// 二、逻辑与运算 &&=  (极少用)
let info = {
  name: 'sunkai'
}
info &&= info.name
console.log(info);

// 三、逻辑空运算 ??=  (与逻辑或类似，多了判断空字符串和0)
let str = 0
str ??= 'str'
console.log(str);

const num = 0b110
console.log(num);