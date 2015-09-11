String.prototype.findAndReplace = function (find, replacement, sensitive) {
  var i = '';
  if (sensitive) i = 'i';
  var re = new RegExp(find, 'g' + i);
  return this.replace(re, replacement);
};

$(document).ready(function() {
  $('form').submit(function(event) {
    var initialText = $('#initial-text').val();
    var find        = $('#find').val();
    var replacement = $('#replacement').val();
    var sensitivity = $('#case-sensitive').prop('checked');
    var result      = initialText.findAndReplace(find, replacement, sensitivity);

    $('#result-container').show();
    $('#result-text').text(result);
    event.preventDefault();
  });
  $('#reset').click(function() {
    $('#initial-text').val('');
    $('#find').val('');
    $('#replacement').val('');
    $('#result-container').hide();
  });
});
