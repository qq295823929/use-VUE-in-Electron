import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/login'  //登录页面;
import Home from '@/components/Home/Home'//首页
import Boom from '@/components/LittleGame/Boom'//;
import SchoolManage from '@/components/SchoolManage/SchoolManage';//学校管理
import SchoolBaseinfo from '@/components/SchoolManage/SchoolBaseinfo';//学校基本信息


Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'Login', component: Login},//登录
        {path: '/littleGame/boom', name: "Boom", component: Boom},//
        {path: '/home', name: 'Home', component: Home},//首页
        {
            path: '/school/', component: SchoolManage,
            children:[
                {path:'schoolBaseinfo',name:"SchoolBaseinfo",component:SchoolBaseinfo}
            ]
        },
        {path: '*', redirect: '/'}
    ]
})
