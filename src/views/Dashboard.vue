<template>
    <el-row>
        <el-col :span="3">
            <el-card>
                <el-image style="width: 100%; height: 100%" :src="imgUrl" fit="fill"></el-image>
            </el-card>
            <el-menu :default-active=defaultActive class="el-menu" text-color=#faf5f5 router>
                <el-menu-item index="/dashboard/overview">
                    <i class="el-icon-odometer"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/dashboard/manage">
                    <i class="el-icon-menu"></i>
                    <span slot="title">管理</span>
                </el-menu-item>
                <el-menu-item index="/dashboard/setting">
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="21" style="background-color:#23262b">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                imgUrl: require('@/assets/phoenix-header.png'),
            }
        },
        components: {},
        computed: {
            defaultActive() {
                return this.$route.path
            }
        },
        mounted() {}
    }
</script>

<style scoped>
    .el-row,
    .el-col {
        height: 100%;
    }

    .el-card {
        border: 0px;
        border-radius: 0px;
        background-color: #161a1d;
    }

    .el-menu:not(.el-menu--collapse) {
        height: 100%;
        border-right: 0px;
        background-color: #161a1d;
    }

    .el-menu-item.is-active {
        background-color: #2f343a;
    }
    .menu-header {
        min-height: 80px;
        text-align: center;
        border-radius: 0px;
    }
</style>