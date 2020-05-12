
var pressed = false;
var cx, cy;
var n = 0;
var nowDownEvent, nowUpEvent;
setTimeout(function () {

  window.addEventListener('mousedown', onDownEvent);
  window.addEventListener('mouseup', onUpEvent);

  document.addEventListener('keydown', downKey);
  document.addEventListener('keyup', upKey);
  document.addEventListener('mousemove', mouseMove)
  function downKey(e) {
    nowDownEvent = performance.now()
    var key = e.key.toLowerCase();
    if (key === 't' && !pressed) {
      pressed = true;
      chrome.runtime.sendMessage({ eventPlease: "trusted", x: cx, y: cy, mouse: "D" }, function (response) {
        console.log(response.yourEvent);
      });
    }
    else if (key === 'r') {
      let clickEvent = document.createEvent('MouseEvents');
      clickEvent.initEvent('mousedown', true, true);
      document.dispatchEvent(clickEvent);
    }

  }
  function upKey(e) {
    nowUpEvent = performance.now()
    var key = e.key.toLowerCase();
    if (key === 't' && pressed) {
      pressed = false;
      chrome.runtime.sendMessage({ eventPlease: "trusted", x: cx, y: cy, mouse: "U" }, function (response) {
        console.log(response.yourEvent);
      });
    }
    else if (key === 'r') {
      let clickEvent = document.createEvent('MouseEvents');
      clickEvent.initEvent('mouseup', true, true);
      document.dispatchEvent(clickEvent);
    }

  }


  function mouseMove(e) {
    cx = e.clientX;
    cy = e.clientY;
  }

}, 300);

function onDownEvent(e) { n++; console.log(e, n, performance.now() - nowDownEvent); }
function onUpEvent(e) { console.log(e, performance.now() - nowUpEvent); }



