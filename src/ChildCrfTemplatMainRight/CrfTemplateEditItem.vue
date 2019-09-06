<template>
    <div>12312312{{ChildLists}}
    <div @click="btn">点击跳转编辑</div></div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        name: "CrfTemplateEditItem",
        watch: {
},
        props:['ChildLists'],
        methods:{
            btn(){
                this.$router.push({path:'/ChildCrfTemplatMainRightHeader'})
            }
        }
    }
</script>

<style scoped>

</style>