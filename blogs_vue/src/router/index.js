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
            },
            {
                path: 'home',
                component: () => import('./../page/details/homePage.vue')
            },
            {
                path: 'drafts',
                component: () => import('./../page/details/drafts.vue')
            },
            {
                path: 'publish',
                component: () => import('./../page/details/publish.vue')
            },
            {
                path: 'textType',
                component: () => import('./../page/details/textType.vue')
            },
            {
                path: 'leaveMessage',
                component: () => import('./../page/details/leaveMessage.vue')
            },
            {
                path: 'comment',
                component: () => import('./../page/details/comment.vue')
            },
            {
                path: 'accountSetting',
                component: () => import('./../page/details/accountSetting.vue')
            }],
            async beforeEnter(to, from, next) {
                //当前路由守卫
                var falg = await GetSes()
                if (falg) {
                    next()
                } else {
                    alert('您的身份过期了，请重新登录！')
                    next('/')
                }

            }
        }

    ]
})
