var line = location.href.toLowerCase()
if(location.href.indexOf("mnmh")!=-1){
    line = line.replace('.shop','.shop:433')
    location.href=line
}
// $('.moreLoading').show()
var _develope = '佛Dark更衣室';
var _developerId = '6379';
var winw = $(window).width();
var winh = $(window).height();
$('head').append(`<meta name="viewport"
content="width=device-width,user-scalable=no,inital-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">`)
var contact = [
  {
    name: "博客园",
    link: ""
  },
  {
    name: "BiliBili",
    link: ""
  },
]
var LeftNews = [
  {
    name: "1",
    link: "",
    img: "static/picture/01.jpg"
  }
  ,
  {
    name: "2",
    link: "",
    img: "static/picture/02.jpg"
  }
  ,
  {
    name: "3",
    link: "",
    img: "static/picture/03.jpg"
  }
]
var NewsInfo = [
  {
    title: "摆烂"
    , text: `<p style="text-indent: 2em;">
    吃饭</p>`
  }
]
var Project = [
  {
    name: "4"
    , link: ""
    , img: "static/picture/01.jpg"
    , Ct: "2020年3月2日"
    , Db: null
    , List: [{
      name: "5"
      , text: ""
    }
    ]
  }
  ,
  {
    name: "6",
    link: "",
    Ct: "2020年6月2日"
    , img: "static/picture/02.jpg"
    , List: [
      {
        name: "7"
        , text: ""
      }
      , {
        name: "8"
        , text: ""
      }
      , {
        name: "9"
        , text: ""
      }
    ]
  }
  ,
  {
    name: "11",
    link: "",
    Ct: "2022年8月4日"
    , img: "static/picture/03.jpg"
    , List: [
      {
        name: "13"
        , text: ""
      }
      , {
        name: "14"
        , text: ""
      }
      , {
        name: "15"
        , text: "asp.net"
      }
    ]
  }
]
var MyInfo = [
  "G/XXXX年X月XX日出生"
  , "熟悉asp.net"
  , "前端技术:bootstrap,vue,jquery,ajax"
  , "熟悉springboots,python爬虫等技术"
  , "个人有点:学习能力强,能快速学习新的技术和熟悉业务逻辑,逻辑清晰,能看懂英文文档"
]
$.each(MyInfo, function (name, val) {
  var html = ` <font style="vertical-align: inherit;">
    <font style="vertical-align: inherit ;">${val}。</font>
  </font><br>`
  $('.profile_add>p').append(html)
})

//载入新闻栏目
$.each(NewsInfo, function (name, val) {
  var html = `<dt class=""><p class="date"><span class="year" _msthash="937183" _msttexthash="21892">${new Date().getFullYear()}</span><span class="md" _msthash="640224" _msttexthash="29224">${new Date().toLocaleDateString().split('/')[1]}.${new Date().toLocaleDateString().split('/')[2]}</span></p><div class="title"><p _msthash="892658" _msttexthash="493428832">${val.title}</p></div></dt>`
  html += `<dd id="540737123" class="txt">
  ${val.text}
  </dd>`
  $('.info_add').append(html)
})
//绑定方法
$('.title>p').click(function () {
  var a = $(this).parents('dt').next()
  if (code.IsShow(a)) {
    $(a).slideUp(300)
  } else {
    $(a).slideDown(300)

  }
})
//载入项目
$.each(Project, function (name, val) {
  var html = $(`  <div class="disco_container">
<p class="disco_description"></p>
<div class="disco_area">
  <div class="img-area">
    <!-- jacket content start -->
    <div class="img">
      <img src="${val.img}" alt="Naked">
    </div>
  </div>
  <div class="detail-area">
    <h3>「${val.name}」</h3>
    <p class="subtitle">${_develope}</p>
    <p class="subtitle">2022.8.4</p>
    <table class="song-table">
      <caption>技术目录</caption>
      <tbody>
      </tbody>
    </table>
    <!-- song table content end -->
  </div>
  <div class="disco_link">
    <div class="link">
      <a href="javascript:;" target="_blank">more</a>
    </div>
  </div>

</div>
</div>`)
  $.each(Project[name].List, function (name, val) {
    html.find("tbody").append(`
  <tr>
            <th>C${name + 1}</th>
            <td>
              <dl>
                <dt>${val.name}</dt>
                <dd>${val.text}</dd>
              </dl>
            </td>
          </tr>
  `)
  })
  $('#discography').append(html)
})

//加载导航栏
$.each(contact, function (name, val) {
  $('.line_0' + (name + 1) + ">a").attr('href', val.link).text(val.name)
})
//加载右侧资讯
$.each(LeftNews, function (name, val) {
  let html =
    `<div class="${name != 0 ? "bnr_0" + (name + 1) : "bnr"}">
  <img src="${val.img}" alt="${val.name}" class="a-bnr-03">
  <a href="${val.link}" target="_blank"></a>
</div>`
  $('#dh').append(html)
})
var loaderFrame = 0;
var loaderTimer;
function loadingHD() {
  loaderTimer = setInterval(function () {
    loaderFrame++;
    if (loaderFrame >= 10) {
      loaderFrame = 0;
    }
    $('.moreLoading').find('img').css('margin-left', -30 * loaderFrame);
  }, 10);
}

$(function () {
  new loadProfile();
  loadingHD();
});

var loadProfile = function () {

  var init = function () {
    $('.profile .moreLoading').css({
      display: 'none'
    });
  }

  init();
};



var infonow = 0;
var infonum = 4;
var infoLoadFlfg = true;

//information
var ReadObj;
var Information = (function () {
  function Information() {
    var loadedObj = {};
    var date;
    var _totalCount;

    $('#moreTxt').on('click', function () {
      getMoreInfo();
    });

    var init = function () {
      getMoreInfo();
    }

    var js = function () {
      $('.info_add dt').off('click');
      $('.info_add dt').on('click', function () {
        $(this).toggleClass('info_open');
        $(this).next('dd').stop().slideToggle(400);
      });
    }

    var getMoreInfo = function () {
      js();
    }
    init();
  }
  return Information;
})();

function callback(_obj) {
  ReadObj = _obj;
}

var medianow = 0;
var medianum = 4;



$(function () {
  $('.wrapper').addClass('load');
  $('.menu_btn').on('click', function () {
    $(this).toggleClass('open');
    $('.nav_wrap').toggleClass('open');
    $('.menu_back').fadeToggle(1);
  });
  $('.menu_back').on('click', function () {
    $('.menu_btn').toggleClass('open');
    $('.nav_wrap').toggleClass('open');
    $('.menu_back').fadeToggle(1);
  });

  $('.nav [data-scroll],.scroll_icon[data-scroll]').on('click', function () {
    $('.menu_btn').toggleClass('open');
    $('.nav_wrap').toggleClass('open');
    $('.menu_back').fadeToggle(1);
    var target = $('#' + $(this).attr('data-scroll'));
    if (!target.length) return;
    if (winw > 750) {
      var targetY = target.offset().top - 154;
      $('html,body').animate({
        scrollTop: targetY
      }, 600, 'swing');
    } else {
      var targetY = target.offset().top;
      $('html,body').animate({
        scrollTop: targetY
      }, 600, 'swing');
    }
  });
  $('.pagetop').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 800, 'swing');
  });
});

$(window).on('scroll load', function () {
  nav_change();
  nav_fix();
});

var ste;
var array = [];
$('section[data-scroll]').each(function () {
  array.push($(this).attr('id'));
});

function nav_change() {
  ste = $(window).scrollTop();
  for (i = 0; i < array.length; i++) {
    if (array.length - 2 >= i) {
      if ($('#' + array[i]).offset().top - 100 <= ste && $('#' + array[i + 1]).offset().top - 100 > ste) { }
    } else {
      if ($('#' + array[i]).offset().top - 100 <= ste) { }
    }
  }
}

function nav_fix() {
  winh = $(window).height();
  ste = $(window).scrollTop();
  if (winh - 154 <= ste) {
    $('.nav_wrap').addClass('fix');
  } else {
    $('.nav_wrap').removeClass('fix');
    if (10 < ste) {
      $('.nav_wrap').removeClass('in').addClass('out');
    } else {
      $('.nav_wrap').addClass('in');
    }
  }
  if (winh / 2 <= ste) {
    $('.nav_wrap').removeClass('out');
  }
}

var ScrollBtn = function () {
  $('.scroll_icon').on('click', function () {
    ste = $(window).scrollTop();
    var scrollElem;
    var target;
    if (winw > 750) {
      target = $('.js-information');
      scrollElem = target.offset().top - 154;
      $('html,body').animate({
        scrollTop: scrollElem
      }, 600, 'swing');
    } else {
      target = $('.js-top_banner');
      scrollElem = target.offset().top;
      $('html,body').animate({
        scrollTop: scrollElem
      }, 600, 'swing');
    }

  });
};
ScrollBtn();

var GetScrollEvent = function () {

  $(window).on('scroll load', function () {
    ste = $(window).scrollTop();
    if (ste >= 50) {
      $('.js-bg').addClass('is-scrolled');
    } else {
      $('.js-bg').removeClass('is-scrolled');
    }
  });
};
GetScrollEvent();

$(window).on('load', function () {
  $('.wrapper_container').addClass('loaded');
});
$(window).on('load resize', function () {
  $('.js-top').attr('width', winw);
  $('.js-img').attr('width', winw);
  $('.js-top').attr('height', winh);
  $('.js-img').attr('height', winh);
});

var code = {
  IsShow: function (a) {
    var R = false;
    if ($(a).css('display') != 'none') {
      R = true
    }
    return R;
  }
}
$('section').each(function(){
  var that=$(this)
  setInterval(function () {
    var el = that
    var Isactive = el.hasClass('active')
    if (isLook(el.find('h2'))) {
      if (!Isactive) {
        el.addClass('active')
      }
    } else {
      if (Isactive) {
        el.removeClass('active')
      }
    }
  }, 10)

})
//active
function isLook(el) {
  if(el.length==0)
    return false;
  var a = el.offset().top;
  if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) 
    return true
}
