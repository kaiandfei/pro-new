const num1 = 100//十进制
// b->binary
const num2 = 0b100//二进制
// o ->octonary
const num3 = 0o100//八进制
// x->hexadcimal
const num4 = 0x100//十六进制
console.log(num1, num2, num3, num4);//100 4 64 256

//大的数值连接符(_)  ES12
const bigNum = 10_000_000_000_000
console.log(bigNum);