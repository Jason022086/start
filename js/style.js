$(document).ready(function(){

    $(".upper").hover(function (e) {
            $(".box").slideToggle(1000);
            
        }, function (e) {
            $(".box").slideToggle(1000);
        }

    );

    $(".upper").hover(function (e) {
            $(".box1").slideToggle(1000);
            
        }, function (e) {
            $(".box1").slideToggle(1000);
        }

    );

    $(".upper").hover(function (e) {
            $(".box2").slideToggle(1000);
            
        }, function (e) {
            $(".box2").slideToggle(1000);
        }

    );

});

var swiperConfig = {
        width: 800,                     // 容器宽度（最小300, 默认800）
        height: 300,                    // 容器高度（最小120, 默认300）
        speed: 3000,                    // 切换速度
        needPrevAndNextBtnGroup: true, // 是否需要前进后退按钮组
        needPagination: true           // 是否需要分页器
    }