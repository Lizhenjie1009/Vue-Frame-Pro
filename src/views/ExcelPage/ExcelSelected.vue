<template>
  <div class="excel-page">
    <div class="expend">
      <label class="radio-label" style="padding-left:10px;">搜素词: </label>
      <el-input v-model="filename" placeholder="请输入搜素词" style="width:345px;" prefix-icon="el-icon-document" />
      <el-button :loading="downloadLoading" style="margin-left: 50px" type="primary" icon="el-icon-document" @click="handleDownload">导出选中的Excel</el-button>
    </div>
    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="tableData"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" align="center" />
      <el-table-column
        type="index"
        align='center'
        width="50">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="280">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="280">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'excel-page',
  components: {

  },
  data () {
    return {
      listLoading: true,
      multipleSelection: [],
      downloadLoading: false,
      filename: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {
    this.listLoading = false
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleDownload () {
      if (this.multipleSelection.length) {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['Id', 'Date', 'Name', 'Address']
          const filterVal = ['id', 'date', 'name', 'address']
          const list = this.multipleSelection
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: new Date()
          })
          this.$refs.multipleTable.clearSelection()
          this.downloadLoading = false
        })
      } else {
        this.$message({
          message: '请选择',
          type: 'warning'
        })
      }
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
  .expend {
    margin: 20px 20px 0;
  }
  /deep/.el-table {
    margin: 20px;
    width: 90% !important;
    border: 1px solid #ebeef5;
  }
</style>
