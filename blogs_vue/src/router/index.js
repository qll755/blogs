import Vue from 'vue';
import Router from 'vue-router';
// 获取用户登录状态
import { GetSes } from './../api/webapi/user'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('./../page/login.vue')
            // component:()=>import('./../test.vue')
        }, {
            path: '/admin',
            component: () => import('./../page/admin.vue'),
            children: [{
                path: 'user',
                component: () => import('./../page/details/user.vue')
            }],
            async beforeEnter(to, from, next) {
                //当前路由守卫
                var falg = await GetSes()
                debugger
                if (falg) {
                    next()
                } else {
                    next('/')
                }

            }
        }

    ]
})
