<template>
    <div class="home">
        <div>{{getUserInfo}}</div>

        <el-tabs v-model="activeName" >
            <el-tab-pane v-for="(item,id) in appList" :label="item.funName" :name="item.funName">
                <div v-if="item.subBaseFunLists.length===0">暂无可用应用</div>
                <ul class="app-box">
                    <li class="app-item" v-for="(i,id) of item.subBaseFunLists" @click="goToApp(i)">
                        <img src="">
                        <span>{{i.funName}}</span>
                    </li>
                </ul>
            </el-tab-pane>
        </el-tabs>
        <div class="notice">
            <div>
                <h2>内部通知</h2>
            </div>
            <el-collapse accordion>
                <p v-if="hasGetNoticeList&&noticeList.length===0">暂无通知</p>
                <el-collapse-item v-for="(item,id) in noticeList" :key="id">
                    <template slot="title">
                       {{item.TITLE}}
                    </template>
                    <div>{{item.NOTICE_DETAILS}}</div>
                </el-collapse-item>

            </el-collapse>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Home",
        data() {
            return {
                activeName:"",
                appList: [],
                noticeList:[],
                hasGetNoticeList:false,
            }
        },
        computed: {
            ...mapGetters([
                'getUserInfo',
            ]),
        },
        methods: {
            getAppList: function () {
                var self = this;
                this.$http.get("http://www.hnhhjyj.edu.cn/mydesktop/appList").then((res) => {
                    console.log(res);
                    var data = res.data;
                    self.appList = data;
                    self.activeName=self.appList[0]?self.appList[0].funName:"";
                })
            },
            goToApp:function(i){
                this.$router.push({name:"SchoolBaseinfo",query:{appid:i.appId}})
            },
            getNoticeList:function () {
                let self=this;
                this.$http.get("http://www.hnhhjyj.edu.cn/mydesktop/selectOaInternalNotification").then((res)=>{
                    console.log(res);
                    if(res.data.state===1){
                        let data=res.data.data.internalNotification;
                        self.noticeList=data;
                        self.hasGetNoticeList=true

                    }
                })
            }
        },
        created: function () {
            this.getAppList();
            this.getNoticeList();
        }
    }
</script>

<style scoped>

    .app-box{
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        min-height: 90px;
    }
    .app-item{
        text-align: center;
        display: flex;
        flex-direction: column;
        margin: 10px;
        cursor: pointer;
        transition: all 0.1s ease;
    }
    .app-item:hover{
        transform: scale(1.05);
    }
    .app-item>img{
        height: 90px;
        width: 90px;
    }
    .app-item span{
        line-height: 24px;
        font-size: 14px;
    }
    .notice{
        min-height: 300px;

    }
</style>
