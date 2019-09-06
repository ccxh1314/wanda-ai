<template>
    <div>
        <div class="part part1" id="top1">
            <div class="title">
                <span class="num">1</span>
                <span>.</span>
                <div class="content_editable">
                    <div class="q_title" contenteditable="true">您的性别？</div>
                </div>
            </div>
            <div class="sex">
                <span v-for="item in SexList">
                    <span class="icon open"></span>
                    <div class="content_editable">
                        <div class="q_title" contenteditable="true">{{item.SexTitle}}</div>
                    </div>
                </span>
            </div>
             <div class="bot" id="add-option">
                <img src="../assets/images/crf-images/images/tkbj-add.png" alt="">
                <span  @click="AddSex" >添加单个选项</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SmallTemplateSex",
        data(){
          return{
              SexList:[
                  {SexTitle:'男'},
                  {SexTitle:'女'},
              ]
          }
        },

        methods: {
            AddSex() {
                let para={
                    SexTitle:'新增选项'
                }
                this.SexList.push(para)
                // this.$emit("child",this.SexList)
            },
            hello(){
                console.log(this.SexList)
            }
        }
    }
</script>

<style scoped lang="scss">
    .bot{
        margin-top: 26px;
        color: #4a95e6;
        font-size: 14px;
        img{
            vertical-align: middle;
            width: 18px;
            height: 18px;
            margin-left: 7px;
            margin-right: 7px;
        }
        span{
            vertical-align: middle;
        }
    }

</style>