var expect = require("chai").expect;
var greet = require("../lib/greetMod.js").greet;


describe("greet", function() {
  it("should take a name and return 'hello ' + name", function() {
    expect(greet("Colin")).to.deep.equal("hello Colin");
  });
  it("should tell if input is an array, and take the member at index 2", function() {
    expect(greet([
      'node',
      '/Users/colincoltrera/projects/codefellows/sea-d41/greet-app/greet',
      'Colin'
    ])).to.deep.equal("hello Colin");
  });
});


