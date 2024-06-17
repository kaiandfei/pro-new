const arr = ['sun','kai','shu',NaN]
if (arr.indexOf('kai') !== -1) {
  console.log('包含kai')
}
//indexOf判断不了NaN
if (arr.indexOf(NaN) !== -1) {
  console.log('包含NaN')
}

if (arr.includes('sun')) {
  console.log('包含sun')
}
//includes可以判断NaN
if (arr.includes(NaN)) {
  console.log('包含NaN')
}
