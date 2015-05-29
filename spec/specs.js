describe('findReplace', function() {

  it("will replace a lower-case word without punctuation", function() {
    expect(findReplace(["All happy families are alike; each unhappy family is unhappy in its own way.", "unhappy", "happy"])).to.eql("All happy families are alike; each happy family is happy in its own way.");
    expect(findReplace(["All happy families are alike; each unhappy family is unhappy in its own way.", "happy", "unhappy"])).to.eql("All unhappy families are alike; each unhappy family is unhappy in its own way.");
  });
  
  it("will replace an upper-case word called in lower-case without punctuation", function() {
    expect(findReplace("All happy families are alike; each unhappy family is unhappy in its own way.", "all", "Some")).to.eql("All happy families are alike; each unhappy family is unhappy in its own way.");
  });

  it("will replace a word with a following period", function() {
    expect(findReplace("All happy families are alike; each unhappy family is unhappy in its own way.", "way", "imagination")).to.eql("All happy families are alike; each unhappy family is unhappy in its own way.");
  });

});
