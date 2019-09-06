<template>
    <div style="background-color: white !important;">
        <!-- nav tool start -->
        <nav class="nav-top" style="position: relative">
            <div class="left-tool" >
                <i class="icon-home" style="position: absolute;top: 13px;margin-top: 0px"></i><span style="margin-left: 30px" class="check-text">{{CrfTemplateEditItems.templateName}}<i class="icon-arrow-down"></i>
                <div class="tool-tip">
                    <ul class="tool-tip-content">
                        <li>
                            <label class="label-text"><i class="round"></i>项目类型：</label>
                            <div class="text-wrap">
                                慢病研究类
                            </div>
                        </li>
                        <li>
                            <label class="label-text"><i class="round"></i>项目描述：</label>
                            <div class="text-wrap">高血压（hy pertension）是指以体循环动脉血压（收缩压和/或舒张压）增高为主要特征（
                                收缩压≥140毫米汞柱，舒张压≥90毫米汞柱），
                                也是心脑血管病最主要的危险因素。正常人的血压随内外环境变化在一定范围内波动。
                            </div>
                        </li>

                        <li>
                            <label class="label-text"><i class="round"></i>起止时间：</label>
                            <div class="text-wrap">2018-04-20至2019-11-20</div>
                        </li>

                    </ul>
                </div>
            </span>
            </div>
            <div class="right-tool">
                <span class="span-text">参照标准： 数据集TEXTI</span>
                <span class="span-text">创建时间：2019-08-01</span>
                <a class="save-btn" href="javascript:void(0);">完成模板</a>
            </div>
        </nav>
        <!-- nav tool end -->
        <!-- main start -->
        <section class="main">

            <!--left start-->
            <aside id="left" class="left-slider" v-if="isHideleft==true">
                <div class="left-tool-nav">
                    <a class="search-bar" href="javascript:void(0);"><i class="icon-search"></i></a>
                    <i class="line"></i>
                    <input class="search-input" v-model.trim="keyWords" placeholder="请输入关键词" @input="handleQuery" type="text" />
                    <div class="right-tool">
                        <i class="line"></i>
                        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                            <i class="icon-add" @click="AddAssemblyClick()"></i>
                        </el-tooltip>

                        <i class="icon-folder" @click="AddFolderClick()"></i>
                    </div>
                </div>
                <ul id="LeftNav">
                    <v-draggable v-model="leftlist" class="nav-list" @update="dragEnd">
                    <li class="active" v-for="(item,index) in leftlist" @click="LeftListItemClickBtn(index)">
                        <a class="first-a" :style="index==LeftListItemIndex?'':'background:#FFF'" href="javascript:void(0);"  v-html='item.leftlistname' style="background-color: #F3F6F8">{{item.leftlistname}}</a>
                        <ul class="sub-nav" v-for="child in item.leftchild"  :class="index==LeftListItemIndex?'':'action'" >
                            <li @click="ChildItemRouter(child)" class="active"><a class="sub-link" target="mainFrame"><i class="icon-tree-file"></i>{{child.formName}}</a></li>
                        </ul>
                        <ul class="sub-nav" :style="index==LeftListItemIndex?'':'display:none'"  v-if="AddTemplateItem==1">
                            <li class="active">
                                <a class="sub-link" target="mainFrame">
                                    <i class="icon-tree-file"></i>
                                    <input type="text"  ref="IsInputTemplateRef" onfocus="this.select()" @keyup.enter="AddTemplateEnter(item)" v-model="AddTemplateValue">
                                </a>
                            </li>
                        </ul>
                    </li>
                    </v-draggable>
                    <div class="nav-list"  style="border-top:0px">
                    <li class="active" v-if="IsHide==true">
                        <a class="first-a" href="javascript:void(0);">
                            <input type="text"  ref="IsInputRef" onfocus="this.select()" @keyup.enter="AddFoldEnter" v-model="AddFolderValue">
                        </a>
                    </li>
                    </div>
                </ul>
            </aside>
            <!--left end-->

            <!-- bar start -->
            <aside class="slider-bar" >
                <span class="span" v-if="isHideleft==true" @click="HideBtn"></span>
                <span class="span active" v-if="isHideleft==false" @click="DisplayBtn"></span>
            </aside>
            <!-- bar end -->

            <!-- right start -->
            <aside class="right-main">
                <div class="page-content">
                    <v-CrfTemplateEditItem :isprops=ChildLists></v-CrfTemplateEditItem>
                    <router-view></router-view>
                </div>
            </aside>
            <!-- right start -->

        </section>
        <!-- main start -->

    </div>
</template>

<script>
    import ChildCrfTemplatMainRightHeader from '../ChildCrfTemplatMainRight/ChildCrfTemplatMainRightHeader'
    import  CrfTemplateEditItem  from "../ChildCrfTemplatMainRight/CrfTemplateEditItem";
    import draggable from 'vuedraggable'
    import {mapState,mapMutations} from  'vuex'
    
    export default {
        name: "CrfTemplateMain",
        components:{
            'v-draggable':draggable,
            'v-ChildCrfTemplatMainRightHeader':ChildCrfTemplatMainRightHeader,
            'v-CrfTemplateEditItem':CrfTemplateEditItem
        },
        data(){
            return {
                ChildLists:[],
                keyWords:'',
                AddFolderValue: '新建文件夹',
                AddTemplateValue: '新建组件',
                IsHide: false,
                isHideleft: true,
                LeftListItemIndex:0,
                AddTemplateItem:0,
                leftlist: [
                    {
                        fromId:1,
                        leftlistname: '入组信息1',
                        leftchild: [
                            {
                                childlistname: "echart图表参考"
                            }, {
                                childlistname: "echart图表参考"
                            },
                        ]
                    }
                ]
            };
        },
        computed:{
          ...mapState(['CrfTemplateEditItems'])
        },
        mounted(){

            console.log(this.CrfTemplateEditItems,'获取到了')
            this.fistgetTempale()
        },
        methods:{
            ...mapMutations(['CRFTEMPLATELEFTCHILDRENITEM']),
            dragEnd (e) {
                e.preventDefault();//通知 Web 浏览器不要执行与事件关联的默认动作
                console.log(e.oldIndex)//拖动前index
                console.log(e.newIndex)//拖动后index
            },
            HideBtn(){
                this.isHideleft=false
            },
            DisplayBtn(){
                this.isHideleft=true
            },
            fistgetTempale(){
                let para={
                    temgplateId:this.CrfTemplateEditItems.templateId
                }
                            axios({
                    url:'http://10.1.192.118:9901/template/getTemplate',
                    method:'get',
                    params:para
                    
                }).then(res=>{
                    console.log(res)
                    let papers=res.data.papers
                    papers.forEach((item)=>{
                        item.leftlistname=item.paperName
                        item.fromId=item.id
                        item.leftchild=item.forms

                    })
                    this.leftlist=papers
                    console.log(this.leftlist,'1231231231')
                }).catch(err=>{

                })
            },
            // 点击左侧列表切换
            LeftListItemClickBtn(index){
                console.log(index)
                this.LeftListItemIndex=index
            },

            // 添加文件夹
            AddFolderClick(){
                this.IsHide=true
                this.$nextTick((x)=>{
                    this.$refs.IsInputRef.focus();
                })
            },

            // 回车添加文件夹
            AddFoldEnter(){
                let paras={
                    templateId:this.CrfTemplateEditItems.templateId,
                    paperName:this.AddFolderValue
                }
                 axios({
                    url:'http://10.1.192.118:9901/template/addPaper',
                    method:'get',
                    params:paras
                    
                }).then(res=>{
                    console.log(res)
                    this.fistgetTempale()
                }).catch(err=>{

                })
                this.IsHide=false
            },

            // 点击添加组件
            AddAssemblyClick(item){
                console.log(item)
            
                this.AddTemplateItem=1
                // this.$nextTick((x)=>{
                //     this.$refs.IsInputTemplateRef.focus();
                // })
            },
            // 回车添加子组件
            AddTemplateEnter(item){
                let a=[]
                        let paras=
                            {
                                formId: 0,
                                form_desc: 'string',
                                paper_id: item.fromId,
                                form_name: this.AddTemplateValue,
                                questionList:[],
                                type: 1
                            }
                        
                 axios({
                     url:'http://10.1.192.118:9901/template/addForm',
                     method:'post',
                     data:paras
                     }).then(res=>{
                         this.fistgetTempale()
                        }).catch(err=>{

                        })
                this.AddTemplateItem=0
            },

            // 点击问题
            ChildItemRouter(child){
                console.log(child)    
                this.ChildLists=child
                this.$router.push({path:'/CrfTemplateMain'})
            },



            clearTimer() {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            },
            handleQuery(event) {
                this.clearTimer();
                console.log(event.timeStamp)
                if (this.keyWords && this.keyWords.length > 0) {
                    this.timer = setTimeout(() => {
                        // 0.5秒后获取当前当前输入值
                        this.changeColor(this.leftlist)
                    }, 500);
                }
            },
            changeColor (resultsList) {
                resultsList.map((item, index) => {
                    if (this.keyWords && this.keyWords.length > 0) {
                        // 匹配关键字正则
                        let replaceReg = new RegExp(this.keyWords, 'g')
                        // 高亮替换v-html值
                        let replaceString =
                            '<span class="search-text">' + this.keyWords + '</span>'
                        resultsList[index].leftlistname = item.leftlistname.replace(
                            replaceReg,
                            replaceString
                        )
                    }
                })
                // this.results = []
                this.leftlist = resultsList
            },

        }
    }
</script>

<style scoped src="../assets/css/crf_css/page.css"></style>
<style scoped>
@import "../assets/css/crf_css/grids.css";
@import "../assets/css/crf_css/font-awesome.min.css";
/* @import "../assets/css/crf_css/page.css"; */
@import "../assets/css/crf_css/wdui.css";
.search-text{
    color: red !important;
}
    .main{

    }
.left-slider{
    margin-left: 0px;
}
    .action{
        display: none !important;
    }
@media (min-width:1024px) and (max-width:1680px){
    .main {
        padding: 0 37px 0px 25px !important;
        min-width: 1200px;
    }
}
</style>