function changeState(id) {
  var elem  = document.getElementById(id);
  var name = "";

  if(id === 0){ name += "sprite"; }
  else{ name += "sprite" + id.toString(); }
  if(elem.getAttribute("class") === name){
      name += "Play";
      elem.setAttribute("class", name);
  }
  else{
      elem.setAttribute("class", name);
  }
}

function turnOnAll() {
 for (var i = 0; i < 8; i++) {
   var elem  = document.getElementById(i);
   if(i === 0){
     var name = "spritePlay";
   }
   else{
     var name = "sprite" + i.toString() + "Play";
   }
   elem.setAttribute("class", name);
 }
}

function turnOffAll() {
 for (var i = 0; i < 8; i++) {
   var elem  = document.getElementById(i);
   if(i === 0){
     var name = "sprite";
   }
   else{
     var name = "sprite" + i.toString();
   }
   elem.setAttribute("class", name);
 }
}
