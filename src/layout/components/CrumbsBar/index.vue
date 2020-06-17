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

    <div class="personal" @click='logout'>
      <el-tooltip class="item" effect="light" content="退出登录" placement="bottom">
        <el-image
          style="width: 100%; height: 100%"
          src="http://img3.11467.com/2019/07-29/758147394.jpg"
          fit="fill"></el-image>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import { setStorage } from '@/utils/auth'

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
    },
    logout () {
      this.$confirm('是否要退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        setStorage('token', '')
        this.$router.replace('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.personal {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #f30;
  position: absolute;
  top: 5px;
  right: 20px;
  cursor: pointer;
}
#crumbs-link {
  position: relative;
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
