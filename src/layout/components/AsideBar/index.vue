<template>
  <div class="aside-bar">
    <div class="logo">L H C Z</div>
    <el-menu
      class="el-menu-vertical-demo"
      router
      :collapse="isCollapse"
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
    >
      <menu-item
        v-for="route in dealRoutes"
        :key="route.path"
        :item="route"
      ></menu-item>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from '@/layout/components/AsideBar/MenuItem'
import variables from '@/styles/variables.scss'

import { mapGetters } from 'vuex'

export default {
  name: 'aside-bar',
  components: {
    MenuItem
  },
  data () {
    return {
      routes: []
    }
  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ]),
    dealRoutes () {
      return this.$store.getters.routes.filter(route => route.hidden !== true)
    },
    activeMenu () {
      return this.$route.path
    },
    variables () {
      return variables
    }
  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: 80px;
  line-height: 80px;
  font-size: 60px;
  color: #c7c7c7;
  text-align: center;
  font-weight: bold;
}
/deep/.el-menu {
  border-right: none;
}
</style>
