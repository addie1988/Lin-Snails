$('body').wolfe({
  element:'slide',// the class
  notes:false,
  height:function() {
    return page.height();
  },
  width:function() {
    return page.width();
  },
  wrapper:'wrapper',
  speed: 1000,
  onLoad:function() {},
  onComplete:function() {}
  });
  