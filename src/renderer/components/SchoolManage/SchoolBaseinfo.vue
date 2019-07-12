<template>
    <div class="baseinfo">
        <div class="now-address">
            <span>{{schoolInfo.selectBySchoolList.schoolName}}</span>
        </div>
        <div class="info-box">
            <div class="school-view">
                <h2>学校形象照</h2>
                <div class="school-img">
                    <img :src="'http://www.hnhhjyj.edu.cn'+schoolInfo.selectBySchoolList.schoolLogo||''"/>
                </div>
                <div class="editor-img">编辑学校形象照</div>
            </div>
            <div class="school-info-box">
                <h2>学校信息</h2>
                <div class="school-info-con">
                    <div class="school-info-item">
                        <span>公文管理员:</span><span>{{}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SchoolBaseinfo",
        data(){
            return {
                schoolInfo:{}
            }
        },
        methods:{
            getSchoolInfo:function () {
                let self=this;
                let url='http://www.hnhhjyj.edu.cn/manager/sch/findNewSchoolInfo';
                this.$http.get(url).then((res)=>{
                    var data=res.data;
                    if(data.state===1){
                        self.schoolInfo=data.data;
                    }
                })
            }
        },
        created:function () {
            this.getSchoolInfo();
        }
    }
</script>

<style scoped>
    .baseinfo{
        height: 100%;
    }

    .now-address{
        height: 50px;
        margin-bottom: 10px;
        background: #ffffff;
        line-height: 50px;
    }
    .info-box{
        height: calc(100% - 70px);
        width: 100%;
        border: 1px solid #e5e5e5;
        border-radius: 2px;
        background: #ffffff;
        display: flex;
    }
    .school-view{
        width: 200px;
        height: 100%;
        margin-right: 10px;
        border-right: 1px solid #e5e5e5;
    }



</style>
