import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 引入富文本编辑器

const store = {
  data() {
    return {
      un: '',
      id: 0
    }
  },
  setData(un, id) {
    this.data.un = un;
    this.data.id = id
  },
  init() {
    this.data.un = '';
    this.data.id = 0
  }
}
// 定义全局变量及全局方法储存到vue实例当中  用于储存当前的登录的用户的用户信息
Vue.prototype.userInfo = store



Vue.use(VueQuillEditor)
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
