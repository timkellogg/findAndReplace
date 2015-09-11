String.prototype.findAndReplace = function (find, replacement, sensitive) {
  var i = '';
  if (sensitive) i = 'i';
  var re = new RegExp(find, 'g' + i);
  return this.replace(re, replacement);
};

$(document).ready(function() {

  var fileInput  = document.getElementById('file-upload');
  fileInput.addEventListener('change', function(event) {
    var file = fileInput.files[0];
    var textType = /text.*/;
    if (file.type.match(textType)) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#initial-text').val(reader.result);
      }
    }
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var initialText = $('#initial-text').val();
    var find        = $('#find').val();
    var replacement = $('#replacement').val();
    var sensitivity = $('#case-sensitive').prop('checked');
    var result      = initialText.findAndReplace(find, replacement, sensitivity);

    $('#result-container').show();
    $('#result-text').text(result);
  });
  $('#reset').click(function() {
    $('#initial-text').val('');
    $('#find').val('');
    $('#replacement').val('');
    $('#result-container').hide();
  });
});
