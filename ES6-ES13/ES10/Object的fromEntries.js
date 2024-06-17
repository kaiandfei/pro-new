const obj ={
  name :'孙凯',
  age:18
}
const res1 = Object.entries(obj)
// console.log(res1);


// fromEntries将entries转成对象
const newObj = Object.fromEntries(res1)
// console.log(newObj);


// 应用场景
const url = 'http://baidu.com?name=sunkai&age=18'
const queryParams = new URLSearchParams(url.split('?')[1])
const paramsObj = Object.fromEntries(queryParams)
console.log(paramsObj);


const valueObj = {
  ipt1: 'ipt1的值',
  ipt2: 'ipt2的值',
  ipt3: 'ipt3的值',
}
for (const [id, value] of Object.entries(valueObj)) {
  console.log(id, value); 
  /*
      ipt1 ipt1的值  
      ipt2 ipt2的值
      ipt3 ipt3的值
  */
}