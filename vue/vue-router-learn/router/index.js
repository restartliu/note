import Vue from 'vue'
import Router from 'vue-router'

// 路由的懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 通过Vue.use()安装插件
Vue.use(Router)

const routes = [
  {
    // 配置默认路径
    path: '',
    // redirect 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'home'
    },
    // 子路由
    children: [
      // 子路由的默认路径
      // 这个配置会影响keep-alive的效果，点击home会自动路由至news路径，解决方案详见home组件源码
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        // 子路由不需要加 / 来标记路径，加了会报错
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'about'
    }
  },
  {
    // 使用params传参方式传递参数
    path: '/user/:userId',
    component: User,
    meta: {
      title: 'user'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'profile'
    },
    // 以下具体内容可查看官方网站
    //    组件内守卫
    //    路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log('before enter')
      next()
    }
  }
]

// 导出默认router
const router = new Router({
  // 配置路由和组件之间的应用关系
  routes,
  // 从hash模式转变为history模式
  mode: 'history',
  // 设置router - link全局默认class属性
  linkActiveClass: 'active'
})

// 使用全局导航守卫在跳转的时候执行一些统一的操作
// 前置守卫（前置钩子）（guard）
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  console.log(to)
  // 在每一次完成功能的时候都需要调用next()函数实现跳转
  next()
})

// 后置钩子（hook）
router.afterEach((to, from) => {
  console.log('hello world')
})

export default router

/**
 * 传递参数的方式
 *    params的类型：
 *        配置路由格式：/router/:id
 *        传递的方式：在path后面跟上对应的值
 *        传递后形成的路径：/router/123、/router/abc
 *    query的类型
 *        配置路由格式：/router 也就是普通配置
 *        传递的方式：对象中使用query的key作为传递的方式
 *        传递后形成的路径：/router?id=123、/router?id=abc
 */
