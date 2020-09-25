// import Vue from 'vue'
import router from './router'

import NProgress from 'nprogress' // progress bars
import 'nprogress/nprogress.css' // progress bar style
// import { ACCESS_TOKEN } from '@/store/mutation-types'
import { setDocumentTitle, domTitle } from './utils/domUtil'

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

// const whiteList = ['home', 'duty', 'form'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${domTitle} - ${to.meta.title}`))
  next()
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
