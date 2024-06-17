import Vue from 'vue'
//防抖
export function debounce(fn, time) {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, time);
  }
}
//节流
export function throttle(fn, time) {
  let timer = null
  if (timer) return
  return function (...args) {
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, time);
  }
}

// create directive
export const preventReClick = Vue.directive('preventReClick', {
  inserted: function (el, binding) {
    el.addEventListener('click', () => {
      // 判断按钮是否可点击
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 2000)//默认3秒节流时间
      }
    })
  }
})
