<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submit">登陆</el-button>
  </div>
</template>

<script>
import { setStorage } from '@/utils/auth'
import routerData from '@/assets/router.json'

export default {
  name: 'login',
  components: {

  },
  data () {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      callback()
    }

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入密码'))
      } else if (value.length >= 6 && value.length <= 8) {
        callback()
      }
      callback(new Error('密码的长度为大于等于6小于等于8'))
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          setStorage('token', this.loginForm)

          this.$router.push({ path: '/' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submit () {
      sessionStorage.setItem('token', '12312soaicugehbn')
      sessionStorage.setItem('menus', JSON.stringify(routerData.menus))
      this.$router.push({ path: '/' }).catch(err => err)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
