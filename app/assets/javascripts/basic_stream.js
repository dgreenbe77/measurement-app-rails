(function() {
var video = document.querySelector('#basic-stream');
var button = document.querySelector('#capture-button');
var localMediaStream = null;

button.addEventListener('click', function(e) {
  if (navigator.getUserMedia) {
    navigator.getUserMedia('video', function(stream) {
      video.src = stream;
      video.controls = true;
      localMediaStream = stream;
    }, errorCallback);
  } else if (navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia({video: true}, function(stream) {
      video.src = window.URL.createObjectURL(stream);
      video.controls = true;
      localMediaStream = stream;
    }, errorCallback);
  } else {
    errorCallback({target: video});
  }
}, false);

document.querySelector('#stop-button').addEventListener('click', function(e) {
  video.pause();
  localMediaStream.stop(); // Doesn't do anything in Chrome.
}, false);
})();