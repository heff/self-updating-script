// Based on Optimized async GA snippet
// http://mathiasbynens.be/notes/async-analytics-snippet

(function(d,t) {
  var n=d.createElement(t),s=d.getElementsByTagName(t)[0];
  n.src='//www.EXAMPLE.COM.com/bootstrap.js';
  n.async=1;
  s.parentNode.insertBefore(n,s);
})(document,'script');