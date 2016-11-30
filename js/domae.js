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
    },
    bindEvent : function(){
        
    }
}

$(function(){
    LEIHAUOLI.COMMON.CAROUSEL.init();
});