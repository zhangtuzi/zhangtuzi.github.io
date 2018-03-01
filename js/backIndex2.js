$('.renovationTWDiv').attr('data-adArray','{ad1,ad2,ad3');
var adArray=$('.renovationTWDiv').attr('data-adArray').split(',');
$('.mobileNumber_div3').eq(0).hide();

// 联通精选广告模板初始化只加载套餐类型
$('.ltjxLeft .rqtjMokuai .CardMbUl>li').hide();
$('.ltjxLeft .rqtjMokuai .CardMbUl>li').each(function(){
  var this_type=$(this).attr('data-type');
  if(this_type=='taocan'){
    $(this).show();
  }
})

// 初始化时靓号专区判断此时靓号类型数量，如果数量为3个，则增加按钮隐藏
if($('.mobileNumber_ul1>li').length>2){
  $('.mobileNumberUl1Ad').hide();
}

// 左侧模块选择内添加滚动条
jsScroll(document.getElementById('jcMubanDiv'), 5, 'divScrollBar');
jsScroll(document.getElementById('Add_MubanDiv'), 5, 'divScrollBar1');
jsScroll(document.getElementById('Add_MubanDiv1'), 5, 'divScrollBar2');
jsScroll(document.getElementById('jcMubanDiv1'), 5, 'divScrollBar3');
jsScroll(document.getElementById('Add_MubanDiv2'), 5, 'divScrollBar4');
jsScroll(document.getElementById('Add_MubanDiv3'), 5, 'divScrollBar5');
jsScroll(document.getElementById('Add_MubanDiv4'), 5, 'divScrollBar6');
jsScroll(document.getElementById('jcMubanDiv2'), 5, 'divScrollBar7');
jsScroll(document.getElementById('jcMubanDiv3'), 5, 'divScrollBar8');
jsScroll(document.getElementById('jcMubanDiv4'), 5, 'divScrollBar9');
jsScroll(document.getElementById('jcMubanDiv5'), 5, 'divScrollBar10');
jsScroll(document.getElementById('jcMubanDiv6'), 5, 'divScrollBar11');
jsScroll(document.getElementById('Add_MubanDiv5'), 5, 'divScrollBar13');
// $('#Add_MubanDiv1,.divScrollBar2').css('display','none');
$('#Add_MubanDiv3,.divScrollBar5').css('display','none');
$('.LeftMuban').each(function(){
  $(this).children().find('.scrollDiv').css('display','none').eq(0).css('display','block');
})
window.onload=function(){
  var winLeft=$(window).scrollLeft();
  var winTop=$(window).scrollTop();
  //initalADlist();
  if(winLeft>0){
    if($('.LeftMuban').hasClass('mbyc')){
      $('.nav_indicate_div').css('left',''+(60-winLeft)+'px');
    }else{
      $('.nav_indicate_div').css('left',''+(335-winLeft)+'px');
    }

  }
  if(winTop<325){
    $('.nav_indicate_div').css('top',''+(300-winTop)+'px');
  }
}
$(window).scroll(function(){
  var winLeft=$(window).scrollLeft();
  var winTop=$(window).scrollTop();
  if(winLeft>0){
    if($('.LeftMuban').hasClass('mbyc')){
      $('.nav_indicate_div').css('left',''+(60-winLeft)+'px');
    }else{
      $('.nav_indicate_div').css('left',''+(335-winLeft)+'px');
    }
  }
  if(winTop<325){
    $('.nav_indicate_div').css('top',''+(300-winTop)+'px');
  }
})



//联通精选导航标题字数限制
$('.indexContent').delegate('.lx_jx_sx_ul>li,.floor_tit>span','blur',function(){
    var thisText=$(this).text();
    if(thisText.length>7){
      var newTit=thisText.substring(0,7);
      $(this).text(newTit);
      if(thisText.length<4){
        $(this).text('输入标题');
      }
      alert('字数不超过7个');
    }
    if(thisText.length<1){
      $(this).text('输入标题');
    }
})

//字节判断
function fontLenth(thisVal){
  var thisVLength=0;
  var thisA=thisVal.split('');
  var rep=/[^\x00-\xff]/;
  for(var i=0;i<thisA.length;i++){
    if(rep.test(thisA[i])){
      thisVLength+=2;
    }else{
        thisVLength++;
    }
  }
  return thisVLength;
}

//字节截取
function fontCut(thisVal,thisCutLength){
  var thisVlength=0;
  var thisB=[];
  var thisA=thisVal.split('');
  var rep=/[^\x00-\xff]/;
  for(var i=0;i<thisA.length;i++){
    if(rep.test(thisA[i])){
      thisVlength+=2;
    }else{
        thisVlength++;
    }
    if(thisVlength>thisCutLength){
      return thisB.join('');
    }else{
      thisB.push(thisA[i]);
    }
  }
  return thisB.join('');
}


// 联通精选广告部分主/副标题字数限制提示
$('.ltjxAdDiv').delegate('.guanggaomubanDiv .jx_tit,.guanggaomubanDiv .jx_tit2','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>20){
      var newTit=fontCut(thisText,20);
      $(this).text(newTit);
      alert('字数不超过20个字符');
    }
})

// 联通精选广告部分卡面主/副标题字数限制提示
$('.ltjxAdDiv').delegate('.guanggaomubanDiv .lx_jx_pro_txt1,.guanggaomubanDiv .lx_jx_pro_txt2','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>16){
      var newTit=fontCut(thisText,16);
      $(this).text(newTit);
      alert('字数不超过16个字符');
    }
})


// 流量专区和4G套餐上部广告部分主标题字数限制提示
$('.llzq1AdDiv').delegate('.guanggaomubanDiv .traffic_ul1_li_message1,.guanggaomubanDiv .G4_ul1_li_message1','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>20){
      var newTit=fontCut(thisText,20);
      $(this).text(newTit);
      alert('字数不超过20个字符');
    }
})
// 流量专区和4G套餐上部广告部分副标题字数限制提示
$('.llzq1AdDiv').delegate('.guanggaomubanDiv .traffic_ul1_li_message2,.guanggaomubanDiv .G4_ul1_li_message3','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>16){
      var newTit=fontCut(thisText,16);
      $(this).text(newTit);
      alert('字数不超过16个字符');
    }
})
// 流量专区和4G套餐下部广告部分主标题字数限制提示
$('.llzq2AdDiv').delegate('.guanggaomubanDiv .traffic_ul2_message1,.guanggaomubanDiv .G4_ul2_message1','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>20){
      var newTit=fontCut(thisText,20);
      $(this).text(newTit);
      alert('字数不超过20个字符');
    }
})
// 流量专区和4G套餐下部广告部分副标题字数限制提示
$('.llzq2AdDiv').delegate('.guanggaomubanDiv .traffic_ul2_message2,.guanggaomubanDiv .G4_ul2_message2','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>28){
      var newTit=fontCut(thisText,28);
      $(this).text(newTit);
      alert('字数不超过28个字符');
    }
})

// 流量专区和4G套餐下部广告部分卡面主/副标题字数限制提示
$('.llzq2AdDiv').delegate('.guanggaomubanDiv .img_div3_message1,.guanggaomubanDiv .img_div3_message2','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>16){
      var newTit=fontCut(thisText,16);
      $(this).text(newTit);
      alert('字数不超过16个字符');
    }
})

// 宽带专区上部广告主标题字数限制提示
$('.kuandai1Div').delegate('.guanggaomubanDiv .broadband_top_txt1','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>28){
      var newTit=fontCut(thisText,28);
      $(this).text(newTit);
      alert('主标题字数不超过28个字符');
    }
})
// 宽带专区上部广告副标题字数限制提示
$('.kuandai1Div').delegate('.guanggaomubanDiv .broadband_top_txt2','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>36){
      var newTit=fontCut(thisText,36);
      $(this).text(newTit);
      alert('主标题字数不超过36个字符');
    }
})

// 宽带专区下部广告主标题字数限制提示
$('.kuandai2Div').delegate('.guanggaomubanDiv .traffic_ul2_message1','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>16){
      var newTit=fontCut(thisText,16);
      $(this).text(newTit);
      alert('主标题字数不超过16个字符');
    }
})
// 宽带专区下部广告副标题字数限制提示
$('.kuandai2Div').delegate('.guanggaomubanDiv .traffic_ul2_message2','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>26){
      var newTit=fontCut(thisText,26);
      $(this).text(newTit);
      alert('主标题字数不超过26个字符');
    }
})


// 上网卡部分主/副标题字数限制提示
$('.InternetCardTcDiv').delegate('.guanggaomubanDiv .InternetCard_message1,.guanggaomubanDiv .InternetCard_message2','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>24){
      var newTit=fontCut(thisText,24);
      $(this).text(newTit);
      alert('主标题字数不超过24个字符');
    }
})
// 上网卡部分卡面主/副标题字数限制提示
$('.InternetCardTcDiv').delegate('.guanggaomubanDiv .img_div3_message1,.guanggaomubanDiv .img_div3_message2','blur',function(){
    var thisText=$(this).text();
    var thisvalLength=fontLenth(thisText);
    if(thisvalLength>16){
      var newTit=fontCut(thisText,16);
      $(this).text(newTit);
      alert('主标题字数不超过16个字符');
    }
})

// 靓号专区标题字数限制提示
$('.mobileNumber_div').delegate('.mobileNumber_ul1 li .editeTxt','blur',function(){
    var thisText=$(this).text();
    if(thisText.length>5){
      var newTit=thisText.substring(0,5);
      $(this).text(newTit);
      alert('字数不超过5个字');
    }
})


//左侧导航隐藏
$('.LeftMubanClose').click(function(){
  $('.LeftMuban').addClass('mbyc').css('z-index','2');
  $('.LeftMuban').each(function(){
    if($(this).hasClass('zIndex20')){
      $(this).addClass('curentMuban').removeClass('zIndex20').css('z-index','3');
    }
  })
  $('.LeftMuban').animate({'left':'-260px'},1000,function(){
    $('.leftMubanShow').show();
  });
  $('.indexContent').animate({'border-width':'1px'},1000);
  var bodyWidth1=$('body').width()-255;
  $('body').css({'width':bodyWidth1,'min-width':bodyWidth1});
  $('.nav_indicate_div').css('left','75px');
})

//左侧模板出现
$('.leftMubanShow').click(function(){
  $('.LeftMuban').removeClass('mbyc').each(function(){
    if($(this).hasClass('curentMuban')){
      $(this).addClass('zIndex20').removeClass('curentMuban');
    }
  })
  $('.LeftMuban').animate({'left':'70px'},1000,function(){
    $('.leftMubanShow').hide();
  });
  $('.indexContent').animate({'border-width':'265px'},1000);
  var bodyWidth1=$('body').width()+255;
  $('body').css({'width':bodyWidth1,'min-width':bodyWidth1});
  $('.nav_indicate_div').css('left','335px');
  $(window).scrollLeft(0);
})

// 左侧导航切换
$('.LeftNavul>li').click(function(){
  var this_index=$(this).index();
  $('.LeftMuban').removeClass('curentMuban zIndex20').css('z-index','3');
  $('.LeftSanjiao').removeClass('LeftsjShow');
  $('.LeftSanjiao').eq(this_index).addClass('LeftsjShow');
  switch (this_index) {
    case 0:
      $('.ltjxLeft').addClass('curentMuban zIndex20');
      break;
    case 1:
      $('.llmbLeft').addClass('curentMuban zIndex20');
      break;
    case 2:
      $('.kdmbLeft').addClass('curentMuban zIndex20');
      break;
    case 3:
      $('.G4mbLeft').addClass('curentMuban zIndex20');
      break;
    case 4:
      $('.phonePjLeft').addClass('curentMuban zIndex20');
      break;
    default:
      $('.InternetCardmbLeft').addClass('curentMuban zIndex20');
      break;
  }
})

// 联通精选--广告选择模板最右侧一列去掉右边距
$('.CardMbUl>li,.CardMbUl2>li').each(function(){
  if(($(this).index()+1)%3==0){
    $(this).css('margin-right','0');
  }
})

// 模块选择
$('.mukuaiUl>li').click(function(){
  var this_index=$(this).index();
  if(this_index>0){
    $('.AdStyle').hide();
  }else{
    $('.AdStyle').show();
  }
  $(this).siblings().removeClass('mukuaiLiSele');
  $(this).addClass('mukuaiLiSele');
  $(this).parents('.LeftMuban').children().find('.scrollDiv').css('display','none').eq(this_index).css('display','block');
})

// 广告类型选择
$('.AdStyle>li').click(function(){
  $('.AdStyle>li').removeClass('AdLiSele');
  $(this).addClass('AdLiSele');
})

$('.ltjxUlEdite .jx_tit,.ltjxUlEdite .jx_tit2,.xsgProTit,.floor_tit>span,.mobileNumber_ul1>li>span').addClass('editeTxt').attr('title','双击可编辑');
$('.lx_jx_sx_ul>li,.floor_tit4_div div').addClass('editeTxt').attr('title','双击可编辑');
$('.taocan_style2,.llb_style,.taocanStyleName').attr('title','双击可编辑');
$('.floor_tit3_div div,.floor_tit4_div div').addClass('editeTxt1');
//对于放置区域里面的元素进行代理
$('.droppable').delegate('','mouseover',function(e){
  //如果这个元素的class里面找到editeTxt，则加上mainContent1样式进行提示
  if($(e.target).parents().hasClass('droppable')&&$(e.target).hasClass('editeTxt')){
    $('.mainContent1').attr('contenteditable','false').removeClass('mainContent1');
    $(e.target).addClass('mainContent1');
  }
})

//双击可以编辑的对象事件
function editeTxtFun(){
  $('.editeTxt').mouseover(function(){
    $('.editeTxt').removeClass('mainContent1');
    $(this).addClass('mainContent1');
  }).dblclick(function(){
    $(this).attr('contenteditable','true').focus();
  }).focus(function(){
    $(window).bind('keydown',function(e){
      if(e.keyCode=='13'){
        return false;
      }
    })
  }).blur(function(){
    $(window).unbind('keydown');
  })

  $('.editeTxt1').dblclick(function(){
    $('.SubtitleDiv1,.mc').show();
    $(this).addClass('editeTxt1_cz');
    var oldNavName=$(this).find('.floorNavTit').text();
    var oldNavLink=$(this).attr('data-click');
    $('.navTitt2').val(oldNavName);//副标题名称
    $('.linkInput2').val(oldNavLink);//新的链接地址
    $(this).parent().addClass('floorAddTit');
  })
}
editeTxtFun();
$('.SubtitleDiv1_cancelBtn').click(function(){
  $('.SubtitleDiv1,.mc').hide();
  $('.floorAddTit').removeClass('floorAddTit');//将此次操作副标题区域标识清除
  $('.editeTxt1_cz').removeClass('editeTxt1_cz');//将此次操作副标题区域标识清除
})
$('.SubtitleDiv1_saveBtn').click(function(){
  var newTit=$('.navTitt2').val();//副标题名称
  var newLink=$('.linkInput2').val();//新的链接地址
  var newXcy=$('.subtitleXcyText2').val();//副标题宣传语
  if(newTit==''&&newXcy!=''){
    $('.editeTxt1_cz').html('<span class="floorNavTit">'+newXcy+'</span><span class="close2">X</span>');
  }else if(newTit!=''&&newXcy==''){
    $('.editeTxt1_cz').attr('data-click',newLink);
    $('.editeTxt1_cz').html('<span class="floorNavTit">'+newTit+'</span><span class="close2">X</span>');
  }
  $('.editeTxt1_cz').removeClass('editeTxt1_cz');
  var widthAll=$('.floorAddTit').width();//副标题区域的宽度
  var cz_floor=$('.floorAddTit');
  var widthF=0;//所有副标题的宽度
  for(var fi=0;fi<cz_floor.children().length-1;fi++){
    var this_width=cz_floor.children().eq(fi).width();
    widthF+=this_width;
  }
  widthF+=(cz_floor.children().length)*20-10;

  if(widthAll>630&&widthAll-widthF<190||widthAll<630&&widthAll-widthF<90){//如果副标题的整体宽度和副标题区域的宽度差小于190，则新的副标题添加失败
    $('.floorTitNewA').remove();
    $('.SubtitleDiv1,.mc').hide();
    $('.SubtitleDiv2,.mc').show();//副标题添加失败弹层出现
  }else{//否则副标题编辑成功，去掉新添加标识
    $('.SubtitleDiv1,.mc').hide();
    $('.floorTitNewA').removeClass('floorTitNewA');
    $('.newSubtitle').removeClass('newSubtitle');
    close2Fun();
  }
  $('.floorAddTit').removeClass('floorAddTit');//将此次操作副标题区域标识清除
})

//更多按钮链接配置弹层
$('.more_div').click(function(){
    $(this).addClass('moreDivCz');
    var thisLink=$(this).find('a').attr('href');
    $('.linkInput3').val(thisLink);
    $('.moreLinkDiv,.mc').show();
})

$('.moreLinkDiv_cancelBtn').click(function(){
  $('.moreLinkDiv,.mc').hide();
  $('.moreDivCz').removeClass('moreDivCz');
})

$('.moreLinkDiv_saveBtn').click(function(){
  var newMoreLink=$('.linkInput3').val();
  $('.moreDivCz').find('a').attr('href',newMoreLink);
  $('.moreLinkDiv,.mc').hide();
  $('.moreDivCz').removeClass('moreDivCz');
})

$(window).click(function(e){
 if(!$(e.target).hasClass('editeTxt')){
   $('.mainContent1').attr('contenteditable','false').removeClass('mainContent1');
 }
})
$('.droppable').delegate('','dblclick',function(e){
  //如果这个元素的class里面找到editeTxt，则双击可以编辑
 if($(e.target).parents().hasClass('droppable')&&$(e.target).hasClass('editeTxt')){
   $(e.target).attr('contenteditable','true').focus();
 }
})

// 弹层右上角关闭按钮事件，关闭当前显示的弹层和蒙层
$('.colseBtn').click(function(){
  $('.tcDiv,.mc').hide();
  $('.tcCzDom').removeClass('tcCzDom');
})
$('.colseBtn2').click(function(){
  $('.tcDiv2,.mc2').hide();
})
//链接弹层关闭
$('.linkDiv_saveBtn,.linkDiv_cancelBtn').click(function(){
  $('.linkDiv,.mc').hide();
})
$('.linkLi').click(function(){
  $('.linkDiv,.mc').show();
})
//宣传语弹层关闭
$('.PropagandaDiv_saveBtn,.PropagandaDiv_cancelBtn').click(function(){
  $('.PropagandaDiv,.mc').hide();
})
$('.xuanchuanyuLi').click(function(){
  $('.PropagandaDiv,.mc').show();
})
// 宣传语清空
$('.PropagandaInputClear').click(function(){
  $('.PropagandaInput').val('');
})

// 定义套餐选择图片
var taocanSelectImg='<img src="images/backStage/selected2.png" class="taocanSelect">';
// 套餐选择/流量包类型选择
$('.picUl>li').click(function(){
  $(this).parent().children().find('.taocanSelect').remove();
  $(this).append(taocanSelectImg);
})


$('.droppable').delegate('img','dblclick',function(e){
  if($(e.target).hasClass('taocanStyleName')){
    $('.TariffDiv,.mc').show();
  }
})

//联通精选部分切换按钮
function ltjxNavqih(){
  $('.lx_jx_sx_ul>li').click(function(){
    var this_index=$(this).index();
    console.log(this_index)
    $('.lx_jx_pro_ul').removeClass('lx_jx_pro_ulShow').hide();
    $('.lx_jx_pro_ul').eq(this_index).addClass('lx_jx_pro_ulShow').show();
    $(this).addClass('lx_jx_sx_select').siblings().removeClass('lx_jx_sx_select');
  })
}
ltjxNavqih();

// 顶部广告编辑
$('.topADd .bjDiv1').click(function(){
  tcPosiAbso('menmeiDiv');
  $('.menmeiDiv,.mc').show();
})

$('.menmenDiv_cancelBtn').click(function(){
  $('.menmeiDiv,.mc').hide();
})

// logo广告编辑
$('.logoBox').delegate(' .bjDiv1','click',function(){
  tcPosiAbso('logoAdDiv');
  $('.logoAdDiv,.mc').show();
})

$('.logoAdDiv_saveBtn,.logoAdDiv_cancelBtn').click(function(){
  $('.logoAdDiv,.mc').hide();
})

var ProLinkUrl='';//输入链接
var ProSelUrl='';//选择商品
// 选择商品按钮隐藏
$('.ProLink').click(function(){
    var czChildren=$(this).parents('.linkUl').next().children();
    ProSelUrl=czChildren.eq(0).val();
    czChildren.eq(0).val(ProLinkUrl);
    czChildren.eq(1).hide();
})
// 选择商品按钮显示
$('.ProSel').click(function(){
    var czChildren=$(this).parents('.linkUl').next().children();
    ProLinkUrl=czChildren.eq(0).val();
    czChildren.eq(0).val(ProSelUrl);
    czChildren.eq(1).show();
})

// 保存时判断链接类型并且存储至linkStyle属性,
//     0:输入链接
//     1:选择商品链接
// 参数tcClass为当前弹层的class
function saveLinkStyle(tcClass){
    $('.'+tcClass+' .linkUl input').each(function(){
        if($(this).prop('checked')){
            var linkIndex=$(this).parent().index();
            if(linkIndex=='0'){
                $('.tcCzDom').attr('linkStyle','0');
            }else{
                $('.tcCzDom').attr('linkStyle','1');
            }
        }
    })
}


// 编辑时链接类型判断以及变量赋值
// 参数tcClass为当前弹层的class
function prolinkStyle(tcClass){
    ProLinkUrl='';//输入链接
    ProSelUrl='';//选择商品
    var linkStyle=$('.tcCzDom').attr('linkStyle');
    $('.'+tcClass+' .linkUl input').removeAttr('checked');
    if(linkStyle=='1'){
        $('.'+tcClass+' .linkUl input').eq(1).prop('checked','checked');
        ProSelUrl=$('.tcCzDom').attr('_bamboo_rep_productlink');

    }else{
        $('.'+tcClass+' .linkUl input').eq(0).prop('checked','checked');
        ProLinkUrl=$('.tcCzDom').attr('_bamboo_rep_productlink');
    }
}



$('.linkInputClear').click(function(){
  $(this).siblings().first().val('');
})

//清空本弹层内的数据
$('.clearMenmeiAll').click(function () {
    var tc_childrens=$(this).parents('.tcDiv').children();
    tc_childrens.find('.ADTit,.linkInput,textarea,.tcInput,.timeInput2').val('');
    tc_childrens.find('.tcPicDiv1').empty();//将弹层中图片清除
    tc_childrens.find('.Adlock').removeAttr('checked');
    tc_childrens.find('.AdlockTimeLi').hide();
    tc_childrens.find('.styleNone').prop('checked', 'checked');
    tc_childrens.find('#menmeiDingS,#menmeiArea,#menmeiLoak').removeAttr('checked');
});
// 联通精选二级导航添加按钮
$('.lxjxNavAddDiv').click(function(){
  $(this).before('<li submodulename="二级标题">二级标题<img src="images/topCloseAD.png" class="lxjxNavDel"></li>');
  $('.lx_jx_sx_ul>li').removeClass('marginR0').last().addClass('marginR0');
  $('.lx_jx_sx_ul>li').removeClass('lx_jx_sx_select').last().addClass('lx_jx_sx_select');
  $('.lx_jx_sx_ul').width('447px');
  // $('#lx_jx_pro_ul').append(ltjxXsqgObj);
  $('.ltjx_xsqgUl').show();
  $('.lx_jx_pro_ul').css('display','none');
  $('.ltjx_xsqgUl').css('display','block');
  $('.lx_jx_sx_ul').delegate('li','mouseover',function(){
    $(this).addClass('editeTxt').attr('title','双击可编辑');
    editeTxtFun();
    ltjxNavqih()
  })
  $(this).hide();
  // $('.jx_xsgLi').append(proDuctCz);
})

//联通精选二级导航删除按钮
$('.lx_jx_sx_ul').delegate('.lxjxNavDel','click',function(){
  $('.lx_jx_sx_ul>li').last().remove();
  $('.ltjx_xsqgUl').hide();
  $('.lx_jx_sx_ul>li').eq(0).addClass('lx_jx_sx_select');
  $('.lx_jx_pro_ul').eq(0).css('display','block');
  $('.lx_jx_sx_ul>li').removeClass('marginR0').last().addClass('marginR0');
  $('.lx_jx_sx_ul').width('360px');
  $('.lxjxNavAddDiv').show();
})

// // 联通精选li的操作按钮浮层
// var ltjxCz='';
// ltjxCz+='<div class="ProMc"></div><div class="AdPro"><ul class="cz_btnUl">';
// ltjxCz+='<li class="bjDiv2"><img src="images/backStage/bjIcon.png" class="cz_btnIcon">';
// ltjxCz+='<span>编辑</span></li><li class="delLi">';
// ltjxCz+='<img src="images/backStage/delIcon4.png" class="cz_btnIcon">';
// ltjxCz+='<span>删除</span></li></ul></div>';

// 浮层加到li上
// $('.ltjxUlEdite>li').each(function(){
//   $(this).prepend(ltjxCz);
// })

// 各个区域的备份、发布按钮
var bffbObj='';
bffbObj+='<div class="bfFbDiv4"><div class="bfDiv fl czDiv">';
bffbObj+='<img src="images/backStage/beifen1_icon.png" class="czIcon1"><span>保存备份</span></div>';
bffbObj+='<div class="bfjlDiv fl czDiv"><img src="images/backStage/beifenjilu1_icon.png" class="czIcon1">';
bffbObj+='<span>备份记录</span></div></div><div class="bfFbDiv3">';
bffbObj+='<div class="delDiv fl czDiv"><img src="images/backStage/delIcon4.png" class="czIcon1">';
bffbObj+='<span>删除</span></div></div>';

$('.adMuneBox,.tszq_Tnav_ul1>li,.th_Tnav_ul1>li,.banner_div1,.ltjxWarp,.G4_div,.broadband_div,.traffic_div,.phoneAccessories,#InternetCard,#lifeService').each(function(){
  $(this).prepend(bffbObj);
})
$('.phoneAccessories,#InternetCard,#lifeService').each(function(){
  $(this).children().eq(0).css('top','0px');
  $(this).children().eq(1).css('top','0px');
})

// 自助部分编辑弹层添加
var serveLife='<div class="ProMc"></div><div class="AdPro"><div class="proDbj2 bjDiv1 lockDn">';
serveLife+='<img src="images/backStage/bjIcon.png" class="czIcon1 bjIcon">';
serveLife+='<span>编辑</span></div></div>';
$('.appendEditBut').each(function(){
  $(this).append(serveLife);
})
$('.logoBox .AdPro').prepend(bffbObj);
//联通精选模块删除按钮
$('.ltjxWarp').delegate('.delDiv','click',function(){
  if($('.lx_jx_pro_ulShow').hasClass('ltjxUlEdite')){//判断是否可以进行编辑模板
    $('.lx_jx_pro_ulShow').html('');
  }else{
    alert('猜你喜欢部分不可装修');
  }
})

//流量专区模块删除按钮
$('.traffic_div').delegate('.delDiv','click',function(){
  $('.trafficConDiv').html('');
})

//宽带专区模块删除按钮
$('.broadband_div').delegate('.delDiv','click',function(){
  $('.broadbandConDiv').html('');
})

//4G套餐模块删除按钮
$('.G4_div').delegate('.delDiv','click',function(){
  $('.G4ConDiv').html('');
})

//手机配件模块删除按钮
$('.phoneAccessories').delegate('.delDiv','click',function(){
  $('.phone_ul1,.accessories_ul').html('');
})

//上网卡模块删除按钮
$('.InternetCard').delegate('.delDiv','click',function(){
  $('.InternetCardConDiv .InternetCard_ul').html('');
})

//生活服务模块删除按钮
$('.lifeService').delegate('.delDiv','click',function(){
  $('.lifeServiceConDiv').html('');
})


// 区域模块添加新的副标题按钮
$('.floor_tit3_div,.floor_tit4_div').append('<img src="images/backStage/userFastAdds.png" class="floorTitAdd">');
var floorTitNew='';
floorTitNew+='<i class="floor_tit3_fg floorTitNewA">/</i><div class="editeTxt1 mainContent1 floorTitNewA newSubtitle"';
floorTitNew+=' title="双击可编辑"><span class="floorNavTit">新的标题</span><span class="close2">X</span></div>';

$('.floorTitAdd').click(function(){
  $(this).parent().addClass('floorAddTit');
  $(this).before(floorTitNew);
  $('.SubtitleDiv').children().find('input[type="text"],textarea').val('');
  $('.SubtitleDiv,.mc').show();
})

//区域模块各个副标题添加删除按钮，点击删除
$('.floor_tit3_div div,.floor_tit4_div div').each(function(){
  $(this).append('<span class="close2">X</span>');
})
close2Fun();
function close2Fun(){
  $('.close2').bind('click',function(){
    if($(this).parent().next().hasClass('floor_tit3_fg')){
      $(this).parent().next().remove();
    }else{
      $(this).parent().prev().remove();
    }
    $(this).parent().remove();
  })
}

//更多按钮编辑浮层添加
var moreTc='<div class="ProMc"></div><div class="AdPro">';
moreTc+='<img src="images/backStage/linkIcon.png" class="linkIcon"></div>';
$('.more_div').each(function(){
  $(this).append(moreTc);
})

// 商品模块的操作按钮(编辑和删除)浮层
var proDuctCz='';
proDuctCz+='<div class="ProMc"></div><div class="AdPro"><ul class="cz_btnUl lockDn">';
proDuctCz+='<li class="bjDiv2"><img src="images/backStage/bjIcon.png" class="cz_btnIcon">';
proDuctCz+='<span>编辑</span></li><li class="delLi">';
proDuctCz+='<img src="images/backStage/delIcon4.png" class="cz_btnIcon">';
proDuctCz+='<span>删除</span></li></ul></div>';

// 商品模块追加操作按钮
$('.appendEditDelBut').each(function(){
  $(this).append(proDuctCz);
})
$('.jcMubanDiv .mubanTrue .appendEditDelBut').each(function(){
  $(this).find('.ProMc').remove();
  $(this).find('.AdPro').remove();
})

// // 商品模块的操作按钮（仅有编辑）浮层
// var proDuctCz2='<div class="ProMc"></div><div class="AdPro"><div class="proDbj2 bjDiv1">';
// proDuctCz2+='<img src="images/backStage/bjIcon.png" class="cz_btnIcon">';
// proDuctCz2+='<span>编辑</span></div></div>';
// // 商品模块追加操作按钮
//
// $('.broadbandConDiv .broadband_top,.broadbandConDiv .broadband_ul2>li,.phonePjConDiv .phone_ul1_li1,.phonePjConDiv .phone_ul2>li,.phonePjConDiv .accessories_ul>li,.lifeServiceConDiv .lifeService_ul>li,.InternetCardConDiv .InternetCard_ul>li').each(function(){
//   $(this).append(proDuctCz2);
// })

// 靓号专区导航配置按钮

var numPz='<div class="ProMc"></div><div class="AdPro"><div class="numberPzBtn">';
numPz+='<img src="images/backStage/pzIcon.png" class="cz_btnIcon">';
numPz+='<span>配置</span></div></div>';
$('.mobileNumber_div3').append(numPz);

// 靓号专区导航添加按钮
$('.mobileNumberUl1Ad').click(function(){
  var mobileNumberUl1Add='<li><img src="images/wjx_active.png" class="mobileN_Style_pic"><span>特色靓号</span>';
  mobileNumberUl1Add+='<div class="numBerNavDelB">';
  mobileNumberUl1Add+='<img src="images/backStage/delIcon4.png" class="cz_btnIcon">';
  mobileNumberUl1Add+='<span>删除</span></div></li>';
  $('.numBerNavDelB').show();
  if($('.mobileNumber_ul1>li').length<3){
    $('.mobileNumber_ul1').append(mobileNumberUl1Add);
    var UlWidth=$('.mobileNumber_ul1').width();
    var newmobileLi1L=$('.mobileNumber_ul1>li').length;
    $('.mobileNumber_ul1>li').width((UlWidth-6)/newmobileLi1L);
    $('.mobileNumber_div3').append('<ul class="mobileNumber_ul2"></ul>');
  }
  if($('.mobileNumber_ul1>li').length>2){
    $(this).hide();
  }
    mobileFun();
    editeTxtFun();
})
// 靓号专区导航按钮事件
function mobileFun(){
  // 删除按钮事件
  $('.mobileNumber_ul1>li>span').addClass('editeTxt').attr('title','双击可编辑');
  $('.mobileN_Style_pic').attr('title','双击可替换图标');
  $('.mobileNumber_ul1>li').delegate('.numBerNavDelB','click',function(){
    $('.mobileNumberUl1Ad').show();
    if($('.numBerNavDelB').length>1){
      var UlWidth=$(this).parent().parent().width();
      var siblingsL=$(this).parent().siblings().length;
      $(this).parent().siblings().width(parseInt((UlWidth-3)/siblingsL));
      $('.mobileNumber_div3>ul').eq($(this).parent().index()).remove();
      $(this).parent().remove();
      if($('.numBerNavDelB').length<2){
        $('.numBerNavDelB').hide();
      }
    }
  })
  // 图标替换事件
  $('.mobileNumber_ul1>li').delegate('.mobileN_Style_pic','dblclick',function(){
    $('.LiangIconDiv,.mc').show();
  })

  // 靓号专区切换
  $('.mobileNumber_ul1>li').click(function(){
    var this_index=$(this).index();
    $('.mobileNumber_ul1>li').removeClass('mobileNum_U1_LSe');
    $('.mobileNumber_ul1>li').eq(this_index).addClass('mobileNum_U1_LSe');
    //$('.Number_indexUl').removeClass('Number_indexUlShow');
    $('.mobileNumber_ul2').removeClass('mobileNumber_ul2Show').eq(this_index).addClass('mobileNumber_ul2Show');
    switch(this_index){
      //特色靓号
      case 0:
        $('.mobileN_Style_pic').eq(0).attr('src','images/wjx_active.png');
        $('.mobileN_Style_pic').eq(1).attr('src','images/heart_icon1.png');
        $('.mobileN_Style_pic').eq(2).attr('src','images/date_icon.png');
        $('.Number_indexUl').eq(0).addClass('Number_indexUlShow');
        $('.Number_indexUlShow>li').removeClass('bgff6600').eq(0).addClass('bgff6600');
        break;
      //生日靓号
      case 1:
        $('.mobileN_Style_pic').eq(0).attr('src','images/wjx_icon1.png');
        $('.mobileN_Style_pic').eq(1).attr('src','images/heart_active.png');
        $('.mobileN_Style_pic').eq(2).attr('src','images/date_icon.png');
        $('.Number_indexUl').eq(1).addClass('Number_indexUlShow');
        $('.Number_indexUlShow>li').removeClass('bgff6600').eq(0).addClass('bgff6600');
        break;
      //纪念日靓号
      case 2:
        $('.mobileN_Style_pic').eq(0).attr('src','images/wjx_icon1.png');
        $('.mobileN_Style_pic').eq(1).attr('src','images/heart_icon1.png');
        $('.mobileN_Style_pic').eq(2).attr('src','images/date_active.png');
        $('.Number_indexUl').eq(2).addClass('Number_indexUlShow');
        $('.Number_indexUlShow>li').removeClass('bgff6600').eq(0).addClass('bgff6600');
        break;
    }
  })
}
mobileFun();

// 靓号专区导航删除按钮
var numBerNavDel='<div class="numBerNavDelB"><img src="images/backStage/delIcon4.png" class="cz_btnIcon">';
numBerNavDel+='<span>删除</span></div>';
$('.mobileNumber_ul1>li').each(function(){
  $(this).append(numBerNavDel);
})

// 副标题弹层保存关闭
$('.SubtitleDiv_saveBtn').click(function(){
  var newTit=$('.navTitt1').val();//副标题名称
  var newLink=$('.linkInput1').val();//获取新的链接
  var newXcy=$('.subtitleXcyText1').val();//副标题宣传语
  if(newTit==''&&newXcy!=''){
    $('.newSubtitle').html('<span class="floorNavTit">'+newXcy+'</span><span class="close2">X</span>');
  }else if(newTit!=''&&newXcy==''){
    $('.newSubtitle').attr('data-click',+newLink);
    $('.newSubtitle').html('<span class="floorNavTit">'+newTit+'</span><span class="close2">X</span>');
  }
  var siblingsL=$('.newSubtitle').siblings().length;
  if(siblingsL<3){
    $('.newSubtitle').prev().remove();
  }
  editeTxtFun();
  var widthAll=$('.floorAddTit').width();//副标题区域的宽度
  var cz_floor=$('.floorAddTit');
  var widthF=0;//所有副标题的宽度
  for(var fi=0;fi<cz_floor.children().length-1;fi++){
    var this_width=cz_floor.children().eq(fi).width();
    widthF+=this_width;
  }
  widthF+=(cz_floor.children().length)*20-10;
  if(widthAll>630&&widthAll-widthF<190||widthAll<630&&widthAll-widthF<90){//如果副标题的整体宽度和副标题区域的宽度差小于190，则新的副标题添加失败
    $('.floorTitNewA').remove();
    $('.SubtitleDiv,.mc').hide();
    $('.SubtitleDiv2,.mc').show();//副标题添加失败弹层出现
  }else{//否则副标题添加成功，去掉新添加标识
    $('.SubtitleDiv,.mc').hide();
    $('.floorTitNewA').removeClass('floorTitNewA');
    $('.newSubtitle').removeClass('newSubtitle');
    close2Fun();
  }
  $('.floorAddTit').removeClass('floorAddTit');//将此次操作副标题区域标识清除
})
// 副标题弹层取消关闭
$('.SubtitleDiv_cancelBtn').click(function(){
  $('.SubtitleDiv,.mc').hide();
  $('.floorTitNewA').remove();
  $('.floorAddTit').removeClass('floorAddTit');//将此次操作副标题区域标识清除
})

// 副标题弹层选择类型
$('.subtitleNav').click(function(){

  var subtitleNavLiDom=$(this).parents('li').next();
  console.log(subtitleNavLiDom)
  subtitleNavLiDom.next().next().hide();
  subtitleNavLiDom.show();
  subtitleNavLiDom.next().show();
})
$('.subtitleXcy').click(function(){
  var subtitleNavLiDom=$(this).parents('li').next();
  console.log(subtitleNavLiDom)
  subtitleNavLiDom.next().next().show();
  subtitleNavLiDom.hide();
  subtitleNavLiDom.next().hide();
})

//副标题添加失败弹层关闭
$('.SubtitleDiv2_cancelBtn').click(function(){
  $('.SubtitleDiv2,.mc').hide();
})

// 靓号专区图标弹层部分
$('.LiangIconDiv_saveBtn,.LiangIconDiv_cancelBtn').click(function(){
  $('.LiangIconDiv,.mc').hide();
})

// 发布时间弹层关闭
$('.dsFbDiv_cancelBtn').click(function(){
  $('.dsFbDiv,.mc').hide();
  $('.dsfbConfirmDiv,.mc2').hide();
})
// 发布时间确认按钮
$('.dsFbDiv_fabuBtn').click(function(){
  $('.dsFbDiv').hide();
  $('.dsfbConfirmDiv,.mc2').show();
})

// 定时发布确认弹层关闭
$('.dsFbConfirmDiv_cancelBtn').click(function(){
  $('.dsfbConfirmDiv,.mc2').hide();
})

// 立即发布确认弹层关闭
$('.fbConfirmDiv_cancelBtn').click(function(){
  $('.dsfbConfirmDiv,.fbConfirmDiv,.mc2').hide();
})

// 发布确认弹层确认发布按钮
$('.fbDiv_fabuBtn').click(function(){
  $('.dsfbConfirmDiv,.fbConfirmDiv').hide();
  $('.fbSucessDiv,.mc2').show();
})

// 发布成功弹层关闭
$('.ckPageBtn,.fbSucessDiv_backBtn').click(function(){
  $('.fbSucessDiv,.mc2').hide();
})



//皮肤管理弹层打开
$(".pfglDiv").bind("click",function(){
    tcPosiAbso('pifuDiv');
    $(".pifuDiv,.mc").show();
})
//关闭皮肤弹层
$('.colseBtn,.quxiao_btn').click(function(){
    $('.pifuDiv,.mc').hide();
})





//备份弹层关闭
$('.beifen_cancelBtn').click(function(){
  $('.beifenDiv,.mc').hide();
})
//备份弹层确定保存按钮
$('.beifen_saveBtn').click(function(){
 $('.beifenDiv').hide();
 $('.beifenSDiv').show();//备份成功提示闪窗出现，两秒后消失
 setTimeout(function(){
   $('.beifenSDiv,.mc').hide();
 },2000)
})

//上网卡和手机配件可以进行交换
// $('.sjpjAndInternetCard').sortable({
//  helper:"clone",
//  cursor: "move"
// });

// 设定各种时间
//锁定截止时间domID，锁定截止时间YYYY-MM-DD hh:mm:ss
//banner锁定时间
jeDateFun('bannerlockStop1_1','0000-00-00 00:00:00');
//发布管理查询开始时间
jeDateFun1('TakeTimeStart','');
//发布管理查询结束时间
jeDateFun1('TakeTimeEnd','');
//新增发布计划开始时间
jeDateFun('newPlanTimeStart','0000-00-00 00:00:00');
//新增发布计划结束时间
jeDateFun('newPlanTimeEnd','0000-00-00 00:00:00');
//门楣广告锁定时间
jeDateFun('menmeilockStop1_1','0000-00-00 00:00:00');
//logo广告锁定时间
jeDateFun('logoAdlockStop1_1','0000-00-00 00:00:00');
//二级导航广告锁定时间
jeDateFun('navAdDivlockStop1_1','0000-00-00 00:00:00');
//联通精选-限时抢购商品活动截止时间
jeDateFun('ltjxXsgActiveEndTime_1','0000-00-00 00:00:00');
//联通精选锁定时间
jeDateFun('ltjx1lockStop1_1','0000-00-00 00:00:00');
//流量专区和4G套餐广告位1锁定时间
jeDateFun('llzq1lockStop1_1','0000-00-00 00:00:00');
//流量专区和4G套餐广告位2锁定时间
jeDateFun('llgg21lockStop1','0000-00-00 00:00:00');
//宽带专区广告位1锁定时间
jeDateFun('kuandai1lockStop_1','0000-00-00 00:00:00');
//宽带专区广告位2锁定时间
jeDateFun('kuaidai2lockStop_1','0000-00-00 00:00:00');
//手机配件广告位1锁定时间
jeDateFun('phone1lockStop1_1','0000-00-00 00:00:00');
//手机配件广告位2锁定时间
jeDateFun('phone2lockStop1_1','0000-00-00 00:00:00');
//手机配件广告位3锁定时间
jeDateFun('phonePjlockStop1','0000-00-00 00:00:00');
//上网卡广告位锁定时间
jeDateFun('internetlockStop1_1','0000-00-00 00:00:00');
//自定义弹层锁定时间
jeDateFun('zdylockStop1','0000-00-00 00:00:00');
//备份记录开始时间
jeDateFun1('bfTimeStart','');
//备份记录结束时间
jeDateFun1('bfTimeEnd','');

//锁定截止时间domID，锁定截止时间YYYY-MM-DD hh:mm:ss
function jeDateFun(domID,lockingTime){
  $('#'+domID+'').jeDate({
    isinitVal:true,
    ishmsVal:false,
      minDate: $.nowDate({DD:0}),
      format:"YYYY-MM-DD hh:mm:ss",
      zIndex:3000,
  })
  if(lockingTime=='0000-00-00 00:00:00'){
    $('#'+domID+'').val($.nowDate({DD:0}));
  }else{
    $('#'+domID+'').val(lockingTime);
  }

}
//记录类时间domID，时间YYYY-MM-DD hh:mm:ss
function jeDateFun1(domID,lockingTime){
  $('#'+domID+'').jeDate({
    isinitVal:true,
    ishmsVal:false,
      // minDate:$.nowDate({DD:0}),
      format:"YYYY-MM-DD hh:mm:ss",
      zIndex:3000,
  })
  if(lockingTime==''){
    $('#'+domID+'').val('');
  }else{
    $('#'+domID+'').val(lockingTime);
  }
}


//选择定时发布时间
$('.AdDingS').click(function(){
  var checkedF=$(this).prop('checked');
  if(checkedF){
    $(this).parent().next().show().next().show();
  }else{
    $(this).parent().next().hide().next().hide();
  }
})

//选择发布区域
$('.tcAdArea').click(function(){
  var checkedF=$(this).prop('checked');
  if(checkedF){
    $(this).parent().next().show();
  }else{
    $(this).parent().next().hide();
  }
})

// 锁定按钮事件
$('.Adlock').click(function(){
  var checkedF=$(this).prop('checked');
  if(checkedF){
    $(this).parents('.tcContentLI').next().show();
  }else{
    $(this).parents('.tcContentLI').next().hide();
  }
})

// 广告弹层绝对定位时确定显示位置，传入参数为弹层的class
function tcPosiAbso(tcClass){
  var winScrollTop=$(window).scrollTop();
  var winScrollLeft=$(window).scrollLeft();
  var _Left=$('.'+tcClass+'').width()/2;
  $('.'+tcClass+'').css({'top':winScrollTop+45,'margin-left':winScrollLeft-_Left});
}

//广告弹层中的删除按钮初始化时隐藏
$('.guanggaoAddLiDel,.guanggaoAddLiDel1').hide();

// 广告弹层中广告添加
$('.guanggaoAddLiAdd').click(function(){
  var ggUl=$(this).parent().prev();//获取广告列表的外层ul
  if(ggUl.children().length<5){
    var ggLi=ggUl.children().eq(0).clone(true,true);
    ggUl.append(ggLi);
    ggUl.children().last().find('.numb').text(ggUl.children().length);
    ggUl.children().last().children().find('.numb').text(ggUl.children().length);
    ggUl.children().find('.guanggaoAddLiDel,.guanggaoAddLiDel1').show();
  }
})

// 广告弹层中广告删除
$('.guanggaoAddLi').delegate('.guanggaoAddLiDel','click',function(){
  var guanggaoLg=$(this).parent().parent().siblings().length;//获取当前广告数量减一的值
  var TcDiv=$(this).parents('.tcDiv');//获取当前的整个弹层
  if(guanggaoLg>0){
    $(this).parent().parent().remove();
    var numbA=TcDiv.children().find('.numb');//获取广告的数量
    numbA.each(function(index){//对广告数量进行重新排序
      $(this).text(index+1);
    })
  }
  var AdLength=TcDiv.children().find('.guanggaoAddLi').length;
  if(AdLength<2){//当广告数量小于2时，隐藏删除按钮
    TcDiv.children().find('.guanggaoAddLiDel').hide();
  }
})

// banner广告弹层中广告删除
$('.guanggaoAddDiv').delegate('.guanggaoAddLiDel1','click',function(){
  var guanggaoLg=$(this).parent().siblings().length;//获取当前广告数量减一的值
  var TcDiv=$(this).parents('.tcDiv');//获取当前的整个弹层
  if(guanggaoLg>0){
    $(this).parent().remove();
    var numbA=TcDiv.children().find('.numb');//获取广告的数量
    numbA.each(function(index){//对广告数量进行重新排序
      $(this).text(index+1);
    })
  }
  var AdLength=TcDiv.children().find('.guanggaoAddLi').length;
  if(AdLength<2){//当广告数量小于2时，隐藏删除按钮
    TcDiv.children().find('.guanggaoAddLiDel').hide();
  }
})



// 联通精选弹层取消按钮  同步时删除无需同步
$('.ltjxAdDiv_cancelBtn').click(function(){
  $('.tcCzDom').removeClass('tcCzDom');
  $('.ltjxAdDiv,.mc').hide();
})
// 联通精选弹层保存按钮  同步时删除无需同步
$('.ltjxAdDiv_saveBtn').click(function(){
  var newHtml=$('.ltjxAdDiv .guanggaomubanDiv').html();
  $('.tcCzDom').html(newHtml);
  $('.tcCzDom').removeClass('tcCzDom');
  $('.ltjxAdDiv,.mc').hide();
})
//联通精选编辑按钮事件  同步时删除无需同步
$('#lx_jx_pro_ul').delegate('.bjDiv2','click',function(){
  $(this).parent().parent().parent().addClass('tcCzDom');
  var tcData=$('.tcCzDom').attr('data-tc');//获取弹层类型
  var zdyTc=$('.tcCzDom').attr('data-style');//获取是否是自定义弹层
  var tcUlData=$('.tcCzDom').parent().attr('data-id');//获取操作的是人气推荐的还是特色专区的
  if(tcData=="djsTc"){//倒计时弹层
    tcPosiAbso('ltjxDjsDiv');
    $('.ltjxDjsDiv,.mc').show();
  }else if(tcData=="xsgPrcTc"){//限时抢购商品弹层
    tcPosiAbso('ltjxXsgProTcDiv');
    $('.ltjxXsgProTcDiv,.mc').show();
  }else{//人气推荐和特色专区弹层
    if(zdyTc=='ltjxzdy'){
      $('.zdyTcDiv .tcContent .zdyXcy').show();//需要编辑宣传语
      tcPosiAbso('zdyTcDiv');
      $('.zdyTcDiv,.mc').show();//自定义弹层出现
      //设置联通精选的图片上传格式大小
      $('.zdyTcDiv .picTips').text('（格式：jpg／png／gif  尺寸：292*210 大小：小于100KB）');
    }else{
      if(tcUlData=="ltjxDroprqtj"){//人气推荐的需要出现宣传语
        $('.ltjxAdDiv .tcContentLI .ltjxXcyShow').show();
      }else if(tcUlData=="ltjxDroptszq"){//特色专区的不需要出现宣传语
        $('.ltjxAdDiv .tcContentLI .ltjxXcyShow').hide();
      }
      tcPosiAbso('ltjxAdDiv');
      $('.ltjxAdDiv,.mc').show();
      $('.ltjxAdDiv .guanggaomubanDiv').addClass('lxjx_tyLi').html($(this).parent().parent().parent().html());
      editeTxtFun();
    }
  }
  var picUp=$('.ltjxAdDiv .guanggaomubanDiv .lx_jx_pro_img_div .lx_jx_pro_img').siblings();
  if($(picUp).hasClass('taocanStyleName')||$(picUp).hasClass('FlowStyle')){
    $('.ltjxAdDiv .tcItemContent .picUpDateDiv').css('display','none');
  }else{
    $('.ltjxAdDiv .tcItemContent .picUpDateDiv').css('display','block');
  }
})

//联通精选倒计时弹层部分开始 同步时删除无需同步
$('.ltjxDjsDiv_saveBtn,.ltjxDjsDiv_cancelBtn').click(function(){
  $('.ltjxDjsDiv,.mc').hide();
  $('.tcCzDom').removeClass('tcCzDom');
})
//联通精选限时抢购商品弹层部分开始 同步时删除无需同步
$('.ltjxXsgProTcDiv_saveBtn,.ltjxXsgProTcDiv_cancelBtn').click(function(){
  $('.ltjxXsgProTcDiv,.mc').hide();
  $('.tcCzDom').removeClass('tcCzDom');
})


//弹层上套餐小图标弹层出现
$('.guanggaomubanDiv').delegate('.taocanStyleName,.taocan_style2','dblclick',function(){
  $(this).parents('.guanggaomubanDiv').addClass('czGuanggaomubanDiv');
  $('.TariffDiv,.mc2').show();
})
//套餐图标保存关闭
$('.TariffDiv_saveBtn').click(function(){
  var newSrc=$('.TariffDiv .taocanSelect').parent().find('.taocanPic').attr('src');
  $('.czGuanggaomubanDiv .taocanStyleName,.czGuanggaomubanDiv .taocan_style2').attr('src',newSrc);
  $('.TariffDiv,.mc2').hide();
  $('.czGuanggaomubanDiv').removeClass('czGuanggaomubanDiv');
})

// 套餐图标弹层关闭
$('.TariffDiv_cancelBtn').click(function(){
  $('.TariffDiv,.mc2').hide();
  $('.czGuanggaomubanDiv').removeClass('czGuanggaomubanDiv');
})
//弹层上流量包类型弹层出现
$('.guanggaomubanDiv').delegate('.FlowStyle,.llb_style','dblclick',function(){
  $(this).parents('.guanggaomubanDiv').addClass('czGuanggaomubanDiv');
  if($(this).hasClass('blue_icon')){//蓝色图标
    $('.FlowDiv .picUl>li').hide();
    $('.FlowDiv .blue_icon,.zdyFlowLi').show();
  }
  if($(this).hasClass('green_icon')){//绿色图标
    $('.FlowDiv .picUl>li').hide();
    $('.FlowDiv .green_icon,.zdyFlowLi').show();
  }
  if($(this).hasClass('orange_icon')){//橙色图标
    $('.FlowDiv .picUl>li').hide();
    $('.FlowDiv .orange_icon,.zdyFlowLi').show();
  }
  $('.FlowDiv,.mc2').show();
})
//流量包类型弹层保存关闭
$('.FlowDiv_saveBtn').click(function(){
  var newSrc=$('.FlowDiv .taocanSelect').parent().find('.taocanPic').attr('src');
  $('.czGuanggaomubanDiv .FlowStyle,.czGuanggaomubanDiv .llb_style').attr('src',newSrc);
  $('.FlowDiv,.mc2').hide();
  $('.czGuanggaomubanDiv').removeClass('czGuanggaomubanDiv');
})

// 流量包类型弹层关闭
$('.FlowDiv_cancelBtn').click(function(){
  $('.FlowDiv,.mc2').hide();
  $('.czGuanggaomubanDiv').removeClass('czGuanggaomubanDiv');
})

$('.traffic_ul1>li').attr('data-id','llzq1');
$('.traffic_ul2>li').attr('data-id','llzq2');
$('.broadband_top').attr('data-id','kdzq1');
$('.broadband_ul2>li').attr('data-id','kdzq2');
$('.G4_ul1>li').attr('data-id','G4zq1');
$('.G4_ul2>li').attr('data-id','G4zq2');
$('.phone_ul1_li1').attr('data-id','phone1');
$('.phone_ul2_li2').attr('data-id','phone2');
$('.accessories_ul>li').attr('data-id','pj1');
$('.InternetCardConDiv').attr('data-id','InternetCardjcmb1');
$('.InternetCard_ul>li').attr('data-id','InternetCard1');

// 流量专区广告弹层1部分关闭
$('.llzq1AdDiv_cancelBtn').click(function(){
  $('.llzq1AdDiv,.mc').hide();
})
// 流量专区广告弹层1部分保存关闭
$('.llzq1AdDiv_saveBtn').click(function(){
  var newAddHtml=$(this).parents('.tcDiv').children().find('.guanggaomubanDiv').eq(0).html();//获取新的内容
  $('.tcCzDom').html(newAddHtml);
  $('.tcCzDom').removeClass('.tcCzDom');
  $('.llzq1AdDiv,.mc').hide();
})

mukuaiBjBtn();
//流量专区编辑按钮事件1
function mukuaiBjBtn(){
  //流量专区和4G广告1编辑按钮
  $('.G4ConDiv,.trafficConDiv').delegate('.traffic_ul1 .bjDiv2,.traffic_ul1 .proDbj2,.G4_ul1 .bjDiv2,.G4_ul1 .proDbj2','click',function(){
    $('.tcCzDom').removeClass('tcCzDom');//去掉操作dom的表示
    $(this).parent().parent().parent().addClass('tcCzDom');//给当前操作的dom添加上标识
    var zdyTc=$('.tcCzDom').attr('data-style');//获取是否是自定义弹层
    var zdyProStyleFlag=$('.tcCzDom').attr('data-proStyle');//获取是否添加商品热销等标签
    if(zdyTc=='zdyMuban'){//如果是自定义模板，则出现自定义模板弹层
      if(zdyProStyleFlag=='true'){//如果可以添加商品标签，则自定义弹层出现商品标签选择
        $('.zdyTcDiv .tcContent .tcContentLI .zdyProStyle').show();
      }else{
        $('.zdyTcDiv .tcContent .tcContentLI .zdyProStyle').hide();
      }
      $('.zdyTcDiv .tcContent .zdyXcy').hide();//不需要编辑宣传语，隐藏宣传语
      tcPosiAbso('zdyTcDiv');
      $('.zdyTcDiv,.mc').show();
      //设置流量专区和4G广告1的图片上传格式大小
      $('.zdyTcDiv .picTips').text('（格式：jpg／png／gif  尺寸：292*160 大小：小于100KB）');
    }else{
      tcPosiAbso('llzq1AdDiv');
      $('.llzq1AdDiv,.mc').show();
      $('.llzq1AdDiv .guanggaomubanDiv').html($(this).parent().parent().parent().html());
      $('.traffic_ul1_li_message1,.traffic_ul1_li_message2,.G4_ul1_li_message1,.G4_ul1_li_message3').addClass('editeTxt');
      editeTxtFun();
    }

  })
  //流量专区和4G广告2编辑按钮
  $('.G4ConDiv,.trafficConDiv').delegate('.traffic_ul2 .bjDiv2,.traffic_ul2 .proDbj2,.G4_ul2 .bjDiv2,.G4_ul2 .proDbj2','click',function(){
    $('.tcCzDom').removeClass('tcCzDom');//去掉操作dom的表示
    $(this).parent().parent().parent().addClass('tcCzDom');//给当前操作的dom添加上标识
    var zdyTc=$('.tcCzDom').attr('data-style');//获取是否是自定义弹层
    var zdyProStyleFlag=$('.tcCzDom').attr('data-proStyle');//获取是否添加商品热销等标签
    if(zdyTc=='zdyMuban'){//如果是自定义模板，则出现自定义模板弹层
      if(zdyProStyleFlag=='true'){//如果可以添加商品标签，则自定义弹层出现商品标签选择
        $('.zdyTcDiv .tcContent .tcContentLI .zdyProStyle').show();
      }else{
        $('.zdyTcDiv .tcContent .tcContentLI .zdyProStyle').hide();
      }
      $('.zdyTcDiv .tcContent .zdyXcy').hide();//不需要编辑宣传语，隐藏宣传语
      tcPosiAbso('zdyTcDiv');
      $('.zdyTcDiv,.mc').show();
      //设置流量专区和4G广告2的图片上传格式大小
      $('.zdyTcDiv .picTips').text('（格式：jpg／png／gif  尺寸：192*245 大小：小于100KB）');
    }else{
      tcPosiAbso('llzq2AdDiv');
      $('.llzq2AdDiv,.mc').show();
      $('.llzq2AdDiv .guanggaomubanDiv').html($(this).parent().parent().parent().html());
      $('.traffic_ul2_message1,.traffic_ul2_message2,.G4_ul2_message1,.G4_ul2_message2,.img_div3_message1,.img_div3_message2').addClass('editeTxt');
      editeTxtFun();
    }
  })
  //宽带专区广告1编辑按钮
  $('.broadband_top').delegate('.bjDiv2,.proDbj2','click',function(){
    tcPosiAbso('kuandai1Div');
    $('.kuandai1Div,.mc').show();
    $('.kuandai1Div .guanggaomubanDiv').html($(this).parent().parent().html());
    $('.broadband_top_txt1,.broadband_top_txt2').addClass('editeTxt');
    editeTxtFun();
  })
  //宽带专区广告2编辑按钮
  $('.broadband_ul2>li').delegate('.bjDiv2,.proDbj2','click',function(){
    tcPosiAbso('kuandai2Div');
    $('.kuandai2Div,.mc').show();
    $('.kuandai2Div .guanggaomubanDiv').html($(this).parent().parent().html());
    $('.traffic_ul2_message1,.traffic_ul2_message2').addClass('editeTxt');
    editeTxtFun();
  })
  //手机配件编辑按钮事件1
  $('.phone_ul1_li1').delegate('.bjDiv2,.proDbj2','click',function(){
    $('.tcCzDom').removeClass('tcCzDom');//去掉操作dom的表示
    $(this).parent().parent().addClass('tcCzDom');//给当前操作的dom添加上标识
    tcPosiAbso('phone1AdDiv');
    $('.phone1AdDiv,.mc').show();
  })
  //手机配件广告弹层1关闭
  $('.phone1AdDiv_cancelBtn').click(function(){
    $('.phone1AdDiv,.mc').hide();
  })

  //手机配件广告弹层1保存关闭
  $('.phone1AdDiv_saveBtn').click(function(){
    var tcDataLi0=$(this).parents('.tcDiv').find('.guanggaoAddLi').eq(0);//获取弹层中的第一个广告li
    var mainTit1=tcDataLi0.children().find('.mainTit').val();//获取主标题
    var twoTit1=tcDataLi0.children().find('.twoTit').val();//获取副标题
    var priceTit1=tcDataLi0.children().find('.priceTit').val();//获取价格
    var ltjx1AdXcy1=tcDataLi0.children().find('.ltjx1AdXcy').val();//获取宣传语
    ltjx1AdXcy1=ltjx1AdXcy1.split('；')//将宣传语分割为数组
    $('.tcCzDom .phoneName1').text(mainTit1);//主标题赋值
    $('.tcCzDom .phone_yh1').text(twoTit1);//副标题赋值
    $('.tcCzDom .phone_price').text('￥'+priceTit1);//价格赋值
    $('.tcCzDom .orage_fc_nr').html('');//宣传语清空
    for(var aa=0;aa<ltjx1AdXcy1.length;aa++){
      $('.tcCzDom .orage_fc_nr').append('<li><span class="round2"></span><span>'+ltjx1AdXcy1[aa]+'</span></li>');
    }
    $('.tcCzDom').removeClass('tcCzDom');
    $('.phone1AdDiv,.mc').hide();
  })

  //手机配件编辑按钮事件2
  $('.phone_ul2_li2').delegate('.proDbj2','click',function(){
    $('.tcCzDom').removeClass('tcCzDom');//去掉操作dom的表示
    $(this).parent().parent().addClass('tcCzDom');//给当前操作的dom添加上标识
    tcPosiAbso('phone2AdDiv');
    $('.phone2AdDiv,.mc').show();
  })

  //手机配件广告弹层2关闭
  $('.phone2AdDiv_cancelBtn').click(function(){
    $('.phone2AdDiv,.mc').hide();
  })

  //手机配件广告弹层2保存关闭
  $('.phone2AdDiv_saveBtn').click(function(){
    var tcDataLi0=$(this).parents('.tcDiv').find('.guanggaoAddLi').eq(0);//获取弹层中的第一个广告li
    var mainTit1=tcDataLi0.children().find('.mainTit').val();//获取主标题
    var twoTit1=tcDataLi0.children().find('.twoTit').val();//获取副标题
    var priceTit1=tcDataLi0.children().find('.priceTit').val();//获取价格
    var ltjx1AdXcy1=tcDataLi0.children().find('.ltjx1AdXcy').val();//获取宣传语
    ltjx1AdXcy1=ltjx1AdXcy1.split('；')//将宣传语分割为数组
    $('.tcCzDom .phoneName2').text(mainTit1);//主标题赋值
    $('.tcCzDom .phone_yh2').text(twoTit1);//副标题赋值
    $('.tcCzDom .phone_price2').text('￥'+priceTit1);//价格赋值
    $('.tcCzDom .orage_fc_nr').html('');//宣传语清空
    for(var aa=0;aa<ltjx1AdXcy1.length;aa++){
      $('.tcCzDom .orage_fc_nr').append('<li><span class="round2"></span><span>'+ltjx1AdXcy1[aa]+'</span></li>');
    }
    $('.tcCzDom').removeClass('tcCzDom');
    $('.phone2AdDiv,.mc').hide();
  })



  //手机配件中的配件弹层编辑按钮事件
  $('.accessories_ul').delegate('.proDbj2','click',function(){
    $('.tcCzDom').removeClass('tcCzDom');//去掉操作dom的表示
    $(this).parent().parent().addClass('tcCzDom');//给当前操作的dom添加上标识
    tcPosiAbso('phonepj3AdDiv');
    $('.phonepj3AdDiv,.mc').show();
  })

  //手机配件配件广告弹层配件弹层关闭
  $('.phonepj3AdDiv_cancelBtn').click(function(){
    $('.phonepj3AdDiv,.mc').hide();
  })

  //手机配件配件广告弹层配件弹层关闭
  $('.phonepj3AdDiv_saveBtn').click(function(){
    var tcDataLi0=$(this).parents('.tcDiv').find('.guanggaoAddLi').eq(0);//获取弹层中的第一个广告li
    var mainTit1=tcDataLi0.children().find('.mainTit').val();//获取主标题
    var twoTit1=tcDataLi0.children().find('.twoTit').val();//获取副标题
    $('.tcCzDom .accessories_fc_nr').html('');//宣传语清空
    $('.tcCzDom .accessories_fc_nr').append('<li><span class="round2"></span><span>'+mainTit1+'</span></li>');
    $('.tcCzDom .accessories_fc_nr').append('<li><span class="round2"></span><span>'+twoTit1+'</span></li>');
    $('.tcCzDom').removeClass('tcCzDom');
    $('.phonepj3AdDiv,.mc').hide();
  })

  //上网卡广告1编辑按钮   同步时删除无需同步
  $('.InternetCard_ul').delegate('.bjDiv2,.proDbj2','click',function(){
    $('.tcCzDom').removeClass('tcCzDom');//去掉操作dom的表示
    $(this).parent().parent().addClass('tcCzDom');//给当前操作的dom添加上标识
    tcPosiAbso('InternetCardTcDiv');
    $('.InternetCardTcDiv,.mc').show();
    $('.InternetCardTcDiv .guanggaomubanDiv').html($(this).parent().parent().html());
    $('.InternetCard_message1,.InternetCard_message2,.img_div3_message1,.img_div3_message2').addClass('editeTxt');
    editeTxtFun();
  })
}

xmkDel();
function xmkDel(){
  //小模块删除按钮事件
  $('.traffic_ul1,.G4_ul1,.traffic_ul2,.G4_ul2,.lx_jx_pro_ul').delegate('.delLi','click',function(){
    $(this).parent().parent().parent().html('');
  })
}


//二级导航广告弹层部分出现
$('.adMuneBox,.tszq_Tnav_ul1>li,.th_Tnav_ul1>li').delegate('.bjDiv1','click',function(){
  tcPosiAbso('TwonavAdDiv');
  $('.TwonavAdDiv,.mc').show();
})
//二级导航广告弹层部分关闭
$('.TwonavAdDiv_saveBtn,.TwonavAdDiv_cancelBtn').click(function(){
  $('.TwonavAdDiv,.mc').hide();
})

// 流量专区广告弹层2部分关闭
$('.llzq2AdDiv_cancelBtn').click(function(){
  $('.llzq2AdDiv,.mc').hide();
})

//商品标签选择（无、新品、热卖、促销）
$('.labelInput1').bind('click',function(){
  var thisCheck=$(this).attr('checked');
  if(thisCheck){
    $(this).parents('.guanggaoAddLi').children().find('.pro_style').attr('class','pro_style').html('');
  }
})
$('.labelInput2').bind('click',function(){
  $(this).attr('checked','true');
  var this_dataClass=$(this).attr('data-class');
  var this_dataTxt=$(this).attr('data-text');
  $(this).parents('.guanggaoAddLi').children().find('.pro_style').attr('class',''+this_dataClass+'').html(this_dataTxt);
})



// 流量专区广告弹层2部分保存
$('.llzq2AdDiv_saveBtn').click(function(){
  var newHtml=$(this).parents('.tcDiv').find('.guanggaoAddLi').eq(0).children().find('.guanggaomubanDiv').html();
  $('.tcCzDom').html(newHtml);
  $('.llzq2AdDiv,.mc').hide();
  $('.tcCzDom').removeClass('.tcCzDom');
})

// //流量专区编辑按钮事件2
// $('.traffic_ul2,.G4_ul2').delegate('.bjDiv2','click',function(){
//   tcPosiAbso('llzq2AdDiv');
//   $('.llzq2AdDiv,.mc').show();
//   $('.llzq2AdDiv .guanggaomubanDiv').html($(this).parent().parent().parent().html());
//   $('.traffic_ul2_message1,.traffic_ul2_message2,.img_div3_message1,.img_div3_message2,.G4_ul2_message1,.G4_ul2_message2').addClass('editeTxt');
//   editeTxtFun();
// })
// // 流量专区广告弹层2部分关闭
// $('.llzq2AdDiv_saveBtn,.llzq2AdDiv_cancelBtn').click(function(){
//   $('.llzq2AdDiv,.mc').hide();
// })




//广告编辑弹层中宣传语编辑完成事件

$('.ltjx1AdXcy').blur(function(){
  var this_val=$(this).val();//获取到宣传语内容
  valArray=this_val.split('；');//将宣传语按照中文分号分割为数组
  var thisXcyUl=$(this).parents('.guanggaoAddLi').children().find('.orage_fc_nr');
  thisXcyUl.html('');
  for(var xcyi=0;xcyi<valArray.length;xcyi++){
    thisXcyUl.append('<li><span class="round2"></span><span>'+valArray[xcyi]+'</span></li>');
  }
})



//靓号专区配置弹层
$('.numberPzBtn').click(function(){
  tcPosiAbso('pzConfigDiv');
  $('.pzConfigDiv,.mc').show();
})

//靓号专区配置弹层关闭
$('.pzConfigDiv_saveBtn,.pzConfigDiv_cancelBtn').click(function(){
  $('.pzConfigDiv,.mc').hide();
})

//选择号码组
$('.numberGroupUl>li').click(function(){
  var numberGroupName=$(this).children().first().text();
  if($('.numberGroupUl3').length<5){
    if(!$(this).hasClass('numberGroupSel')){
      $(this).addClass('numberGroupSel').append('<span class="numberGroupSelIcon">√</span>');
    }
    $('.numberGroupUl2').append(numberGrop);
    $('.numberGropIndex').last().text('已选号码组'+($('.numberGroupUl3').length)+'：');
    $('.numberGroupName3').last().children().first().text(numberGroupName);
    numberGropProFun();
  }
})

$('.numberGroupUl2').delegate('.redNumber','keyup',function(){
  this.value=this.value.replace(/[^0-9]/g,'');
})
$('.numberGroupUl2').delegate('.afterpaste','keyup',function(){
  this.value=this.value.replace(/[^0-9]/g,'')
})
numberGropProFun();

function numberGropProFun(){
  //清除input框默认提示语
  tcInput1('redNumber','标红关键数字');
  tcInput1('redNumberSy','号码释义');
  tcInput1('numberGroupName1','号码组名称');
  //靓号专区配置弹层号码组选择商品
  $('.numberGroupUlLi2').delegate('.numberGropPro','click',function(){
    tcPosiAbso('numberProTcDiv');
    $('.numberProTcDiv,.mc2').show();
  })
  // 号段、尾号、生日靓号、年代号码选择
  $('.haoduanUl>li').click(function(){
    $(this).siblings().removeClass('colorff9900');
    $(this).addClass('colorff9900');
  })
  $('.weihaoStyleUl>li').click(function(){
    var thisLg=$(this).text().length;
    $(this).siblings().removeClass('colorff9900');
    $(this).addClass('colorff9900');
    $(this).parents('.numberGroupUl3').children().find('.redEnd').val('11');
    $(this).parents('.numberGroupUl3').children().find('.redStart').val(''+(12-thisLg)+'');
  })
  $('.birthDayStyleUl>li,.YearStyleUl>li').click(function(){
    $(this).siblings().removeClass('colorff9900');
    $(this).addClass('colorff9900');
    $(this).parents('.numberGroupUl3').children().find('.redStart').val('8');
    $(this).parents('.numberGroupUl3').children().find('.redEnd').val('11');
  })
  // 号码组关联商品名称清除
  $('.numberGroupProDivDel').click(function(){
    $(this).prev().remove();
  })

}
//删除号码组
$('.pzConfigDiv').delegate('.numberGroupDel','click',function(){
  $(this).parents('.numberGroupUlLi2').remove();
  console.log($('.numberGroupName3Txt').text())
  $('.numberGroupName2').each(function(){
    $(this).next().remove();
    $(this).parent().removeClass('numberGroupSel');
    var this_Text=$(this).text();
    var _this=$(this);
    $('.numberGroupName3Txt').each(function(){
      var numberGropText=$(this).text();
      console.log(numberGropText)

      if(numberGropText==this_Text){
        if(!_this.parent().hasClass('numberGroupSel')){
          _this.parent().addClass('numberGroupSel').append('<span class="numberGroupSelIcon">√</span>');
        }

      }
    })

  })


  // 剩余的进行排序
  for(var numberGropIndex=0;numberGropIndex<$('.numberGroupUl3').length;numberGropIndex++){
     $('.numberGroupUl3').eq(numberGropIndex).children().find('.numberGropIndex').text('已选号码组'+(numberGropIndex+1)+'：');
    }
})

// 号码组选择商品弹层关闭
$('.numberProTcDiv_saveBtn,.numberProTcDiv_cancelBtn').click(function(){
  $('.numberProTcDiv,.mc2').hide();
})


// 选择商品页面事件
$('.PageLi').click(function(){
  $('.PageLi').removeClass('PageNow');
  $(this).addClass('PageNow');
})


// //上网卡编辑按钮事件2
// $('.InternetCard_ul').delegate('.proDbj2','click',function(){
//   tcPosiAbso('InternetCardTcDiv');
//   $('.InternetCardTcDiv,.mc').show();
//   $('.InternetCardTcDiv .guanggaomubanDiv').html($(this).parent().parent().html());
//   $('.img_div3_message1,.img_div3_message2,.G4_ul2_message1,.G4_ul2_message2').addClass('editeTxt');
//   editeTxtFun();
// })

//上网卡弹层关闭
$('.InternetCardTcDiv_cancelBtn').click(function(){
  $('.InternetCardTcDiv,.mc').hide();
})
//上网卡弹层保存关闭  同步时删除无需同步
$('.InternetCardTcDiv_saveBtn').click(function(){
  var newHtml=$(this).parents('.tcDiv').find('.guanggaoAddLi').eq(0).children().find('.guanggaomubanDiv').html();
  $('.tcCzDom').html(newHtml);
  $('.tcCzDom').removeClass('tcCzDom');//去掉操作dom的表示
  $('.InternetCardTcDiv,.mc').hide();
})

//生活服务弹层部分开始
$('.lifeService_ul').delegate('.proDbj2','click',function(){
  tcPosiAbso('lifeServiceDiv');
  $('.lifeServiceDiv,.mc').show();
})
//生活服务弹层部分结束
$('.lifeServiceDiv_saveBtn,.lifeServiceDiv_cancelBtn').click(function(){
  $('.lifeServiceDiv,.mc').hide();
})

//根据banner数量添加下面的控制按钮
var bannerLg1=$('.banner_ul1>li').length;
$('.indexContent').css('min-width','1400px');
var win_width=$('.indexContent').width();//主要区域设置为1400的宽度
$('.banner_ul1>li').width(win_width);//将屏幕宽度赋值给banner图容器
var banner1_length=$('.banner_ul1>li').length;//获取banner图长度
$('.banner_ul1').width(win_width*banner1_length*2);//给容纳所有banner图的ul宽度赋值
for(var bannerUl1=0;bannerUl1<bannerLg1;bannerUl1++){
  $('.bannerNumberDiv').children().last().before('<div class="bannerIndexDiv">'+(bannerUl1+1)+'</div>');
  $('.bannerIndexDiv').eq(0).addClass('bannerIndexNow');
}
//如果banner数量达到了10个，则隐藏添加按钮
if(bannerLg1>9){
  $('.bannerIndexAdd').hide();
}
//banner增加按钮
$('.bannerIndexAdd').click(function(){
  $('.banner_ul1').stop(true);
  var bannerLg2=$('.banner_ul1>li').length;//获取目前banner的个数，如果大于8也就是9个，添加后隐藏添加按钮
  if(bannerLg2>8){
    $('.bannerIndexAdd').hide();
  }
  $('.banner_ul1').append(bannerAddLi);//bannerAddLi为banner添加对象，定义在obj.js中,在这里追加进bannerul
  banner1_length=$('.banner_ul1>li').length;//获取banner图长度
  $('.banner_ul1>li').last().children().find('.bannerIndex').text('banner'+banner1_length);
  $('.banner_ul1').width(win_width*banner1_length*2);//给容纳所有banner图的ul宽度赋值
  $('.banner_ul1>li').width(win_width);
  $('.banner_ul1').animate({'margin-left':-(banner1_length-1)*win_width+'px'},1000);
  $('.bannerNumberDiv').children().last().before('<div class="bannerIndexDiv">'+(bannerLg2+1)+'</div>');
  $('.bannerIndexDiv').removeClass('bannerIndexNow').last().addClass('bannerIndexNow');
  $('.banner_ul1>li').undelegate('.bannermoveBefore1','click');
  $('.banner_ul1>li').undelegate('.bannermoveAfter1','click');
  bannerCz();
  moveBefore();
  moveAfter();
})



function bannerCz(){
  // banner删除按钮
  $('.banner_ul1>li').delegate('.bannerDel1','click',function(){
    // $(this).parents('.AdPro').siblings().first().children().last().attr('src','');
    var DelIndex=$(this).parents('.AdPro').parent().index();//获取当前删除的banner的下标
    var banner1_length=$('.banner_ul1>li').length;//获取banner图长度
    if(banner1_length-DelIndex<2){//判断删除的是否为最后一个banner
      $(this).parents('.AdPro').parent().remove();//去掉banner位置
      $('.banner_ul1').animate({'margin-left':-(banner1_length-2)*win_width+'px'},1000);
    }else{
      $(this).parents('.AdPro').parent().remove();//去掉banner位置
    }
    $('.bannerIndexDiv').eq($('.banner_ul1>li').length).remove();//去掉下面数字的最后一个
    $('.bannerIndexAdd').show();//添加按钮出现
    $('.banner_ul1>li').each(function(){//对于剩余的banner图的title进行更新
      var thisIndex=$(this).index();
      $(this).children().find('.bannerIndex').text('banner'+(thisIndex+1));
    })
    $('.banner_ul1>li').children().find('.bannermoveBefore1,.bannermoveAfter1').show();
    $('.banner_ul1>li').eq(0).children().find('.bannermoveBefore1').hide();
    $('.banner_ul1>li').last().children().find('.bannermoveAfter1').hide();
  })
  $('.banner_ul1>li').children().find('.bannermoveBefore1,.bannermoveAfter1').show();
  $('.banner_ul1>li').eq(0).children().find('.bannermoveBefore1').hide();
  $('.banner_ul1>li').last().children().find('.bannermoveAfter1').hide();

  //banner下面按钮控制
  $('.bannerNumberDiv').delegate('.bannerIndexDiv','click',function(){
    $('.banner_ul1').stop(true);
    var this_index=$(this).index();
    $('.bannerIndexDiv').removeClass('bannerIndexNow');
    $(this).addClass('bannerIndexNow');
    $('.banner_ul1').animate({'margin-left':-(this_index)*win_width+'px'},1000);
  })

  // banner编辑弹层部分开始
  $('.banner_ul1>li').delegate('.bannerbj1','click',function(){
    var thisCzLi=$(this).parent().parent().parent();//操作的bannerLi
    thisCzLi.addClass('tcCzDom');
    var this_bannerIndex=thisCzLi.index();
    tcPosiAbso('bannerTcDiv');
    $('.bannerTcDiv .numb').text(this_bannerIndex+1);
    $('.bannerTcDiv,.mc').show();
  })
}

bannerCz();
moveBefore();
moveAfter();

function moveBefore(){
  //前移
  $('.banner_ul1>li').delegate('.bannermoveBefore1','click',function(){
    var thisLIOBj=$(this).parent().parent().parent();
    var thisIndex=thisLIOBj.index();
    if(thisIndex>0){
      $('.banner_ul1').stop(true);
      var thisLiIndex1=thisIndex;
      var moveFlag=true;//是否可移动判断
      thisIndex--;
      while (moveFlag) {
        var targetLiDom=$('.banner_ul1>li').eq(thisIndex);//获取目标Li
        if(targetLiDom.hasClass('lockingDom')){
          thisIndex--;
        }else{
          $('.banner_ul1').animate({'margin-left':-(thisIndex)*win_width+'px'},1000);
          thisLIOBj.children().find('.bannerIndex').text('banner'+(thisIndex+1));//当前操作banner的标题banner数值改为替换目标的值
          targetLiDom.children().find('.bannerIndex').text('banner'+(thisLiIndex1+1));//替换目标banner的标题banner数值改为当前操作的值
          var czLiDomHtml=thisLIOBj.html();//获取当前操作banner的内容
          thisLIOBj.html(targetLiDom.html());
          targetLiDom.html(czLiDomHtml);
          moveFlag=false;
        }
      }
      $('.bannerIndexDiv').removeClass('bannerIndexNow').eq(thisIndex).addClass('bannerIndexNow');
      $('.banner_ul1>li').children().find('.bannermoveBefore1,.bannermoveAfter1').show();
      $('.banner_ul1>li').eq(0).children().find('.bannermoveBefore1').hide();
      $('.banner_ul1>li').last().children().find('.bannermoveAfter1').hide();
    }
  })
}

function moveAfter(){
  //后移
  $('.banner_ul1>li').delegate('.bannermoveAfter1','click',function(){
    var thisLIOBj=$(this).parent().parent().parent();//当前操作的bannerLi
    var thisLiIndex=thisLIOBj.index();//当前操作的bannerLi的下标
    var thisLiIndex1=thisLiIndex;
    if(thisLiIndex>-1){
      $('.banner_ul1').stop(true);
      var maxLg=$('.banner_ul1>li').length;//banner的总长度
      var moveFlag=true;//是否可移动判断
      thisLiIndex++;
      while (moveFlag) {
        if(thisLiIndex<maxLg&&thisLiIndex>0){
          var targetLiDom=$('.banner_ul1>li').eq(thisLiIndex);//获取目标Li
          if(targetLiDom.hasClass('lockingDom')){
            thisLiIndex++;
          }else{
            $('.banner_ul1').animate({'margin-left':-(thisLiIndex)*win_width+'px'},1000);
            thisLIOBj.children().find('.bannerIndex').text('banner'+(thisLiIndex+1));//当前操作banner的标题banner数值改为替换目标的值
            targetLiDom.children().find('.bannerIndex').text('banner'+(thisLiIndex1+1));//替换目标banner的标题banner数值改为当前操作的值
            var czLiDomHtml=thisLIOBj.html();//获取当前操作banner的内容
            thisLIOBj.html(targetLiDom.html());
            targetLiDom.html(czLiDomHtml);
            $('.bannerIndexDiv').removeClass('bannerIndexNow').eq(thisLiIndex).addClass('bannerIndexNow');
            $('.banner_ul1>li').children().find('.bannermoveBefore1,.bannermoveAfter1').show();
            $('.banner_ul1>li').eq(0).children().find('.bannermoveBefore1').hide();
            $('.banner_ul1>li').last().children().find('.bannermoveAfter1').hide();
            moveFlag=false;
          }
        }else{
          moveFlag=false;
        }
      }
    }

  })
}

//是否显示角标
$('.guanggaoIconShow').bind('click',function(){
  var thisCheck=$(this).prop('checked');
  if(thisCheck){
    $(this).parents('.guanggaoAddDiv').children().find('.guanggaoIcon').show();
  }else{
    $(this).parents('.guanggaoAddDiv').children().find('.guanggaoIcon').hide();
  }
})
//banner弹层关闭
$('.bannerTcDiv_cancelBtn').click(function(){
  $('.bannerTcDiv,.mc').hide();
  $('.tcCzDom').removeClass('tcCzDom');
})

$('.bannerTcDiv_saveBtn').click(function(){
  var thisLockState=$(this).parents('.tcDiv').children().find('.Adlock').prop('checked');
  var thisLockingTime=$(this).parents('.tcDiv').children().find('#bannerlockStop1_1').val();
  if(thisLockState){//如果锁定选项为真
    $('.tcCzDom').addClass('lockingDom');//加上锁定标识
    //$('.tcCzDom').children().find('.cz_btnUl1').hide();//隐藏操作按钮
    $('.tcCzDom').children().find('.bannerLockEndTime').html('锁定截止时间：'+thisLockingTime).show();//锁定时间出现
  }else{
    $('.tcCzDom').removeClass('lockingDom');//加上锁定标识
    $('.tcCzDom').children().find('.cz_btnUl1').show();//隐藏操作按钮
    $('.tcCzDom').children().find('.bannerLockEndTime').html('锁定截止时间：'+thisLockingTime+'').hide();//锁定时间出现
  }
  $('.bannerTcDiv,.mc').hide();
  $('.tcCzDom').removeClass('tcCzDom');
})




// 宽带专区广告弹层1
$('.broadbandConDiv').delegate('.proDbj2','click',function(){
  if($(this).parents().hasClass('broadband_top')){
    tcPosiAbso('kuandai1Div');
    $('.kuandai1Div,.mc').show();
    var kuandaiAdd1=$(this).parents('.broadband_top').html();
    $('.kuandai1Div .guanggaomubanDiv').html(kuandaiAdd1);
    $('.kuandai1Div .guanggaomubanDiv').children().find('.broadband_top_txt1,.broadband_top_txt2').addClass('editeTxt');
    editeTxtFun();
  }
})


//宽带专区广告弹层1关闭
$('.kuandai1Div_saveBtn,.kuandai1Div_cancelBtn').click(function(){
  $('.kuandai1Div,.mc').hide();
})

// 宽带专区广告弹层2
$('.broadbandConDiv').delegate('.proDbj2','click',function(){
  if($(this).parents().hasClass('broadband_ul2')){
    tcPosiAbso('kuandai2Div');
    $('.kuandai2Div,.mc').show();
    var kuandaiAdd2=$(this).parent().parent().html();
    $('.kuandai2Div .guanggaomubanDiv').html(kuandaiAdd2);
    $('.kuandai2Div .guanggaomubanDiv').find('.traffic_ul2_message1,.traffic_ul2_message2').addClass('editeTxt');
    editeTxtFun();
  }
})

//宽带专区广告弹层2关闭
$('.kuandai2Div_saveBtn,.kuandai2Div_cancelBtn').click(function(){
  $('.kuandai2Div,.mc').hide();
})

// 弹层输入框清除默认提示语
function tcInput1(inputClass,DefaultValue){
  $('.'+inputClass+'').focus(function(){
    var this_val=$(this).val();
    if(this_val==DefaultValue){
      $(this).removeClass('color999');
      $(this).val('');
    }
  }).blur(function(){
    var this_val=$(this).val();
    if(this_val==''){
      $(this).addClass('color999');
      $(this).val(DefaultValue);
    }
  })
}
tcInput1('mainTit','30字以内');
tcInput1('twoTit','40字以内');
tcInput1('priceTit','直接输入数字，支持小数点后两位');
tcInput1('huodongPrice','直接输入数字，支持小数点后两位');
tcInput1('newPlanName','名称不超过15个字');



$('.nav_indicate_div .AdPro,.lx_jx_pro_ul .AdPro,.traffic_ul1 .AdPro,.traffic_ul2 .AdPro,.broadband_top .AdPro,.broadband_ul2 .AdPro,.G4_ul1 .AdPro,.G4_ul2 .AdPro,.phone_ul1_li1 .AdPro,.phone_ul2_li2 .AdPro,.accessories_ul .AdPro,.accessoriesMuban_ul .AdPro,.InternetCard_ul .AdPro').each(function(){
  $(this).append('<p class="lockingTips lockingTipShow">锁定截止时间：<span class="mklockTime">2015/11/24 9:00:20</span></p>');
})

// 数据大类title
data1Tit=['查询','办理','交费'];
// 查询插入
var querydata=fastNavdata.query;
var dataD1='<div class="dataNav1"><img src="images/backStage/AddIcon2.png" class="AddIcon2"><img src="images/backStage/minusIcon.png" class="minusIcon">'+data1Tit[0]+'</div><div class="dataNav2Div">';
for(var data1=0;data1<querydata.sections.length;data1++){
  var dataD2tit=querydata.sections[data1].section.title;
  dataD1+='<ul class="fastNavDataD2"><div class="dataNav2"><img src="images/backStage/AddIcon2.png" class="AddIcon2"><img src="images/backStage/minusIcon.png" class="minusIcon">'+dataD2tit+'</div><ul class="fastNavDataD3">';
  for(var data2=0;data2<querydata.sections[data1].section.menuItems.length;data2++){
    var data3=querydata.sections[data1].section.menuItems[data2].title;
    dataD1+='<li>'+data3+'</li>';

  }
  dataD1+='</ul></ul>';
}
dataD1+='</div>';
$('.fastNavDataDiv').append(dataD1);
// 办理插入
var handledata=fastNavdata.handle;
var dataD2='<div class="dataNav1"><img src="images/backStage/AddIcon2.png" class="AddIcon2"><img src="images/backStage/minusIcon.png" class="minusIcon">'+data1Tit[1]+'</div><div class="dataNav2Div">';
for(var data1=0;data1<handledata.sections.length;data1++){
  var dataD2tit=handledata.sections[data1].section.title;
  dataD2+='<ul class="fastNavDataD2"><div class="dataNav2"><img src="images/backStage/AddIcon2.png" class="AddIcon2"><img src="images/backStage/minusIcon.png" class="minusIcon">'+dataD2tit+'</div><ul class="fastNavDataD3">';
  for(var data2=0;data2<handledata.sections[data1].section.menuItems.length;data2++){
    var data3=handledata.sections[data1].section.menuItems[data2].title;
    dataD2+='<li>'+data3+'</li>';

  }
  dataD2+='</ul></ul>';
}
dataD2+='</div>';
$('.fastNavDataDiv').append(dataD2);
// 交费插入
var paydata=fastNavdata.pay;
var dataD3='<div class="dataNav1"><img src="images/backStage/AddIcon2.png" class="AddIcon2"><img src="images/backStage/minusIcon.png" class="minusIcon">'+data1Tit[2]+'</div><div class="dataNav2Div">';
for(var data1=0;data1<paydata.sections.length;data1++){
  var dataD2tit=paydata.sections[data1].section.title;
  dataD3+='<ul class="fastNavDataD2"><div class="dataNav2"><img src="images/backStage/AddIcon2.png" class="AddIcon2"><img src="images/backStage/minusIcon.png" class="minusIcon">'+dataD2tit+'</div><ul class="fastNavDataD3">';
  for(var data2=0;data2<paydata.sections[data1].section.menuItems.length;data2++){
    var data3=paydata.sections[data1].section.menuItems[data2].title;
    dataD3+='<li>'+data3+'</li>';
  }
  dataD3+='</ul></ul>';
}
dataD3+='</div>';
$('.fastNavDataDiv').append(dataD3);

//快速导航弹层内导航数据树控制
$('.dataNav1,.dataNav2').bind('click',function(){
  $(this).next().toggle();
  $(this).find('.AddIcon2,.minusIcon').toggle();
})

// 快速导航选择小导航
$('.fastNavDataD3>li').bind('click',function(){
  var selectNav=$(this).text();
  var NavAddFlag=true;
  $('.fastNavName').each(function(){
    if($(this).text()==selectNav){
      NavAddFlag=false;
    }
  })
  var NavAdd='<li><span class="fastNavName">'+selectNav+'</span><img src="images/backStage/delIcon2.png" class="fastNavDel"></li>';
  if(NavAddFlag){
    $('.fastNavSelUl').append(NavAdd);
  }
  var yxzLg=$('.fastNavName').text().length;
  if(yxzLg>30){
    $('.fastNavSelUl>li').last().remove();
  }
  fastNavDel();
})

//删除已选的快速导航
function fastNavDel(){
  $('.fastNavDel').bind('click',function(){
    $(this).parent().remove();
  })
}

//快捷导航弹层出现.
$('.user_operate_ul').delegate('.bjDiv1','click',function(){
  $(this).parent().parent().addClass('tcCzDom');
  var oldFastNav=[];
  var oldFastLi='';
  $('.tcCzDom .user_iperate_xm_ul>li').each(function(){
    oldFastNav.push($(this).find('.fastname').text());
  })
  for(var fastI=0;fastI<oldFastNav.length;){
    oldFastLi+='<li><span class="fastNavName">'+oldFastNav[fastI]+'</span><img src="images/backStage/delIcon2.png" class="fastNavDel"></li>';
    fastI++;
  }
  var ADTit=$('.tcCzDom').find('.user_iperate_title').text();
  $('.fastNavDiv .ADTit').val(ADTit);
  $('.fastNavDiv,.mc').show();
  $('.fastNavSelUl').html(oldFastLi);
  fastNavDel();
})
//快捷导航弹层关闭
$('.fastNavDiv_cancelBtn').click(function(){
  $('.fastNavDiv,.mc').hide();
  $('.tcCzDom').removeClass('tcCzDom');
})

// 快速导航保存
$('.fastNavDiv_saveBtn').click(function(){
  $('.fastNavDiv,.mc').hide();
  var fastNavArray=[];
  $('.fastNavSelUl>li').each(function(){
    fastNavArray.push($(this).text());
  })
  var czFastNavUl=$('.tcCzDom').children().find('.user_iperate_xm_ul');
  czFastNavUl.html('');
  for(var fastI=0;fastI<fastNavArray.length;fastI++){
    czFastNavUl.append('<li><span class="fastname">'+fastNavArray[fastI]+'</span></li>');
  }
  var ADTit=$('.fastNavDiv .ADTit').val();
  $('.tcCzDom').find('.user_iperate_title').text(ADTit);
  $('.tcCzDom').removeClass('tcCzDom');
})
// $('.user_iperate_xm_ul>li').delegate('.closeLi1','click',function(){
//   $(this).parent().parent().remove();
// })

//
// //立即发布按钮
// $('.ljfbBtn').click(function(){
//   $('.fbConfirmDiv,.mc2').show();
// })
// //定时发布按钮
// $('.dsfbBtn').click(function(){
//   $('.dsFbDiv,.mc2').show();
// })

//备份按钮 need_del
$('.beifenBtn,.bfDiv').bind('click',function(){
  $('.beifenDiv,.mc').show();
})


//备份记录弹层出现
$('.bfjlDiv').bind('click',function(){
  tcPosiAbso('bfjlTcDiv');
  $('.bfjlTcDiv,.mc').show();
})

//备份记录弹层打开
$('.save_list').bind('click',function(){
    tcPosiAbso('pifubeifenDiv');
    $('.pifubeifenDiv,.mc').show();
})
$('.closeX').bind('click',function(){
    $('.pifubeifenDiv').hide();
    tcPosiAbso('tcDivpifu');
    $('.tcDivpifu,.mc').show();
})

//备份记录弹层关闭
$('.bfjlTcDiv_saveBtn,.bfjlTcDiv_cancelBtn').click(function(){
  $('.bfjlTcDiv,.mc').hide();
})

//立即发布按钮
$('.ljfbBtn').click(function(){
  tcPosiAbso('newfbDiv');
  $('.newfbDiv,.mc').show();
})

//发布计划删除按钮
$('.PlanCxResult').delegate('.PlanTrDel','click',function(){
  $(this).parents('tr').remove();
})

//备份记录删除按钮
$('.bfPlanCxResult').delegate('.bfTrDel','click',function(){
  $(this).parents('tr').remove();
})

var shengfenCheck=0;//已选择省份数量
var shengfenLg=$('.shengfenCheck').length;//省份数量
//发布区域全国选择
$('.countryCheck').click(function(){
  console.log('country')
  var this_check=$(this).prop('checked');
  if(this_check){
    $(this).addClass('Areayxz');
    shengfenCheck=shengfenLg;
    $(this).prop('checked','true');
    $('.shengfenCheck').addClass('Areayxz').prop('checked','true');
  }else{
      $(this).removeClass('Areayxz');
      shengfenCheck=0;
      $(this).removeProp('checked');
      $('.shengfenCheck').removeProp('checked');
  }
})

//发布区域省份选择
$('.shengfenCheck').click(function(){
  var this_check=$(this).prop('checked');
  if(this_check){
    $(this).addClass('Areayxz');
    $(this).prop('checked','true');
    shengfenCheck++;
  }else{
    $(this).removeClass('Areayxz');
    $(this).removeProp('checked');
    shengfenCheck--;
  }
  if(shengfenCheck===shengfenLg){
    $('.countryCheck').addClass('Areayxz').prop('checked','true');
  }else{
    $('.countryCheck').removeClass('Areayxz').removeProp('checked');
  }
})

//发布关闭事件
$('.newfbDiv_fabuBtn,.newfbDiv_cancelBtn').click(function(){
  $('.newfbDiv,.mc').hide();
})
$('.tszqMokuai').css('display','block');


// 联通精选广告模板选择
$('.AdStyle>li').click(function(){
  var this_type=$(this).attr('data-type');
  $('.ltjxLeft .rqtjMokuai .CardMbUl>li').hide();
  var show_num=0;
  $('.ltjxLeft .rqtjMokuai .CardMbUl>li').each(function(){
    var this_type2=$(this).attr('data-type');
    if(this_type2==this_type||this_type2=='ltjxzdy'){
      show_num++;
      $(this).show();
    }
  })
  if(show_num>3){
    jsScroll(document.getElementById('Add_MubanDiv2'), 5, 'divScrollBar4');
  }else{
    $('.divScrollBar4').remove();
  }
})

//自定义弹层关闭
$('.zdyTcDiv_saveBtn,.zdyTcDiv_cancelBtn').click(function(){
  $('.zdyTcDiv,.mc').hide();
  $('.tcCzDom').removeClass('tcCzDom');
})


// 警示提示框关闭
$('.warnDiv_confirm').click(function(){
  $('.warnDiv,.mc3').hide();
})

// 操作提示框关闭
$('.ConfirmDiv_confirm,.ConfirmDiv_cancel').click(function(){
  $('.ConfirmDiv,.mc3').hide();
})

$('.priceTit,.huodongPrice').keyup(function(){
  var reg = $(this).val().match(/\d+\.?\d{0,2}/);
    var txt = '';
    if (reg != null) {
        txt = reg[0];
    }
    $(this).val(txt);
}).bind('paste',function(){
  $(this).keyup();
})





// 宣传语限制最多3条,传入参数为弹层的Class
function XCYMax(TCDivClass){
  var ltjx1AdXcy1new = $('.'+TCDivClass+' .ltjx1AdXcy').val();//获取宣传语
  ltjx1AdXcy1new = ltjx1AdXcy1new.split('；');//将宣传语分割为数组
  console.log(ltjx1AdXcy1[3]+"ltjx1AdXcy1.length=="+ltjx1AdXcy1.length);
  if(ltjx1AdXcy1new.length>4||ltjx1AdXcy1new[3].trim().length>0){
      $.MsgBox.alert("宣传语最多三句！");
      return null;
  }
}
