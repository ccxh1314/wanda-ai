$(function() {
    //选中table标签里面的CheckBox框后 tr标签的背景颜色改变
    $(".result-left span i").click(function() {
        $(this).toggleClass("i-change").siblings().toggleClass("label-change");
    });
    $("table tr td i").click(function() {
        $(this).toggleClass("i-change");
        $(this).parent().parent("tr").toggleClass("tr-change");
    });
    const demo = document.querySelector("#scollbar");
    const ps = new PerfectScrollbar(demo);
    //添加至数据集的弹出框
    $("#add-data").click(function() {
        $(".alert-box1").css("display", "block");
        $(".result-right .a2").addClass("a-change");
    });
    $(".close-img").click(function() {
        $(".alert-box1").css("display", "none");
        $(".alert-box2").css("display", "none");
        $(".result-right .a2").removeClass("a-change");
    });
    //确定创建的弹出框
    $("#btn-sure").click(function() {
        $(".alert-box2").css("display", "block");
        $(".alert-box1").css("display", "none");
        $(".result-right .a2").addClass("a-change");
    });
    //保存检索式的弹出框
    $("#save-search").click(function() {
        $(".alert-box3").css("display", "block");
        $(".result-right .a1").addClass("a-change");
    });
    $(".alert-box3 .div2 button").click(function() {
        $(".alert-box3").css("display", "none");
        $(".result-right .a1").removeClass("a-change");
    });
})