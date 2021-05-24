<template>
  <div class="main">
    <div class="strip" id="gxt"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      data: [
        {
          name: '123',
          symbolSize: [0, 10],
          draggable: true,
          category: 0
        },
        {
          name: '456',
          symbolSize: [0, 20],
          draggable: true,
          category: 0
        },
        {
          name: '标题',
          symbolSize: [0, 20],
          draggable: true,
          category: 0,
          itemStyle: {
            normal: {
              color: '#f40'
            }
          }
        }
      ],
      links: [
        {
          source: '123',
          target: '标题'
        },
        {
          source: '456',
          target: '标题'
        }
      ]
    }
  },
  mounted () {
    for (var i = 0; i < 15; i++) {
      this.data.push({
        name: this.dealText('那身段神奈川奥斯电脑上那些哦啊是新马路才能奥斯曼从西安是' + i),
        symbolSize: [0, 20],
        draggable: true,
        category: 0
      })
      this.links.push({
        source: this.dealText('那身段神奈川奥斯电脑上那些哦啊是新马路才能奥斯曼从西安是' + i),
        target: '标题'
      })
    }
    setTimeout(() => {
      this.init(this.data, this.links)
    }, 500)
  },
  methods: {
    init (data, links) {
      let myChart = echarts.init(document.getElementById('gxt'))
      let option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 50,
              edgeLength: 100,
              friction: 0.2
            },
            roam: true,
            label: {
              show: true,
              width: '50px',
              height: 50
            },
            data,
            links,
            scaleLimit: {
              min: 2,
              max: 3
            },
            lineStyle: {
              normal: {
                color: '#000',
                opacity: 0.9,
                width: 5,
                curveness: 0
              }
            },
            itemStyle: {
              color: '#000'
            },
            categories: [
              { name: '0' },
              { name: '1' },
              { name: '2' }
            ]
          }
        ]
      }
      myChart.setOption(option)
    },
    dealText (params) {
      var newParamsName = '' // 最终拼接成的字符串
      var paramsNameNumber = params.length // 实际标签的个数
      var provideNumber = 9 // 每行能显示的字的个数
      var rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
      //     /**
      //  * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
      //  */
      // 条件等同于rowNumber>1
      if (paramsNameNumber > provideNumber) {
        /** 循环每一行,p表示行 */
        for (var p = 0; p < rowNumber; p++) {
          var tempStr = '' // 表示每一次截取的字符串
          var start = p * provideNumber // 开始截取的位置
          var end = start + provideNumber // 结束截取的位置
          // 此处特殊处理最后一行的索引值
          if (p === rowNumber - 1) {
            // 最后一次不换行
            tempStr = params.substring(start, paramsNameNumber)
          } else {
            // 每一次拼接字符串并换行
            tempStr = params.substring(start, end) + '\n'
          }
          newParamsName += tempStr // 最终拼成的字符串
        }
      } else {
        // 将旧标签的值赋给新标签
        newParamsName = params
      }
      // 将最终的字符串返回
      return newParamsName
    }// x轴文字换行
  }
}
</script>

<style>
#gxt {
  height: 800px;
}
</style>
