<template>
    <div class="advanced" style="min-width:1200px;">
        <div class="header-box">
            <div class="header-title"></div>
            <div class="header-name">
                <a>王医生，欢迎您！</a>
                <span></span>
            </div>
    </div>
    <div class="main" style="min-width:1200px;">
        <div class="main-right">
            <div class="right-search">
                <div class="div-font">
                    <span></span>
                    <a>已选检索条件</a>
                </div>
                <div class="div-content" id="saveItem">
                    <p ref="searchCondition"></p>
                    <div><button @click="saveCondition">保存检索条件</button></div>
                </div>
            </div>
            <div class="right-save">
                <div class="div-font">
                    <span></span>
                    <a>已保存检索条件</a>
                </div>
                <div class="div-content">
                    <p ref="saveCondition"></p>
                </div>
            </div>
        </div>
        <div class="main-left">
            <div class="search-top" style="overflow:hidden;">
                 <el-select v-model="value" ref="collectionName" id="collectionName" placeholder="请先选择表名" border style="float:left;" @input="getValue(value)">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div>
                    <button class="btn1" @click="startSearch">确定并开始检索</button>
                    <button class="btn2">清除</button>
                </div>
            </div>
            <div class="search-bottom">
                <div class="search-condition">
                    <ul>
                        <li class="li-1"
                         v-for="(item,index) of list1"
                         :key = "index"
                         style="margin-top:10px;"
                         @click = "getItem(item)"
                        >
                            <span>{{item}}</span>
                        </li>
                    </ul>
                </div>
                <div class="condition-write">
                    <div class="write-top" ref="ele">
                        <div class="div1">
                            <p>
                                <span class="sp1"></span>
                                <label>检索字段</label>
                            </p>
                            <p>
                                <span class="sp2"></span>
                                <label>运算符</label>
                            </p>
                            <p>
                                <span class="sp3"></span>
                                <label>检索值</label>
                            </p>
                            <p>
                                <span class="sp4"></span>
                                <label>精确</label>
                            </p>
                            <!-- <p>
                                <span class="sp5"></span>
                                <label>表名</label>
                            </p> -->
                        </div>

                        <div class="div2 div" style="position:relative;">
                            <p class="p1">
                                <a class="a2" @click="add">+</a>
                                <a class="a1" @click="cut">-</a>
                            </p>
                            <input class="in1" type="text" ref="init" id="init" v-model="searchInfo" placeholder="请选择字段" style="text-indent:5px;" disabled/>
                            <select class="se1" ref="include1" id="include1">
                                <option>包含</option>
                                <option>不包含</option>
                                <option>等于</option>
                                <option>大于等于</option>
                                <option>小于等于</option>
                                <option>大于</option>
                                <option>小于</option>
                            </select>
                            <input class="in2" type="text" ref="initValue" id="initValue" placeholder="请输入检索值" style="text-indent:5px;" />
                            <select class="se2">
                                <option>精确</option>
                                <option>模糊</option>
                            </select>
                            <input type="text" ref="table" id="table" v-model="collectionName" placeholder="请选择表名" disabled style="position:absolute;right:-25px;width:90px;text-indent:5px;">
                        </div>
                        <div class="div3 div"
                             v-for="(item,index) of items"
                            :key = "index"
                        >
                            <input class="in1" type="text"
                             ref="box"
                             id="box" 
                             placeholder="请选择字段"
                             style="text-indent:5px;" 
                             disabled/>
                            <select class="se1" ref="include2" id="include2"> 
                                <option>包含</option>
                                <option>不包含</option>
                                <option>等于</option>
                                <option>大于等于</option>
                                <option>小于等于</option>
                                <option>大于</option>
                                <option>小于</option>
                            </select>
                            <input class="in2" type="text" 
                             placeholder="请输入检索值"  
                             style="text-indent:5px;" 
                             ref="boxValue"
                             id="boxValue"
                             />
                            <select class="se2">
                                <option>精确</option>
                                <option>模糊</option>
                            </select>
                            <select class="se3" id="se3" ref="se3">
                                <option ref="relation1">并含</option>
                                <option ref="relation2">或含</option>
                                <option ref="relation3">不含</option>
                            </select>
                             <input type="text" id="" ref="collection" placeholder="请选择表名" disabled style="position:absolute;right:-25px;width:90px;text-indent:5px;">
                        </div>
                    </div>
                    <div class="write-bottom">
                        <div class="write-div1" style="display: none">
                            <span></span>
                            <label>与前一检索条件关系</label>
                        </div>
                        <div class="write-div2" style="display: none">
                            <select>
                                <option>与</option>
                                <option>或</option>
                                <option>非</option>
                            </select>
                        </div>
                        <div class="write-div3">
                            <button id="write-btn1" @click="addCondition">添加到已选条件</button>
                            <button id="write-btn2" style="display: none">返回上一级</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import transform from '../filters/transform'
// console.log(transform)
export default {
  name:'advanced',
  components: {

  },
  data(){
      return {
          fullscreenLoading: false,
          onOff : 0,
          text : 1,
          searchInfo:'',
          collectionName:'',
          items:[],
          options: [{
            value: '患者基本信息',
            label: '患者基本信息'
            }, {
            value: '出院小结',
            label: '出院小结'
            }, {
            value: '疾病健康信息',
            label: '疾病健康信息'
            }, {
            value: '一般手术记录',
            label: '一般手术记录'
            }, {
            value: '入院记录',
            label: '入院记录'
            },{
            value: '检验记录',
            label: '检验记录'
            },{
            value: '检查记录',
            label: '检查记录'
            },{
            value: '住院病案首页',
            label: '住院病案首页'
            }],
            value: '',
            // label: ''
            list1:["编号","病人主索引","就诊住索引","健康档案编号","省份证号","居民健康卡号","姓名","出生日期","年龄","性别","名族","职业","地址"],
            collectionList:[],
            seniorSearchData:[]
      }
  },
  methods:{
      add(){
            this.onOff++
            this.items.push(this.text++)           
      },
      cut(){
          
          if(this.onOff >= 1){
              this.onOff--
              this.collectionList.pop()
          }
            this.items.pop()           
      },
      getValue(value){
            axios({
                url:`http://10.1.192.118:9901/senior/getfields/{${this.value}}`,
                method:'get',   
            }).then(res => {
                // console.log(res)
                this.list1 = res.data
            })

        if(this.onOff == 0){
              this.collectionName = value;
          }else if(this.onOff == 1){
              this.$refs.collection[0].value = value;
          }else if(this.onOff == 2){
              this.$refs.collection[1].value = value;
          }else if(this.onOff == 3){
              this.$refs.collection[2].value = value;
          }else if(this.onOff == 4){
              this.$refs.collection[3].value = value;
          }else if(this.onOff == 5){
              this.$refs.collection[4].value = value;
          }else if(this.onOff == 6){
              this.$refs.collection[5].value = value;
          }else if(this.onOff == 7){
              this.$refs.collection[6].value = value;
          }else if(this.onOff == 8){
              this.$refs.collection[7].value = value;
          }else if(this.onOff == 9){
              this.$refs.collection[8].value = value;
          }else if(this.onOff == 10){
              this.$refs.collection[9].value = value;
          }
      },
      getItem(item){
          if(this.onOff == 0){
              this.searchInfo = item;
          }else if(this.onOff == 1){
              this.$refs.box[0].value = item;
          }else if(this.onOff == 2){
              this.$refs.box[1].value = item;
          }else if(this.onOff == 3){
              this.$refs.box[2].value = item;
          }else if(this.onOff == 4){
              this.$refs.box[3].value = item;
          }else if(this.onOff == 5){
              this.$refs.box[4].value = item;
          }else if(this.onOff == 6){
              this.$refs.box[5].value = item;
          }else if(this.onOff == 7){
              this.$refs.box[6].value = item;
          }else if(this.onOff == 8){
              this.$refs.box[7].value = item;
          }else if(this.onOff == 9){
              this.$refs.box[8].value = item;
          }else if(this.onOff == 10){
              this.$refs.box[9].value = item;
          }

      },
      addCondition(){            
            if(this.$refs.table.value == ""){
                    this.$message({
                    message: '请选择表名',
                    type: 'warning',
                    duration:1000
                });
                    return
            }else if(this.$refs.init.value == ""){
                    this.$message({
                    message: '请选择字段名',
                    type: 'warning',
                    duration:1000
                });
                    return
            }else if(this.$refs.initValue.value == ""){
                    this.$message({
                    message: '请输入检索值',
                    type: 'warning',
                    duration:1000
                });
                    return
            }else if(!this.$refs.collection || !this.$refs.box || !this.$refs.boxValue || this.$refs.boxValue.length == 0){
                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;

                let querystring = `${initValue}[${table}表 : ${init}]`
                // console.log(querystring)
                this.$refs.searchCondition.innerHTML = querystring;
                
            }else if(this.$refs.boxValue.length == this.$refs.collection.length == this.$refs.box.length == 1){
                    // console.log(document.querySelector("#se2").children)
                    let relate = ""
                            switch(this.$refs.se3[0].options[this.$refs.se3[0].selectedIndex].value){
                                    case "并含" :
                                        relate = "与";break;
                                    case "或含" :
                                        relate = "或" ;break;
                                    case "不含" :
                                        relate = "非";break;
                            }
                let arr1 = this.$refs.boxValue;
                let arr2 = this.$refs.collection;
                let arr3 = this.$refs.box;

                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;
                let querystring = `${initValue}[${table}表 : ${init}]`
                //没输入字符警告
                this.warning(this.$refs.collection,this.$refs.box,this.$refs.boxValue)

                let querystring1 = `${arr1[0].value}[${arr2[0].value}表 : ${arr3[0].value}]`
                this.$refs.searchCondition.innerHTML = `${querystring}<br/>${querystring1}&nbsp;(${relate})`

        }else if(this.$refs.boxValue.length == 2){
                 let relate = ""
                            switch(this.$refs.se3[0].options[this.$refs.se3[0].selectedIndex].value){
                                    case "并含" :
                                        relate = "与";break;
                                    case "或含" :
                                        relate = "或" ;break;
                                    case "不含" :
                                        relate = "非";break;
                            }
                let relate1 = ""
                        switch(this.$refs.se3[1].options[this.$refs.se3[1].selectedIndex].value){
                                case "并含" :
                                    relate1 = "与";break;
                                case "或含" :
                                    relate1 = "或" ;break;
                                case "不含" :
                                    relate1 = "非";break;
                        }
                let arr1 = this.$refs.boxValue;
                let arr2 = this.$refs.collection;
                let arr3 = this.$refs.box;
            
                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;
                let querystring = `${initValue}[${table}表 : ${init}]`
                //没输入字符警告
                this.warning(this.$refs.collection,this.$refs.box,this.$refs.boxValue)

                let querystring1 = `${arr1[0].value}[${arr2[0].value}表 : ${arr3[0].value}]`
                let querystring2 = `${arr1[1].value}[${arr2[1].value}表 : ${arr3[1].value}]`
                this.$refs.searchCondition.innerHTML = `${querystring}<br/>${querystring1}&nbsp;(${relate})<br/>${querystring2}&nbsp;(${relate1})`

    }else if(this.$refs.boxValue.length == 3){
                let relate = ""
                            switch(this.$refs.se3[0].options[this.$refs.se3[0].selectedIndex].value){
                                    case "并含" :
                                        relate = "与";break;
                                    case "或含" :
                                        relate = "或" ;break;
                                    case "不含" :
                                        relate = "非";break;
                            }
                let relate1 = ""
                        switch(this.$refs.se3[1].options[this.$refs.se3[1].selectedIndex].value){
                                case "并含" :
                                    relate1 = "与";break;
                                case "或含" :
                                    relate1 = "或" ;break;
                                case "不含" :
                                    relate1 = "非";break;
                        }
                let relate2 = ""
                        switch(this.$refs.se3[2].options[this.$refs.se3[2].selectedIndex].value){
                                case "并含" :
                                    relate2 = "与";break;
                                case "或含" :
                                    relate2 = "或" ;break;
                                case "不含" :
                                    relate2 = "非";break;
                        }
                let arr1 = this.$refs.boxValue;
                let arr2 = this.$refs.collection;
                let arr3 = this.$refs.box;
            
                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;
                let querystring = `${initValue}[${table}表 : ${init}]`
                //没输入字符警告
                this.warning(this.$refs.collection,this.$refs.box,this.$refs.boxValue)

                let querystring1 = `${arr1[0].value}[${arr2[0].value}表 : ${arr3[0].value}]`
                let querystring2 = `${arr1[1].value}[${arr2[1].value}表 : ${arr3[1].value}]`
                let querystring3 = `${arr1[2].value}[${arr2[2].value}表 : ${arr3[2].value}]`
                this.$refs.searchCondition.innerHTML = `${querystring}<br/>${querystring1}&nbsp;(${relate})<br/>${querystring2}&nbsp;(${relate1}<br/>${querystring3}&nbsp;(${relate2}`
    }else if(this.$refs.boxValue.length == 4){
                let relate = ""
                            switch(this.$refs.se3[0].options[this.$refs.se3[0].selectedIndex].value){
                                    case "并含" :
                                        relate = "与";break;
                                    case "或含" :
                                        relate = "或" ;break;
                                    case "不含" :
                                        relate = "非";break;
                            }
                let relate1 = ""
                        switch(this.$refs.se3[1].options[this.$refs.se3[1].selectedIndex].value){
                                case "并含" :
                                    relate1 = "与";break;
                                case "或含" :
                                    relate1 = "或" ;break;
                                case "不含" :
                                    relate1 = "非";break;
                        }
                let relate2 = ""
                        switch(this.$refs.se3[2].options[this.$refs.se3[2].selectedIndex].value){
                                case "并含" :
                                    relate2 = "与";break;
                                case "或含" :
                                    relate2 = "或" ;break;
                                case "不含" :
                                    relate2 = "非";break;
                        }
                let relate3 = ""
                        switch(this.$refs.se3[3].options[this.$refs.se3[3].selectedIndex].value){
                                case "并含" :
                                    relate3 = "AND";break;
                                case "或含" :
                                    relate3 = "OR" ;break;
                                case "不含" :
                                    relate3 = "NOT";break;
                        }
                let arr1 = this.$refs.boxValue;
                let arr2 = this.$refs.collection;
                let arr3 = this.$refs.box;
            
                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;
                let querystring = `${initValue}[${table}表 : ${init}]`
                //没输入字符警告
                this.warning(this.$refs.collection,this.$refs.box,this.$refs.boxValue)

                let querystring1 = `${arr1[0].value}[${arr2[0].value}表 : ${arr3[0].value}]`
                let querystring2 = `${arr1[1].value}[${arr2[1].value}表 : ${arr3[1].value}]`
                let querystring3 = `${arr1[2].value}[${arr2[2].value}表 : ${arr3[2].value}]`
                let querystring4 = `${arr1[3].value}[${arr2[3].value}表 : ${arr3[3].value}]`
                this.$refs.searchCondition.innerHTML = `${querystring}<br/>${querystring1}&nbsp;(${relate})<br/>${querystring2}&nbsp;(${relate1}<br/>${querystring3}&nbsp;(${relate2})<br/>${querystring4}&nbsp;(${relate3})`
    }     
},
      saveCondition(){
          this.$refs.saveCondition.innerHTML = this.$refs.searchCondition.innerHTML;
          localStorage.setItem("searchCondition",this.$refs.saveCondition.innerHTML)
      },
    //确定并开始搜索
      startSearch(){
            // console.log(this.$refs.include1.options[this.$refs.include1.selectedIndex].value)
            if(this.$refs.table.value == ""){
                    this.$message({
                                    message: '请选择表名',
                                    type: 'warning',
                                    duration:1000
                                });
                    return
            }else if(this.$refs.init.value == ""){
                    this.$message({
                                    message: '请选择字段名',
                                    type: 'warning',
                                    duration:1000
                                });
                    return
            }else if(this.$refs.initValue.value == ""){
                    this.$message({
                                    message: '请输入检索值',
                                    type: 'warning',
                                    duration:1000
                                });
                    return
            }else if(!this.$refs.collection || !this.$refs.box || !this.$refs.boxValue || this.$refs.boxValue.length == 0){
                //   console.log(this.$refs.include1.options[this.$refs.include1.selectedIndex].value)
                let computeValue = this.$refs.include1.options[this.$refs.include1.selectedIndex].value;

                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;

                let queryField = `${transform(table)}.${transform(init)}`
                console.log(queryField)
                console.log(initValue)
                const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                axios({
                    url:'http://10.1.192.118:9901/senior/gjsearch',
                    method:'post',
                    data:{"maplist":[{"检索字段":queryField,"运算符":computeValue,"检索值":initValue}]}
                }).then(res => {
                    // console.log(res)
                    this.seniorSearchData = res.data;
                    localStorage.setItem('seniorSearchresult',JSON.stringify( this.seniorSearchData))
                    // console.log(this.seniorSearchData)
                    if(res.status == 200){
                          this.$router.push({path:'/searchResult',query:{name:'advanced',data:this.seniorSearchData}})      
                        loading.close();
    
                    }

                })
                
                
            }else if(this.$refs.boxValue.length == this.$refs.collection.length == this.$refs.box.length == 1){
                // console.log(this.$refs.include2[0].options[this.$refs.include2[0].selectedIndex].value)
                    let computeValue = this.$refs.include1.options[this.$refs.include1.selectedIndex].value;        
                    let computeValue1 = this.$refs.include2[0].options[this.$refs.include2[0].selectedIndex].value;        

                    let relate = ""
                            switch(this.$refs.se3[0].options[this.$refs.se3[0].selectedIndex].value){
                                    case "并含" :
                                        relate = "与";break;
                                    case "或含" :
                                        relate = "或" ;break;
                                    case "不含" :
                                        relate = "非";break;
                            }
                            // console.log(relate)

                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;
                let queryField = `${transform(table)}.${transform(init)}`

                let arr1 = this.$refs.boxValue;
                let arr2 = this.$refs.collection;
                let arr3 = this.$refs.box;
                let queryField1 = `${transform(arr2[0].value)}.${transform(arr3[0].value)}`
                console.log(queryField)
                console.log(queryField1)
                // 没输入字符警告
                this.warning(this.$refs.collection,this.$refs.box,this.$refs.boxValue)
                const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                axios({
                    url:'http://10.1.192.118:9901/senior/gjsearch',
                    method:'post',
                    data:{"maplist":[
                                        {"检索字段":queryField,"运算符":computeValue,"检索值":initValue},
                                        {"检索字段":queryField1,"运算符":computeValue1,"检索值":arr1[0].value}
                                    ],
                          "stringList":[relate]          
                                    }
                }).then(res => {
                    // console.log(res)
                    this.seniorSearchData = res.data;
                     localStorage.setItem('seniorSearchresult',JSON.stringify( this.seniorSearchData))
                    // console.log(this.seniorSearchData)
                    if(res.status == 200){
                          this.$router.push({path:'/searchResult',query:{name:'advanced',data:this.seniorSearchData}})   
                        loading.close();
                    }
                })
        }else if(this.$refs.boxValue.length == 2){
                //    console.log(this.$refs.include2[0].options[this.$refs.include2[0].selectedIndex].value)
                //    console.log(this.$refs.include2[1].options[this.$refs.include2[1].selectedIndex].value)
                let computeValue = this.$refs.include1.options[this.$refs.include1.selectedIndex].value;        
                let computeValue1 = this.$refs.include2[0].options[this.$refs.include2[0].selectedIndex].value; 
                let computeValue2 = this.$refs.include2[1].options[this.$refs.include2[1].selectedIndex].value; 

                 let relate = ""
                            switch(this.$refs.se3[0].options[this.$refs.se3[0].selectedIndex].value){
                                    case "并含" :
                                        relate = "与";break;
                                    case "或含" :
                                        relate = "或" ;break;
                                    case "不含" :
                                        relate = "非";break;
                            }
                let relate1 = ""
                        switch(this.$refs.se3[1].options[this.$refs.se3[1].selectedIndex].value){
                                case "并含" :
                                    relate1 = "与";break;
                                case "或含" :
                                    relate1 = "或" ;break;
                                case "不含" :
                                    relate1 = "非";break;
                        }
            
                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;
                let queryField = `${transform(table)}.${transform(init)}`

                let arr1 = this.$refs.boxValue;
                let arr2 = this.$refs.collection;
                let arr3 = this.$refs.box;
                let queryField1 = `${transform(arr2[0].value)}.${transform(arr3[0].value)}`
                let queryField2 = `${transform(arr2[1].value)}.${transform(arr3[1].value)}`

                // let querystring = `${initValue}[${table}表 : ${init}]`
                //没输入字符警告
                this.warning(this.$refs.collection,this.$refs.box,this.$refs.boxValue)
                const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                axios({
                    url:'http://10.1.192.118:9901/senior/gjsearch',
                    method:'post',
                    data:{"maplist":[
                                        {"检索字段":queryField,"运算符":computeValue,"检索值":initValue},
                                        {"检索字段":queryField1,"运算符":computeValue1,"检索值":arr1[0].value},
                                        {"检索字段":queryField2,"运算符":computeValue2,"检索值":arr1[1].value}
                                    ],
                          "stringList":[relate,relate1]          
                                    }
                }).then(res => {
                    // console.log(res)
                    this.seniorSearchData = res.data;
                     localStorage.setItem('seniorSearchresult',JSON.stringify( this.seniorSearchData))
                    // console.log(this.seniorSearchData)
                    if(res.status == 200){
                          this.$router.push({path:'/searchResult',query:{name:'advanced',data:this.seniorSearchData}})    
                        loading.close();
                    }
                })

    }else if(this.$refs.boxValue.length == 3){
                let computeValue = this.$refs.include1.options[this.$refs.include1.selectedIndex].value;        
                let computeValue1 = this.$refs.include2[0].options[this.$refs.include2[0].selectedIndex].value; 
                let computeValue2 = this.$refs.include2[1].options[this.$refs.include2[1].selectedIndex].value; 
                let computeValue3 = this.$refs.include2[2].options[this.$refs.include2[2].selectedIndex].value; 

                let relate = ""
                            switch(this.$refs.se3[0].options[this.$refs.se3[0].selectedIndex].value){
                                    case "并含" :
                                        relate = "与";break;
                                    case "或含" :
                                        relate = "或" ;break;
                                    case "不含" :
                                        relate = "非";break;
                            }
                let relate1 = ""
                        switch(this.$refs.se3[1].options[this.$refs.se3[1].selectedIndex].value){
                                case "并含" :
                                    relate1 = "与";break;
                                case "或含" :
                                    relate1 = "或" ;break;
                                case "不含" :
                                    relate1 = "非";break;
                        }
                let relate2 = ""
                        switch(this.$refs.se3[2].options[this.$refs.se3[2].selectedIndex].value){
                                case "并含" :
                                    relate2 = "与";break;
                                case "或含" :
                                    relate2 = "或" ;break;
                                case "不含" :
                                    relate2 = "非";break;
                        }
            
                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;
                let queryField = `${transform(table)}.${transform(init)}`
                
                let arr1 = this.$refs.boxValue;
                let arr2 = this.$refs.collection;
                let arr3 = this.$refs.box;
                let queryField1 = `${transform(arr2[0].value)}.${transform(arr3[0].value)}`
                let queryField2 = `${transform(arr2[1].value)}.${transform(arr3[1].value)}`
                let queryField3 = `${transform(arr2[2].value)}.${transform(arr3[2].value)}`
                // let querystring = `${initValue}[${table}表 : ${init}]`
                //没输入字符警告
                this.warning(this.$refs.collection,this.$refs.box,this.$refs.boxValue)
                const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                axios({
                    url:'http://10.1.192.118:9901/senior/gjsearch',
                    method:'post',
                    data:{"maplist":[
                                        {"检索字段":queryField,"运算符":computeValue,"检索值":initValue},
                                        {"检索字段":queryField1,"运算符":computeValue1,"检索值":arr1[0].value},
                                        {"检索字段":queryField2,"运算符":computeValue2,"检索值":arr1[1].value},
                                        {"检索字段":queryField3,"运算符":computeValue3,"检索值":arr1[2].value}
                                    ],
                          "stringList":[relate,relate1,relate2]          
                                    }
                }).then(res => {
                    // console.log(res)
                    this.seniorSearchData = res.data;
                     localStorage.setItem('seniorSearchresult',JSON.stringify( this.seniorSearchData))
                    // console.log(this.seniorSearchData)
                    if(res.status == 200){
                          this.$router.push({path:'/searchResult',query:{name:'advanced',data:this.seniorSearchData}})    
                          loading.close();  
                    }
                })

    }else if(this.$refs.boxValue.length == 4){
                let computeValue = this.$refs.include1.options[this.$refs.include1.selectedIndex].value;        
                let computeValue1 = this.$refs.include2[0].options[this.$refs.include2[0].selectedIndex].value; 
                let computeValue2 = this.$refs.include2[1].options[this.$refs.include2[1].selectedIndex].value; 
                let computeValue3 = this.$refs.include2[2].options[this.$refs.include2[2].selectedIndex].value;
                let computeValue4 = this.$refs.include2[3].options[this.$refs.include2[3].selectedIndex].value;

                let relate = ""
                            switch(this.$refs.se3[0].options[this.$refs.se3[0].selectedIndex].value){
                                    case "并含" :
                                        relate = "与";break;
                                    case "或含" :
                                        relate = "或" ;break;
                                    case "不含" :
                                        relate = "非";break;
                            }
                let relate1 = ""
                        switch(this.$refs.se3[1].options[this.$refs.se3[1].selectedIndex].value){
                                case "并含" :
                                    relate1 = "与";break;
                                case "或含" :
                                    relate1 = "或" ;break;
                                case "不含" :
                                    relate1 = "非";break;
                        }
                let relate2 = ""
                        switch(this.$refs.se3[2].options[this.$refs.se3[2].selectedIndex].value){
                                case "并含" :
                                    relate2 = "与";break;
                                case "或含" :
                                    relate2 = "或" ;break;
                                case "不含" :
                                    relate2 = "非";break;
                        }
                let relate3 = ""
                        switch(this.$refs.se3[3].options[this.$refs.se3[3].selectedIndex].value){
                                case "并含" :
                                    relate3 = "AND";break;
                                case "或含" :
                                    relate3 = "OR" ;break;
                                case "不含" :
                                    relate3 = "NOT";break;
                        }
            
                let initValue = this.$refs.initValue.value;
                let table = this.$refs.table.value;
                let init = this.$refs.init.value;
                let queryField = `${transform(table)}.${transform(init)}`                

                let arr1 = this.$refs.boxValue;
                let arr2 = this.$refs.collection;
                let arr3 = this.$refs.box;
                let queryField1 = `${transform(arr2[0].value)}.${transform(arr3[0].value)}`
                let queryField2 = `${transform(arr2[1].value)}.${transform(arr3[1].value)}`
                let queryField3 = `${transform(arr2[2].value)}.${transform(arr3[2].value)}`
                let queryField4 = `${transform(arr2[3].value)}.${transform(arr3[3].value)}`
                // let querystring = `${initValue}[${table}表 : ${init}]`
                //没输入字符警告
                this.warning(this.$refs.collection,this.$refs.box,this.$refs.boxValue);
                const loading = this.$loading({
                lock: true,
                text: '加载中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                axios({
                    url:'http://10.1.192.118:9901/senior/gjsearch',
                    method:'post',
                    data:{"maplist":[
                                        {"检索字段":queryField,"运算符":computeValue,"检索值":initValue},
                                        {"检索字段":queryField1,"运算符":computeValue1,"检索值":arr1[0].value},
                                        {"检索字段":queryField2,"运算符":computeValue2,"检索值":arr1[1].value},
                                        {"检索字段":queryField3,"运算符":computeValue3,"检索值":arr1[2].value},
                                        {"检索字段":queryField4,"运算符":computeValue4,"检索值":arr1[3].value},
                                    ],
                          "stringList":[relate,relate1,relate2,relate3]          
                                    }
                }).then(res => {
                    // console.log(res)
                    this.seniorSearchData = res.data;
                     localStorage.setItem('seniorSearchresult',JSON.stringify( this.seniorSearchData))
                    // console.log(this.seniorSearchData)
                    if(res.status == 200){
                          this.$router.push({path:'/searchResult',query:{name:'advanced',data:this.seniorSearchData}})      
                          loading.close()
                    }
                })
    }
            
      },
      //没输入字符警告
      warning(a,b,c){
                for(let i=0;i<a.length;i++){
                        if(a[i].value == ""){
                            this.$message({
                                    message: '请选择表名',
                                    type: 'warning',
                                    duration:1000
                                });
                                return
                        }
                    }
                    for(let i=0;i<b.length;i++){
                             if(b[i].value == ""){
                                 this.$message({
                                    message: '请选择字段名',
                                    type: 'warning',
                                    duration:1000
                                });
                                    return
                            }
                    }
                    for(let i=0;i<c.length;i++){
                              if(c[i].value == ""){
                                  this.$message({
                                    message: '请输入检索值',
                                    type: 'warning',
                                    duration:1000
                                });
                                    return
                            }
                    }
      },
    
  },
updated(){
    // console.log(document.querySelector("#se2").children[1].value)
    // console.log(this.$refs.relation[0].selectedIndex)
},
  mounted(){
       this.$refs.saveCondition.innerHTML = localStorage.getItem("searchCondition")

  }
}
</script>

<style scoped src="../assets/css/advanced.css"></style>