<template>
  <div id="crumbs-link">
    <!-- 折叠 -->
    <div class="collapse" @click='changeMenu'>
      <i class="el-icon-menu"></i>
    </div>

    <!-- 面包屑 -->
    <el-breadcrumb separator="" class="hamburger-container" v-if="$route.path == '/home/room'">
      <el-breadcrumb-item :to="{ path: '/home/room' }">首页</el-breadcrumb-item>
    </el-breadcrumb>

    <el-breadcrumb separator="一" class="hamburger-container" v-else>
      <!-- 过渡动画 -->
      <transition-group name="crumbs" mode="in-out">
        <el-breadcrumb-item :to="{ path: '/home/room' }" key="home">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          v-for="crumb in crumbsRoutes"
          :key="crumb.path"
          :to="{ path: crumb.path }"
        >
          {{crumb.meta.title}}
        </el-breadcrumb-item>
      </transition-group>

    </el-breadcrumb>
  </div>
</template>

<script>

export default {
  name: 'crumbs-bar',
  components: {

  },
  data () {
    return {
      crumbsRoutes: []
    }
  },
  computed: {

  },
  watch: {
    $route (val) {
      if (val.name === 'room') {
        this.crumbsRoutes = []
        return
      }
      this.crumbsRoutes = val.matched
    }
  },
  created () {

  },
  mounted () {
    this.crumbsRoutes = this.$route.matched
  },
  methods: {
    changeMenu () {
      this.$store.dispatch('app/generateColl', !this.$store.getters.isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
#crumbs-link {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  .collapse {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    i {
      cursor: pointer;
      font-size: 22px;
    }
  }
}

.el-breadcrumb {
  font-size: 18px;
}
.el-breadcrumb__inner a, /deep/.el-breadcrumb__inner.is-link {
  font-weight: 400;
  color: #666666;
}

/deep/.el-breadcrumb__separator {
  margin: 0 4px 0 2px !important;
}

// 过渡效果
.crumbs-enter,.crumbs-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.crumbs-enter-active {
  transition: all .8s;
}
// .crumbs-enter,.crumbs-leave-to {
//   opacity: 0;
//   transform: translateX(-100px);
// }
// .crumbs-enter-active,.crumbs-leave-active {
//   transition: all .2s;
// }
</style>
