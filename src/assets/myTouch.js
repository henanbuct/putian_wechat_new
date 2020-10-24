//图片手势放大
var reqAnimationFrame = (function() {
  return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();
var el = $('img');
var ticking = false;
var transform;
var initScale = 1;
var _eImg = '';
for (var m = 0; m < el.length; m++) {
  var mc = new Hammer.Manager(el[m]);
  mc.add(new Hammer.Pan({
    threshold: 0,
    pointers: 0
  }));
  mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
  mc.add(new Hammer.Pinch({
    threshold: 0
  })).recognizeWith(mc.get('pan'));
  mc.on('panstart panmove', onPan);
  mc.on('pinchstart pinchmove', onPinch);
  mc.on('swipe', onSwipe);
}

function resetElement() {
  el.addClass('animate');
  transform = {
    translate: {
      x: 0,
      y: 0
    },
    scale: 1,
    angle: 0,
    rx: 0,
    ry: 0,
    rz: 0
  };
  requestElementUpdate();
}

function updateElementTransform() {
  var value = ['translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)', 'scale(' + transform.scale + ', ' + transform.scale + ')', 'rotate3d(' + transform.rx + ',' + transform.ry + ',' + transform.rz + ',' + transform.angle + 'deg)'];
  value = value.join(' ');
  if (_eImg != '') {
    _eImg.style.webkitTransform = value;
    _eImg.style.mozTransform = value;
    _eImg.style.transform = value;
    //_eImg.css({ 'transform': value }, { '-webkit-transform': value });
  }
  ticking = false;
}

function requestElementUpdate() {
  if (!ticking) {
    reqAnimationFrame(updateElementTransform);
    ticking = true;
  }
}

function onPan(ev) {
  el.removeClass('animate');
  transform.translate = {
    x: ev.deltaX,
    y: ev.deltaY
  };
}

function onPinch(ev) {
  if (ev.type == 'pinchstart') {
    initScale = transform.scale || 1;
  }
  el.removeClass('animate');
  transform.scale = initScale * ev.scale;
  requestElementUpdate();
  _eImg = ev.target;
  return _eImg;
}

function onSwipe(ev) {
  var angle = 10;
  transform.ry = (ev.direction & Hammer.DIRECTION_HORIZONTAL) ? 1 : 0;
  transform.rx = (ev.direction & Hammer.DIRECTION_VERTICAL) ? 1 : 0;
  transform.angle = (ev.direction & (Hammer.DIRECTION_RIGHT | Hammer.DIRECTION_UP)) ? angle : -angle;
  requestElementUpdate();
  _eImg = ev.target;
  return _eImg;
}
resetElement();