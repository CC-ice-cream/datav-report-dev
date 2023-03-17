<template>
  <div>
    <common-card title="累计用户数" value="182,265">
      <template>
        <div id="total-user-chart" ref="totalUserChart" :style="{ width: '100%', height: '100%' }" />
      </template>
      <template #footer>
        <div class="total-user-footer">
          <span>日同比 </span>
          <span class="emphasis">15.14%</span>
          <div class="increase"></div>
          <span class="month">月同比 </span>
          <span class="emphasis">2.33%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </common-card>
  </div>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = this.$refs.totalUserChart
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'value',
        show: false,
        boundaryGap: false
      },
      yAxis: {
        type: 'category'
      },
      series: [{
        type: 'bar',
        stack: '总量',
        data: [200],
        barWidth: '10px',
        itemStyle: {
          color: '#45c946'
        }
      },
      {
        type: 'bar',
        stack: '总量',
        data: [250],
        itemStyle: {
          color: '#eee'
        }
      }, {
        type: 'custom',
        data: [200],
        stack: '总量',
        renderItem: (params, api) => {
          const value = api.value(0)
          const endPoint = api.coord([value, 0])
          return {
            type: 'group',
            position: endPoint,
            children: [{
              type: 'path',
              shape: {
                d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                x: -5,
                y: -20,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: '#45c946'
              }
            }, {
              type: 'path',
              shape: {
                d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                x: -5,
                y: 10,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: '#45c946'
              }
            }]
          }
        }
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
<style lang="scss" scoped>
.total-user-footer{
  display: flex;
  align-items: center;
  .month{
    margin-left: 10px;
  }
}
</style>
