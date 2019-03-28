(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function () {
    //获取花灯信息
    $.ajax({
       url: './js/data.js',

    });
    //活动规则按钮
    var rulePageFlag = 0;
    $('.rule-btn').on('click',function(){
        if($(this).hasClass('rb-0')){
            rulePageFlag = 0;
        }else if($(this).hasClass('rb-1')){
            rulePageFlag = 1;
        }else if($(this).hasClass('rb-2')){
            rulePageFlag = 2;
        }
        $('#rule').show().siblings().hide();
    });
    //活动规则页确定按钮返回
    $('.gohome').on('click',function(){
        $('#rule').hide();
        switch(rulePageFlag){
            case 0:
            $('#con').show();
            break;
            case 1:
            $('#make').show();
            break;
            case 2:
            $('#look-result').show();
            break;
        }
    });
    var lanternsNum = Math.floor(Math.random() * 9) + 1;
    var imgPath = './images/';
    var lanternsName = ['亨通花灯','安康花灯','发财花灯','团圆花灯','快乐花灯','幸运花灯','平安花灯','幸福花灯','吉祥花灯'];
    //绑定数据
    (function(){
        $('.my-hd').attr("src",imgPath + "l_" + lanternsNum + ".png");
        $('.hd-name').text(lanternsName[lanternsNum-1]);
    })();
    //首页花灯大赏按钮
    $('.start-btn').on('click',function(){
        $('#tofriend').show();
        showMask();
    });
    //发送好友按钮
    $('#share-btn').on('click',function(){
        $('#tofriend').hide();
        $('#con').hide();
        $('#make').show();
        $('#share-message').show();
        $('#mask').addClass('co')
    });
    //生成专属海报按钮
    $('#make-btn').on('click',function(){
        $('#can-code').show();
        showMask();
    });

    //拼花灯记录查看按钮
    $('#record-list li').on('click','a',function(){
        var $this = $(this);
        $('#make').hide();
        $('#look-result').show();
    });


    //获取验证码
    function getCodeStyle(btnId) {
        var orderTime = 60,
            timeLeft = orderTime,
            btn = btnId;
        function timeCount(){
            timeLeft-=1;
            if (timeLeft>0){
                btn.val(timeLeft+"s重新获取");
                setTimeout(timeCount,1000);
                btn.css({
                    color: '#a2a2a2'
                });
            }
            else {
                btn.val("发送验证码");
                btn.css({
                    color: '#000000'
                });
                timeLeft = orderTime;
                btn.removeAttr("disabled");
            }
        }
        btn.on('click', function () {
            $(this).attr("disabled",true);
            timeCount();
        });
    }
    getCodeStyle($('#codeBtn'));




    //关闭弹窗按钮
    $('.close').on('click',function(){
        $(this).parent().hide();
        hideMask();
    });
    //点击遮罩层
    $('#mask,#share-message').on('click',function(){
        if($('#share-message').css('display') === 'block'){
            $('#share-message').hide();
            hideMask();
        }
    });
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
        $('body').css('position','fixed');
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
        $('body').css('position','unset');
    }
});