(function notSupported() {
  var body = document.getElementsByTagName('body')[0];
  var style = 'text-align: center';
  body.innerHTML = '<h1>Your browser isn\'t supported.</h1>'
    + '<p>Go check my <a href="https://twitter.com/noel_mace">Twitter account</a> instead.</p>'
    + '<p>You can also probably open noelmace.com on your smartphone.<p>'
    + '<p>In any case, you should install a modern browser, like <a href="https://www.mozilla.org/firefox/new/">Firefox</a>.</p>';
  body.style.setAttribute('cssText', style);
  body.setAttribute('style', style);
})();
