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
    var lanternsArr = {
        //亨通
        1: [
            {
                percent: 100,
                desc: '全球通俱乐部祝您2019财运亨通，好运连连！'
            },
            {
                percent: 66,
                desc: '吉祥如意伴随你，平安健康守护你~'
            },
            {
                percent: 77,
                desc: '来年发财钱如意！打麻将时不放炮，幸福时时跑不掉~'
            },
            {
                percent: 88,
                desc: '让风捎去满心的祝福，缀满你团圆的期盼~'
            },
            {
                percent: 70,
                desc: '快乐如花，芬芳香甜；快乐如阳，幸福温暖~'
            },
            {
                percent: 55,
                desc: '新的开始，好运接连~'
            },
            {
                percent: 80,
                desc: '年年圆满如意，四季平安顺遂！'
            },
            {
                percent: 60,
                desc: '新年新气象，福气多多！'
            },
            {
                percent: 99,
                desc: '幸福在你身边，微笑在你心间~'
            }
        ],
        //安康
        2: [
            {
                percent: 66,
                desc: '吉祥如意伴随你，平安健康守护你~'
            },
            {
                percent: 100,
                desc: '健健康康无烦恼，吉祥年乐淘淘！'
            },
            {
                percent: 99,
                desc: '恭喜恭喜，新的一年，菩萨保佑你，财神罩着你！'
            },
            {
                percent: 60,
                desc: '团圆预示着幸福的光景，安康守候着吉祥的安宁！'
            },
            {
                percent: 90,
                desc: '快乐每一天，安康每一年~'
            },
            {
                percent: 77,
                desc: '福到了！天增岁月人增寿，春满乾坤福满门~'
            },
            {
                percent: 55,
                desc: '拂去你的惆帐，快乐健康幸福享~'
            },
            {
                percent: 80,
                desc: '身体健康疾病跑，能吃能喝又能跳，幸福总在身边绕~'
            },
            {
                percent: 70,
                desc: '愿你幸福吉祥，身体健康!'
            }
        ],
        //发财
        3: [
            {
                percent: 77,
                desc: '来年发财钱如意！打麻将时不放炮，幸福时时跑不掉~'
            },
            {
                percent: 99,
                desc: '恭喜恭喜，新的一年，菩萨保佑你，财神罩着你！'
            },
            {
                percent: 100,
                desc: '财运亨通 飞黄腾达~'
            },
            {
                percent: 55,
                desc: '存折增加无限，口袋装满美元，天天都快乐！'
            },
            {
                percent: 88,
                desc: '生意兴隆达三江，财源滚滚四海赚~'
            },
            {
                percent: 66,
                desc: '祝福你们新岁平安、招财进宝~'
            },
            {
                percent: 90,
                desc: '月月收入增长，天天心情舒畅，美梦中皆是幸福！'
            },
            {
                percent: 70,
                desc: '万事如意红包拿，家庭和睦人人夸~'
            },
            {
                percent: 80,
                desc: '鸿运照，财儿到~'
            }
        ],
        //团圆
        4: [
            {
                percent: 88,
                desc: '快语揖揖遥相祝，乐事连连全家福！'
            },
            {
                percent: 60,
                desc: '团圆预示着幸福的光景，安康守候着吉祥的安宁！'
            },
            {
                percent: 70,
                desc: '万事如意红包拿，家庭和睦人人夸~'
            },
            {
                percent: 100,
                desc: '愿你们在新的一年里像元宵一样，团团又圆圆~'
            },
            {
                percent: 66,
                desc: '合家幸福!好事多多!笑容多多！'
            },
            {
                percent: 99,
                desc: '好事全来了!亲朋好友聚一起，喜气围你绕！'
            },
            {
                percent: 77,
                desc: '祝福你们新岁平安、阖家团圆！'
            },
            {
                percent: 55,
                desc: '写下新年的愿望，步入幸福的殿堂！'
            },
            {
                percent: 90,
                desc: '歌声飘荡着团圆的喜气，烛光摇曳着吉祥的福气~'
            }
        ],
        //快乐
        5: [
            {
                percent: 70,
                desc: '快乐如花，芬芳香甜；快乐如阳，幸福温暖~'
            },
            {
                percent: 90,
                desc: '快乐每一天，安康每一年~'
            },
            {
                percent: 55,
                desc: '存折增加无限，口袋装满美元，天天都快乐！'
            },
            {
                percent: 66,
                desc: '合家幸福!好事多多!笑容多多！'
            },
            {
                percent: 100,
                desc: '摘一颗星，采一朵云，装入快乐信封里送给你~'
            },
            {
                percent: 80,
                desc: '让快乐好运时刻围绕着你!'
            },
            {
                percent: 60,
                desc: '新的一年，心平气和，快快乐乐，岁岁平安~'
            },
            {
                percent: 88,
                desc: '花开花落快快乐乐，白云蓝天幸福无边~'
            },
            {
                percent: 77,
                desc: '开开心心新年到，句句话儿吉祥绕~'
            }
        ],
        //幸运
        6: [
            {
                percent: 55,
                desc: '新的开始，好运接连~'
            },
            {
                percent: 77,
                desc: '福到了！天增岁月人增寿，春满乾坤福满门~'
            },
            {
                percent: 88,
                desc: '生意兴隆达三江，财源滚滚四海赚~'
            },
            {
                percent: 99,
                desc: '好事全来了!亲朋好友聚一起，喜气围你绕！'
            },
            {
                percent: 80,
                desc: '让快乐好运时刻围绕着你！'
            },
            {
                percent: 100,
                desc: '事业正当午，身体壮如虎，金钱不胜数~'
            },
            {
                percent: 90,
                desc: '叩响吉祥大门，万事平安，生活过的比蜜甜~'
            },
            {
                percent: 70,
                desc: '快乐如花，幸福如阳，幸运满满~'
            },
            {
                percent: 60,
                desc: '愿你抱着吉祥，拥着幸运，快乐每一天！'
            }
        ],
        //平安
        7: [
            {
                percent: 80,
                desc: '年年圆满如意，四季平安顺遂！'
            },
            {
                percent: 55,
                desc: '拂去你的惆帐，快乐健康幸福享~'
            },
            {
                percent: 66,
                desc: '祝福你们新岁平安、招财进宝~'
            },
            {
                percent: 77,
                desc: '祝福你们新岁平安、阖家团圆！'
            },
            {
                percent: 60,
                desc: '新的一年，心平气和，快快乐乐，岁岁平安~'
            },
            {
                percent: 90,
                desc: '叩响吉详大门，万事平安，生活过的比蜜甜~'
            },
            {
                percent: 100,
                desc: '一年开开心心，一生快快乐乐，一世平平安安~'
            },
            {
                percent: 88,
                desc: '收集我心中每一份祝福，每一种愿望，送到你身旁~'
            },
            {
                percent: 99,
                desc: '任世事变幻，时光流转幸福、平安！'
            }
        ],
        //幸福
        8: [
            {
                percent: 60,
                desc: '新年新气象，福气多多！'
            },
            {
                percent: 80,
                desc: '身体健康疾病跑，能吃能喝又能跳，幸福总在身边绕~'
            },
            {
                percent: 90,
                desc: '月月收入增长，天天心情舒畅，美梦中皆是幸福！'
            },
            {
                percent: 55,
                desc: '写下新年的愿望，步入幸福的殿堂!'
            },
            {
                percent: 88,
                desc: '花开花落快快乐乐，白云蓝天幸福无边~'
            },
            {
                percent: 70,
                desc: '快乐如花，幸福如阳，幸运满满~'
            },
            {
                percent: 99,
                desc: '任世事变幻，时光流转幸福、平安！'
            },
            {
                percent: 100,
                desc: '大吉大利，幸福美满！！'
            },
            {
                percent: 66,
                desc: '吉祥富贵，幸福圆满！'
            }
        ],
        //吉祥
        9: [
            {
                percent: 99,
                desc: '幸福在你身边，微笑在你心间~'
            },
            {
                percent: 70,
                desc: '愿你幸福吉祥，身体健康!'
            },
            {
                percent: 80,
                desc: '鸿运照，财儿到~'
            },
            {
                percent: 90,
                desc: '吉祥富贵，连年有余，阖家欢乐！'
            },
            {
                percent: 77,
                desc: '开开心心新年到，句句话儿吉祥绕~'
            },
            {
                percent: 60,
                desc: '愿你抱着吉祥，拥着幸运，快乐每一天！'
            },
            {
                percent: 88,
                desc: '收集我心中每一份祝福，每一种愿望，送到你身旁~'
            },
            {
                percent: 66,
                desc: '吉祥富贵，幸福圆满！'
            },
            {
                percent: 100,
                desc: '佛光谱照！众神保佑！万事吉祥！'
            }
        ]
    }

    var score = {
        100 : '福气东来 鸿运通天',
        99 : '新春到来喜事多 阖家团圆幸福多',
        90 : '好运滚滚向你行 爆竹声声响翻天',
        88 : '年到来乐开花 扬起风帆成功达',
        80 : '吉祥年宏图大展 2019年发大财',
        77 : '品味爱情的芬芳 沐浴财运的光芒',
        70 : '一切顺利福气多',
        66 : '新的一年我们共同把福抱',
        60 : '难忘的岁月 迎来了又一轮火红的年华',
        55 : '告别旧日愁绪烦 迎来幸福喜乐天'
    }
    
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
    var myLanType = Math.floor(Math.random() * 9) + 1;//如果有自己的花灯就去后台拿 没有在此处随机生成
    //好友花灯类型
    var friendLanType = Math.floor(Math.random() * 9) + 1;//好友抽取的随机数  此处从后台拿
    var imgPath = './images/';
    var lanternsName = ['亨通花灯','安康花灯','发财花灯','团圆花灯','快乐花灯','幸运花灯','平安花灯','幸福花灯','吉祥花灯'];
    //好友花灯名
    var friendLanName = lanternsName[friendLanType-1];
    //我的花灯名
    var myLanName = lanternsName[myLanType-1];
    //绑定数据
    (function(){
        $('.my-hd').attr("src",imgPath + "l_" + myLanType + ".png");
        $('.hd-name').text(myLanName);
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
        $('#mask').addClass('co');
        $('#nothing').show().siblings().hide();
        
    });
    //生成专属海报按钮
    $('#make-btn').on('click',function(){
        html2canvas($("#pic")[0]).then(function(canvas){
            var imgUri = canvas.toDataURL("image/png");
            console.log(imgUri)
            $("#pic").html('<img src="'+imgUri+'">');
        });
        $('#can-code').show();
        showMask();
    });

    //生成海报图片


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