import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import cstlist from '@/components/cstlist.vue'
import item from "@/components/cstlistitem";
// 登录头部
import cstnav from "@/components/cstnav";
// 跳转详情页
import cstlistadd from "@/components/cstlistadd";
// 登录框
import register from '@/components/cstregister';
// 注册 
import join from '@/components/cstjoin'
// 个人中心
import cpeo from '@/components/cstcenter'
import ccent from '@/components/ccent1'
Vue.use(Router)
export default new Router({
  routes: [
    // 类别路由
    {
      path: '/',
      name: 'cstlist',
      component: cstlist
    },
    {
      path: '/cstlistadd/:nu1',
      name: 'cstlistadd',
      component: cstlistadd
    },
    // 登录路由
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    // 注册路由
    {
      path: '/join',
      name: 'join',
      component: join
    },
    // 个人中心
    {
      path: '/cpeo',
      name: 'cpeo',
      component: cpeo,
    },
    {
      path: '/ccent/:lst',
      name: 'ccent',
      component: ccent,
    }
  ],
})
