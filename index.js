var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var menuItem = contextMenu.Item({
  label: "Search RottenTomatoes & IMDb",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
      var urlRt = "http://www.rottentomatoes.com/search/?search=";
      var urlImdb = "http://www.imdb.com/find?ref_=nv_sr_fn&q=";
      tabs.open(urlRt + selectionText);
      tabs.open(urlImdb + selectionText);
  }
});
