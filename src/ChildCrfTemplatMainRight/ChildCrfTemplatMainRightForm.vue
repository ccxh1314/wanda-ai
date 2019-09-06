<template>
    <div style="background-color: white">
        <!--引用表单模板 start  -->
        <div class="content content1">
            <!--search top start-->
            <div class="search-top-box">

                <div class="form-item">
                    <label class="form-label">请输入表单名称关键字</label>
                    <div class="form-inline">
                        <input class="ui-input-text" type="text">
                    </div>
                    <a class="button button-primary" href="javascript:void(0);"><i class="fa fa-search"></i>查 询</a>
                </div>

            </div>
            <!--search top end-->
            <!-- content start-->
            <div class="container">
                <aside class="ui-table-box">
                    <table class="ui-table-data">
                        <thead>
                        <tr>
                            <th width="30"></th>
                            <th width="40%">表单名称</th>
                            <th class="text-center">创建时间</th>
                            <th class="text-center">题目数</th>
                            <th class="text-center">创建用户</th>
                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>

                            <td>01</td>
                            <td>入组信息表</td>
                            <td class="text-center">2018-06-06</td>
                            <td class="text-center">20</td>
                            <td class="text-center">xxyyzzz</td>
                            <td class="text-center">
                                <a class="tool-a" href="javascript:void(0);"><i class="fa fa-edit"></i>编辑</a>
                                <a class="tool-a" href="javascript:void(0);"><i
                                        class="fa fa-check-square-o"></i>使用</a>
                            </td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>人口学信息模板</td>
                            <td class="text-center">2018-06-06</td>
                            <td class="text-center">20</td>
                            <td class="text-center">xxyyzzz</td>
                            <td class="text-center">
                                <a class="tool-a" href="javascript:void(0);"><i class="fa fa-edit"></i>编辑</a>
                                <a class="tool-a" href="javascript:void(0);"><i
                                        class="fa fa-check-square-o"></i>使用</a>
                            </td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>现病史模板</td>
                            <td class="text-center">2018-06-06</td>
                            <td class="text-center">20</td>
                            <td class="text-center">xxyyzzz</td>
                            <td class="text-center">
                                <a class="tool-a" href="javascript:void(0);"><i class="fa fa-edit"></i>编辑</a>
                                <a class="tool-a" href="javascript:void(0);"><i
                                        class="fa fa-check-square-o"></i>使用</a>
                            </td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>体格检查模板</td>
                            <td class="text-center">2018-06-06</td>
                            <td class="text-center">20</td>
                            <td class="text-center">xxyyzzz</td>
                            <td class="text-center">
                                <a class="tool-a" href="javascript:void(0);"><i class="fa fa-edit"></i>编辑</a>
                                <a class="tool-a" href="javascript:void(0);"><i
                                        class="fa fa-check-square-o"></i>使用</a>
                            </td>
                        </tr>
                        <tr>
                            <td>05</td>
                            <td>治疗及用药情况模板</td>
                            <td class="text-center">2018-06-06</td>
                            <td class="text-center">20</td>
                            <td class="text-center">xxyyzzz</td>
                            <td class="text-center">
                                <a class="tool-a" href="javascript:void(0);"><i class="fa fa-edit"></i>编辑</a>
                                <a class="tool-a" href="javascript:void(0);"><i
                                        class="fa fa-check-square-o"></i>使用</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="ui-page-sort">
                        <div class="left-tool"><span class="span-state">第1页／共3页</span></div>
                        <div class="right-tool">
                            <span class="span-setting">
                                每页条数
                                <select class="select-text">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>25</option>
                                </select>
                            </span>

                            <span class="span-number">
                                转到
                                <input class="input-text" type="text" />
                                <a class="go-btn" href="">GO</a>
                            </span>

                            <span class="span-tool">
                                <a class="page-a" href="javascript:void(0);">首页</a>
                                <a class="page-a" href="javascript:void(0);">下一页</a>
                                <a class="page-a" href="javascript:void(0);">末页</a>
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
            <!-- content  end-->
        </div>
        <!--引用表单模板 end  -->
    </div>
</template>

<script>
    export default {
        name: "ChildCrfTemplatMainRightForm"
    }
</script>

<style scoped>

</style>