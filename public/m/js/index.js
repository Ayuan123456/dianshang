$(function(window){
    var gallery = mui('.mui-slider');
    gallery.slider({
    interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
    });
    //swiper 初始化轮播图
    var swiper = new Swiper('#slider'>'.swiper-container', {
        
        loop: true,
        autoplay:{
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
        
      });
    //   初始化滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // swiper轮播图
      var swiper = new Swiper('#main > .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
})

