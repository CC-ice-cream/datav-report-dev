<template>
  <common-card title="累计销售额" value="￥123,055">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease" />
        </div>
      </div>
    </template>
    <template #footer>
      <span>昨日销售额 </span>
      <span class="emphasis">￥ 2,545,145</span>
    </template>
  </common-card>
</template>
<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalSales',
  mixins: [commonCardMixin]
}
</script>
<style lang="scss">
.emphasis{
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
.compare-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  .compare{
    display: flex;
    align-items: center;
    height: 50%;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
    .increase{
      width: 0;
      height: 0;
      border-width: 3px;
      border-color: transparent transparent red transparent;
      border-style: solid;
      margin: 0 0 3px 5px;
    }
    .decrease{
      width: 0;
      height: 0;
      border-width: 3px;
      border-color: green transparent transparent transparent;
      border-style: solid;
      margin: 3px 0 0 5px;
    }
  }
}
</style>
