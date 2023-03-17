<template>
  <div>
    <common-card
    title="累计订单量"
    value="255,488"
    >
    <template>
      <div id="total-order-chart" ref="totalOrderChart" :style="{ width: '100%', height: '100%'}" />
    </template>
    <template #footer>
      <span>昨日订单量 </span>
      <span class="emphasis">200,000</span>
    </template>
  </common-card>
  </div>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalOrder',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = this.$refs.totalOrderChart
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false
      },
      yAxis: {
        show: false
      },
      series: [{
        type: 'line',
        data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
        areaStyle: {
          color: 'purple'
        },
        lineStyle: {
          width: 0
        },
        itemStyle: {
          opacity: 0
        },
        smooth: true
      }],
      grid: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
      }
    })
  }
}
</script>
<style lang="scss">
</style>
