var vid = document.getElementById("myVideo");

vid.onended = function() {
  var url = "../contenedor/index.html";
  window.location.href = url;
};
