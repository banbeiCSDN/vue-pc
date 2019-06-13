import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuangxiu from '@/components/zhuangxiu'
import shejishi from '@/components/shejishi'
import centent from '@/components/centent'
import Hello from '@/components/Hello'
import zhuangzhi from '@/components/zhuangzhi'
import main from '@/components/main'
import wrapper1 from '@/components/wrapper1'
import vip from '@/components/vip'

Vue.config.productionTip = false
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'centent',
      component: centent
    },
    {
      path: '/zhuangxiu',
      name: 'zhuangxiu',
      component:zhuangxiu
      
    },
    {
      path: '/shejishi',
      name: 'shejishi',
      component:shejishi
      
    },
    {
      path: '/zhuangzhi',
      name: 'zhuangzhi',
      component:zhuangzhi
      
    },
    {
      path: '/main',
      name: 'main',
      component:main
      
    },
    {
      path: '/wrapper1',
      name: 'wrapper1',
      component:wrapper1
      
    },
    {
      path: '/vip',
      name: 'vip',
      component:vip
      
    },
    
    {
    	path:'*',
     redirct:'/'
    }
  ]
})
