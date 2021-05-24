import Vue from 'vue'
import dicGender from '@/assets/dic.json'

Vue.prototype.$dic = {
  data: {},
  setDic (key, res) {
    this.data[key] = res
  },
  getDic (key) {
    if (!this.data[key]) {
      setTimeout(() => {
        this.setDic(key, dicGender.data)
      }, 500)
    }
    return this.data[key]
  }
}

setTimeout(() => {
  Vue.prototype.$dic.setDic('gender', dicGender.data)
}, 10)
