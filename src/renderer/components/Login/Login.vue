<template>
    <div class="login">
        <div class="logo"></div>
        <div class="login-form">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">立即登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    import qs from 'qs';
    export default {
        name: "Login",
        data() {
            let validatorUserName=(rule,value,callback)=>{
                console.log(rule);
                console.log(value);
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }else if(value.length>16){
                    return callback(new Error('用户名长度不能超过16位'))
                }
            };
            let validatorPassWord=(rule,value,callback)=>{
                console.log(rule);
                console.log(value);
                if (!value) {
                    return callback(new Error('密码不能为空'));
                }else if(value.length>16){
                    return callback(new Error('密码长度不能超过16位'))
                }
            }
            return {
                form: {
                    username: "jiayuwen",
                    password: "123456",
                },
                rules:{
                    username: [ { validator: validatorUserName, trigger: 'blur' }],
                    password:[ { validator: validatorPassWord, trigger: 'blur' }]
                }
            }
        },
        methods:{
            login:function () {
                let self=this;


                if (this.form.username == '') {

                    return false;
                }
                if (this.form.password == '') {

                    return false
                }







                let params={
                    "userName":self.form.username,
                    "userPwd":self.form.password
                };
                params=qs.stringify(params);
                let url='http://www.hnhhjyj.edu.cn/user/userlogincheck';
                this.$http({"url":url,"method":"post",data:params}).then((res)=>{
                    console.log(res);
                    let data=res.data;
                    let userInfo=data.data;
                    if(data.state===1){
                        self.$http({"url":"http://www.hnhhjyj.edu.cn/user/getUserInfo",}).then((res2)=>{
                            // console.log(res2);

                        });
                        this.$message({
                            message: '恭喜你，登录成功',
                            type: 'success'
                        });
                        console.log(self.$store);
                        self.$store.dispatch("updataUserInfo",userInfo);

                        self.$router.replace({name:'Home',});
                    }else {

                    }




                })
            }
        }
    }
</script>

<style scoped>

    .login{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .logo{
        height: 500px;
        width: 500px;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
    }
    .login-form{
        width: 400px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>
