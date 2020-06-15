const getters = {
  routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  roles: state => state.user.roles,
  isCollapse: state => state.app.isCollapse,
  tags: state => state.tagsbar.tags
}

export default getters
