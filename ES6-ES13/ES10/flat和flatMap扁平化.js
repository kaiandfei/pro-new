const nums = [10,[20,30],[[40,[50,60]]],[70]]
const res = nums.flat(Infinity)
console.log(res);



const data = [
  {
    code: 1001,
    name: 'sunkai',
    age: 18,
    address: '南京',
    mark: '',
    sourceCodeList: [
      { checked: false, num: 0, mark: '主导打包' },
      { checked: true, num: 1, mark: '333' }
    ]
  },
  {
    code: 1003,
    name: 'sunkai',
    age: 18,
    address: '淮安',
    sourceCodeList: [{ checked: false, num: 11, mark: '' }]
  }
]

const stockRegisterDetailList2 = data.flatMap(
  ({ sourceCodeList, ...parent }) =>
    sourceCodeList.map(child => ({ ...parent, ...child }))
)
console.log(stockRegisterDetailList2)