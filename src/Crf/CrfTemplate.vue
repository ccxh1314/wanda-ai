<template>
    <div>
        <div class="main">
            <div class="main-hearder">
                <div class="icon-cloud" v-for="item in mainheaderlist" :key="item.id">
                    <div  :class="isactives == item.id ? 'icon-bg' : '' " :style="isactives == 1 ? 'width:180px' : '' "   @click="ItemClick(item)">
                        <img class="icon-1" :style="isactives == item.id ? 'display: inline-block' : '' "  :src="item.mainheaderimgtrue"/>
                        <img class="icon-2" :style="isactives == item.id ? 'display: none' : '' "  :src="item.mainheaderimg"/>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
                <CrfProjectTemplate v-if="isactives==0"></CrfProjectTemplate>
                <CrfFormTemplate v-if="isactives==3"></CrfFormTemplate>
                <CrfCollectionTemplate v-if="isactives==2"></CrfCollectionTemplate>
                <CrfCustomTemplate v-if="isactives==4"></CrfCustomTemplate>
                <CrfMyTemeplate v-if="isactives==1"></CrfMyTemeplate>
        </div>
    </div>
</template>

<script>
    import CrfProjectTemplate from '../ChildCrfTenplate/CrfProjectTemplate'
    import CrfFormTemplate from '../ChildCrfTenplate/CrfFormTemplate'
    import CrfCollectionTemplate from '../ChildCrfTenplate/CrfCollectionTemplate'
    import CrfCustomTemplate from '../ChildCrfTenplate/CrfCustomTemplate'
    import CrfMyTemeplate from '../ChildCrfTenplate/CrfMyTemeplate'
    export default {
        name: "CrfTemplate",
        components:{
            CrfProjectTemplate,
            CrfFormTemplate,
            CrfCollectionTemplate,
            CrfCustomTemplate,
            CrfMyTemeplate,

        },
        data(){
            return{
                // 分页
                currentPage4: 0,
                total:'',
                loading:false,
                isactives:'0',
                mainheaderlist:[
                    {
                        id:0,
                        name:'项目模板',
                        mainheaderimg:require('../assets/images/crf-images/icon-2.png'),
                        mainheaderimgtrue:require('../assets/images/crf-images/icon-2-1.png')
                }, {
                        id:3,
                    name:'表单模板',
                        mainheaderimg:require('../assets/images/crf-images/icon-1.png'),
                        mainheaderimgtrue:require('../assets/images/crf-images/icon-1-1.png')
                }, {
                        id:2,
                    name:'我的收藏模板',
                        mainheaderimg:require('../assets/images/crf-images/icon-3.png'),
                        mainheaderimgtrue:require('../assets/images/crf-images/icon-3-1.png')
                }, {
                        id:4,
                    name:'自定义表单',
                        mainheaderimg:require('../assets/images/crf-images/icon-4.png'),
                        mainheaderimgtrue:require('../assets/images/crf-images/icon-4-1.png')
                }, {
                        id:1,
                    name:'我的CRF研究项目',
                        mainheaderimg:require('../assets/images/crf-images/icon-5.png'),
                        mainheaderimgtrue:require('../assets/images/crf-images/icon-5-1.png')
                }
                ],
                templatelist:[],
                comp:'zujian2',
            }
        },
        created(){
        },
        methods:{
            // 点击切换模块
            ItemClick(item){
                if(localStorage.getItem("user")){
                    console.log(JSON.parse(localStorage.getItem("user"))[0])
                }
                this.isactives=item.id
            },
        }
    }
</script>
<style>
    @import "../assets/css/crf_css/mould.css";

</style>
<style scoped>

</style>