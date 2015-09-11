describe('findAndReplace', function() {
  it('should find and replace a single word string', function() {
    expect("string".findAndReplace('string', 'str')).to.equal('str');
  });
  it('should find and replace more than a single occurance', function() {
    expect("moo".findAndReplace('o', 'e')).to.equal('mee');
  });
  it('should handle two or more word strings', function() {
    expect("Hello world".findAndReplace('world', 'universe')).to.equal('Hello universe');
  });
  it('should allow the user the option to pass in true as a paremter to perform a case-insensitive search', function(){
    expect('TtTt'.findAndReplace('T', 'M', true)).to.equal('MMMM');
  });
  it('should allow the user the option to pass in false paremter to perform the default sensitive search', function(){
    expect('TtTt'.findAndReplace('T', 'M', false)).to.equal('MtMt');
  });
});