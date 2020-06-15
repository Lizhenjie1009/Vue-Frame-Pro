import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/index',
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/dashboard/index',
        name: 'dashboard',
        component: () => import('@/views/Dashboard'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/ErrorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/ErrorPage/401'),
    hidden: true
  }
]

// {
//   alwaysShow: true, // will always show the root menu
//   meta: {
//     title: 'Permission',
//     icon: 'lock',
//     roles: ['admin', 'editor'] // you can set roles in root nav
//   },
//   children: [
//     {
//       path: 'role',
//       component: () => import('@/views/permission/role'),
//       name: 'RolePermission',
//       meta: {
//         title: 'Role Permission',
//         roles: ['admin']
//       }
//     }
//   ]
// },

export const asyncRoutes = [
  {
    path: '/excel',
    name: 'excel',
    component: Layout,
    redirect: '/excel/excel-export',
    meta: {
      title: 'Excel',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: '/excel/excel-export',
        name: 'excel-export',
        component: () => import('@/views/ExcelPage/ExcelExport'),
        meta: {
          title: '导出Excel',
          roles: ['admin', 'editor']
        }
      },
      {
        path: '/excel/excel-selected',
        name: 'excel-selected',
        component: () => import('@/views/ExcelPage/ExcelSelected'),
        meta: {
          title: '导出已选Excel',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/input',
    component: Layout,
    meta: {
      title: '表单',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: '/input/index',
        name: 'input',
        component: () => import('@/views/InputPage/index'),
        meta: {
          title: '表单',
          roles: ['admin', 'editor']
        }
      }
    ]
  },
  {
    path: '/list',
    component: Layout,
    meta: {
      title: '拖拽列表',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: '/list/index',
        name: 'list',
        component: () => import('@/views/ListPage/index'),
        meta: {
          title: '列表',
          roles: ['admin', 'editor']
        }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    meta: {
      title: '权限',
      roles: ['admin']
    },
    children: [
      {
        path: '/permission/index',
        name: 'permission',
        component: () => import('@/views/Permission/index'),
        meta: {
          title: '权限',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/visualization',
    component: Layout,
    meta: {
      title: '可视化'
    },
    children: [
      {
        path: '/visualization/index',
        name: 'visualization',
        component: () => import('@/views/Visualization'),
        meta: {
          title: '可视化'
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

// {
//   path: '/tab',
//   component: Layout,
//   children: [
//     {
//       path: 'index',
//       component: () => import('@/views/tab/index'),
//       name: 'Tab',
//       meta: { title: 'Tab', icon: 'tab' }
//     }
//   ]
// },

const createRouter = () => new Router({
  routes: constRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
