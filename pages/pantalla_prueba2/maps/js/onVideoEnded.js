var vid = document.getElementById("myVideo");

vid.onended = function() {
  var url = "../index.html";
  window.location.href = url;
};
