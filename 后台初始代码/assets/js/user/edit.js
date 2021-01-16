// 编辑用户信息
var form = layui.form;
var layer = layui.layer;
// 先获取用户id
let id = new URLSearchParams(location.search).get('id');
$.ajax({
  type: 'get',
  url: 'admin/users/' + id,
  success: function (res) {
    if (res.status == 0) {
      form.val('editForm', res.data);
    } else {
      layer.msg(res.message);
    }
  },
});
//提交注册事件
$('.layui-form').submit(function (e) {
  e.preventDefault();
  var params = $(this).serialize();
  $.ajax({
    type: 'put',
    url: 'admin/users',
    data: params,
    success: function (res) {
      layer.msg(res.message);
      if (res.status == 0) {
        location.href = './user.html';
      } else {
        layer.msg(res.message);
      }
    },
  });
});
