var expect = require("chai").expect;
var greet = require("../lib/greetMod.js").greet;

describe("greet", function() {
  it("should take a name and return 'hello ' + name", function() {
    expect(greet("Colin")).to.deep.equal("hello Colin");
  })
})
