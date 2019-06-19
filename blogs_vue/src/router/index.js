import Vue from 'vue';
import Router from 'vue-router';
// 获取用户登录状态
import { GetSes } from './../api/webapi/user'
Vue.use(Router)
var router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: "登录页",
            component: () => import('./../page/login.vue')
            // component:()=>import('./../test.vue')
        }, {
            path: '/admin',
            name: '首页',
            component: () => import('./../page/admin.vue'),
            children: [{
                path: 'user',
                name: '用户设置',
                component: () => import('./../page/details/user.vue')
            },
            {
                path: 'home',
                name: '欢迎页',
                component: () => import('./../page/details/homePage.vue')
            },
            {
                name: '草稿箱',
                path: 'drafts',
                component: () => import('./../page/details/drafts.vue')
            },
            {
                name: '发表',
                path: 'publish',
                component: () => import('./../page/details/publish.vue')
            },
            {
                name: '文章类别',
                path: 'textType',
                component: () => import('./../page/details/textType.vue')
            },
            {
                name: '文章留言',
                path: 'leaveMessage',
                component: () => import('./../page/details/leaveMessage.vue')
            },
            {
                name: '文章评论',
                path: 'comment',
                component: () => import('./../page/details/comment.vue')
            },
            {
                path: 'recyclebin',
                name: '回收站',
                component: () => import('./../page/details/recyclebin.vue')
            }]
        }, {
            path: '/home',
            name: '首页',
            component: () => import('./../views/home.vue'),
            children: [{
                path: 'index',
                name: '首页',
                component: () => import('./../views/details/index.vue')
            }]
        }

    ]
})
router.beforeEach(async (to, from, next) => {
    //路由守卫
    if (to.path.indexOf('/admin') == 0) {
        var title = document.getElementsByTagName('title')[0]
        title.innerText = to.name
        var falg = await GetSes()
        if (falg) {
            next()
        } else {
            alert('您的身份过期了，请重新登录！')
            next('/')
        }
    } else {
        next()
    }


})
export default router