import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/baiwan',
    name: 'baiwan',
    component: () => import('@/views/bw/baiwan')
  },
  {
    path: '/dutyBw',
    name: 'dutyBw',
    meta: {
      title: '百万医疗免责事项'
    },
    component: () => import('@/views/bw/dutyBw')
  },
  {
    path: '/needBw',
    name: 'needBw',
    meta: {
      title: '富邦百万医疗投保须知'
    },
    component: () => import('@/views/bw/needBw')
  },
  {
    path: '/job',
    name: 'job',
    meta: {
      title: '被保险人未从事《高危职业表》确认'
    },
    component: () => import('@/views/job')
  },
  {
    path: '/state',
    name: 'state',
    meta: {
      title: '公用声明'
    },
    component: () => import('@/views/state')
  },
  {
    path: '/ruleBw',
    name: 'ruleBw',
    meta: {
      title: '富邦百万医疗综合保险条款'
    },
    component: () => import('@/views/bw/ruleBw')
  },
  {
    path: '/stateBw',
    name: 'stateBw',
    meta: {
      title: '富邦百万医疗投保声明'
    },
    component: () => import('@/views/bw/stateBw')
  },
  {
    path: '/secret',
    name: 'secret',
    meta: {
      title: '富邦财产保险有限公司隐私政策'
    },
    component: () => import('@/views/secret')
  },
  {
    path: '/dutyFa',
    name: 'dutyFa',
    meta: {
      title: '防癌免责'
    },
    component: () => import('@/views/fa/dutyFa')
  },
  {
    path: '/fangai',
    name: 'fangai',
    meta: {
      title: '防癌医疗'
    },
    component: () => import('@/views/fa/fangai')
  },
  {
    path: '/needFa',
    name: 'needFa',
    meta: {
      title: '防癌医疗须知'
    },
    component: () => import('@/views/fa/needFa')
  },
  {
    path: '/ruleFa',
    name: 'ruleFa',
    meta: {
      title: '防癌医疗条款'
    },
    component: () => import('@/views/fa/ruleFa')
  },
  {
    path: '/dutyJn',
    name: 'dutyJn',
    meta: {
      title: '境内险免责事项'
    },
    component: () => import('@/views/jn/dutyJn')
  },
  {
    path: '/jingnei',
    name: 'jingnei',
    meta: {
      title: '境内险'
    },
    component: () => import('@/views/jn/jingnei')
  },
  {
    path: '/needJn',
    name: 'needJn',
    meta: {
      title: '境内险须知'
    },
    component: () => import('@/views/jn/needJn')
  },
  {
    path: '/ruleJn',
    name: 'ruleJn',
    meta: {
      title: '境内险条款'
    },
    component: () => import('@/views/jn/ruleJn')
  },
  {
    path: '/dutyJw',
    name: 'dutyJw',
    meta: {
      title: '境外险免责事项'
    },
    component: () => import('@/views/jw/dutyJw')
  },
  {
    path: '/jingwai',
    name: 'jingwai',
    meta: {
      title: '境外险'
    },
    component: () => import('@/views/jw/jingwai')
  },
  {
    path: '/needJw',
    name: 'needJw',
    meta: {
      title: '境外险须知'
    },
    component: () => import('@/views/jw/needJw')
  },
  {
    path: '/ruleJw',
    name: 'ruleJw',
    meta: {
      title: '境外险条款'
    },
    component: () => import('@/views/jw/ruleJw')
  },
  {
    path: '/dutyZz',
    name: 'dutyZz',
    meta: {
      title: '住宅险免责事项'
    },
    component: () => import('@/views/zz/dutyZz')
  },
  {
    path: '/zhuzhai',
    name: 'zhuzhai',
    meta: {
      title: '住宅险'
    },
    component: () => import('@/views/zz/zhuzhai')
  },
  {
    path: '/needZz',
    name: 'needZz',
    meta: {
      title: '住宅险须知'
    },
    component: () => import('@/views/zz/needZz')
  },
  {
    path: '/ruleZz',
    name: 'ruleZz',
    meta: {
      title: '住宅险条款'
    },
    component: () => import('@/views/zz/ruleZz')
  },
  {
    path: '/dutyJt',
    name: 'dutyJt',
    meta: {
      title: '交通守护免责事项'
    },
    component: () => import('@/views/jt/dutyJt')
  },
  {
    path: '/jiaotong',
    name: 'jiaotong',
    meta: {
      title: '交通守护'
    },
    component: () => import('@/views/jt/jiaotong')
  },
  {
    path: '/needJt',
    name: 'needJt',
    meta: {
      title: '交通守护须知'
    },
    component: () => import('@/views/jt/needJt')
  },
  {
    path: '/ruleJt',
    name: 'ruleJt',
    meta: {
      title: '交通守护条款'
    },
    component: () => import('@/views/jt/ruleJt')
  },
  {
    path: '/chihuo',
    name: 'chihuo',
    meta: {
      title: '吃货卫士'
    },
    component: () => import('@/views/ch/chihuo')
  },
  {
    path: '/needCh',
    name: 'needCh',
    meta: {
      title: '吃货卫士须知'
    },
    component: () => import('@/views/ch/needCh')
  },
  {
    path: '/ruleCh',
    name: 'ruleCh',
    meta: {
      title: '吃货卫士条款'
    },
    component: () => import('@/views/ch/ruleCh')
  },
  {
    path: '/dutyCh',
    name: 'dutyCh',
    meta: {
      title: '吃货卫士免责事项'
    },
    component: () => import('@/views/ch/dutyCh')
  },
  {
    path: '/chuxing',
    name: 'chuxing',
    meta: {
      title: '吃货卫士'
    },
    component: () => import('@/views/cx/chuxing')
  },
  {
    path: '/needCx',
    name: 'needCx',
    meta: {
      title: '吃货卫士须知'
    },
    component: () => import('@/views/cx/needCx')
  },
  {
    path: '/ruleCx',
    name: 'ruleCx',
    meta: {
      title: '吃货卫士条款'
    },
    component: () => import('@/views/cx/ruleCx')
  },
  {
    path: '/dutyCx',
    name: 'dutyCx',
    meta: {
      title: '吃货卫士免责事项'
    },
    component: () => import('@/views/cx/dutyCx')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: routes,
  base: '/'
})

export default router
