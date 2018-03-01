
// 测试操作提示框区域
$('.indexContent').delegate('.ltjxWarp #lx_jx_pro_ul .lx_jx_pro_ul>li .AdPro .cz_btnUl .delLi','click',function(){
  alert(1);
})

function bannerDel(arguments){
  var _this=arguments.obj;//获取操作对象
  $('.ConfirmDiv,.mc3').hide();
  // $(this).parents('.AdPro').siblings().first().children().last().attr('src','');
  var DelIndex=_this.parents('.AdPro').parent().index();//获取当前删除的banner的下标
  var banner1_length=$('.banner_ul1>li').length;//获取banner图长度
  if(banner1_length-DelIndex<2){//判断删除的是否为最后一个banner
    _this.parents('.AdPro').parent().remove();//去掉banner位置
    $('.banner_ul1').animate({'margin-left':-(banner1_length-2)*win_width+'px'},1000);
  }else{
    _this.parents('.AdPro').parent().remove();//去掉banner位置
  }
  $('.bannerIndexDiv').eq($('.banner_ul1>li').length).remove();//去掉下面数字的最后一个
  $('.bannerIndexAdd').show();//添加按钮出现
  $('.banner_ul1>li').each(function(){//对于剩余的banner图的title进行更新
    var thisIndex=_this.index();
    _this.children().find('.bannerIndex').text('banner'+(thisIndex+1));
  })
  $('.banner_ul1>li').children().find('.bannermoveBefore1,.bannermoveAfter1').show();
  $('.banner_ul1>li').eq(0).children().find('.bannermoveBefore1').hide();
  $('.banner_ul1>li').last().children().find('.bannermoveAfter1').hide();
}


$('.banner_ul1').delegate('.bannerDel1','click',function(){
  $('.ConfirmDiv,.mc3').show();
  var _this1=$(this);
  $('.ConfirmDiv').undelegate('.ConfirmDiv_confirm','click');
  $('.ConfirmDiv').delegate('.ConfirmDiv_confirm','click',function(){
    bannerDel({
      'obj':_this1,
    });
  })
})
