<template>
  <div class="main">
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var myChart = echarts.init(document.getElementById('main'))
      var categories = []
      for (var i = 0; i < 2; i++) {
        categories[i] = {
          name: '类目' + i
        }
      }
      var option = {
        // 图的标题
        title: {
          // text: 'ECharts 关系图'
        },
        // 提示框的配置
        tooltip: {
          formatter: function (x) {
            return x.data.des
          }
        },
        // 工具箱
        toolbox: {
          // 显示工具箱
          show: true,
          feature: {
            mark: {
              show: true
            },
            // 还原
            restore: {
              show: false
            },
            // 保存为图片
            saveAsImage: {
              show: true
            }
          }
        },
        legend: [{
          // selectedMode: 'single',
          data: categories.map(function (a) {
            return a.name
          })
        }],
        series: [{
          type: 'graph', // 类型:关系图
          layout: 'force', // 图的布局，类型为力导图
          symbolSize: 40, // 调整节点的大小
          roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [2, 10],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          force: {
            repulsion: 2500,
            edgeLength: [10, 50],
            layoutAnimation: false
          },
          draggable: true,
          lineStyle: {
            normal: {
              width: 2,
              color: '#4b565b'
            }
          },
          edgeLabel: {
            normal: {
              show: true,
              formatter: function (x) {
                return x.data.name
              }
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {}
            }
          },
          // 数据
          data: [{
            name: 'node01',
            des: 'nodedes01',
            symbolSize: 70,
            category: 0
          }, {
            name: 'node02',
            des: 'nodedes02',
            symbolSize: 50,
            category: 1
          }, {
            name: 'node03',
            des: 'nodedes3',
            symbolSize: 50,
            category: 1
          }, {
            name: 'node04',
            des: 'nodedes04',
            symbolSize: 50,
            category: 1
          }, {
            name: '阿巴斯打卡机十八岁的煎熬了范师傅熬时间那些大神了那些啊阿萨大',
            des: '5',
            symbolSize: 30,
            category: 1
          }],
          links: [{
            source: 'node01',
            target: 'node02',
            name: '',
            des: 'link01des'
          }, {
            source: 'node01',
            target: 'node03',
            name: '',
            des: 'link02des'
          }, {
            source: 'node01',
            target: 'node04',
            name: '',
            des: 'link03des'
          }, {
            source: 'node01',
            target: '阿巴斯打卡机十八岁的煎熬了范师傅熬时间那些大神了那些啊阿萨大',
            name: '',
            des: 'link05des',
            id: 1
          }],
          categories: categories
        }]
      }
      myChart.setOption(option)
      myChart.on('click', function (params) {
        // 在用户点击后控制台打印数据的名称
        console.log(params)
      })
    }
  }
}
</script>

<style scoped>
#main {
  width: 1000px;
  height: 800px;
}
</style>
