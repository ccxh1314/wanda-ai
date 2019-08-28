<template>
    <div class="advanced">
        <div class="header-box">
            <div class="header-title"></div>
            <div class="header-name">
                <a>王医生，欢迎您！</a>
                <span></span>
            </div>
    </div>
    <div class="main">
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
                 <el-select v-model="value" ref="collectionName" placeholder="请选择表名" border style="float:left;" @input="getValue">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div>
                    <button class="btn1">确定并开始检索</button>
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
                        </div>
                        <!-- <div class="div2 div">

                        </div> -->
                        <div class="div2 div">
                            <p class="p1">
                                <a class="a2" @click="add">+</a>
                                <a class="a1" @click="cut">-</a>
                            </p>
                            <input class="in1" type="text" ref="init" v-model="searchInfo" placeholder="请选择字段" style="text-indent:5px;" disabled/>
                            <select class="se1">
                                <option>包含</option>
                            </select>
                            <input class="in2" type="text" ref="initValue"  placeholder="请输入检索值" style="text-indent:5px;" />
                            <select class="se2">
                                <option>精确</option>
                            </select>
                        </div>
                        <div class="div3 div"
                             v-for="(item,index) of items"
                            :key = "index"
                        >
                            <input class="in1" type="text"
                             ref="box" 
                             placeholder="请选择字段"
                             style="text-indent:5px;" 
                             disabled/>
                            <select class="se1"> 
                                <option>包含</option>
                            </select>
                            <input class="in2" type="text" 
                             placeholder="请输入检索值"  
                             style="text-indent:5px;" 
                             ref="boxValue"
                             />
                            <select class="se2">
                                <option>精确</option>
                            </select>
                            <select class="se3" id="se2" ref="relation">
                                <option ref="relation1">并含</option>
                                <option ref="relation2">或含</option>
                                <option ref="relation3">不含</option>
                            </select>
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
                            <button id="write-btn1" @click="addCondition">新增检索条件</button>
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
// import '../assets/css/advanced.css'
import $ from 'jquery'
export default {
  name:'advanced',
  components: {

  },
  data(){
      return {
          onOff : 0,
          text : 1,
          searchInfo:'',
          items:[],
          options: [{
            value: '患者基本信息',
            label: '患者基本信息'
            }, {
            value: '出院小结',
            label: '出院小结'
            }, {
            value: '疾病就诊信息',
            label: '疾病就诊信息'
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
            list1:["身份证件号码","居民健康卡号","姓名","性别","年龄","ABO血型","Rh血型","过敏史","既往史","婚育史","家族史"],
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
          }
            this.items.pop()           
      },
      getValue(){

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
            // console.log(this.$refs.init.value)
            // console.log(this.$refs.initValue.value)
            // console.log(this.$refs.box[0].value)
            // console.log(this.$refs.boxValue[0].value)
            // console.log(this.$refs.relation[0].selectedIndex)
            // let str = "";
            // switch(this.$refs.relation[0].selectedIndex){
            //     case 0 :
            //         str = "AND" ; break;
            //     case 1 :
            //         str = "OR" ; break;
            //     case 2:
            //         str = "NOT" ; break;
            // }
          
            let collectionValue = this.$refs.collectionName.$el.children[0].children[0].value;
            if(collectionValue == ''){
                alert("请选择一个表名")
                return
            }
            // let keyWord1 = this.$refs.init.value
            // let keyValue1 = this.$refs.initValue.value
            // if(this.$refs.box){
            //     let keyWord2 = this.$refs.box[0].value
            //     // return
            // }else{
            //     let keyWord2 = ""
            // }
            // if(this.$refs.boxValue){
            //     let keyValue2 = this.$refs.boxValue[0].value
            //     // return
            // }else{
            //     let keyValue2 = ""
            // }

            // this.$refs.searchCondition.innerHTML = `${keyValue1}[${collectionValue}表: ${keyWord1}]
            // ${str} ${keyValue2}[${collectionValue}表: ${keyWord2}]`
      },
      saveCondition(){
        //   this.$refs.saveCondition.innerHTML = this.$refs.searchCondition.innerHTML;
        //   localStorage.setItem("searchCondition",this.$refs.saveCondition.innerHTML)
      },
  },
  mounted(){
       this.$refs.saveCondition.innerHTML = localStorage.getItem("searchCondition")
    $(function() {
        $("#write-btn1").click(function() {
            $(".write-div1").css({
                display: "block"
            });
            $(".write-div2").css({
                display: "block"
            });
            $("#write-btn2").css({
                display: "inline-block"
            });

        });
        $("#write-btn2").click(function() {
            $(".write-div1").css({
                display: "none"
            });
            $(".write-div2").css({
                display: "none"
            });
            $(this).css({
                display: "none"
            });
        });
    })

  }
}
</script>
<style scoped>
/* @import '../assets/css/advanced.css'; */
/* .el-select .el-input__inner::-webkit-input-placeholder{
    color:black;
} */

.header-box {
    height: 66px;
    line-height: 63px;
    background-image: url("../assets/images/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #F5F5F5;
}

.header-box .header-title {
    float: left;
    margin-left: 28px;
    font-size: 26px;
    color: white;
    width: 270px;
    height: 46px;
    margin-top: 7px;
    background: url("../assets/images/img.png") no-repeat;
    background-size: 100% 100%;
}

.header-box .header-name {
    float: right;
    margin-right: 31px;
    position: relative;
}

.header-box .header-name a {
    font-size: 16px;
    color: white;
    text-decoration: none;
}

.header-box .header-name span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("../assets/images/1.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 3px;
    right: 3px;
}

.main {
    padding: 19px 30px 0 30px;
    background: #F5F5F5;
    height: 700px;
}

.main .main-left {
    padding-right: 19px;
    overflow: hidden;
}

.main .main-left .search-top select {
    width: 206px;
    height: 42px;
    color: #555555;
    text-indent: 24px;
    border-radius: 4px;
    border: 1px solid #D8D8D8;
}

.main .main-left .search-top div {
    float: right;
}

.main .main-left .search-top div button {
    height: 40px;
    border: 1px solid #398BFB;
    font-size: 14px;
    border-radius: 6px;
}

.main .main-left .search-top div .btn1 {
    background: #398BFB;
    color: white;
    padding: 0 20px 0 20px;
    margin-right: 12px;
}

.main .main-left .search-top div .btn1:hover {
    background: white;
    color: #398BFB;
}

.main .main-left .search-top div .btn2 {
    background: white;
    color: #398BFB;
    padding: 0 27px 0 27px;
}

.main .main-left .search-top div .btn2:hover {
    background: #398BFB;
    color: white;
}

.main .main-left .search-bottom {
    height: 564px;
    margin-top: 22px;
    border: 1px solid #D8D8D8;
    border-radius: 8px;
    background: white;
}

.main .main-left .search-bottom .search-condition {
    margin-top: 42px;
    float: left;
    width: 20%;
    border-right: 1px solid #D8D8D8;
}

.main .main-left .search-bottom .search-condition ul {
    padding: 0 25px 35px 32px;
}

.main .main-left .search-bottom .search-condition ul li {
    margin-top: 10px;
    cursor: pointer;
}

.main .main-left .search-bottom .search-condition ul li input {
    width: 13px;
    height: 13px;
    border: 1px solid #888888;
    margin-top: 2px;
}

.main .main-left .search-bottom .search-condition ul li span {
    color: #398BFB;
    margin-left: 3px;
}

.main .main-left .search-bottom .search-condition ul .li-1 {
    margin-top: 0;
}

.main .main-left .search-bottom .condition-write {
    margin-top: 37px;
    width: 74.5%;
    float: right;
    padding-right: 30px;
}

.main .main-left .search-bottom .condition-write select {
    background: white;
}

.main .main-left .search-bottom .condition-write .write-top .div1 {
    height: 25px;
    width: 80%;
    margin-left: 20%;
}

.main .main-left .search-bottom .condition-write .write-top .div1 p {
    float: left;
    width: 24%;
    font-size: 16px;
    height: 25px;
    position: relative;
}

.main .main-left .search-bottom .condition-write .write-top .div1 p span {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 5px;
}

.main .main-left .search-bottom .condition-write .write-top .div1 p .sp1 {
    background: url("../assets/images/2.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-left .search-bottom .condition-write .write-top .div1 p .sp2 {
    background: url("../assets/images/3.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-left .search-bottom .condition-write .write-top .div1 p .sp3 {
    background: url("../assets/images/4.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-left .search-bottom .condition-write .write-top .div1 p .sp4 {
    background: url("../assets/images/5.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-left .search-bottom .condition-write .write-top .div1 p label {
    position: relative;
    bottom: 6px;
}

.main .main-left .search-bottom .condition-write .write-top .div {
    margin-top: 18px;
    height: 42px;
    line-height: 42px;
    width: 80%;
    margin-left: 20%;
    position: relative;
}

.main .main-left .search-bottom .condition-write .write-top .div input {
    width: 100px;
    height: 40px;
    border-radius: 2px;
    outline: none;
    border: 1px solid #D8D8D8;
    text-indent: 13px;
}

.main .main-left .search-bottom .condition-write .write-top .div .in2 {
    margin-left: 12px;
}

.main .main-left .search-bottom .condition-write .write-top .div p {
    display: inline-block;
    width: 100px;
    height: 40px;
    margin-left: 21px;
    position: absolute;
    left: -140px;
}

.main .main-left .search-bottom .condition-write .write-top .div p a {
    width: 29px;
    height: 29px;
    display: inline-block;
    background: #398BFB;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 24px;
    font-size: 30px;
    position: relative;
    top: 2px;
    text-decoration: none;
    cursor: pointer;
}

.main .main-left .search-bottom .condition-write .write-top .div p .a1 {
    margin-left: 32px;
    font-size: 36px;
    top: 4px;
}

.main .main-left .search-bottom .condition-write .write-top .div select {
    width: 100px;
    height: 40px;
    border: 1px solid #D8D8D8;
    text-indent: 13px;
    margin-left: 12px;
    color: #666666;
}

.main .main-left .search-bottom .condition-write .write-top .div .se3 {
    position: absolute;
    left: -140px;
}

.main .main-left .search-bottom .condition-write .write-bottom {
    margin-top: 53px;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div1 {
    position: relative;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div1 span {
    display: inline-block;
    width: 27px;
    height: 24px;
    background: url("../assets/images/6.png") no-repeat;
    background-size: 100% 100%;
    margin-right: 5px;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div1 label {
    position: relative;
    font-size: 16px;
    bottom: 4px;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div2 {
    margin-top: 17px;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div2 select {
    width: 280px;
    height: 40px;
    border-radius: 2px;
    text-indent: 12px;
    border: 1px solid #D8D8D8;
    color: #666666;
    ;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div3 {
    margin-top: 17px;
    width: 280px;
    /* display: none; */
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div3 button {
    width: 131px;
    height: 38px;
    border-radius: 6px;
    border: 1px solid #398BFB;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div3 #write-btn1 {
    background: #398BFB;
    color: white;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div3 #write-btn1:hover {
    background: white;
    color: #398BFB;
    transition: .3s;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div3 #write-btn2 {
    background: white;
    color: #398BFB;
    margin-left: 12px;
}

.main .main-left .search-bottom .condition-write .write-bottom .write-div3 #write-btn2:hover {
    background: #398BFB;
    color: white;
    transition: .3s;
}

.main .main-right {
    float: right;
    margin-top: 7px;
}

.main .main-right .right-search {
    width: 313px;
    height: 307px;
    background: url("../assets/images/bg-right1.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-right .right-save {
    margin-top: 24px;
    width: 313px;
    height: 290px;
    background: url("../assets/images/bg-right2.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-right div .div-font {
    padding: 39px 35px 51px 28px;
    text-align: center;
    position: relative;
}

.main .main-right .right-search .div-font span {
    display: inline-block;
    width: 23px;
    height: 20px;
    background: url("../assets/images/8.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-right div .div-font a {
    text-decoration: none;
    display: inline-block;
    position: relative;
    bottom: 3px;
    margin-left: 3px;
    color: #398BFB;
}

.main .main-right div .div-content {
    padding: 0 35px 0 28px;
    line-height: 25px;
    color: #666666;
}

.main .main-right div .div-content div {
    text-align: center;
    margin-top: 33px;
}

.main .main-right div .div-content div button {
    width: 130px;
    height: 40px;
    color: #398BFB;
    border: 1px solid #398BFB;
    border-radius: 6px;
    background: white;
}

.main .main-right div .div-content div button:hover {
    background: #398BFB;
    color: white;
    transition: .3s;
}

.main .main-right .right-save .div-font span {
    display: inline-block;
    width: 20px;
    height: 23px;
    background: url("../assets/images/7.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-right .right-save .div-font a {
    bottom: 5px;
}

input::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #666666;
}

:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #666666;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #666666;
}

input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #666666;
}

input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #666666;
}
</style>