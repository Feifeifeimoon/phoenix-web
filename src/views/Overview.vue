<template>
  <div class="overview">
    <el-row style="height:25%;">
      <el-col :span=6 :offset=2>
        <el-card :body-style="{ padding: '0px'}">
          <div class="card-content">
            <span> 运行状态</span><br />
            <el-tag type="success">标签二</el-tag>
            <el-button type="success" icon="el-icon-video-play" @click.native="manageServer('start')" circle></el-button>
            <el-button type="danger" icon="el-icon-video-pause" @click.native="manageServer('stop')" circle></el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span=6 :offset=1>
        <el-card :body-style="{ padding: '0px'}">
          <div class="card-content">
            <span> 客户端数量</span> <br />
            <p class="card-num"> {{ clientNum }} / {{ sumNum }} </p>
          </div>
        </el-card>
      </el-col>
      <el-col :span=6 :offset=1>
        <el-card :body-style="{ padding: '0px' }">
          <div id="proxy" class="card-content">
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="height:70%;">
      <el-col :span=20 :offset=2 :style="{height: '100%'}">
        <mainChart></mainChart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import MainChart from '@/components/MainChart.vue'
  export default {
    name: 'overview',
    components: {
      MainChart,
    },
    data() {
      return {
        clientNum: 0,
        sumNum: 0,
      }
    },
    mounted() {
      this.drawLine();
    },
    created() {
      this.sysinfo();
      this.fetchData();
    },
    beforeDestroy() {
      //停止定时获取
      clearInterval(this.intervalid);
    },
    methods: {
      fetchData() {
        this.intervalid = setInterval(() => {
          this.sysinfo()
        }, 5000)
      },
      sysinfo() {
        let that = this
        this.$axios.get('/api/sys_info')
          .then(function (res) {
            if (res.data.success) {
              that.clientNum = res.data.data.cur_num;
              that.sumNum = res.data.data.max_num;
            } else {
              that.$message.error('请求错误:' + res.data.msg);
            }
          })
      },
      manageServer(action) {
        let that = this
        this.$axios.post('/api/manage_server?command=' + action)
          .then(function (res) {
            if (res.data.success) {
              that.$message({
                message: '成功',
                type: 'success'
              });
            } else {
              that.$message.error('请求错误:' + res.data.msg);
            }
          })
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('proxy'))
        // 绘制图表
        myChart.setOption({
          backgroundColor: '#2f343a',
          title: {
            text: '代理总数',
            left: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16,
              color: '#F1F1F3'
            },
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [{
                value: 4,
                name: 'TCP'
              },
              {
                value: 1,
                name: 'UDP'
              },
            ]
          }]
        })
      }
    }
  }
</script>

<style scoped>
  .overview {
    margin-top: 3%;
    height: 100%;
    width: 100%;
  }

  .el-card {
    border: 0px;
    background-color: #2f343a;
  }

  .card-content {
    height: 150px;
    color: #ffffff;
    background-color: #2f343a;
  }

  .card-num {
    font-weight: bold;
    font-size: 400%;
    color: #DC143C;
    margin: 10px;
  }

  .el-button {
    margin-top: 15%;
  }
</style>