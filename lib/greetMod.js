module.exports.greet = function(name) {
  if (name instanceof Array) {
    name = name[2];
  }

  return "hello " + name;
}
