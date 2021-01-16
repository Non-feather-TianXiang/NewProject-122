var layer = layui.layer;
// 评论功能

function loadCommment() {
    $.ajax({
        type: 'get',
        url: 'admin/comments',
        success: function (res) {
            var tags = template('table-tpl', res)
            $('.layui-table tbody').html(tags)
        }
    })
}
loadCommment();
template.defaults.imports.formatDate = function (date) {
    date = new Date(date)
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return year + '-' + month + '-' + day
}

$(".layui-table tbody").on("click", ".delete", function (e) {
    var id = $(e.target).data("id");
    layer.confirm('确认要删除吗？', function (index) {
        $.ajax({
            type: 'delete',
            url: 'admin/comments/' + id,
            success: function (res) {
                if (res.target == 0) {
                    layer.close(index)
                    loadCommment();
                }
            }
        })
    })
})