<template>
    <div class="menu-lists">

        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-submenu v-for="(item,id) in menuList" :key="id" :index="id.toString()">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.funName}}</span>
                </template>
                <el-menu-item v-for="(i,id) in item.subBaseFunLists" index="">{{i.funName}}</el-menu-item>
            </el-submenu>
        </el-menu>


    </div>
</template>

<script>
    export default {
        name: "SchoolMenu",
        data() {
            return {
                menuList: []
            }
        },
        methods: {
            handleOpen: function () {
                console.log(1);
            },
            handleClose: function () {
                console.log(2);
            }
        },
        created: function () {
            var self = this;
            console.log(this.$route.query);
            let appId = this.$route.query.appId;
            this.$http.get("http://www.hnhhjyj.edu.cn/manager/getMaganerMenuByUserId?appId=19305c4a-9ad2-4d67-9c97-e9f644c27926").then((res) => {
                self.menuList = res.data
            })
        }

    }
</script>

<style scoped>

</style>
