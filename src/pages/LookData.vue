<template>
    <section>
    <div class="header-box">
        <div class="header-title"></div>
        <div class="header-name">
            <a>王医生，欢迎您！</a>
            <span></span>
        </div>
    </div>
    <div class="main">
        <div class="main-bottom">
            <div class="search-result">
                <div class="result-left">
                    <span><label>数据集名称：</label><a>{{this.$route.query.region}}</a></span>
                    <span><label>数据集说明：</label><a>{{this.$route.query.desc}}</a></span>
                </div>
                <div class="result-center">
                    <a id="remove-font">
                        <img src="../assets/images/look-data1.png" />
                        <label>去重</label>
                    </a>
                    <a id="fil-font">
                        <img src="../assets/images/look-data2.png" />
                        <label>筛选</label>
                    </a>
                    <a id="sort-font">
                        <img src="../assets/images/look-data3.png" />
                        <label>排序</label>
                    </a>
                    <a 
                        id="group-font" @click="eject">
                        <img src="../assets/images/look-data4.png" />
                        <label>分组</label>
                        <p 
                            v-show = 'fenzu' 
                            id="fenzu">
                            <el-select v-model="value" placeholder="分组类型" @change="select">
                            <!-- <option >分组类型</option> -->
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>

                        </p>
                    </a>
                </div>
                <div class="result-right">
                    <a class="a1">
                        <img src="../assets/images/look-data5.png" />
                        <label>导出申请</label>
                    </a>
                    <a class="a2">
                        <img src="../assets/images/look-data6.png" />
                        <label>添加至科研项目</label>
                    </a>
                    <a class="a3">
                        <img src="../assets/images/look-data7.png" />
                        <label>使用数据集</label>
                    </a>
                </div>
            </div>
        </div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                prop="name"
                label="姓名"
                width="120">
        </el-table-column>
        <el-table-column
                prop="date"
                label="出生日期"
                width="100">
        </el-table-column>
        <el-table-column
                prop="sex"
                label="性别"
                width="120">
        </el-table-column>
        <el-table-column
                prop="zzd"
                label="主诊断"
                width="120">
        </el-table-column>
        <el-table-column
                prop="jzks"
                label="就诊科室"
                width="120">
        </el-table-column>
        <el-table-column
                prop="zyzz"
                label="主要症状"
                width="120">
                <template slot-scope="scope">
                            <p v-html="scope.row.zyzz" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openzyzz(scope.row.zyzz)"></p>
                </template>
        </el-table-column>
        <el-table-column
                prop="jws"
                label="既往史"
                width="120">
        </el-table-column>
        <el-table-column
                prop="jzs"
                label="家族史"
                width="120">
                <template slot-scope="scope">
                            <p v-html="scope.row.jzs" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openjzs(scope.row.jzs)"></p>
                </template>
        </el-table-column>
        <el-table-column
                prop="sysjc"
                label="实验室检查"
                width="120">
        </el-table-column>
        <el-table-column
                prop="yxjc"
                label="影像检查"
                width="120">
        </el-table-column>
        <el-table-column
                prop="zlfa"
                label="治疗方案(含手术)"
                width="120">
                <template slot-scope="scope">
                            <p v-html="scope.row.zlfa" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openzlfa(scope.row.zlfa)"></p>
                </template>
        </el-table-column>
        <el-table-column
                prop="jzyy"
                label="就诊医院"
                width="120">
        </el-table-column>
        <el-table-column
                prop="rysj"
                label="入院时间/出院时间"
                width="120">
        </el-table-column>
        <el-table-column
                fixed='right'
                align="center"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" style="border:0px;" type="text" size="small">查看</el-button>
                    <!-- <el-button type="text" size="small">编辑</el-button> -->
                </template>
            </el-table-column>
        </el-table>
            <div class="con-grouping alert-box1" v-show="alertbox">
                <div class="alert-header">参数设置<img @click="close" class="close-img" src="../assets/images/close-img.png" /></div>
                <div class="alert-body">
                    <div class="div1"><i style="font-style:normal;margin-right:10px;">组别名称</i>　<span>|　点击“+”、“-” 可添加或删除组别 </span></div>
                    <div class="div2">
                        <div class="div-cloud">
                            <div id="scroll-con">
                                <ul style="position:relative;">
                                    <span style="width:90px;height:29px;position:absolute;right:100px;top:5px;">
                                        <img @click="add" src="../assets/images/grouping-img2.png" style="width:29px;height:29px;"/>
                                        <img @click="cut" class="con-img" src="../assets/images/grouping-img3.png" style="width:29px;height:29px;margin-left:23px;">
                                    </span>
                                    <!-- <li>
                                        <label>组一：</label>
                                        <input type="" placeholder="请命名" />
                                    </li>
                                    <li>
                                        <label>组二：</label>
                                        <input type="" placeholder="请命名"/>
                                    </li> -->
                                    <li
                                        v-for="(item,index) of defaultGroup"
                                        :key = "index"
                                        
                                    >
                                        <label>{{item.name}}：</label>
                                        <input ref="groupName" type="" placeholder="请命名"/>
                                    </li>
                            </ul>
                            </div>
                            <div class="con-ratio">
                                    <span>组间数据比例</span>
                                    <p style="width:100%;text-indent:27px;">
                                        <input type="text" v-model="rate1" />&nbsp;&nbsp;:&nbsp;&nbsp;<input type="text" v-model="rate2" />
                                        <span 
                                        style="width:200px;text-indent:10px;display:inline;"
                                          v-for="(item,index) in arr"
                                          :key = "index"
                                        >&nbsp;&nbsp;{{item.colon}}&nbsp;&nbsp;<input ref="groupRate" type="text"/></span>
                                    </p>
                                    <div>是否打乱数据顺序？　　是 <i class="i-selected"></i>　否 <i class="i-selected"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="div3">
                        <button class="btn1" @click="submit">确　定</button>
                    </div>
                </div>
            </div>
    </div>
    <div v-show="shadow" class="layui-layer-shade" id="layui-layer-shade62" times="62" style="z-index: 5; background-color: rgb(0, 0, 0); opacity: 0.3;top: 0;left: 0; width: 100%;height: 100%;position: fixed;"></div>
    </section>
</template>

<script>
export default {
    name:'lookData',
    data() {
      return {
            // index:0,
            // num:1,
            // items:[],
            fenzu:false,
            alertbox:false,
            shadow:false,
            tableData: [],
            options: [{
            value: '分组类型',
            label: '分组类型'
            }, {
            value: '条件分组',
            label: '条件分组'
            }, {
            value: '随机分组',
            label: '随机分组'
            }],
            value:'',
            rate1:'',
            rate2:'',
            defaultGroup:[{name:"组一",value:"请命名"},{name:"组二",value:"请命命名"}],
            arr:[]
        }
    },
    methods: {
      handleClick(row) {
        // console.log(row);
      },
      openzyzz(a){
          this.$alert(`${a}`, "主要症状");
      },
      openjzs(a) {
            this.$alert(`${a}`, "家族史");
        },
      openzlfa(a) {
            this.$alert(`${a}`, "治疗方案");
        },
     eject(){
        // document.querySelector("#fenzu").style.display = "block"
        this.fenzu = !this.fenzu
     },
     select(value){
        //  console.log(this.value)
        if(this.value == "随机分组"){
            this.alertbox = true;
            this.shadow = true;
            // console.log(1)
        }
     },
     close(){
            this.alertbox = false;
            this.shadow = false;

     },
     add(){
        let groupObj = {name:`组${this.defaultGroup.length+1}`,value:''}
        this.defaultGroup.push(groupObj);

        let obj = {colon:":",value:1}
        this.arr.push(obj)
     },
     cut(){
        this.defaultGroup.length > 2 && this.defaultGroup.pop()
        this.arr.pop()
     },
     submit(){
        // console.log(this.$refs.groupName)
        // console.log(this.$refs.groupRate)
        // console.log(this.$refs.groupRate)
        console.log(this.$route.query.dataId)
        let groupNameArr = [];
        this.$refs.groupName.map((item,index,arr)=>{
                groupNameArr.push(item.value)
        })
            let groupRateString = '';
        if(this.$refs.groupRate && this.$refs.groupRate.length > 0){
            let str = ''
            this.$refs.groupRate.map((item,index,arr)=>{
                    str = str + ':' + item.value;
            })
          groupRateString = groupRateString + this.rate1 + ':' + this.rate2 + str;
        }
        if(!this.$refs.groupRate || this.$refs.groupRate.length == 0){
          groupRateString = groupRateString + this.rate1 + ':' + this.rate2;
        }
        // console.log(groupRateString)
        axios({
            url:'http://10.1.192.118:9901/data/randomgroup',
            method:'post',
            data:{
                //  "dataName": this.$route.query.region,
                 "dataId":this.$route.query.dataId,
                 "groupName":groupNameArr,
                 "str": groupRateString
            }
        }).then(res => {
            console.log(res)
        })
        
     },
    },
    created(){
        let queryData = this.$route.query.data;
        // let dataId = this.$route.query.dataId;
        // console.log(queryData)
        for(let i=0;i<queryData.length;i++){
            this.tableData.push({
                name:queryData[i].name,
                date:queryData[i].birthDate,
                sex: queryData[i].sex,
                zzd: queryData[i].qutpatient,
                jzks: queryData[i].departments,
                zyzz: queryData[i].present,
                jws: queryData[i].past,
                jzs: queryData[i].family,
                sysjc: queryData[i].inspect,
                yxjc: "无",
                zlfa: queryData[i].treatment,
                jzyy: queryData[i].hospital,
                rysj: queryData[i].time,
            })
        }

    },
    mounted(){

    },

}
</script>

<style scoped src="../assets/css/search-result.css"></style>
<style scoped src="../assets/css/top.css"></style>
<style scoped src="../assets/css/layer.css"></style>
<style scoped src="../assets/css/perfect-scrollbar.css"></style>
<style scoped src="../assets/css/look-data.css"></style>
<style scoped>
/* #el-popover-204{height:200px;} */

</style>