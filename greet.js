var greet = require("./lib/greetMod").greet;

greet = greet(process.argv[2]);

console.log(greet);
