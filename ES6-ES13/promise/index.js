let p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000,'sun');
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'kai');
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'sunkai');
});
//一、Promise.all有一个报错就直接返回reject
// Promise.all([p1, p2, p3])
// .then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

// 二、Promise.allSettled等异步全部执行完返回所有结果
// Promise.allSettled([p1, p2, p3])
// .then(res=>{
//   console.log(res);
// })
// .catch(err=>{
//   console.log(err);
// })

// 三、Promise.race哪个异步先执行完返回哪个
// Promise.race([p1, p2, p3])
// .then(res=>{
//   console.log(res);
// })
// .catch(err=>{
//   console.log(err);
// })
//四、 Promise.any哪个异步先执行完返回哪个,处理第一个成功执行的函数,不会因为某个 Promise 变成rejected状态而结束
Promise.any([p1, p2, p3])
.then(res=>{
  console.log(res);
})
.catch(err=>{
  console.log(err);
})