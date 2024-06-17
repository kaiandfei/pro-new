function foo(n, m, ...rest) {
  console.log(n, m);
  console.log(rest);
}
foo(10, 20, 30, 40)

// rest剩余参数是一个数组，以前的arguments是一个类数组