const finalRegistry = new FinalizationRegistry((value)=>{
  console.log('某个对象被销毁',value);
})
let obj = {
  name:'sunkai'
}
let info = {
  name:'sunshuyan'
}
finalRegistry.register(obj,'obj')
finalRegistry.register(info,'info')
obj = null
info = null
