(function(d,t) {

  // Version of THIS copy of this bootstrap script.
  var ver = "1";

  // Dynamically insert & download a script asynchronously.
  function insertScript(url) {
    var n=d.createElement(t),s=d.getElementsByTagName(t)[0];
    n.src=url;
    s.parentNode.insertBefore(n,s);
  }

  // Send a beacon back to our logging server.
  // As a side effect this will return a script that indicates there is a 
  // new version of bootstrap.js available for update by saving the new
  // version number in localStorage.
  function sendBeacon() {
    // MUST return this script's version number in the beacon,
    // plus any other logging information desired.
    insertScript("//EXAMPLE.COM/beacon.js?v=" + ver + "&t=" + Number(new Date()));
  }

  if ( "undefined" != typeof(cmdQ) && cmdQ.length && cmdQ[0] === 'sendBeacon' ) {
    cmdQ = [];  // clear out the commands
    sendBeacon();
  }

})(document,'script');