function downloadInnerHtml(filename, elId, mimeType) {
  var elHtml = document.getElementById(elId).innerHTML.replace(/(<([^>]+)>)/ig, "");
  var link = document.createElement('a');
  mimeType = mimeType || 'application/json';

  link.setAttribute('download', filename);
  link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
  link.click();
}

var fileName = 'playlist.json';

$('#downloadLink').click(function() {
  downloadInnerHtml(fileName, 'json', 'text/html');
});
