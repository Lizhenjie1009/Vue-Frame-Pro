import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getStorage, setStorage } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const token = sessionStorage.getItem('token')
  /* has token */
  if (token) {
    console.log(token)

    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    }

    // 添加路由
    const routes = store.getters.routes && store.getters.routes.length > 1
    if (routes) {
      next()
    } else {
      const menus = JSON.parse(sessionStorage.getItem('menus'))
      let asyncRoutes = await store.dispatch('permission/generateRoutes', menus)
      console.log(asyncRoutes)
      router.addRoutes(asyncRoutes)
      next({ ...to, replace: true })
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      console.log(token)

      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
      NProgress.done()
    }
  }
  next()
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
