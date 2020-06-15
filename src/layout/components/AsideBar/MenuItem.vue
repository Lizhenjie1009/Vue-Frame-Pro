<template>
  <div class="menu-item">
    <!-- 没有子路由 -->
    <template v-if="hasOneShowingChild(item)">
        <el-menu-item :index="item.children ? item.children[0].path : item.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.meta && item.meta.title}}</span>
        </el-menu-item>
    </template>
    <!-- 有子路由 -->
    <el-submenu v-else ref="subMenu" :index="item.path">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <menu-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'menu-item',
  props: ['item'],
  components: {

  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    hasOneShowingChild (item) {
      if (item.children && item.children.length === 1) {
        return true
      } else if (!item.children) {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/*隐藏文字*/
  .el-menu--collapse  .el-submenu__title span{
    display: none;
  }
  /*隐藏 > */
  /deep/.el-icon-arrow-right:before {
    display: none !important;
  }

</style>
