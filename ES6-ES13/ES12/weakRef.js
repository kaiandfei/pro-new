const finalRegistry = new FinalizationRegistry((value)=>{
  console.log('某个对象被销毁',value);
})
let obj = {
  name:'sunkai'
}
const info = new WeakRef(obj)
finalRegistry.register(obj,'obj')
obj = null
//WeakRef示弱引用，一般用作缓存某些值，值销毁返回undefined