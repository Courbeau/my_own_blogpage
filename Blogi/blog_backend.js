var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "5px";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}




var like_meter = 0

function ylosPeukku() {
  if (like_meter == 0) {
    document.getElementById("var").innerHTML = Number(document.getElementById("var").innerHTML) + 1;
  }
  else {
    document.getElementById("var").innerHTML = Number(document.getElementById("var").innerHTML) + 2;
  }
  document.getElementById("tykkaysnappi").disabled = true;
  document.getElementById("enpidanappi").disabled = false;
  document.getElementById("testi").innerHTML = "kiitos kun tykkäsit";
  like_meter += 1
}
function alasPeukku() {
  if (like_meter == 0) {
    document.getElementById("var").innerHTML = Number(document.getElementById("var").innerHTML) - 1;
  }
  else {
    document.getElementById("var").innerHTML = Number(document.getElementById("var").innerHTML) - 2;
  }
  document.getElementById("enpidanappi").disabled = true;
  document.getElementById("tykkaysnappi").disabled = false;
  document.getElementById("testi").innerHTML = "kiitos palautteesta";
  like_meter += 1
}
