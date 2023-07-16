window.addEventListener('load', function () {
  var left = 0;
  var top = 0;
  function GetPosition(obj) {
    while (obj != document.body) {
      left = obj.offsetLeft;
      top = obj.offsetTop;
      obj = obj.offsetParent;
    }
  }

  var smapic = document.querySelector('.smapic');
  var bigpic = document.querySelector('.bigpic');

  var bul = bigpic.querySelector('ul');
  var ul = smapic.querySelector('ul');
  var lis = ul.querySelectorAll('li');
  var imgs = bul.querySelectorAll('img');
  var bigArea = document.querySelector('.bigArea');
  var zoom = document.querySelector('.zoom');

  bigpic.onmouseover = function () {
    bigArea.style.display = 'block';
    zoom.style.display = 'block';
  };
  bigpic.onmouseout = function () {
    bigArea.style.display = 'none';
    zoom.style.display = 'none';
  };

  bigpic.onmousemove = function (e) {
    GetPosition(bigpic);
    console.log(bigpic.offsetLeft);
    var e = e || window.event;
    //获取鼠标在盒子内的坐标
    //x=鼠标当前在bigpic内的横向偏移量
    //y=鼠标当前在bigpic内的纵向偏移量
    var x = e.clientX - left - 66;
    var y = e.clientY - top - 10 + window.pageYOffset;
    //遮罩中心点坐标
    let rx = x - zoom.offsetWidth / 2;
    let ry = y - zoom.offsetHeight / 2;
    //mask移动范围判定
    // 左侧偏移量为0,以left为基准故为0(left,top)
    if (rx < 0) {
      rx = 0;
    }
    //右边--bigpic.clicentWidth-zoom.clientWidth是遮罩层边框触碰bigpic边
    if (rx > bigpic.clientWidth - zoom.clientWidth) {
      rx = bigpic.clientWidth - zoom.clientWidth;
    }
    //上,top偏移量,以top为基准故为0(left,top)
    if (ry < 0) {
      ry = 0;
    }
    if (ry > bigpic.clientHeight - zoom.clientHeight) {
      ry = bigpic.clientHeight - zoom.clientHeight;
    }
    zoom.style.left = rx + 'px';
    zoom.style.top = ry + 'px';
    //放大图跟随功能,通过遮罩层坐标改变大图(背景图)对应的定位
    //注意:背景图定位移动与遮罩层移动方向相反
    bigArea.style.backgroundPosition = `-${2 * rx}px -${2 * ry}px`;
    // aul.style.left = `-${rx}px`;
    // aul.style.top = `-${ry}px`;
  };

  for (var i = 0; i < ul.children.length; i++) {
    lis[i].index = i;
    console.log(lis[i].index);
    lis[i].onmouseenter = function (i) {
      for (var i = 0; i < lis.length; i++) {
        imgs[i].style.display = 'none';
        //清空img
        lis[i].style.border = 'none';
        // aimg[i].style.display = 'none'; //清空img
      }
      //给点击的liss和对应的img设置样式
      this.className = 'current';
      lis[this.index].style.border = '1px solid orange';
      imgs[this.index].style.display = 'block';
      var imgurl = imgs[this.index].getAttribute('src');
      bigArea.style.backgroundImage = 'url(' + imgurl + ')';
      console.log(imgurl);
    };
  }

  this.document.getElementById('backtotop').addEventListener('click', function () {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  });
});

window.addEventListener('scroll', function () {
  var backtotop = this.document.querySelector('#backtotop');
  var xiding = this.document.querySelector('.xiding');
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 800) {
    backtotop.style.display = 'block';
  } else {
    backtotop.style.display = 'none';
  }
  if (scrollTop >= 1179) {
    xiding.style.display = 'block';
    xiding.style.position = 'fixed';
    xiding.style.top = '0';
    xiding.style.zIndex = '2';
  } else {
    xiding.style.display = 'none';
    xiding.style.position = 'static';
  }
});

window.addEventListener('load', function () {
  var jia = this.document.querySelector('.amount_inc');
  var jian = this.document.querySelector('.amount_red');
  var num = this.document.querySelector('#numinput');
  if (num.value == 1) {
    jian.style.color = 'red';
    jian.style.cursor = 'not-allowed';
  }
  jia.addEventListener('click', function () {
    num.value++;
    jian.style.color = 'black';
    jian.style.cursor = 'auto';
  });
  jian.addEventListener('click', function () {
    if (num.value > 1) {
      if (num.value == 2) {
        jian.style.color = 'red';
        jian.style.cursor = 'not-allowed';
      }
      num.value--;
    }
  });
  num.addEventListener('input', function () {
    if (num.value == 1) {
      jian.style.color = 'red';
      jian.style.cursor = 'not-allowed';
    } else {
      jian.style.color = 'black';
    }
  });
  jian.addEventListener('click', function () {});

  var canshu = document.querySelector('.ccanshu');
  var bigcaidan = document.querySelector('.bigcaidan');
  canshu.addEventListener('mouseenter', function () {
    bigcaidan.style.display = 'block';
  });
  canshu.addEventListener('mouseleave', function () {
    bigcaidan.style.display = 'none';
  });
  bigcaidan.addEventListener('mouseenter', function () {
    bigcaidan.style.display = 'block';
  });
  bigcaidan.addEventListener('mouseleave', function () {
    bigcaidan.style.display = 'none';
  });
  // var ccanshu = this.document.querySelector('.ccanshu');
  var xiangqing = this.document.querySelector('.xiangqing');
  var m = this.document.querySelector('.m');
  var main = this.document.querySelector('.main');
  var tianmaobody = this.document.querySelector('.tianmaobody');
  var pinglun = this.document.querySelector('#pinglun');
  var comment = this.document.querySelector('.comment');
  // var jianou = this.document.querySelector('.jiantou');
  var xdl = this.document.querySelector('#xdl');
  var xdr = this.document.querySelector('#xdr');

  var xdr_b = this.document.querySelector('.xdr_b');
  var xdl_b = this.document.querySelector('.xdl_b');
  var xq_bor = this.document.querySelector('.xq_bor');
  var pl_bor = this.document.querySelector('.pl_bor');
  xdl.addEventListener('click', function () {
    xdl_b.style.display = 'block';
    xdr_b.style.display = 'none';
    m.style.display = 'block';
    comment.style.display = 'none';
    main.style.height = 9560 + 'px';
    tianmaobody.style.height = 9700 + 'px';
  });
  xdr.addEventListener('click', function () {
    xdr_b.style.display = 'block';
    xdl_b.style.display = 'none';
    main.style.height = 2300 + 'px';
    tianmaobody.style.height = 2500 + 'px';
    m.style.display = 'none';
    comment.style.display = 'block';
  });
  pinglun.addEventListener('click', function () {
    xq_bor.style.display = 'none';
    pl_bor.style.display = 'block';
    pinglun.className = 'dazi';
    xiangqing.className = 'xiaozi';
    main.style.height = 2300 + 'px';
    tianmaobody.style.height = 2500 + 'px';
    m.style.display = 'none';
    comment.style.display = 'block';
  });
  xiangqing.addEventListener('click', function () {
    pinglun.className = 'xiaozi';
    xiangqing.className = 'dazi';
    xq_bor.style.display = 'block';
    pl_bor.style.display = 'none';
    m.style.display = 'block';
    comment.style.display = 'none';
    main.style.height = 9560 + 'px';
    tianmaobody.style.height = 9700 + 'px';
  });
});
