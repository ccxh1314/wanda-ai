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
                        this.$message.error('账号名或密码不能为空');
                        return
                    }
                    if(res.data.token && res.data.tokenHead){
                        let user_token  = [{
                            "tokenHead":res.data.tokenHead,
                            "token":res.data.token
                        }]
                        localStorage.setItem("user",JSON.stringify(user_token))
                        this.$message({
                            message: '登录成功',
                            type: 'success',
                            duration:1000
                        });
                        setTimeout(()=>{
                            this.$router.push('/retrieval')
                        },1000)
                    }else{
                        this.$message.error(res.data) 
                    }
                }).catch(err => {
                    // console.log(err)
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

<style scoped src="../assets/css/login.css"></style>
