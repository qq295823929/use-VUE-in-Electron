<template>
    <div id="app">

        <transition name="fadeOutUp">
            <div class="header">
                <div class="logo">
                    <img src="http://www.hnhhjyj.edu.cn/html/img/manager_logo.png"/>
                </div>
                <div class="top-nav">
                    <div class="login" v-if="getUserInfo.userName==undefined">您好,请登录</div>
                    <div class="user-info">
                        <div class="user-img">
                            <img src="">
                        </div>
                        <div class="user-name">{{getUserInfo.userName}}</div>
                        <div class="quite">退出登录</div>
                    </div>
                </div>
            </div>
        </transition>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {

        name: 'my-project',
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'getUserInfo',
            ]),
        },
        created:function () {
            var self=this;
            document.addEventListener("keydown",function (e) {
                if(e.keyCode===13){
                    self.$router.replace({name:"Login"})
                }

            })
        }

    }
</script>

<style>
    html,body{
    }
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }
    .header {
        background: #6e94b0;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }

    .top-nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .user-info {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quite {
        cursor: pointer;
    }
    /* CSS */
</style>
