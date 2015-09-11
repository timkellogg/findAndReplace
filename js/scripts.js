String.prototype.findAndReplace = function (find, replacement, sensitive) {
  var i = '';
  if (sensitive) i = 'i';
  var re = new RegExp(find, 'g' + i);
  return this.replace(re, replacement);
}
