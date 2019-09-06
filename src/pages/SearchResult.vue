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
                <input type="text" v-model="value"/>
                <span @click="search" style="cursor:pointer;"><img src="../assets/images/blue-search.png"/><label style="cursor:pointer;">搜索</label></span>
            </p>
           <router-link to='/Advanced' style="text-decoration:none;"><button class="btn1">高级检索</button></router-link> 
            
            <button class="btn1">从高级中检索</button>
        </div>
        <div class="main-bottom">
            <div class="search-result" style="height:40px;margin-bottom:10px;">
                <div class="result-left">
                     <!-- <el-checkbox-group v-model="checkList" style="float:left;">
                        <el-checkbox label="全选所有" style="margin-right:15px;"></el-checkbox>
                        <el-checkbox label="全选本页" style="margin-right:15px;"></el-checkbox>
                    </el-checkbox-group> -->
                    <el-select v-model="value1" placeholder="展示字段" style="width:110px;margin-right:5px;">
                        <el-option
                        v-for="item in options1"
                        :key="item.value1"
                        :label="item.label"
                        :value="item.value1">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="排序字段" style="width:110px;margin-right:5px;">
                        <el-option
                        v-for="item in options2"
                        :key="item.value2"
                        :label="item.label"
                        :value="item.value2">
                        </el-option>
                    </el-select>
                    <el-select v-model="value3" placeholder="排序方式" style="width:110px;margin-right:5px;">
                        <el-option
                        v-for="item in options3"
                        :key="item.value3"
                        :label="item.label"
                        :value="item.value3">
                        </el-option>
                    </el-select>

                  
                </div>
                <div class="result-right">
                    <!-- <a class="a1" id="save-search" style="height:26px;"> -->
                        <!-- <img src="../assets/images/save-search.png" /> -->
                        <el-button type="success" plain @click="open1">保存检索式</el-button>
                        <el-button type="warning" plain @click="dialogFormVisible = true" >添加至数据集</el-button>
                        <el-dialog title="添加数据集" :visible.sync="dialogFormVisible" style="" center>
                                <el-dialog
                                    id="dialog"
                                    width="60%"
                                    height="200px"
                                    title="创建成功"
                                    center
                                    :visible.sync="innerVisible"
                                    append-to-body>
                                    <img src="../assets/images/success.png" style="margin-left:180px;margin-bottom:40px;" />
                                    <el-button type="primary" plain style="position:absolute;right:42%;bottom:5%;" @click="viewData">查看数据集</el-button>
                                </el-dialog>
                            <el-form :model="form">
                                <el-form-item label="数据集名称：" :label-width="formLabelWidth">
                                    <el-input v-model="form.region" placeholder="输入数据集名称" style="width:200px;"></el-input>
                                    <!-- <el-select v-model="form.region" placeholder="选择数据集">
                                        <el-option label="数据集一" value="collection1"></el-option>
                                        <el-option label="数据集二" value="collection2"></el-option>
                                        <el-option label="新建数据集" value="collection2"></el-option>
                                    </el-select>
                                <el-input v-model="form.name" autocomplete="off"></el-input> -->
                                </el-form-item>
                                <el-form-item label="数据集描述：" :label-width="formLabelWidth">
                                    <el-input type="textarea" v-model="form.desc" placeholder="请输入描述内容" ></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="addData">确定创建</el-button>
                            </div>
                        </el-dialog>
                        <el-button type="primary" plain style="margin-left:10px;">检索结果</el-button>
                </div>
            </div>
            <div id="viewTable" class="view">
                 <el-table
                    ref="multipleTable"
                    :data="tableData"
                    border
                    highlight-current-row 
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                    :row-class-name="tableRowClassName">
                    <el-table-column prop="select" type="selection" width="100" height="120" align="center">
                        <!-- <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.checked" @change="getdata(scope.row)"></el-checkbox> 
                        </template> -->
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
                            <p v-html="reg(scope.row.admission)" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openAdmission(scope.row.admission)">
                            </p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="discharge" label="出院诊断" width="120" align="center">
                        <template  slot-scope="scope">
                            <p v-html="reg(scope.row.discharge)" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openDischarge(scope.row.discharge)"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="departments" label="就诊科室" width="100" align="center"></el-table-column>
                    <el-table-column prop="present"  label="现病史" width="120" align="center">
                        <template slot-scope="scope">
                            <p v-html="reg(scope.row.present)" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openPresent(scope.row.present)"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="past" label="既往史" width="120" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.past"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="family" label="家族史" width="120" align="center">
                        <template slot-scope="scope">
                            <p v-html="reg(scope.row.family)" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openFamily(scope.row.family)"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="treatment" label="治疗经过" width="120" align="center">
                        <template slot-scope="scope">
                            <p v-html="reg(scope.row.treatment)" style="overflow:hidden; text-overflow:ellipsis;white-space:nowrap;cursor:pointer;" @click="openTreatment(scope.row.treatment)"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="inspect" label="检查项目" width="100" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.inspect"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="CheckValue" label="检查值" width="100" align="center">
                        <template slot-scope="scope">
                            <p v-html="scope.row.CheckValue"></p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="CheckTime" label="检查时间" width="120" align="center"></el-table-column>
                    <el-table-column prop="hospital" label="就诊医院" width="120" align="center"></el-table-column>
                    <el-table-column prop="time" label="入院时间/出院时间" width="120" align="center"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="120" align="center">
                          <template >
                            <el-button style="border:0px;" type="text" size="small" >详情</el-button>
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
    <!-- <div class="alert-box1">
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
    </div> -->
    <el-dialog :visible-sync="getA">
         <my-component :rowaa=row></my-component>
         <!-- {{this.row}} -->
    </el-dialog>
    </div>
</template>

<script>
export default {
    name:'searchResult',
    data() {
      return {
        multipleSelection: [],
        currentData:[],
        SearchData:[],
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
        ids:[],
        formLabelWidth: '120px',
        visible: false,
        getA : false,
        row : '',
        value:'',
        dataId:'',
        // SearchData:[]
         options1: [{
          value1: 'ID',
          label: 'ID'
        }, {
          value1: '性别',
          label: '性别'
        }, {
          value1: '门诊诊断',
          label: '门诊诊断'
        }, {
          value1: '出院诊断',
          label: '出院诊断'
        }, {
          value1: '主诉',
          label: '主诉'
        }, {
          value1: '现病史',
          label: '现病史'
        }, {
          value1: '既往史',
          label: '既往史'
        }, {
          value1: '家族史',
          label: '家族史'
        }],
        value1:'',
         options2: [{
          value2: 'ID',
          label: 'ID'
        }, {
          value2: '性别',
          label: '性别'
        }, {
          value2: '门诊诊断',
          label: '门诊诊断'
        }, {
          value2: '出院诊断',
          label: '出院诊断'
        }, {
          value2: '主诉',
          label: '主诉'
        }, {
          value2: '现病史',
          label: '现病史'
        }, {
          value2: '既往史',
          label: '既往史'
        }, {
          value2: '家族史',
          label: '家族史'
        }],
        value2:'',
         options3: [{
          value3: '相关度由大到小',
          labe3: '相关度由大到小'
        }, {
          value3: '相关度由小到大',
          label: '相关度由小到大'
        }, {
          value3: '数字由大到小',
          label: '数字由大到小'
        }, {
          value3: '数字由小到大',
          label: '数字由小到大'
        }, {
          value3: '文字由多到少',
          label: '文字由多到少'
        }, {
          value3: '文字由少到多',
          label: '文字由少到多'
        }],
        value3:'',
      }
    },
     methods: {
        search(){
            // console.log(1)
            if(this.value == ''){
                 this.$message({
                    message: '请输入搜索值',
                    type: 'warning',
                    duration:1000
                });
                return
            }
            console.log(this.value)
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });

            axios({
                url:'http://10.1.192.118:9901/search/ptsearch',
                method:'post',
                data:{
                    page:1,
                    querystring:this.value,
                    filters:[]
                },
            }).then(res => {
                // console.log(res.data.results)
                // let data = res.data.results;
                let arr = res.data.results
                for(var i=0;i<arr.length;i++){
                this.tableData.push({
                    // number:i+1,
                    id:arr[i].hzjbxx.id,
                    name:arr[i].hzjbxx.name,
                    birthDate:arr[i].zybasy.data,
                    sex:arr[i].hzjbxx.sex,
                    qutpatient:arr[i].zybasy.mjzzdmc,
                    admission:arr[i].ryjl.xbs,
                    discharge:arr[i].cyxj.cyszz,
                    departments:arr[i].ryjl.ksmc,
                    present:arr[i].ryjl.zkqk,
                    past:arr[i].ryjl.zs,
                    family:arr[i].jbjkxx.jzs,
                    // family:this.reg(SearchData[i].jbjkxx.jzs),
                    treatment:arr[i].cyxj.zlgcms,
                    inspect:'血红蛋白',
                    CheckValue:'80 0.8',
                    CheckTime:'2016.03.11-2016.03.17',
                    hospital:arr[i].zybasy.yymc,
                    time:'2016.03.11/2016.03.17',
                    // operation:'详情'
                })
                loading.close()
        }
            this.tableCopyTableList = this.tableData
            this.tableData = this.paging(this.size, this.index);
                // console.log(this.SearchData)
                // this.display(this.SearchData)
                // loading.close()
            })
        },
        openAdmission(a) {
            this.$alert(`${a}`, "入院诊断",{ dangerouslyUseHTMLString: true});
        },
        openDischarge(a) {
            this.$alert(`${a}`, "出院诊断",{ dangerouslyUseHTMLString: true});
        },
        openPresent(a) {
            this.$alert(`${a}`, "现病史",{ dangerouslyUseHTMLString: true});
        },
        openFamily(a){
             this.$alert(`${a}`, "家族史",{ dangerouslyUseHTMLString: true});
        },
        openTreatment(a){
             this.$alert(`${a}`, "治疗经过",{ dangerouslyUseHTMLString: true});
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
      //渲染页面
      display(SearchData){
        //   console.log(1)
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
                    // family:this.reg(SearchData[i].jbjkxx.jzs),
                    treatment:SearchData[i].cyxj.zlgcms,
                    inspect:'血红蛋白',
                    CheckValue:'80 0.8',
                    CheckTime:'2016.03.11-2016.03.17',
                    hospital:SearchData[i].zybasy.yymc,
                    time:'2016.03.11/2016.03.17',
                    // operation:'详情'
                })
        }
            this.tableCopyTableList = this.tableData
            this.tableData = this.paging(this.size, this.index);
      },
      //勾选时拿数据
        handleSelectionChange(val) {
            this.multipleSelection = val;
            // console.log(this.multipleSelection)
             this.currentData = this.multipleSelection;
        },
        //创建数据集
        addData(){
            for(let i=0;i<this.currentData.length;i++){
                    this.ids.push(this.currentData[i].id)
            }  
            axios({
                url:'http://10.1.192.118:9901/data/adddata',
                method:'post',
                data:{"dataDescribe":this.form.desc,"dataName":this.form.region,ids:this.ids}
            }).then(res => {
                console.log(res)
                this.dataId = res.data.id;
                if(res.status == 200){
                        this.innerVisible = true;
                }
            })
        },
        viewData(){
            // console.log(this.form.desc)
            // console.log(this.form.region)
            // console.log(this.ids)
             this.$router.push({path:'/lookData',query:{name:'searchResult',
             desc:this.form.desc,region:this.form.region,data:this.currentData,dataId:this.dataId}}) 
        },
        //匹配搜索关键字
        reg(str){
            if(str.indexOf(`<span style='color:red'>${this.value}</span>`) == -1){
                    return str;
            }else{
                return str.replace(str.slice(0, str.indexOf(`<span style='color:red'>${this.value}</span>`)-2), "...")
            }
        }
    },
    computed:{

    },
    watch: {
        '$route': function(to, from) {
        //    console.log(this.$route.path)
        //    console.log(to.path)
        }
    },

    created(){
        //初始化数据
        if(this.$route.query.name == 'retrieval'){
            this.value = this.$route.query.value;
            let SearchData = JSON.parse(localStorage.getItem("searchresult")).results
            // console.log(SearchData)
            this.display(SearchData);
        }
        if(this.$route.query.name == 'advanced'){
            let SearchData = JSON.parse(localStorage.getItem("seniorSearchresult")).results
            this.display(SearchData);
        }
    },
    mounted(){

    }
}
</script>
<style scoped src="../assets/css/search-result.css"></style>
<style scoped src="../assets/css/top.css"></style>
<style scoped src="../assets/css/layer.css"></style>
<style scoped src="../assets/css/perfect-scrollbar.css"></style>
<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>