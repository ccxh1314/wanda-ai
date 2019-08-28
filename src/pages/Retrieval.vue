<template>
    <div class="retrieval">
         <div class="header-box">
            <div class="header-main">
                <div id="parallax">
                    <div class="layer" data-depth="0.4">
                        <div id="particles-js"></div>
                    </div>
                </div>
            </div>
        </div>
    <div class="main">
        <div class="top">
            <div class="top-img">
                <img class="imgs1" src="../assets/images/img.png" />
                <div class="top-div">
                    <span>王医生，欢迎您！</span>
                    <img src="../assets/images/1.png" />
                </div>
            </div>
            <div class="top-search">
                <div class="search-div1">
                    <span></span>
                </div>
                <div class="search-div2">
                    <p>
                        <input type="text" v-model="querystring"/>
                        <!-- <router-link></router-link> -->
                        <span id="common-search" @click="search">
                            <a></a>
                            <label>搜索</label>
                            <!-- <router-link tag="label" to='/searchResult'>搜索</router-link> -->
                        </span>
                    </p>
                    <!-- <label class="la1" id="high-search">高级检索</label> -->
                    <router-link to="/advanced" class="la1" id="high-search" style="text-decoration:none;">高级检索</router-link>
                </div>
                <div class="search-div3">
                    <p>
                        <span>
                            <el-checkbox ref="checkbox" v-model="checked1">全部</el-checkbox>
                        </span>
                        <span>
                            <el-checkbox ref="checkbox" v-model="checked2">影像检验报告(住院)</el-checkbox>
                        </span>
                        <span>
                            <el-checkbox ref="checkbox" v-model="checked3">实验室检验报告(住院)</el-checkbox>
                        </span>
                        <span>
                            <el-checkbox ref="checkbox" v-model="checked4">病程记录</el-checkbox>
                        </span>
                    </p>
                    <p>
                        <span>
                            <el-checkbox ref="checkbox" v-model="checked5">出院小结报告</el-checkbox>
                        </span>
                        <span>
                            <el-checkbox ref="checkbox" v-model="checked6">手术明细报告</el-checkbox>
                        </span>
                        <span>
                            <el-checkbox ref="checkbox" v-model="checked7">病案首页主题报告</el-checkbox>
                        </span>
                        <span>
                            <el-checkbox ref="checkbox" v-model="checked8">其他</el-checkbox>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="main-cloud">
            <div class="main-change">
                <p class="p p-font1 p-change1" id="record">
                    <a></a><span>检索记录</span></p>
                <p class="p p-font2 p-change2" id="save">
                    <a></a><span>已保存的检索条件</span></p>
            </div>
            <p class="ul-p1"></p>
            <div class="main-ul">
                <ul class="ul1">
                    <li>
                        <a href="#">
                            <span class="li-sp1"></span>
                            <label>白血病and血红蛋白[实验室检验报告or项目明细]and年龄&lt;30岁</label> 
                            <i></i>
                            <span class="li-sp2"></span>
                            <label>餐后血糖and胰岛素抵抗</label>
                        </a>
                    </li>
                    <li class="li-sp">
                        <a href="#">
                            <span class="li-sp1"></span>
                            <label>白血病and血红蛋白[实验室检验报告or项目明细]and年龄&lt;30岁</label>
                            <i></i>
                            <span class="li-sp2"></span>
                            <label>餐后血糖and胰岛素抵抗</label>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="li-sp1"></span>
                            <label>白血病and血红蛋白[实验室检验报告or项目明细]and年龄&lt;30岁</label>
                            <i></i>
                            <span class="li-sp2"></span>
                            <label>餐后血糖and胰岛素抵抗</label>
                        </a>
                    </li>
                    <li class="li-sp">
                        <a href="#">
                            <span class="li-sp1"></span>
                            <label>白血病and血红蛋白[实验室检验报告or项目明细]and年龄&lt;30岁</label>
                            <i></i>
                            <span class="li-sp2"></span>
                            <label>餐后血糖and胰岛素抵抗</label>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="li-sp1"></span>
                            <label>白血病and血红蛋白[实验室检验报告or项目明细]and年龄&lt;30岁</label>
                            <i></i>
                            <span class="li-sp2"></span>
                            <label>餐后血糖and胰岛素抵抗</label>
                        </a>
                    </li>
                    <li class="li-sp">
                        <a href="#">
                            <span class="li-sp1"></span>
                            <label>白血病and血红蛋白[实验室检验报告or项目明细]and年龄&lt;30岁</label>
                            <i></i>
                            <span class="li-sp2"></span>
                            <label>餐后血糖and胰岛素抵抗</label>
                        </a>
                    </li>
                </ul>
                <ul class="ul2">

                </ul>
            </div>
            <p class="ul-p2"></p>
        </div>
    </div>
    </div>
    
</template>

<script>
import $ from 'jquery';
export default {
    name:'retrieval',
    data(){
        return {
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            checked6:false,
            checked7:false,
            checked8:false,
            querystring:'',
            SearchData:[]
        }
    },
    methods:{
        search(){
            if(this.querystring == ""){
                    alert("请输入搜索字段")
                    return
            }
            axios({
                url:'http://10.1.192.118:9901/search/ptsearch',
                method:'post',
                data:{
                    page:1,
                    querystring:this.querystring,
                    filters:[]
                },
            }).then(res => {
                // console.log(res.data.results)
                this.SearchData = res.data;
                localStorage.setItem('searchresult',JSON.stringify(this.SearchData))
                // console.log(this.SearchData)
                if(res.status == 200){
                    this.$router.push({path:'/searchResult',query:this.SearchData})
                }

            })
        }
    },
    mounted(){
         $(function() {
        $(".main-change .p").click(function() {
            $(this).addClass("p-change1").removeClass("p-change2");
            $(this).siblings(".main-change .p").addClass("p-change2").removeClass("p-change1");
        });
        $("#record").click(function() {
            $(".ul2").css("display", "none");
            $(".ul1").css("display", "block");
        });
        $("#save").click(function() {
            $(".ul1").css("display", "none");
            $(".ul2").css("display", "block");
        });
    })
    }
}
</script>

<style scoped>
html {
    background: #EDF2F9;
}

span,
a {
    display: inline-block;
    text-decoration: none;
}

.header-box {
    position: absolute;
    height: 394px;
    width: 100%;
    overflow: hidden;
}

.header-box .header-main {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: url("../assets/images/bg-text.png") no-repeat;
    background-size: 100% 100%;
}

.header-box .header-main #parallax {
    width: 75%;
    position: absolute;
    right: 0;
}

.main {
    position: relative;
    z-index: 9;
    overflow: auto;
}

.main .top {
    padding: 0 30px 0 30px;
}

.main .top .top-img {
    position: relative;
    height: 60px;
    line-height: 60px;
}

.main .top .top-img .imgs1 {
    width: 270px;
    height: 46px;
    margin-top: 6px;
}

.main .top .top-img .top-div {
    width: 160px;
    float: right;
    color: white;
    font-size: 16px;
    position: relative;
}

.main .top .top-img .top-div img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 3px;
}

.main .top .top-search {
    position: relative;
    width: 960px;
    margin: 0 auto;
}

.main .top .top-search .search-div1 {
    text-align: center;
    position: relative;
    height: 100px;
    line-height: 100px;
}

.main .top .top-search .search-div1 span {
    line-height: 100px;
    position: relative;
    width: 250px;
    height: 26px;
    background: url("../assets/images/search-font.png") no-repeat;
    background-size: 100% 100%;
}

.main .top .top-search .search-div2 {
    position: relative;
}

.main .top .top-search .search-div2 p {
    width: 100%;
    border-radius: 6px;
    border: 1px solid #39B9FB;
    height: 36px;
}

.main .top .top-search .search-div2 p input {
    background: #104EBC;
    outline: none;
    height: 100%;
    width: 85%;
    border: none;
    text-indent: 10px;
    border-radius: 6px 0 0 6px;
    color: white;
}

.main .top .top-search .search-div2 p span {
    position: relative;
    background: #0D3577;
    float: right;
    height: 100%;
    width: 15%;
    color: #2EEEF5;
    line-height: 36px;
    text-align: center;
    border-radius: 0 6px 6px 0;
    cursor: pointer;
}

.main .top .top-search .search-div2 p span a {
    height: 20px;
    width: 20px;
    background: url("../assets/images/search.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 7px;
    right: 55%;
}

.main .top .top-search .search-div2 p span label {
    position: absolute;
    top: 0;
    cursor: pointer;
}

.main .top .top-search .search-div2 .la1 {
    position: absolute;
    top: 7px;
    right: -85px;
    font-size: 18px;
    color: #2EEEF5;
    cursor: pointer;
}

.main .top .top-search .search-div3 {
    margin: 0 auto;
    margin-top: 24px;
}

.main .top .top-search .search-div3 p {
    margin-top: 10px;
    margin-left: 5%;
}

.main .top .top-search .search-div3 p span {
    width: 23%;
}

.main .top .top-search .search-div3 p span i {
    display: inline-block;
    height: 11px;
    width: 11px;
    border: 1px solid #2EEEF5;
    background: #3858B3;
}

.main .top .top-search .search-div3 p span .i-change {
    background: url("../assets/images/gou.png") no-repeat;
    background-size: 100% 100%;
}

.main .top .top-search .search-div3 p span label {
    font-size: 16px;
    color: white;
    margin-left: 5px;
}

.main .main-cloud {
    width: 960px;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 30px;
}

.main .main-cloud .main-change {
    height: 47px;
    color: #2EEEF5;
    line-height: 47px;
}

.main .main-cloud .main-change p {
    float: left;
    height: 100%;
    text-align: center;
    position: relative;
    cursor: pointer;
}

.main .main-cloud .main-change .p-font1 {
    width: 174px;
}

.main .main-cloud .main-change .p-change1 {
    background: url("../assets/images/small-bg1.png") no-repeat;
    background-size: 100% 100%;
    color: #2EEEF5;
    z-index: 6;
}

.main .main-cloud .main-change .p-change2 {
    background: url("../assets/images/small-bg2.png") no-repeat;
    background-size: 100% 100%;
    color: #93EAFD;
}

.main .main-cloud .main-change .p-font1 a {
    background: url("../assets/images/search-img.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-cloud .main-change p a {
    width: 22px;
    height: 22px;
    position: relative;
    top: 6px;
}

.main .main-cloud .main-change .p-font2 {
    width: 227px;
    margin-left: -35px;
}

.main .main-cloud .main-change .p-font2 a {
    background: url("../assets/images/download.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 10px;
}

.main .main-cloud .main-change p span {
    font-size: 16px;
    margin-left: 5px;
}

.main .main-cloud .main-ul {
    border-left: 1px solid #2EEEF5;
    border-right: 1px solid #2EEEF5;
    background: white;
}

.main .main-cloud .ul-p1 {
    height: 35px;
    background: url("../assets/images/bg1_03.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: -1px;
}

.main .main-cloud .ul-p2 {
    width: 100%;
    height: 35px;
    background: url("../assets/images/bg2_02.png") no-repeat;
    background-size: 100% 100%;
    margin-top: -5px;
}

.main .main-cloud .main-ul .ul1 {
    width: 95%;
    margin: 0 auto;
}

.main .main-cloud .main-ul .ul1 a {
    text-decoration: none;
    width: 100%;
}

.main .main-cloud .main-ul .ul1 li {
    position: relative;
    margin-bottom: 5px;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    padding-top: 5px;
    cursor: pointer;
}

.main .main-cloud .main-ul .ul1 .li-sp {
    background: #F7FAFF;
}

.main .main-cloud .main-ul .ul1 .li-6 {
    margin-bottom: 0;
}

.main .main-cloud .main-ul .ul1 li label {
    color: #405076;
    margin-left: 7px;
    position: relative;
    bottom: 3px;
    cursor: pointer;
}

.main .main-cloud .main-ul .ul1 li span {
    width: 20px;
    height: 20px;
}

.main .main-cloud .main-ul .ul1 li .li-sp1 {
    background: url("../assets/images/label2.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-cloud .main-ul .ul1 li .li-sp2 {
    background: url("../assets/images/label2.png") no-repeat;
    background-size: 100% 100%;
}

.main .main-cloud .main-ul .ul1 li i {
    display: inline-block;
    width: 84px;
    height: 4px;
    background: url("../assets/images/yuan.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 45px;
    margin-right: 45px;
    position: relative;
    bottom: 8px;
}

.main .main-cloud .main-ul .ul2 {
    height: 295px;
    display: none;
}

</style>
