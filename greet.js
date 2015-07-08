var greet = require("./lib/greetMod").greet;

greet = greet(process.argv);

console.log(greet);
