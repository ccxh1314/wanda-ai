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
        <div class="main-top">
            <div>
                <span><label>数据集名称：</label><i>数据集TEXTI</i></span>
                <span><label>病例数：</label><i>1232条</i></span>
            </div>
            <p>
                <button class="btn2">添加别组</button>
                <button class="btn1">确定分组</button>
            </p>
        </div>
        <div class="main-bottom">
            <div class="group-cloud">
                <div class="grouping">
                    <p class="group-in"><input type="text" placeholder="请输入组名称" /></p>
                    <div class="group-box group-box1">
                        <div class="box-p1 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img1.png"/>
                                    <i>入组条件</i>
                                </span>
                                <select>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1">
                                    <img src="images/grouping-img4.png"/>
                                    <i>纳入标准</i>
                                </span>
                                <span class="p1-2-2">
                                    <label>性　　别</label>
                                    <select>
                                        <option>大于等于</option>
                                        <option>大于等于</option>
                                        <option>大于等于</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img2.png"/>
                                    <img class="p1-1-img" src="images/grouping-img3.png"/>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="group-box group-box2">
                        <div class="box-p1 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img5.png"/>
                                    <i>排除条件</i>
                                </span>
                                <select>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1">
                                    <img src="images/grouping-img6.png"/>
                                    <i>排除标准</i>
                                </span>
                                <span class="p1-2-2">
                                    <label>性　　别</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img2.png"/>
                                    <img class="p1-1-img" src="images/grouping-img3.png"/>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group-cloud">
                <div class="grouping">
                    <p class="group-in"><input type="text" /></p>
                    <div class="group-box group-box1">
                        <div class="box-p1 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img1.png"/>
                                    <i>入组条件</i>
                                </span>
                                <select>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1">
                                    <img src="images/grouping-img4.png"/>
                                    <i>纳入标准</i>
                                </span>
                                <span class="p1-2-2">
                                    <label>性　　别</label>
                                    <select>
                                        <option>大于等于</option>
                                        <option>大于等于</option>
                                        <option>大于等于</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img2.png"/>
                                    <img class="p1-1-img" src="images/grouping-img7.png"/>
                                </span>
                                <select>
                                    <option>既 往 史</option>
                                    <option>既 往 史</option>
                                    <option>既 往 史</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1"></span>
                                <span class="p1-2-2">
                                    <label>既 往 史</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span></span>
                                <select>
                                    <option>检验检查</option>
                                    <option>检验检查</option>
                                    <option>检验检查</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1"></span>
                                <span class="p1-2-2">
                                    <label>检验检查</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="group-box group-box2">
                        <div class="box-p1 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img5.png"/>
                                    <i>排除条件</i>
                                </span>
                                <select>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1">
                                    <img src="images/grouping-img6.png"/>
                                    <i>排除标准</i>
                                </span>
                                <span class="p1-2-2">
                                    <label>性　　别</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img2.png"/>
                                    <img class="p1-1-img" src="images/grouping-img3.png"/>
                                </span>
                                <select>
                                    <option>既 往 史</option>
                                    <option>既 往 史</option>
                                    <option>既 往 史</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1"></span>
                                <span class="p1-2-2">
                                    <label>既 往 史</label>
                                    <select>
                                        <option>不 包 含</option>
                                        <option>不 包 含</option>
                                        <option>不 包 含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span></span>
                                <select>
                                    <option>检验检查</option>
                                    <option>检验检查</option>
                                    <option>检验检查</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1"></span>
                                <span class="p1-2-2">
                                    <label>检验检查</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group-cloud">
                <div class="grouping">
                    <p class="group-in"><input type="text" /></p>
                    <div class="group-box group-box1">
                        <div class="box-p1 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img1.png"/>
                                    <i>入组条件</i>
                                </span>
                                <select>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1">
                                    <img src="images/grouping-img4.png"/>
                                    <i>纳入标准</i>
                                </span>
                                <span class="p1-2-2">
                                    <label>性　　别</label>
                                    <select>
                                        <option>大于等于</option>
                                        <option>大于等于</option>
                                        <option>大于等于</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img2.png"/>
                                    <img class="p1-1-img" src="images/grouping-img3.png"/>
                                </span>
                                <select>
                                    <option>既 往 史</option>
                                    <option>既 往 史</option>
                                    <option>既 往 史</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1"></span>
                                <span class="p1-2-2">
                                    <label>既 往 史</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="group-box group-box2">
                        <div class="box-p1 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img5.png"/>
                                    <i>排除条件</i>
                                </span>
                                <select>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                    <option>性　　别</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1">
                                    <img src="images/grouping-img6.png"/>
                                    <i>排除标准</i>
                                </span>
                                <span class="p1-2-2">
                                    <label>性　　别</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span>
                                    <img src="images/grouping-img2.png"/>
                                    <img class="p1-1-img" src="images/grouping-img3.png"/>
                                </span>
                                <select>
                                    <option>既 往 史</option>
                                    <option>既 往 史</option>
                                    <option>既 往 史</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1"></span>
                                <span class="p1-2-2">
                                    <label>既 往 史</label>
                                    <select>
                                        <option>不 包 含</option>
                                        <option>不 包 含</option>
                                        <option>不 包 含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span></span>
                                <select>
                                    <option>检验检查</option>
                                    <option>检验检查</option>
                                    <option>检验检查</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1"></span>
                                <span class="p1-2-2">
                                    <label>检验检查</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                        <div class="box-p2 box-p">
                            <p class="box-p1-1">
                                <span></span>
                                <select>
                                    <option>检验检查</option>
                                    <option>检验检查</option>
                                    <option>检验检查</option>
                                </select>
                            </p>
                            <p class="box-p1-2">
                                <span class="p1-2-1"></span>
                                <span class="p1-2-2">
                                    <label>检验检查</label>
                                    <select>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                        <option>包　　含</option>
                                    </select>
                                    <input type="text"/>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name:'grouping',
    data(){
        return{
            
        }
    },
}
</script>

<style scoped src="../assets/css/top.css"></style>
<style scoped src="../assets/css/default-grouping.css"></style>