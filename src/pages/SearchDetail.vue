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
            <p>
                <input type="text" />
                <span><img src="images/blue-search.png"/><label>搜索</label></span>
            </p>
            <button class="btn1">高级检索</button>
        </div>
        <div class="main-bottom">
            <div class="search-result">
                <div class="result-left">
                    <span><i></i><label>全选所有</label></span>
                    <span class="sp2">全选本页</span>
                    <select>
                        <option>相关度</option>
                        <option>相关度</option>
                        <option>相关度</option>
                        <option>相关度</option>
                        <option>相关度</option>
                    </select>
                    <p>找到相关纪录 <i>2384</i> 条，<i>10</i> 条 / 页</p>
                </div>
                <div class="result-right">
                    <a class="a1" id="save-search">
                        <img src="images/result-1.png" />
                        <label>保存检索式</label>
                    </a>
                </div>
            </div>
            <div class="search-content">
                <div class="se-cloud">
                    <div class="con-left">
                        <div class="left-all">
                            <div class="con-left1 con-left-same">
                                <p><img src="images/result-2.png" /><label>全部来源</label></p>
                                <ul>
                                    <li><i class="bg-change"></i><span>病案首页主题报告</span></li>
                                    <li><i class="bg-change"></i><span>出院小结报告</span></li>
                                    <li><i class="bg-change"></i><span>实验室检验报告(门诊)</span></li>
                                    <li><i class="bg-change"></i><span>影像检验报告(门诊)</span></li>
                                    <li><i class="bg-change"></i><span>实验室检验报告(住院)</span></li>
                                    <li><i class="bg-change"></i><span>影像检验报告(住院）</span></li>
                                    <li><i class="bg-change"></i><span>手术明细报告</span></li>
                                    <li><i class="bg-change"></i><span>病程记录</span></li>
                                    <li><i class="bg-change"></i><span>其他</span></li>
                                </ul>
                            </div>
                            <div class="con-left2 con-left-same">
                                <p><img src="images/result-3.png" /><label>历史检索</label></p>
                                <div>白血病 and 血红蛋白[实验室检验报告：项目明细] and 年龄
                                    &lt;30岁</div>
                                        <div>餐后血糖 and 胰岛素抵抗</div>
                                        <div>白血病 and 血红蛋白[实验室检验报告：项目明细] and 年龄
                                            &lt;30岁</div>
                                                <div>餐后血糖 and 胰岛素抵抗</div>
                                        </div>
                                </div>
                            </div>
                            <div class="con-right">
                                <div class="right-all">
                                    <div class="con-cloud" id="scollbar">
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>1</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>2</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>3</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>4</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>5</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>6</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>7</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>8</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>9</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>10</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>11</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>12</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="cloud-mud">
                                            <div class="mud-1">
                                                <i class="bg-change"></i>
                                                <label>13</label>
                                                <span>00399917，崔xxx，52岁，内分泌科</span>
                                                <span>出院诊断：二型糖尿病，高血压三级，极高危</span>
                                            </div>
                                            <div class="mud-2">
                                                <p>患者中年男性，因“右侧肢体活动不利二十余年、加重伴反应迟钝十天“入院。当时查体： 神志清、反应迟钝、痴呆状。检体欠合作，口齿不清，BP100/70mmHg。双侧鼻唇沟基本对称， 口唇无紫绀，伸舌略向右侧偏。双肺呼吸音粗，未闻及明显啰音。心率65次/分，律齐， 各瓣膜听诊区未闻及病理性杂音。全服平软，无压痛，肝脾肋下未及。右侧肢体肌力0级， 肌张力明显增高，左侧肢体肌力、肌张力基本正常。双侧巴氏征（-），双下肢无水肿。
                                                </p>
                                                <div class="mud-2-1">
                                                    <span><label>病例生成时间 ：</label><i>2014/07/07</i></span>
                                                    <span><label>费用 ：</label><i>2388.00元</i></span>
                                                    <div>
                                                        <button class="btn2">病例全文</button>
                                                        <button class="btn2">实验室检验报告</button>
                                                        <button class="btn2">影像报告</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="con-page">
                                        <ul>
                                            <li><a href="#">首页</a></li>
                                            <li>
                                                <a href="#">
                                                    &lt;</a>
                                            </li>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li class="page-list"><a href="#">...</a></li>
                                            <li><a href="#">234</a></li>
                                            <li><a href="#">下一页></a></li>
                                            <li class="page-list"><a href="#">跳转到第</a></li>
                                            <li><input type="text" /></li>
                                            <li class="page-list"><a href="#">页</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div style="clear:both;"></div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {
    name:'searchDetail',
    data(){
        return{
            
        }
    }
}
</script>

<style scoped src="../assets/css/search-result.css"></style>
<style scoped src="../assets/css/top.css"></style>
<style scoped src="../assets/css/layer.css"></style>
<style scoped src="../assets/css/search-detail.css"></style>
<style scoped src="../assets/css/perfect-scrollbar.css"></style>