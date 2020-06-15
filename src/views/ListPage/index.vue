<template>
  <!-- 根据table的id进行排序 -->
  <div>
    <el-table
    ref="table"
    :data="tableData"
    row-key="id"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    </el-table>
    <br>
    <el-table
      ref="table1"
      :data="tableData"
      row-key="id"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 拖动table插件
import Sortable from 'sortablejs'

export default {
  data () {
    return {
      sortable: null,
      sortable1: null,
      oldList: [],
      newList: [],
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted () {
    // 获取id
    this.oldList = this.tableData.map(v => v.id)
    // 映射新数组
    this.newList = this.oldList.slice()
    this.dragTable()
  },
  methods: {
    // 拖动table方法
    dragTable () {
      // 拖动的table
      let dom = this.$refs.table.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      let dom1 = this.$refs.table1.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      // this.sortable = Sortable.create(dom, {
      //   ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
      //   setData: function (dataTransfer) {
      //     dataTransfer.setData('Text', '')
      //   },
      //   onEnd: evt => {
      //     const targetRow = this.tableData.splice(evt.oldIndex, 1)[0]
      //     this.tableData.splice(evt.newIndex, 0, targetRow)
      //     // for show the changes, you can delete in you code
      //     // const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
      //     // this.newList.splice(evt.newIndex, 0, tempIndex)
      //   }
      // })
      this.sortable = Sortable.create(dom, {
        group: 'shared', // set both lists to same group
        animation: 150
      })
      this.sortable1 = Sortable.create(dom1, {
        group: 'shared', // set both lists to same group
        animation: 150
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #269cb9!important;
}
</style>
