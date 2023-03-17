<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0 0 20px 0' }">
      <template #header>
        <div class="menu-wrapper">
          <el-menu :default-active="activeIndex" mode="horizontal" @select="onMenuSelect" class="sales-view-el-menu">
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker type="daterange" v-model="date" range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" size="small" :picker-options="pickerOptions" unlink-panels
              class="sales-view-date-picker" />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :option="chartOption"/>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.name">
                <div :class="['list-item-no', (+item.no <= 3 ? 'top-no' : '')]">{{ item.no }}</div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'SalesView',
  data () {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - (3600 * 24 * 1000 * 7))
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - (3600 * 24 * 1000 * 30))
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const start = new Date()
            const end = new Date()
            start.setTime(start.getTime() - (3600 * 24 * 1000 * 90))
            picker.$emit('pick', [start, end])
          }
        }]
      },
      chartOption: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 230, 160, 300, 500, 700, 660, 750, 360, 780, 860]
          }
        ],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankData: [{
        no: 1,
        name: '中国石油化工股份有限公司',
        money: '2,105,984'
      },
      {
        no: 2,
        name: '中国石油天然气股份有限公司',
        money: '1,933,836'
      }, {
        no: 3,
        name: '中国建筑股份有限公司',
        money: '1,615,023.33'
      }, {
        no: 4,
        name: '中国平安保险（集团）股份有限公司',
        money: '1,218,315'
      }, {
        no: 5,
        name: '中国中铁股份有限公司',
        money: '974,748.79'
      }, {
        no: 6,
        name: '中国铁建股份有限公司',
        money: '910,324.76'
      }, {
        no: 7,
        name: '中国工商银行股份有限公司',
        money: '882,665'
      }]
    }
  },
  methods: {
    onMenuSelect (index) {
      this.activeIndex = index
      switch (index) {
        case '1':
          this.chartOption = {
            title: {
              text: '年度销售额',
              textStyle: {
                fontSize: 12,
                color: '#666'
              },
              left: 25,
              top: 20
            },
            xAxis: {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisTick: {
                alignWithLabel: true,
                lineStyle: {
                  color: '#999'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#999'
                }
              },
              axisLabel: {
                color: '#333'
              }
            },
            yAxis: {
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  type: 'dotted',
                  color: '#eee'
                }
              }
            },
            series: [
              {
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 230, 160, 300, 500, 700, 660, 750, 360, 780, 860]
              }
            ],
            color: ['#3398DB'],
            grid: {
              top: 70,
              left: 60,
              right: 60,
              bottom: 50
            }
          }
          break
        case '2':
          this.chartOption = {
            title: {
              text: '年度访问量',
              textStyle: {
                fontSize: 12,
                color: '#666'
              },
              left: 25,
              top: 20
            },
            xAxis: {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisTick: {
                alignWithLabel: true,
                lineStyle: {
                  color: '#999'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#999'
                }
              },
              axisLabel: {
                color: '#333'
              }
            },
            yAxis: {
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  type: 'dotted',
                  color: '#eee'
                }
              }
            },
            series: [
              {
                type: 'bar',
                barWidth: '35%',
                data: [1000, 800, 600, 700, 500, 680, 730, 660, 750, 860, 830, 860]
              }
            ],
            color: ['#3398DB'],
            grid: {
              top: 70,
              left: 60,
              right: 60,
              bottom: 50
            }
          }
          break
        default:
          this.chartOption = {
            title: {
              text: '年度销售额',
              textStyle: {
                fontSize: 12,
                color: '#666'
              },
              left: 25,
              top: 20
            },
            xAxis: {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
              axisTick: {
                alignWithLabel: true,
                lineStyle: {
                  color: '#999'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#999'
                }
              },
              axisLabel: {
                color: '#333'
              }
            },
            yAxis: {
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  type: 'dotted',
                  color: '#eee'
                }
              }
            },
            series: [
              {
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 230, 160, 300, 500, 700, 660, 750, 360, 780, 860]
              }
            ],
            color: ['#3398DB'],
            grid: {
              top: 70,
              left: 60,
              right: 60,
              bottom: 50
            }
          }
          break
      }
    }
  }
}
</script>
<style lang="scss">
.sales-view {
  margin-top: 20px;

  .menu-wrapper {
    position: relative;
    display: flex;

    .sales-view-el-menu {
      width: 100%;
      padding-left: 20px;

      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }

    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }

  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;

    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }

    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }

      .list-item-wrapper {
        margin-top: 15px;

        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          box-sizing: content-box;
          .list-item-no{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no{
              background-color: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name{
            margin-left: 10px;
            color: #333;
          }

          .list-item-money{
            flex: 1;
            text-align: right;
          }
        }
      }

    }
  }
}
</style>
