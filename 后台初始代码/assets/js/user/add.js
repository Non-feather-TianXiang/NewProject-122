var form = layui.form;

form.verify({
  same: function (value) {
    var uname = $('.layui-form input[name=password]').val();
    if (value !== uname) {
      return '两次输入的密码不一样';
    }
  },
});
//添加用户
$('.layui-form').submit(function (e) {
  e.preventDefault();
  var params = $(this).serialize();
  $.ajax({
    type: 'post',
    url: 'admin/users',
    data: params,
    success: function (res) {
      layer.msg(res.message);
    },
  });
});
