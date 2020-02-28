<template>
  <div class="manage">
    <el-row>
      <el-col :span=15 :offset=1>
        <el-table :data="table">
          <el-table-column prop="ip" label="IP地址"> </el-table-column>
          <el-table-column prop="proxyNum" label="代理数量"> </el-table-column>
          <el-table-column prop="startTime" label="开始时间"> </el-table-column>
          <el-table-column prop="bytes" label="流量统计"> </el-table-column>
          <el-table-column  label="管理">
            <template >
               <el-button type="text">踢出 </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "manage",
  data() {
    return {
        table: [{
          ip: "192.168.171.133",
          proxyNum: 5,
          startTime: "2019-03-26 21:38",
          bytes: "1024",
        }]
    }
  },
}
</script>

<style scoped>
.manage {
    margin-top: 3%;
    height: 100%;
    width: 100%;
  }
</style>
