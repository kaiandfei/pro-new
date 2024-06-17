const obj = {
  name:'sunkai',
  age:18
}
console.log(Object.entries(obj));     //[ [ 'name', 'sunkai' ], [ 'age', 18 ] ]

const str = 'sunkai'
console.log(Object.entries(str));     //[ [ '0', 's' ], [ '1', 'u' ], [ '2', 'n' ], [ '3', 'k' ], [ '4', 'a' ], [ '5', 'i' ]]

const arr = ['sunkai','sunshuyan']
console.log(Object.entries(arr));     //[ [ '0', 'sunkai' ], [ '1', 'sunshuyan' ] ]