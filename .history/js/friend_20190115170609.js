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

    //好友入口弹窗
    (function(){
        $('#tofriend').show();
        showMask();
    })();
    //入口弹窗拼花灯按钮
    $('#fri-pbtn').on('click',function(){
        //没有自己的花灯
        $('#tofriend').hide();
        //$('#gethd').show();
        //有自己的花灯了
        $('#tofriend').hide();
        $('#jigsaw').show();
    });

    //点击拼灯交互页进入我的花灯成功&不成功页
    $('#jigsaw').on('click',function(){
        $('#jigsaw').hide();
        $('#con').hide();
        hideMask();
        $('#make').show();
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
                    color: '#ffffff'
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