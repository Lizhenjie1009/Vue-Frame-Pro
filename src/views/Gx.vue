<template>
  <div class="gx">
    <svg id="svgCanvas" width=1260 height=900></svg>
  </div>
</template>

<script>
import dagreD3 from 'dagre-d3'
import * as d3 from 'd3'

export default {
  data () {
    return {
      state: [
        { label: 'project_etl_start\n虚节点', class: 'type-suss' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' },
        { label: 'project_etl_start\n虚节点', class: 'type-TOP' }
      ],
      edg: [
        { end: 4, start: 1, option: {} },
        { end: 5, start: 1, option: {} },
        { end: 6, start: 1, option: {} },
        { end: 7, start: 1, option: {} },
        { end: 8, start: 1, option: {} },
        { end: 9, start: 1, option: {} },
        { end: 10, start: 1, option: {} },
        { end: 11, start: 1, option: {} },
        { end: 12, start: 1, option: {} },
        { end: 13, start: 1, option: {} },
        { end: 14, start: 1, option: {} },
        { end: 2, start: 1, option: {} },
        { end: 3, start: 1, option: {} }
      ],
      g: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.g = new dagreD3.graphlib.Graph()
        .setGraph({})
        .setDefaultEdgeLabel(function () { return {} })
      var render = new dagreD3.render()
      var svg = d3.select('#svgCanvas') // 声明节点
      svg.select('g').remove() // 删除以前的节点，清空画面
      var svgGroup = svg.append('g')
      var inner = svg.select('g')
      var zoom = d3.zoom().on('zoom', function () { // 添加鼠标滚轮放大缩小事件
        inner.attr('transform', d3.event.transform)
      })
      svg.call(zoom)
      this.drawNode()// 画点
      this.drawEdg()// 画连线
      render(d3.select('svg g'), this.g) // 渲染节点
      d3.selectAll('.type-TOP').attr('color', '#fff')
      let max = svg._groups[0][0].clientWidth > svg._groups[0][0].clientHeight ? svg._groups[0][0].clientWidth : svg._groups[0][0].clientHeight
      var initialScale = max / 779 // initialScale元素放大倍数，随着父元素宽高发生变化时改变初始渲染大小
      var tWidth = (svg._groups[0][0].clientWidth - this.g.graph().width * initialScale) / 2 // 水平居中
      var tHeight = (svg._groups[0][0].clientHeight - this.g.graph().height * initialScale) / 2 // 垂直居中
      svg.call(zoom.transform, d3.zoomIdentity.translate(tWidth, tHeight).scale(initialScale)) // 元素水平垂直居中
    },
    drawNode () {
      let state = this.state
      for (let i in state) { // 画点
        let el = state[i]
        this.g.setNode(i, {
          id: i,
          label: el.label,
          class: el.class
        })
      }
    },
    drawEdg () {
      let edg = this.edg
      for (let i in edg) { // 画连线
        let el = edg[i]
        this.g.setEdge(el.start, el.end, {
          style: 'stroke: #0fb2cc; fill: none;',
          arrowheadStyle: 'fill: #0fb2cc;stroke: #0fb2cc;',
          arrowhead: 'vee'
        })
      }
    }
  }
}
</script>

<style>

</style>
