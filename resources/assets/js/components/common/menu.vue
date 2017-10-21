<template>
	<div>
        <el-menu  class="el-menu-demo"  :router="true" mode="horizontal">
            <el-menu-item index="/" :class="class_a ? 'my_menu is-active':'my_menu'">我要请假</el-menu-item>
            <el-menu-item index="/history" :class="class_a ?'my_menu':'my_menu is-active'">查看历史</el-menu-item>
        </el-menu>
    </div>
</template>
<style>
    .my_menu{
        width: 50%;
        text-align: center;
        font-size: 18px;
    }
</style>

<script>
    export default {
        data() {
            return {
                class_a:true
            }
        },
        methods:{
            init(){
                switch(this.$route.name){
                    case '/leave':
                            this.class_a = true;
                        break;
                    case '/history':
                            this.class_a = false;
                        break;
                }
            }
        },
        mounted(){
            this.init();
        }
    }
</script>