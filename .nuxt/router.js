import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2de84dce = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _a54d41fa = () => interopDefault(import('../pages/customer-support/index.vue' /* webpackChunkName: "pages/customer-support/index" */))
const _00fdf67c = () => interopDefault(import('../pages/hosting-guide/index.vue' /* webpackChunkName: "pages/hosting-guide/index" */))
const _d534af48 = () => interopDefault(import('../pages/hosting-upgrade/index.vue' /* webpackChunkName: "pages/hosting-upgrade/index" */))
const _0f8aa67a = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _ec816954 = () => interopDefault(import('../pages/success/index.vue' /* webpackChunkName: "pages/success/index" */))
const _45257e97 = () => interopDefault(import('../pages/terms-and-conditions/index.vue' /* webpackChunkName: "pages/terms-and-conditions/index" */))
const _636d9a7d = () => interopDefault(import('../pages/training/index.vue' /* webpackChunkName: "pages/training/index" */))
const _5557a662 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact-us",
    component: _2de84dce,
    name: "contact-us"
  }, {
    path: "/customer-support",
    component: _a54d41fa,
    name: "customer-support"
  }, {
    path: "/hosting-guide",
    component: _00fdf67c,
    name: "hosting-guide"
  }, {
    path: "/hosting-upgrade",
    component: _d534af48,
    name: "hosting-upgrade"
  }, {
    path: "/privacy-policy",
    component: _0f8aa67a,
    name: "privacy-policy"
  }, {
    path: "/success",
    component: _ec816954,
    name: "success"
  }, {
    path: "/terms-and-conditions",
    component: _45257e97,
    name: "terms-and-conditions"
  }, {
    path: "/training",
    component: _636d9a7d,
    name: "training"
  }, {
    path: "/",
    component: _5557a662,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
