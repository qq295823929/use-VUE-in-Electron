<template>
    <div class="school">
        <div class="menu">
            <SchoolMenu></SchoolMenu>
        </div>
        <div class="school-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import SchoolMenu from '@/components/SchoolManage/SchoolMenu'
    export default {
        name: "SchoolManage",
        components:{
            SchoolMenu
        },
        data(){
            return {

            }
        }
    }
</script>
<style>
    html,body{
        height: 100%;
        width: 100%;
    }
    #app{
        height: 100%;
    }
</style>

<style scoped>
    .school{
        display: flex;
        justify-content: space-between;
        height: calc(100% - 80px);
        background: #f5f5f5;
    }
    .menu{
        width: 240px;
        height: 100%;
        background: #4d5056;
    }
    .school-content{
        width: calc(100% - 250px);
        height: 100%;
    }

</style>
