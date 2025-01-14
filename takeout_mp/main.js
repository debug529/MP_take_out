import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'

Vue.use(uView)


Vue.config.productionTip = false

// 封装弹窗的方法
uni.$showMsg = function(title = '数据请求失败' , duration = 1500,icon='none') {
	uni.showToast({
		title,
		duration,
		icon
	})
}


App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
