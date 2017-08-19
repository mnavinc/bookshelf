function BannerViewModel() {
    var self = this;
    self.bannerList = ko.observableArray();

    $.ajax({
        dataType: "json",
        url: "http://gae-gamma.pratilipi.com/api/init/banner/list?language=HINDI",
        success: function(data) {
            ko.utils.arrayPushAll(self.bannerList, data['bannerList']);
        }
    });
};
ko.applyBindings(new BannerViewModel(), document.getElementById("banners"));



function SectionViewModel() {
    var self = this;
    self.sections = ko.observableArray();
    //self.selected = ko.observable();

    $.ajax({
        dataType: "json",
        url: "http://gae-gamma.pratilipi.com/api/init?language=HINDI&_apiVer=2",
        success: function(data) {
            ko.utils.arrayPushAll(self.sections, data['sections']);
        }
        // self.selectItem = function(data) {
        //     self.selected(data);
        // }
    });
    ko.bindingHandlers.owlCarouselInitiator = {
        init: function() {
            $('.owl-carousel').owlCarousel({
              loop:true,
              nav:true,
              dots:false,
              margin:15,
              rewind:true,
              lazyLoad:true,
              animateIn:true,
              animateOut:true,
              navClass: ['prev', 'next'],
              navText:['<span type="button" class="btn fa fa-lg fa-angle-left"> </span>','<span type="button" class="btn  fa fa-lg fa-angle-right"> </span>'],
              responsiveClass:true,
              responsive:{
                  0:{
                      items:3,
                      nav:true
                  },
                  600:{
                      items:3,
                      nav:false
                  },
                  1000:{
                      items:5,
                      nav:true,
                      loop:false
                  }
              }
          })
        }
    };
};
ko.applyBindings(new SectionViewModel(), document.getElementById("sections"));

