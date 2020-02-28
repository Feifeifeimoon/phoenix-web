<template>
    <div id="login">
        <el-row>
            <el-card class="login-form">
                <el-image style="width: 100%; height: 100px" :src="imgUrl" fit="fill"></el-image>
                <el-divider></el-divider>
                <el-form ref="form" :model="form" @submit.native.prevent>
                    <el-form-item>
                        <el-input style="width: 75%;" v-model="form.username" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input style="width: 75%;" v-model="form.password" placeholder="密码" show-password
                            @keyup.enter.native="login">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login">登陆</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                imgUrl: require('@/assets/phoenix.png'),
                form: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            login() {
                let that = this
                this.$axios.post('/api/login', {
                        username: this.form.username,
                        password: this.form.password,
                    })
                    .then(function (res) {
                        if (res.data.success) {
                            that.$message({
                                message: '登陆成功',
                                type: 'success'
                            });
                            that.$router.push("/dashboard/overview")
                        } else {
                            that.$message.error('账号或密码错误');
                        }
                    })
            },
        }
    }
</script>

<style scoped>
    .login-form {
        margin-top: 10%;
        left: 37.5%;
        position: absolute;
        width: 25%;
    }
</style>