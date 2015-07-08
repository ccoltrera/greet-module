var expect = require("chai").expect;
var exec = require("child_process").exec;
var greet = require("../lib/greetMod.js").greet;


describe("greet", function() {
  var captured_stdout;
  before(function(done) {
    exec('node ./greet "Colin"', function(error, stdout, stderr) {
        if (error) {
          done (error);
        }
        captured_stdout = stdout.trim();
        done();
    });
  });
  it("should take a name and return 'hello ' + name", function() {
    expect(greet("Colin")).to.deep.equal("hello Colin");
  });
  it("should be usable as a command line tool, taking a process.argv", function() {
    expect(captured_stdout).to.equal("hello Colin");
  });
});


