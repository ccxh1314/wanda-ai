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
                    <span><label>数据集名称：</label><a>数据集TEXTI</a></span>
                    <span><label>数据集说明：</label><a>长宁区糖尿病患者</a></span>
                </div>
                <div class="result-center">
                    <a id="remove-font">
                        <img src="../assets/images/look-data1.png"/>
                        <label>去重</label>
                    </a>
                    <a id="fil-font">
                        <img src="../assets/images/look-data2.png"/>
                        <label>筛选</label>
                    </a>
                    <a id="sort-font">
                        <img src="../assets/images/look-data3.png"/>
                        <label>排序</label>
                    </a>
                    <a id="group-font-1">
                        <img src="../assets/images/look-data4.png"/>
                        <label>取消当前分组</label>
                        <p style="display:none;">
                            <select>
                                <option>分组类型</option>
                                <option>条件分组</option>
                                <option>随机分组</option>
                                <option>匹配分组</option>
                            </select>
                        </p>
                    </a>
                </div>
                <div class="result-right">
                    <a class="a1">
                        <img src="../assets/images/look-data5.png"/>
                        <label>导出申请</label>
                    </a>
                    <a class="a2">
                        <img src="../assets/images/look-data6.png"/>
                        <label>添加至科研项目</label>
                    </a>
                    <a class="a3">
                        <img src="../assets/images/look-data7.png"/>
                        <label>使用数据集</label>
                    </a>
                </div>
            </div> 
               <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                prop="group"
                label="别组"
                width="120">
        </el-table-column>
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
        </div>   
    </div>   
 </section> 
</template>

<script>
export default {
    name:"aftergrouping",
    data(){
        return{
            tableData:[{
                group:"病例组",
                name:"周敏",
                date:"1996",
                sex: "女",
                zzd:"11",
                jzks: "22",
                zyzz: "33",
                jws: "44",
                jzs: "55",
                sysjc: "66",
                yxjc: "无",
                zlfa: "77",
                jzyy: "88",
                rysj: "99",
                },{
                group:"对照组",
                name:"周敏",
                date:"1996",
                sex: "女",
                zzd:"11",
                jzks: "22",
                zyzz: "33",
                jws: "44",
                jzs: "55",
                sysjc: "66",
                yxjc: "无",
                zlfa: "77",
                jzyy: "88",
                rysj: "99",
                }]
        }
    }
}
</script>

<style scoped src="../assets/css/search-result.css"></style>
<style scoped src="../assets/css/top.css"></style>
<style scoped src="../assets/css/layer.css"></style>
<style scoped src="../assets/css/perfect-scrollbar.css"></style>
<style scoped src="../assets/css/look-data.css"></style>