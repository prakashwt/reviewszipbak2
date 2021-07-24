import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6db8255b = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _147a98d0 = () => interopDefault(import('../pages/customer-support/index.vue' /* webpackChunkName: "pages/customer-support/index" */))
const _466a5062 = () => interopDefault(import('../pages/hosting-guide/index.vue' /* webpackChunkName: "pages/hosting-guide/index" */))
const _9d00fe22 = () => interopDefault(import('../pages/hosting-upgrade/index.vue' /* webpackChunkName: "pages/hosting-upgrade/index" */))
const _a54c20f2 = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _73d866e9 = () => interopDefault(import('../pages/success/index.vue' /* webpackChunkName: "pages/success/index" */))
const _624b09e4 = () => interopDefault(import('../pages/terms-and-conditions/index.vue' /* webpackChunkName: "pages/terms-and-conditions/index" */))
const _87101d6c = () => interopDefault(import('../pages/training/index.vue' /* webpackChunkName: "pages/training/index" */))
const _366304f5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6db8255b,
    name: "contact-us"
  }, {
    path: "/customer-support",
    component: _147a98d0,
    name: "customer-support"
  }, {
    path: "/hosting-guide",
    component: _466a5062,
    name: "hosting-guide"
  }, {
    path: "/hosting-upgrade",
    component: _9d00fe22,
    name: "hosting-upgrade"
  }, {
    path: "/privacy-policy",
    component: _a54c20f2,
    name: "privacy-policy"
  }, {
    path: "/success",
    component: _73d866e9,
    name: "success"
  }, {
    path: "/terms-and-conditions",
    component: _624b09e4,
    name: "terms-and-conditions"
  }, {
    path: "/training",
    component: _87101d6c,
    name: "training"
  }, {
    path: "/",
    component: _366304f5,
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
