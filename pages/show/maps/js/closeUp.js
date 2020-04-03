function onSoundClick() {
  var element = document.getElementById("myVideo");
  if(element.muted === true){ element.muted = false; }
  else { element.muted = true; }
  var but = document.getElementById("mute-button");
  if(but.getAttribute("class") === "custom-mute"){ but.setAttribute("class", "custom-unmute"); }
  else { but.setAttribute("class", "custom-mute"); }
}
