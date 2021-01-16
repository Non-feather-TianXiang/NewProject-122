//背景线条
$(function () {
  // 粒子线条背景
  $(document).ready(function () {
    $('.layui-container').particleground({
      dotColor: 'yellow',
      lineColor: 'pink',
    });
  });
  //登录模块
  var form = layui.form;
  var layer = layui.layer;
  $('.search').submit(function (e) {
    e.preventDefault();
    var params = $(this).serialize();
    $.ajax({
      type: 'post',
      url: 'api/login',
      data: params,
      success: function (res) {
        layer.msg(res.message);
        if (res.status == 0) {
          localStorage.setItem('token', res.token);
          location.href = './index.html';
        } else {
          layer.msg(res.message);
        }
      },
    });
  });
});
