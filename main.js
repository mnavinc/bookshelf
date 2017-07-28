
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
              loop:false,
              nav:true,
              navClass: ['prev', 'next'],
              navText:['<span type="button" class="btn fa fa-lg fa-caret-left"> </span>','<span type="button" class="btn  fa fa-lg fa-caret-right"> </span>'],
              responsive:{
                     0:{
                         items:1
                     },
                     600:{
                         items:3
                     },
                     1000:{
                         items:5
                     },
                     1600:{
                         items:7
                     }
                 }
          })
        }
    };
};
ko.applyBindings(new ViewModel());