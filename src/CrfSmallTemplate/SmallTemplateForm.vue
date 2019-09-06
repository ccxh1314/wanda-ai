<template>
    <div class="part part3" id="part3">
        <div class="title">
            <span class="num">3</span>
            <span>.</span>
            <div class="content_editable">
                <div class="q_title" contenteditable="true">随访人员三高情况</div>
            </div>
        </div>
        <div class="table-box">
            <table>
                <tbody>
                <tr class="head">
                    <td class="left1"></td>
                    <td contenteditable="true">填空1</td>
                    <td contenteditable="true">填空2</td>
                </tr>
                <tr>
                    <td contenteditable="true">矩阵行1</td>
                    <td>
                        <input type="text">
                    </td>
                    <td>
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <td contenteditable="true">矩阵行2</td>
                    <td>
                        <input type="text">
                    </td>
                    <td>
                        <input type="text">
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="r-add" id="r-add"></div>
            <div class="b-add" id="b-add"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SmallTemplateForm"
    }
</script>

<style scoped>

</style>