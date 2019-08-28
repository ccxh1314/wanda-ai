<template>
    <div class="search-result" style="padding-bottom:20px;">
        <div class="header-box">
            <div class="header-title"></div>
            <div class="header-name">
                <a>王医生，欢迎您！</a>
                <span></span>
            </div>
        </div>
    <div class="main">
        <div class="main-top">
            <p> 
                <input type="text" />
                <span><img src="../assets/images/blue-search.png"/><label>搜索</label></span>
            </p>
           <router-link to='/Advanced' style="text-decoration:none;"><button class="btn1">高级检索</button></router-link> 
            
            <button class="btn1">从高级中检索</button>
        </div>
        <div class="main-bottom">
            <div class="search-result">
                <div class="result-left">
                     <el-checkbox-group v-model="checkList" style="float:left;">
                        <el-checkbox label="全选所有" style="margin-right:15px;"></el-checkbox>
                        <el-checkbox label="全选本页" style="margin-right:15px;"></el-checkbox>
                    </el-checkbox-group>
                      <!-- <el-select v-model="value" clearable  placeholder="请选择" style="float:left;width:90px;height:30px;margin-bottom:2px;">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select> -->
                    <select>
                        <option>展示字段</option>
                        <option>ID</option>
                        <option>性别</option>
                        <option>门诊诊断</option>
                        <option>入院诊断</option>
                        <option>出院诊断</option>
                        <option>主诉</option>
                        <option>现病史</option>
                        <option>既往史</option>
                        <option>家族史</option>
                    </select>
                    <select>
                        <option>排序字段</option>
                        <option>ID</option>
                        <option>性别</option>
                        <option>门诊诊断</option>
                        <option>入院诊断</option>
                        <option>出院诊断</option>
                        <option>主诉</option>
                        <option>现病史</option>
                        <option>既往史</option>
                        <option>家族史</option>
                    </select>
                    <select>
                        <option>排序方式</option>
                        <option>相关度由大到小</option>
                        <option>相关度由小到大</option>
                        <option>数字由大到小</option>
                        <option>数字由小到大</option>
                        <option>文字由多到少</option>
                        <option>文字由少到多</option>
                    </select>
                </div>
                <div class="result-right">
                    <!-- <a class="a1" id="save-search" style="height:26px;"> -->
                        <!-- <img src="../assets/images/save-search.png" /> -->
                        <el-button type="success" plain @click="open1">保存检索式</el-button>
                        <el-button type="warning" plain @click="dialogFormVisible = true">添加至数据集</el-button>
                        <el-dialog title="添加数据集" :visible.sync="dialogFormVisible" style="" center>
                                <el-dialog
                                    width="60%"
                                    height="200px"
                                    title="创建成功"
                                    center
                                    :visible.sync="innerVisible"
                                    append-to-body>
                                    <img src="../assets/images/success.png" style="margin-left:180px;margin-bottom:40px;" />
                                    <el-button type="primary" plain style="position:absolute;right:42%;bottom:5%;">查看数据集</el-button>
                                </el-dialog>
                            <el-form :model="form">
                                <el-form-item label="数据集名称：" :label-width="formLabelWidth">
                                    <el-select v-model="form.region" placeholder="选择数据集">
                                        <el-option label="数据集一" value="collection1"></el-option>
                                        <el-option label="数据集二" value="collection2"></el-option>
                                    </el-select>
                                <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
                                </el-form-item>
                                <el-form-item label="数据集描述：" :label-width="formLabelWidth">
                                    <el-input type="textarea" v-model="form.desc" placeholder="请输入描述内容" ></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="innerVisible = true">确定创建</el-button>
                            </div>
                        </el-dialog>
                        <el-button type="primary" plain style="margin-left:10px;">检索结果</el-button>
                        <!-- <label>保存检索式</label> -->
                    <!-- </a> -->
                    <!-- <a class="a2" id="add-data">
                        <img src="../assets/images/add-img.png" />
                        <label>添加至数据集</label>
                    </a>
                    <a class="a3">
                        <img src="../assets/images/search-img.png" />
                        <label>检索结果</label>
                    </a> -->
                </div>
            </div>
            <div id="viewTable" class="view">
                 <el-table
                    :data="tableData"
                    border
                    highlight-current-row 
                    max-height="450"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                    <el-table-column prop="select" label="选择" width="100" align="center">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.checked"></el-checkbox> 
                        </template>
                    </el-table-column>
                    <el-table-column 
                     prop="id" label="ID" width="100" align="center">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="100" align="center"></el-table-column>
                    <el-table-column :formatter="common.formatDate" prop="birthDate" label="出生日期" width="100" align="center">
                           <!-- <template  slot-scope="scope">
                            <p v-html="scope.row.birthDate"></p>
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="sex" label="性别" width="100" align="center"></el-table-column>
                    <el-table-column prop="qutpatient" label="门诊诊断" width="120" height="200" align="center">
                         <template slot-scope="scope">
                            <p v-html="scope.row.qutpatient"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="admission" label="入院诊断" width="120" height="300" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.admission" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openAdmission(scope.row.admission)">
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="discharge" label="出院诊断" width="120" align="center">
                        <template  slot-scope="scope">
                            <p v-html="scope.row.discharge" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openDischarge(scope.row.discharge)"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="departments" label="就诊科室" width="100" align="center"></el-table-column>
                    <el-table-column prop="present"  label="现病史" width="120" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.present" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openPresent(scope.row.present)"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="past" label="既往史" width="120" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.past"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="family" label="家族史" width="200" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.family"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="treatment" label="治疗经过" width="400" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.treatment"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="inspect" label="检查项目" width="70" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.inspect"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="CheckValue" label="检查值" width="70" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.CheckValue"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="CheckTime" label="检查时间" width="80" align="center"></el-table-column>
                    <el-table-column prop="hospital" label="就诊医院" width="80" align="center"></el-table-column>
                    <el-table-column prop="time" label="入院时间/出院时间" width="80" align="center"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="60" align="center">
                          <template >
                            <el-button style="border:0px;" type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
            <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper" 
                style="margin-left:350px;"
                @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="index" :page-sizes="[2, 4, 6, 8,10]" :page-size="size" :total="tableCopyTableList.length"
                >
            </el-pagination>
    <div class="alert-box1">
        <div class="alert-header">添加数据集<img class="close-img" src="../assets/images/close-img.png" /></div>
        <div class="alert-body">
            <div class="div1">
                <label>数据集名称:</label>
                <select>
                    <option>选择数据集</option>
                    <option>选择数据集</option>
                    <option>选择数据集</option>
                    <option>选择数据集</option>
                    <option>选择数据集</option>
                </select>
            </div>
            <div class="div2">
                <p>数据集描述:</p>
                <textarea placeholder="请输入描述内容"></textarea>
            </div>
            <div class="div3"><button class="btn1" id="btn-sure">确定创建</button></div>
        </div>
    </div>
    <!-- <div class="alert-box2">
        <div class="div1"><img class="close-img" src="../assets/images/close-img.png" /></div>
        <div class="div2">
            <img src="../assets/images/success.png" />
            <p>创建成功！</p>
            <div><button class="btn2">查看数据集</button></div>
        </div>
    </div> -->
    <!-- <div class="alert-box3">
        <div class="div1">确定保存当前检索式？</div>
        <div class="div2">
            <button class="btn2">取 消</button>
            <button class="btn1">确 认</button>
        </div>
    </div> -->
    <el-dialog :visible-sync="getA">
         <my-component :rowaa=row></my-component>
         <!-- {{this.row}} -->
    </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [],
        tableCopyTableList: [],
        index: 1,
        size: 10,
        checkList:[],
        // dialogTableVisible: false,
        dialogFormVisible: false,
        innerVisible:false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        visible: false,
        getA : false,
        row : ''
      }
    },
     methods: {
        openAdmission(a) {
            this.$alert(`${a}`, "入院诊断");
        },
        openDischarge(a) {
            this.$alert(`${a}`, "出院诊断");
        },
        openPresent(a) {
            this.$alert(`${a}`, "现病史");
        },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
        // 页数改变事件
        handleSizeChange(size) {
        this.size = size;
        this.tableData = this.paging(size, this.index);
        },
        // 页码改变事件
        handleCurrentChange(current) {
        this.index = current;
        this.tableData = this.paging(this.size, current);
        },
        // 本地分页的方法
        paging(size, current) {
        const tableList = JSON.parse(JSON.stringify(this.tableCopyTableList));
        const tablePush = [];
        tableList.forEach((item, index) => {
            if (size * (current - 1) <= index && index <= size * current - 1) {
            tablePush.push(item);
            }
        });
        return tablePush;
        },
        open1() {
        this.$confirm('确定保存当前检索式？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '取消',
          cancelButtonText: '确认'
        }).then(() => {
            this.$message({
              type: 'info',
              message: '取消保存'
            });
          }).catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'  ? '保存成功' : '停留在当前页面'
            })
          });
        },
        open2() {
          this.$alert('<div class="div1"><label>数据集名称:</label>  <select><option>选择数据集</option><option>选择数据集</option> <option>选择数据集</option><option>选择数据集</option><option>选择数据集</option></select> </div>', '添加数据集', {
          dangerouslyUseHTMLString: true
        });
      },
    },
    created(){
        //初始化数据
       let SearchData = JSON.parse(localStorage.getItem("searchresult")).results
    //    console.log(SearchData)
        for(var i=0;i<SearchData.length;i++){
                this.tableData.push({
                    // number:i+1,
                    id:SearchData[i].hzjbxx.id,
                    name:SearchData[i].hzjbxx.name,
                    birthDate:SearchData[i].zybasy.data,
                    sex:SearchData[i].hzjbxx.sex,
                    qutpatient:SearchData[i].zybasy.mjzzdmc,
                    admission:SearchData[i].ryjl.xbs,
                    discharge:SearchData[i].cyxj.cyszz,
                    departments:SearchData[i].ryjl.ksmc,
                    present:SearchData[i].ryjl.zkqk,
                    past:SearchData[i].ryjl.zs,
                    family:SearchData[i].jbjkxx.jzs,
                    treatment:SearchData[i].cyxj.zlgcms,
                    inspect:'血红蛋白',
                    CheckValue:'80 0.8',
                    CheckTime:'2016/03/11 2016/03/17',
                    hospital:SearchData[i].zybasy.yymc,
                    time:'2016/03/11 2016/03/17',
                    // operation:'详情'
                })
        }
            this.tableCopyTableList = this.tableData
            this.tableData = this.paging(this.size, this.index);
    }
}
</script>

<style scoped>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

body{
height: 100%;
}
.main{
    padding: 20px 30px 40px 30px;
}
.main .main-top{
    text-align: center;
    height: 45px;
    line-height: 45px;
}
.main .main-top p{
    display: inline-block;
    width: 615px;
    height: 42px;
    border: 1px solid #398BFB;
    border-radius: 6px;
    vertical-align: -16px;
    background: white;
}
.main .main-top p input{
    margin-top: 9px;
    height: 25px;
    width: 515px;
    float: left;
    background: white;
    text-indent: 25px;
    border: none;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-right: 1px solid #92BFFD;
}
.main .main-top p span{
    float: right;
    width: 99px;
    border-radius: 6px;
    height: 44px;
    line-height: 44px;
}
.main .main-top p span img{
    width: 18px;
    height: 18px;
    vertical-align: 2px;
}
.main .main-top p span label{
    font-size: 16px;
    color: #398BFB;
    vertical-align: 5px;
    margin-left: 5px;
}
.main .main-top button{
    height: 44px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 16px;
    margin-left: 15px;
}
.main .main-bottom .search-result{
    height: 26px;
    line-height: 26px;
    margin-top: 18px;
}
.main .main-bottom .search-result .result-left{
    float: left;
}
.i-change{
    background: url("../assets/images/selected.png") no-repeat;
    background-size: 100% 100%;
}
.main .main-bottom .search-result .result-left span i{
    width: 11px;
    height: 11px;
    border: 1px solid #888888;
    vertical-align: -1px;
}
.main .main-bottom .search-result .result-left span .label-change{
    color: #1660EB;
}
.main .main-bottom .search-result .result-left span label{
    color: #666666;
    margin-left: 5px;
}
.main .main-bottom .search-result .result-left .sp2{
    margin-left: 19px;
}
.main .main-bottom .search-result .result-left select{
    margin-left: 12px;
    width: 100px;
    height: 26px;
    padding-left: 5px;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
}
.main .main-bottom .search-result .result-right{
    float: right;
}
.main .main-bottom .search-result .result-right a{
    text-decoration: none;
    color: white;
    height: 100%;
    line-height: 26px;
    padding: 0 10px 0 7px;
    border-radius: 3px;
}
.main .main-bottom .search-result .result-right .a1{
    background: #30CE5C;
}
.main .main-bottom .search-result .result-right .a-change{
    opacity: .6;
}
.main .main-bottom .search-result .result-right .a2{
    background: #FFA12C;
}
.main .main-bottom .search-result .result-right .a3{
    background: #529AFB;
}
.main .main-bottom .search-result .result-right a img{
    width: 20px;
    height: 20px;
    vertical-align: -4px;
}
.main .main-bottom .search-result .result-right a label{
    cursor: pointer;
}
.main .main-bottom #viewTable{
    position: relative;
    margin-top: 19px;
    height: 430px;
    border-radius: 8px;
    border: 1px solid #D6D9E3;
}
/*.main .main-bottom #viewTable #scollbar{
    min-width: 1080px;
}*/
.main .main-bottom .view .fixed-header-table{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
/*.main .main-bottom .view .fixed-footer-table{
    width: 100%;
    overflow-x: auto;
}*/
.main .main-bottom table{
    width: 100%;
}
.main .main-bottom table th{
    background: white;
}
.main .main-bottom table .th2{
    width: 7%;
}
.main .main-bottom table .th4,.th5,.th6,.th8,.th14,.th16{
    width: 7%;
}
.main .main-bottom table .th3,.th10,.th17,.th13{
    width: 4%;
}
.main .main-bottom table .th1,.th7,.th9,.th15,.th12{
    width: 5%;
}
.main .main-bottom table .th11{
    width: 9%;
}
.main .main-bottom table tr td,th{
    border-left: 1px solid #D6D9E3;
    text-align: center;
}
.main .main-bottom table tr td{
    color: #3D556F;
}
.main .main-bottom table .tr-same{
    background: #F1F7FF;
}
.main .main-bottom table tr td{
    padding: 25px 5px 25px 5px;
    border: 1px solid #D6D9E3;
}
.main .main-bottom table tr td i{
    width: 11px;
    height: 11px;
    border: 1px solid #888888;
    vertical-align: -1px;
}
.main .main-bottom table tr .td-first{
    border-left: none;
}
.main .main-bottom table tr .td-last{
    color: #398BFB;
    text-decoration: none;
}
.main .main-bottom table .tr-change{
    background: #D6E8FF;
}
.main .main-bottom .main-look{
    text-align: center;
    margin-top: 12px;
}
.main .main-bottom .main-look a{
    color: #1660EB;
}
.main .main-bottom .main-look a img{
    width: 16px;
    height: 16px;
    margin-left: 3px;
    vertical-align: -1px;
}
.alert-box1{
    width: 680px;
    height: 450px;
    border-radius: 4px;
    display: none;
}
.alert-header{
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    position: relative;
    border-bottom: 1px solid #CCCCCC;
}
.alert-header img{
    width: 24px;
    height: 24px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
}
.alert-box1 .alert-body{
   padding: 20px 50px 20px 50px;
}
.alert-box1 .alert-body .div1 label{
    font-size: 16px;
    width: 100px;
    display: inline-block;
}
.alert-box1 .alert-body .div1 select{
    width: 460px;
    height: 40px;
    border: 1px solid #D8D8D8;
    padding-left: 10px;
}
.alert-box1 .alert-body .div2{
    margin-top: 12px;
}
.alert-box1 .alert-body .div2 p{
    font-size: 16px;
}
.alert-box1 .alert-body .div2 textarea{
    text-indent: 30px;
    padding-top: 20px;
    background: #F1F7FF;
    margin-top: 10px;
    height: 10px;
    width: 100%;
    border: none;
    outline: none;
}
.alert-box1 .alert-body .div3{
    text-align: center;
    margin-top: 20px;
}
.alert-box1 .alert-body .div3 button{
    width: 120px;
    height: 38px;
}
.alert-box2{
    width: 640px;
    height: 385px;
    border-radius: 4px;
    display: none;
    position: relative;
    z-index: 6;
}
.alert-box2 .div1{
    text-align: right;
    position: relative;
}
.alert-box2 .div1 img{
    position: absolute;
    width: 26px;
    height: 26px;
    top:15px;
    right:15px;
}
.alert-box2 .div2{
    text-align: center;
}
.alert-box2 .div2 img{
    width: 164px;
    height: 122px;
    margin-top: 43px;
}
.alert-box2 .div2 p{
    font-size: 22px;
    font-weight: 500;
    margin-top: 19px;
}
.alert-box2 .div2 div button{
    width: 128px;
    height: 38px;
    margin-top: 40px;
}
.alert-box3{
    width: 420px;
    height: 235px;
    border-radius: 4px;
    display: none;
}
.alert-box3 .div1{
    text-align: center;
    padding: 72px 0 56px 0;
    font-size: 20px;
}
.alert-box3 .div2{
    text-align: center;
}
.alert-box3 .div2 button{
    width: 118px;
    height: 38px;
}
.alert-box3 .div2 .btn1{
    margin-left: 30px;
}

.header-box{
    height: 66px;
    line-height: 63px;
    background-image: url("../assets/images/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #F5F5F5;
}
.header-box .header-title{
    float: left;
    margin-left: 28px;
    font-size: 26px;
    color: white;
    width: 260px;
    height: 46px;
    margin-top: 7px;
    background: url("../assets/images/img.png") no-repeat;
    background-size: 100% 100%;
}
.header-box .header-name{
    float: right;
    margin-right: 31px;
    position: relative;
}
.header-box .header-name a{
    font-size: 16px;
    color: white;
    text-decoration: none;
}
.header-box .header-name span{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("../assets/images/1.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    top:3px;
    right: 3px;
}
a,button{
    cursor: pointer;
}
a,span,i{
    display: inline-block;
}
a{
    text-decoration: none;
}
button{
    border: 1px solid #398BFB;
    border-radius: 6px;
    outline: none;
}
.btn1{
    background: #398BFB;
    color: white;
}
.btn1:hover{
    background: white;
    color: #398BFB;
    transition: .3s;
}
.btn2{
    background: white;
    color: #398BFB;
}
.btn2:hover{
    background: #398BFB;
    color: white;
    transition: .3s;
}

.layui-m-layer{position:relative;z-index:19891014}.layui-m-layer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.layui-m-layermain,.layui-m-layershade{position:fixed;left:0;top:0;width:100%;height:100%}.layui-m-layershade{background-color:rgba(0,0,0,.7);pointer-events:auto}.layui-m-layermain{display:table;font-family:Helvetica,arial,sans-serif;pointer-events:none}.layui-m-layermain .layui-m-layersection{display:table-cell;vertical-align:middle;text-align:center}.layui-m-layerchild{position:relative;display:inline-block;text-align:left;background-color:#fff;font-size:14px;border-radius:5px;box-shadow:0 0 8px rgba(0,0,0,.1);pointer-events:auto;-webkit-overflow-scrolling:touch;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:.2s;animation-duration:.2s}@-webkit-keyframes layui-m-anim-scale{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes layui-m-anim-scale{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.layui-m-anim-scale{animation-name:layui-m-anim-scale;-webkit-animation-name:layui-m-anim-scale}@-webkit-keyframes layui-m-anim-up{0%{opacity:0;-webkit-transform:translateY(800px);transform:translateY(800px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes layui-m-anim-up{0%{opacity:0;-webkit-transform:translateY(800px);transform:translateY(800px)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.layui-m-anim-up{-webkit-animation-name:layui-m-anim-up;animation-name:layui-m-anim-up}.layui-m-layer0 .layui-m-layerchild{width:90%;max-width:640px}.layui-m-layer1 .layui-m-layerchild{border:none;border-radius:0}.layui-m-layer2 .layui-m-layerchild{width:auto;max-width:260px;min-width:40px;border:none;background:0 0;box-shadow:none;color:#fff}.layui-m-layerchild h3{padding:0 10px;height:60px;line-height:60px;font-size:16px;font-weight:400;border-radius:5px 5px 0 0;text-align:center}.layui-m-layerbtn span,.layui-m-layerchild h3{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.layui-m-layercont{padding:50px 30px;line-height:22px;text-align:center}.layui-m-layer1 .layui-m-layercont{padding:0;text-align:left}.layui-m-layer2 .layui-m-layercont{text-align:center;padding:0;line-height:0}.layui-m-layer2 .layui-m-layercont i{width:25px;height:25px;margin-left:8px;display:inline-block;background-color:#fff;border-radius:100%;-webkit-animation:layui-m-anim-loading 1.4s infinite ease-in-out;animation:layui-m-anim-loading 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.layui-m-layerbtn,.layui-m-layerbtn span{position:relative;text-align:center;border-radius:0 0 5px 5px}.layui-m-layer2 .layui-m-layercont p{margin-top:20px}@-webkit-keyframes layui-m-anim-loading{0%,100%,80%{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}@keyframes layui-m-anim-loading{0%,100%,80%{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}.layui-m-layer2 .layui-m-layercont i:first-child{margin-left:0;-webkit-animation-delay:-.32s;animation-delay:-.32s}.layui-m-layer2 .layui-m-layercont i.layui-m-layerload{-webkit-animation-delay:-.16s;animation-delay:-.16s}.layui-m-layer2 .layui-m-layercont>div{line-height:22px;padding-top:7px;margin-bottom:20px;font-size:14px}.layui-m-layerbtn{display:box;display:-moz-box;display:-webkit-box;width:100%;height:50px;line-height:50px;font-size:0;border-top:1px solid #D0D0D0;background-color:#F2F2F2}.layui-m-layerbtn span{display:block;-moz-box-flex:1;box-flex:1;-webkit-box-flex:1;font-size:14px;cursor:pointer}.layui-m-layerbtn span[yes]{color:#40AFFE}.layui-m-layerbtn span[no]{border-right:1px solid #D0D0D0;border-radius:0 0 0 5px}.layui-m-layerbtn span:active{background-color:#F6F6F6}.layui-m-layerend{position:absolute;right:7px;top:10px;width:30px;height:30px;border:0;font-weight:400;background:0 0;cursor:pointer;-webkit-appearance:none;font-size:30px}.layui-m-layerend::after,.layui-m-layerend::before{position:absolute;left:5px;top:15px;content:'';width:18px;height:1px;background-color:#999;transform:rotate(45deg);-webkit-transform:rotate(45deg);border-radius:3px}.layui-m-layerend::after{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}body .layui-m-layer .layui-m-layer-footer{position:fixed;width:95%;max-width:100%;margin:0 auto;left:0;right:0;bottom:10px;background:0 0}.layui-m-layer-footer .layui-m-layercont{padding:20px;border-radius:5px 5px 0 0;background-color:rgba(255,255,255,.8)}.layui-m-layer-footer .layui-m-layerbtn{display:block;height:auto;background:0 0;border-top:none}.layui-m-layer-footer .layui-m-layerbtn span{background-color:rgba(255,255,255,.8)}.layui-m-layer-footer .layui-m-layerbtn span[no]{color:#FD482C;border-top:1px solid #c2c2c2;border-radius:0 0 5px 5px}.layui-m-layer-footer .layui-m-layerbtn span[yes]{margin-top:10px;border-radius:5px}body .layui-m-layer .layui-m-layer-msg{width:auto;max-width:90%;margin:0 auto;bottom:-150px;background-color:rgba(0,0,0,.7);color:#fff}.layui-m-layer-msg .layui-m-layercont{padding:10px 20px}

</style>