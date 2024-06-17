// padStart和padEnd表示在字符串前面填充和后面填充
// padStart和padEnd第一个参数是长度，第二个是填充的字符串
const str = 'sunkai'
const res = str.padStart(8,'*').padEnd(10,'-')
console.log(res);

//应用场景   银行卡号或者手机号打码
const num = '123466554648956614'
const res1 = num.slice(-4)
const res2 = res1.padStart(num.length,'*')
console.log(res2);


const phone = '13776692911'
const phoneRes = phone.replace(phone.slice(3,7),'****')
console.log(phoneRes);                                               //137****2911
const phoneRes1 = phone.slice(0,3).padEnd(7,'*')+phone.slice(-4)
console.log(phoneRes1);                                              //137****2911
