<template>
    <div>
        <aside>
            <ul class="ui-tab-top" id="ui-tab-top">
                <li v-for="(item,index) in list" :class="ChildIndexAction==index?'active':''" @click="ClickItem(index)"><a href="javascript:void(0);"><i class="bg-left"></i><span class="text">{{item.name}}</span><i
                        class="bg-right"></i></a></li>
            </ul>
        </aside>
        <div>
            <v-ChildCrfTemplatMainRightForm v-if="ChildIndexAction==0"></v-ChildCrfTemplatMainRightForm>
            <v-ChildCrfTmeplatMainRightItemBank v-if="ChildIndexAction==2"></v-ChildCrfTmeplatMainRightItemBank>
        </div>
    </div>
</template>

<script>
    import ChildCrfTemplatMainRightForm from '../ChildCrfTemplatMainRight/ChildCrfTemplatMainRightForm'
    import ChildCrfTmeplatMainRightItemBank from '../ChildCrfTemplatMainRight/ChildCrfTmeplatMainRightItemBank'
    export default {
        name: "ChildCrfTemplatMainRightHeader",
        components: {
            'v-ChildCrfTemplatMainRightForm':ChildCrfTemplatMainRightForm,
            'v-ChildCrfTmeplatMainRightItemBank':ChildCrfTmeplatMainRightItemBank,
        },
        data(){
            return{
                ChildIndexAction:2,
                list:[
                    {name:'引用表单模板'},
                    {name:'文本编辑'},
                    {name:'题库编辑'},
                    ]
            }

        },
        methods:{
            ClickItem(index){
                this.ChildIndexAction=index
            }
        }
    }
</script>

<style scoped>

</style>