<template>
 <div class="main">
        <div class="main-left">
            <div class="left-top">
                <img class="static-img1" src="../assets/images/fudong1_00000_iSpt.png" />
                <img class="static-img2" src="../assets/images/dui4.png" />
                <img class="static-img3" src="../assets/images/fudong2_00000_iSpt.png" />
                <img class="static-img4" src="../assets/images/dui6.png" />
                <img class="static-img5" src="../assets/images/paopao_00000_iSpt.png" />
            </div>
            <div class="left-center">
                <img class="active-img1" src="../assets/images/light_00000_iSpt.png" />
                <img class="active-img2" src="../assets/images/DNA_00000_iSpt.png" />
            </div>
            <div class="left-bottom">
                <img class="static-img6" src="../assets/images/dui1.png" />
                <img class="static-img7" src="../assets/images/dui2.png" />
                <img class="static-img8" src="../assets/images/dui10.png" />
                <img class="static-img9" src="../assets/images/dui9.png" />
                <img class="static-img10" src="../assets/images/dui8.png" />
            </div>
        </div>
        <div class="login-box">
            <ul>
                <li class="list1"><img src="../assets/images/login-img2.png" /></li>
                <li class="list2"><img src="../assets/images/login-img1.png" /></li>
                <li class="list3"><input type="text" placeholder="您的账号" v-model="username"/></li>
                <li class="list3 list4" type="text">
                    <input id="list-pwd" type="password" placeholder="密码" v-model="password"/>
                    <span id="list-img1"></span>
                    <span id="list-img2"></span>
                </li>
                <li class="list4">
                    <el-checkbox ref="checkbox" v-model="checked">记住密码</el-checkbox>
                    <span style="margin-left:100px;color:#f00;">{{message}}</span>
                </li>
                <li><button id="login" @click="login">登录</button></li>
            </ul>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "login",
        data(){
            return{
                username:'',
                password:'',
                message:'',
                checked:false
            }
        },
        mounted(){
            this.getCookie();
        
        $(function() {
            $("#list-img1").click(function() {
                $("#list-img2").css("display","block");
                $("#list-img1").css("display", "none");
                $("#list-pwd").attr("type", "text");
            });
            $("#list-img2").click(function() {
                $("#list-img1").css("display", "block");
                $("#list-img2").css("display", "none");
                $("#list-pwd").attr("type", "password");
            });

        });
    },
        methods:{
            login(){
                axios({
                    url:'http://10.1.192.118:9901/login/login',
                    method:'post',
                    params:{user:this.username,password:this.password}
                }).then(res => {
                    // console.log(res)
                    if(this.username == '' || this.password == ''){
                        alert("账号或密码不能为空")
                        return
                    }
                    if(res.data.token && res.data.tokenHead){
                        let user_token  = [{
                            "tokenHead":res.data.tokenHead,
                            "token":res.data.token
                        }]
                        localStorage.setItem("user",JSON.stringify(user_token))
                        this.message = "登录成功"
                            this.$router.push('/retrieval')
                        // setTimeout(function(){
                        // },1000)
                    }else{
                        this.message = res.data
                    }
                })

                if(this.checked){
                    this.setCookie(this.username,this.password,3)
                }else{
                    this.clearCookie()
                }
            },

            //设置cookie
            setCookie(username,password,exdays){
                let exdate = new Date();
                exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 100 * exdays);
               //拼接cookie
                window.document.cookie = 'userName=' + username + ';path=/;expires=' + exdate.toGMTString();
                window.document.cookie = 'userPwd=' + password + ';path=/;expires=' + exdate.toGMTString();
            },

            //读取cookie
            getCookie(){
                if(document.cookie.length > 0){
                    let arr = document.cookie.split('; ')
                    for(let i=0;i<arr.length;i++){
                            let arr2 = arr[i].split('=')
                            if(arr2[0] == 'userName'){
                                this.username = arr2[1]
                            }else if(arr2[0] == 'userPwd'){
                                this.password = arr2[1]
                            }
                    }
                }
                // console.log()
            },

            //清除cookie
            clearCookie(){
                this.setCookie('','',-1)
            }
            
        },
    }
</script>

<style scoped>
/* @import "../assets/css/login.css"; */
.main{
    background: url("../assets/images/login-bg.png") no-repeat;
    background-size: 100% 100%;
    position: fixed;
    width: 100%;
    height: 100%;
}
.main .main-left{
    width: 710px;
    height: 550px;
    float: left;
    position: relative;
    top: 10%;
    left: 80px;
}
.main .main-left .left-center,.left-top,.left-bottom{
    width: 100%;
    height: 100%;
}
.main .main-left .left-center{
    text-align: center;
    position: relative;
    top: 0;
}
.main .main-left .left-center .active-img2{
    width: 300px;
    height: 280px;
    position: absolute;
    z-index: 6;
    left: 215px;
    top: -30px;
}
.main .main-left .left-top{
    position: absolute;
    top: 0;
}
.main .main-left .left-top img{
    position: absolute;
}
.main .main-left .left-top .static-img1{
    top: 40px;
    left: 40px;
}
.main .main-left .left-top .static-img2{
    top: 108px;
    left: 152px;
}
.main .main-left .left-top .static-img3{
    top: 12px;
    right: 147px;
}
.main .main-left .left-top .static-img4{
    top: 154px;
    right: 146px;
}
.main .main-left .left-top .static-img5{
    top: 82px;
    right: 52px;
}
.main .main-left .left-bottom{
    position: absolute;
    bottom: 0;
}
.main .main-left .left-bottom img{
    position: absolute;
}
.main .main-left .left-bottom .static-img6{
    bottom: 164px;
    left: 40px;
}
.main .main-left .left-bottom .static-img7{
    bottom: 65px;
    left: 129px;
}
.main .main-left .left-bottom .static-img8{
    bottom: 14px;
    left: 241px;
}
.main .main-left .left-bottom .static-img9{
    bottom: 0;
    right: 295px;
}
.main .main-left .left-bottom .static-img10{
    bottom: 35px;
    right: 39px;
}
.main .login-box{
    float: right;
    width: 417px;
    height: 435px;
    background: #113E9E;
    border-radius: 4px;
    border-bottom: 1px solid #2A78BB;
    border-left: 1px solid #2A78BB;
    position: relative;
    z-index: 1;
    top: 20%;
    right: 120px;
}
.main .login-box ul{
    padding: 45px 50px 45px 50px;
}
.main .login-box ul li{
    position: relative;
    width: 100%;
}
.main .login-box ul .list1 img{
    width: 100%;
    height: 27px;
}
.main .login-box ul .list2 img{
    width: 100%;
    height: 30px;
    opacity: .6;
}
.main .login-box ul .list2{
    margin-top: 5px;
}
.main .login-box ul .list3{
    height: 60px;
    text-align: left;
    line-height: 60px;
    background: url("../assets/images/login-bg1.png") no-repeat;
    background-size: 100% 100%;
}
.main .login-box ul .list3 input{
    width: 313px;
    height: 48px;
    border: none;
    text-indent: 20px;
    background: none;
    color: white;
}
.main .login-box ul .list3 input::-webkit-input-placeholder{
    color: #45B1F6;
}
.main .login-box ul .list3 input::-ms-input-placeholder{
    color: #45B1F6;
}
.main .login-box ul .list3 input::-moz-placeholder{
    color: #45B1F6;
}
.main .login-box ul .list3 span{
    display: inline-block;
    width: 27px;
    height: 15px;
    position: absolute;
    top: 23px;
    right: 18px;
    cursor: pointer;
}
.main .login-box ul .list3 #list-img1{
    display: block;
    background: url("../assets/images/eye-close.png");
    background-size: 100% 100%;
}
.main .login-box ul .list3 #list-img2{
    display: none;
    background: url("../assets/images/eye-open.png");
    background-size: 100% 100%;
}
.main .login-box ul .list4{
    margin-top: 13px;
}
.main .login-box ul li i{
    display: inline-block;
    width:13px;
    height: 13px;
    background: #325A9B;
    border: 1px solid #15A6EE;
    position: relative;
    top: 2px;
    margin-left: 3px;
}
.main .login-box ul li .i-change{
    background: url("../assets/images/gou.png") no-repeat;
    background-size: 100% 100%;
}
.main .login-box ul li label{
    color: #15A6EE;
    margin-left: 5px;
}
.main .login-box ul li button{
    margin-top: 35px;
    height: 48px;
    width: 100%;
    border: 1px solid #2EEEF5;
    color: #2EEEF5;
    border-radius: 5px;
    background: #0C5AB6;
}
.main .login-box ul li button:hover{
    transition: .3s;
    color: #0C5AB6;
    background: #2EEEF5;
}



</style>