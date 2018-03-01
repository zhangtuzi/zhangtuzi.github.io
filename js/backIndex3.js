//第三方账号登陆限制
//$('.LeftNav,.LeftMuban').remove();//左侧模板清除
$('.mobileNumber_div3').eq(0).hide();//靓号修复
// $('.indexContent').css('border','none');//模板隐藏后样式调整
// $('.renovationTWDiv').css('padding-left','65px');//模板隐藏后样式调整
// $('.indexContent,.renovationTWDiv').css({'left':'0','margin-left':'0'});//模板隐藏后样式调整
// $('Body').css({'width':'100%','min-width':'1200px','background':'#f5f5f5'});//模板隐藏后样式调整
// $('.nav_indicate_div').css('left','0');//二级导航样式调整
$('.mobileNumberUl1Ad,.lxjxNavAddDiv,.bannerIndexAdd').remove();//按钮隐藏
// $('.TopBtndiv .topBtn1,.TopBtndiv .topBtn3').remove();
// $('.TopBtndiv').width('130px').css({'margin-right':'0'});
$('.AdPro,.ProMc,.topAdPro').remove();//清除配件以外的模块编辑层
// $('.topADBox,.header1,.suspend_nav_div,.banner_div1,.user_message_div,.ltjxWarp,.H1042').remove();//清除配件以外的模块
// $('.phoneAccessories_div_header,.phone_ul1,.InternetCard,.lifeService,.bottom_nav_div,.reference_div,.Left_win').remove();//清除配件以外的模块
$(function(){
  $('.lx_jx_sx_ul>li').removeClass('marginR0').last().addClass('marginR0');
  $('.Adlock').parent().remove();
  $('.phonepj3AdDiv #phone3ProSel').parent().remove();//弹层上面配置链接的选择商品去掉
  var lxjxLg=$('.lx_jx_sx_ul>li').length;
  $('.lx_jx_sx_ul').width(114*lxjxLg-16);
})


//联通精选部分切换按钮
  $('.lx_jx_sx_ul>li').click(function(){
    var this_index=$(this).index();
    console.log(this_index)
    $('.lx_jx_pro_ul').removeClass('lx_jx_pro_ulShow').hide();
    $('.lx_jx_pro_ul').eq(this_index).addClass('lx_jx_pro_ulShow').show();
    $(this).addClass('lx_jx_sx_select').siblings().removeClass('lx_jx_sx_select');
  })
//根据banner数量添加下面的控制按钮
var bannerLg1=$('.banner_ul1>li').length;
var win_width=$('.indexContent').width();//主要区域设置为1400的宽度
$('.banner_ul1>li').width(win_width);//将屏幕宽度赋值给banner图容器
var banner1_length=$('.banner_ul1>li').length;//获取banner图长度
$('.banner_ul1').width(win_width*banner1_length*2);//给容纳所有banner图的ul宽度赋值
for(var bannerUl1=0;bannerUl1<bannerLg1;bannerUl1++){
  $('.bannerNumberDiv').children().last().before('<div class="bannerIndexDiv">'+(bannerUl1+1)+'</div>');
  $('.bannerIndexDiv').eq(0).addClass('bannerIndexNow');
}


$('.linkInputClear').click(function(){
  $(this).siblings().first().val('');
})


// 配件部分编辑按钮弹层添加
var serveLife='<div class="ProMc"></div><div class="AdPro"><div class="proDbj2 bjDiv1 lockDn">';
serveLife+='<img src="images/backStage/bjIcon.png" class="czIcon1 bjIcon">';
serveLife+='<span>编辑</span></div></div>';
$('.sjpjAndInternetCard .accessories_ul>li').each(function(){
  $(this).append(serveLife);
})
tcInput1('mainTit','15字以内');
tcInput1('priceTit','直接输入数字，支持小数点后两位');
tcInput1('newPlanName','名称不超过15个字');
// 弹层输入框清除默认提示语
function tcInput1(inputClass,DefaultValue){
  $('.'+inputClass+'').focus(function(){
    var this_val=$(this).val();
    if(this_val===DefaultValue){
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

//发布管理查询开始时间
jeDateFun1('TakeTimeStart','');
//发布管理查询结束时间
jeDateFun1('TakeTimeEnd','');
//新增发布计划开始时间
jeDateFun('newPlanTimeStart','0000-00-00 00:00:00');
//新增发布计划结束时间
jeDateFun('newPlanTimeEnd','0000-00-00 00:00:00');

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



// 各个区域的备份、发布按钮
var bffbObj='';
bffbObj+='<div class="bfFbDiv4"><div class="bfDiv fl czDiv">';
bffbObj+='<img src="images/backStage/beifen1_icon.png" class="czIcon1"><span>保存备份</span></div>';
bffbObj+='<div class="bfjlDiv fl czDiv"><img src="images/backStage/beifenjilu1_icon.png" class="czIcon1">';
bffbObj+='<span>备份记录</span></div></div>';

$('.phoneAccessories').prepend(bffbObj);


//手机配件中的配件弹层编辑按钮事件
$('.indexContent').delegate('.accessories_ul .proDbj2','click',function(){
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


//备份按钮 need_del
$('.beifenBtn,.bfDiv').bind('click',function(){
  $('.beifenDiv,.mc').show();
})


//备份记录弹层出现
$('.bfjlDiv').bind('click',function(){
  tcPosiAbso('bfjlTcDiv');
  $('.bfjlTcDiv,.mc').show();
})


//备份记录弹层关闭
$('.bfjlTcDiv_saveBtn,.bfjlTcDiv_cancelBtn').click(function(){
  $('.bfjlTcDiv,.mc').hide();
})

// 发布成功弹层关闭
$('.ckPageBtn,.fbSucessDiv_backBtn').click(function(){
  $('.fbSucessDiv,.mc2').hide();
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





// 广告弹层绝对定位时确定显示位置，传入参数为弹层的class
function tcPosiAbso(tcClass){
  var winScrollTop=$(window).scrollTop();
  var winScrollLeft=$(window).scrollLeft();
  var _Left=$('.'+tcClass+'').width()/2;
  $('.'+tcClass+'').css({'top':winScrollTop+45,'margin-left':winScrollLeft-_Left});
}


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

//banner下面按钮控制
$('.bannerNumberDiv').delegate('.bannerIndexDiv','click',function(){
  $('.banner_ul1').stop(true);
  var this_index=$(this).index();
  $('.bannerIndexDiv').removeClass('bannerIndexNow');
  $(this).addClass('bannerIndexNow');
  $('.banner_ul1').animate({'margin-left':-(this_index)*win_width+'px'},1000);
})
