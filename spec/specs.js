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
});