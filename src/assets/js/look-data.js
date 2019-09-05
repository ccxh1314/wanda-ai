$(function() {
    $("#scrollbar").perfectScrollbar();
    $("#scroll-con").perfectScrollbar();
    $("#scollbar").perfectScrollbar();
    $("#scollbar-fil1").perfectScrollbar();
    $("#scollbar-fil2").perfectScrollbar();
    //打勾背景
    $(".div-cloud .div-header ul li").click(function() {
        $(this).children("i").toggleClass("i-change");
        $(this).children("span").toggleClass("span-change");
    });
    $(".bottom-cloud .select-bottom ul li").click(function() {
        $(this).children("i").toggleClass("i-change");
        $(this).children("span").toggleClass("span-change");
    });
    $(".div-change .div-change1 ul li").click(function() {
        $(this).children("i").toggleClass("i-change");
        $(this).children("span").toggleClass("span-change");
        $(this).children("label").toggleClass("label-change");
    });
    //排序的弹出框
    $("#sort-font").click(function() {
        layer.open({
            type: 1,
            title: false,
            area: ['860', '510'],
            closeBtn: false, //不显示关闭按钮
            anim: 2,
            content: $(".sort-font"),
            success: function() {
                $(".result-center #sort-font label").addClass("label-change");
            }
        });
    });
    //筛选弹框
    $("#fil-font").click(function() {
        layer.open({
            type: 1,
            title: false,
            area: ['680', '540'],
            closeBtn: false, //不显示关闭按钮
            anim: 2,
            content: $(".alert-box2"),
            success: function() {
                $(".result-center #fil-font label").addClass("label-change");
            }
        });
    });
    //去重弹出框
    $("#remove-font").click(function() {
        layer.open({
            type: 1,
            title: false,
            area: ['680', '540'],
            closeBtn: false, //不显示关闭按钮
            anim: 2,
            content: $(".delete"),
            success: function() {
                $(".result-center #remove-font label").addClass("label-change");
            }
        });
    });
    //分组弹框
    $("#group-font label").click(function() {
        $(".result-center a p").toggleClass("p-dis");
    });
    //条件分组与随机分组change之后的弹框
    $("#group-font p select").change(function() {
        if ($(this).find("option:selected")) {
            layer.open({
                type: 1,
                title: false,
                area: ['680', '516'],
                closeBtn: false, //不显示关闭按钮
                anim: 2,
                offset: ['50px', '20px'],
                content: $(".con-grouping"),
                success: function() {
                    $(".result-center #group-font label").addClass("label-change");
                }
            });
        }
    });
    //change之后弹框里面是否打乱效果的背景切换
    $(".con-ratio div i").click(function() {
        $(this).toggleClass("i-change");
    });
    //关闭弹框
    $(".close-img,#btn1,#sort-btn1,#fil-btn1").on("click", function() {
        layer.closeAll();
        $(".result-center a label").removeClass("label-change");
    });
});