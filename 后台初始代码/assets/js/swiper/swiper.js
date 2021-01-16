var layer = layui.layer;
// 获取轮播图列表数据
function loadSwiper() {
    $.ajax({
        type: "get",
        url: "admin/swipers",
        success: function (res) {
            var tags = template("table-tpl", res);
            $(".layui-table tbody").html(tags);
        }
    })
}
loadSwiper();

//  上传轮播图
$("body").on("click", "#uploadSwiper", function () {
    $("#myfile").click();
});

$("body").on("change", "#myfile", function (e) {
    var files = e.target.files;
    var fd = new FormData();
    $.each(files, function (index, item) {
        fd.append('swipers', item);
    })
    $.ajax({
        type: "post",
        url: "admin/swipers",
        data: fd,
        processData: false,
        contentType: false,
        success: function (res) {
            if (res.status == 0) {
                layer.msg(res.message);
                loadSwiper();
            }
        }
    })
})

// 删除
$("body").on("click", ".delete", function (e) {
    var id = $(e.target).data('id');
    layer.confirm("确定要删除？", function (index) {
        $.ajax({
            type: "delete",
            url: "admin/swipers/" + id,
            success: function (res) {
                if (res.status == 0) {
                    layer.close(index);
                    loadSwiper();
                }
            }
        })
    })
})

// 切换状态
$("body").on("click", ".layui-badge", function (e) {
    console.log(11111);
    var status = $(e.target).data("status");
    var id = $(e.target).data("id");
    $.ajax({
        type: "put",
        url: "admin/swipers/" + id,
        data: {
            status: status
        },
        success: function (res) {
            if (res.status == 0) {
                layer.msg(res.message);
                loadSwiper();
            }
        }
    })
})
//     $.ajax({

//         success: function (res) {
//             if (res.status === 0) {
//                 // 切换成功
//                 layer.msg(res.message)
//                 loadSwiper();
//             }
//         }
//     })
// })