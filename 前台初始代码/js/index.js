layui.use('carousel', function () {



    var carousel = layui.carousel;

    function jiazai() {
        $.ajax({
            type: 'get',
            url: 'http://localhost:8888/api/swipers',
            success: function (res) {
                if (res.status === 0) {
                    var arr = [];
                    res.data.forEach(function (item) {
                        arr.push(
                            `
                <li class="img-effect">
                  <a href="javascript:;">
                    <img src="${'http://localhost:8888/uploads/' + item.swiperimg}" alt="">
                  </a>
                </li>       `
                        )

                    });
                    $('#kr_carousel ul').html(arr.join(''))
                    carousel.render({
                        elem: '#kr_carousel',
                        width: 720,
                        height: 300,
                        interval: 3000
                    })
                }
            }
        })
    }
    jiazai()


});
// 友
function youqing() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8888/api/links',
        success: function (res) {
            if (res.status === 0) {
                var arr = ['<dt>合作伙伴</dt>']
                res.data.forEach(function (item) {
                    arr.push(`
        <dd>
          <a href="javascript:;">
            <img src="${'http://localhost:8888/uploads/' + item.linkicon}" alt="${item.linkname}">
          </a>
        </dd>
      `)
                })
                $('.kr_collaborator').html(arr.join(''))
            }
        }
    })
}

youqing();