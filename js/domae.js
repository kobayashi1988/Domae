var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.COMMON = {};

LEIHAUOLI.COMMON.CAROUSEL = {
    init : function(){
        this.setParameters();
        this.bindEvent();
    },
    setParameters : function(){
        this.$container = $('.jsc-carousel-container');
        this.$images = this.$container.children('li');
        this.imageCount = this.$images.length;
        this.currentIndex = 0;
    },
    bindEvent : function(){
        this.$images.swipe({
            swipe : function(){
              console.log('hoge')
            }
        });
    }
}

$(function(){
    LEIHAUOLI.COMMON.CAROUSEL.init();
});