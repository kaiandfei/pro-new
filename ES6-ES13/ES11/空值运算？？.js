// ||不能识别空字符串和0
const foo = 0
const bar = foo || 'default value'
console.log(bar);
const foo1 = ''

// ??能识别空字符串和0
const bar1 = foo1 ?? 'default value'
console.log(bar1);