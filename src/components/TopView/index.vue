<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-order />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import TotalSales from '@/components/TotalSales'
import TotalOrder from '@/components/TotalOrder'
import TotalUsers from '@/components/TotalUsers'
import TodayUsers from '@/components/TodayUsers'
export default {
  name: 'TopView',
  components: {
    TotalSales,
    TotalOrder,
    TotalUsers,
    TodayUsers
  }
}
</script>
<style lang="scss">
</style>
