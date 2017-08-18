
function ViewModel() {
    var self = this;
    self.sections = ko.observableArray();

    $.ajax({
        dataType: "json",
        url: "https://api.myjson.com/bins/1gbt6d",
        success: function(data) {
            ko.utils.arrayPushAll(self.sections, data['sections']);
        }
    });
    ko.bindingHandlers.owlCarouselInitiator = {

        init: function() {
            $('.owl-carousel').owlCarousel({
              loop:true,
              nav:true,
              responsiveClass:true,
              center:false,
              autoWidth:true,
              rewind:true,
              lazyLoad:true,
              animateIn:true,
              animateOut:true,
              navClass: ['prev', 'next'],
              navText:['<span type="button" class="btn fa fa-lg fa-angle-left"> </span>','<span type="button" class="btn  fa fa-lg fa-angle-right"> </span>'],
          })
        }
    };
};
ko.applyBindings(new ViewModel());