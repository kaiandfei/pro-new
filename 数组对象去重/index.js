
let arr1 = [{
  name:'sunkai',
  id:1
},{
  name:'sunkai',
  id:2
},{
  name:'sun',
  id:3
},{
  name:'kai',
  id:4
},{
  name:'wu',
  id:5
},{
  name:'wu',
  id:5
},{
  name:'hui',
  id:5
},]

function uniqueArr(arr,key) {
    let agentObj  = {};
    let agentArr  = [];
    for (let i = 0; i < arr.length; i++) {
        if (!agentObj[arr[i][key]]) {
            agentArr.push(arr[i]);
            agentObj[arr[i][key]] = true;
        }
    }
    return agentArr
}
let res = uniqueArr(arr1,'name')
console.log(res);