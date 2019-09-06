<template>
    <div style="width: 100%;height: 509px;overflow-y: scroll">
        <!--题库编辑 start-->
        <div class="content question-bank">
            <div class="container">
                <ul class="c-list clearfix">
                    <div>
                        <div class="left" id="left">
                            <div class="itembg">
                                <div class="type">
                                    <div class="title">
                                        <span class="icon"></span>
                                        <span>题型选择</span>
                                    </div>
                                    <ul class="type-list">
                                        <li v-for="item in IsTopic" :key="item.TopicId" @click="ClickTopicItem(item)">{{item.TopicName}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="itembg newClassbg">
                                <div class="type">
                                    <div class="title">
                                        <span class="icon icon2"></span>
                                        <span>题型选择</span>
                                    </div>
                                    <ul class="type-list">
                                       <li v-for="item in TrueTopic">{{item.TopicName}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="itembg">
                                <h1>我是小组件</h1>
                                <div class="part top-box">
                                    <div class="name">我是大标题</div>
                                    <p>我是标题介绍内容</p>
                                </div>
                                <v-draggable v-model="resultList" @update="dragEnd">
                                    <div v-for="(item,index) in resultList" :key="item.name"  class="deleteclass" >
                                        <div class="ymicon">
                                            <img src="../assets/images/crf-images/images/tkbj03.png" alt="" class="right-img1"
                                                 data-tippy-content="长按拖动题目">
                                            <img @click="ClickresultListItem(index)" src="../assets/images/crf-images/images/tkbj04.png" alt=""
                                                 class="right-img2 delpart" data-tippy-content="删除题目">
                                        </div>
                                        <component ref="coma" :is="item.componentName" v-on:child="showchild"></component>
                                    </div>
                                </v-draggable>
                                <div>
                                    <div class="tip">点击左侧题型，添加到此空白区域</div>
                                    <div class="btn-box">
                                        <span class="btn">操作指南</span>
                                        <span class="btn">预览问卷</span>
                                        <span class="btn" @click="handleClick">暂存问卷</span>
                                        <span class="btn">发布问卷</span>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import SmallTemplateSex from '../CrfSmallTemplate/SmallTemplateSex'
    import SmallTemplateForm from '../CrfSmallTemplate/SmallTemplateForm'
    export default {
        name: "ChildCrfTmeplatMainRightItemBank",
        components:{
            'v-draggable':draggable,
            'v-SmallTemplateSex':SmallTemplateSex,
            'v-SmallTemplateForm':SmallTemplateForm,
        },
        data(){
            return{
                initial: "Initial Value",
                msg:[],
                //题型选择
                IsTopic:[
                    {
                        TopicId:1,
                        TopicName:'单选题',
                        TopicTemplate:'v-SmallTemplateSex'
                    }, {
                        TopicId:2,
                        TopicName:'多选题',
                        TopicTemplate:'v-SmallTemplateSex'
                    }, {
                        TopicId:3,
                        TopicName:'多行填空题',
                        TopicTemplate:'v-SmallTemplateForm'
                    },
                ],

                // 项目已选择的题型
                TrueTopic:[
                    {
                        TopicId:3,
                        TopicName:'多行填空题',
                        TopicTemplate:'v-SmallTemplateForm'
                    },
                ],

                // 模板动态展示的组件
                resultList:[
                ]
            }
        },
        methods:{
            change() {
                console.log(this.initial)
            },
            dragEnd (e) {
                e.preventDefault();//通知 Web 浏览器不要执行与事件关联的默认动作
                console.log(e.oldIndex)//拖动前index
                console.log(e.newIndex)//拖动后index
            },
            // 获取当前题型选择的Item
            ClickTopicItem(item){
               console.log(item,'获取当前题型选择的Item')
                let para={
                    componentName:item.TopicTemplate
                }
                let dong=[{
                    TopicName:item.TopicName
                }]
                let aa=this.TrueTopic
                this.TrueTopic=distinct(aa,dong)
                function distinct(a, b) {
                    let arr = a.concat(b);
                    return arr.filter((item, index)=> {
                        return arr.indexOf(item) === index
                    })
                }
                this.resultList.push(para)

            },
            ClickresultListItem(index){
                console.log(index)
            },

            showchild(res){
                this.msg.push(res)
                console.log(this.msg)
            },
            handleClick(){
                const dai = this.$refs['coma']
                console.log(dai)
                for (let i = 0; i <dai.length ; i++) {
                    console.log(dai[i].SexList)
                }
            }
        }
    }
</script>

<style scoped>
    .newClassbg {
        margin-top: 0px !important;
        padding-bottom: 20px !important;
    }
    .btn-box{
        margin-bottom: 30px;
    }
    .right-img1{
        position: absolute;
        right: 40px;

        width: 18px;
        height: 18px;
        cursor: pointer;
    } .right-img2{
              position: absolute;
              right: 1px;
              width: 18px;
              height: 18px;
              cursor: pointer;
    }
    .deleteclass{
        position: relative
    }
    .ymicon{
        position: absolute;right: 25px;top:19px
    }
</style>