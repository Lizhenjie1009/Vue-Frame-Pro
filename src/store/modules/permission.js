import { constRoutes, asyncRoutes } from '@/router'
import Layout from '@/layout'

const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES (state, routes) {
      state.routes = constRoutes.concat(routes)
      state.addRoutes = routes
    }
  },
  actions: {
    generateRoutes ({ commit }, menus) {
      /**
       * 1.hidden去掉不显示的route
       * 2.对应每一个真实组件
       * 3.处理扁平化数据为树形数据
       * 4.父页面重定义子页面，单页面补充子页面
       */
      return new Promise((resolve, reject) => {
        // 1.非显示
        menus.forEach((item, idx) => {
          if (item.hidden) {
            menus.splice(idx, 1)
          }
        })
        let routes = menus.map((item, index) => {
          // 2.对应真实组件
          if (item.component === 'Layout') {
            item.component = Layout
          } else {
            // item.component = () => import(`@/views/${item.meta.pageDir}/${item.name}`)
            item.component = resolve => require([`@/views/${item.meta.pageDir}/${item.name}`], resolve)
          }
          return item
        })

        // 3.处理数据
        let routesTree = dealArr(routes)
        commit('SET_ROUTES', red(routesTree))

        resolve(routesTree)
      })
    }
  }
}

// 4.重定向
function red (arr) {
  return arr.map(item => {
    // 重定向到子页面的第一个
    if (item.children) {
      item.redirect = item.children[0].path
      red(item.children)
    // 只有一个子页面
    } else if (item.meta.onlyOnePage) {
      item.redirect = `/${item.name}/index`
      item.children = [{
        path: `/${item.name}/index`,
        name: item.name,
        component: resolve => require([`@/views/${item.name}/index`], resolve),
        meta: item.meta
      }]
    }
    return item
  })
}

function dealArr (arr) {
  console.log(arr)
  let map = {}
  arr.forEach(item => {
    map[item.id] = item
  })

  let result = []
  arr.forEach(item => {
    let mapItem = map[item.pid]
    if (mapItem) {
      (mapItem.children || (mapItem.children = [])).push(item)
    } else {
      if (item.children) {
        console.log(item.children)
      }
      result.push(item)
    }
  })
  return result
}

export default {
  namespaced: true,
  ...permission
}
