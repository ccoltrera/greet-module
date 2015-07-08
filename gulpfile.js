var gulp = require("gulp");
var mocha = require("gulp-mocha");
var jshint = require("gulp-jshint");

gulp.task("default", ["test", "lint"], function() {});

gulp.task("test", function() {
  return gulp.src("test/*Spec.js")
              .pipe(mocha());
});

gulp.task("lint", function() {
  return gulp.src(["./*.js","./test/*.js","./lib/*.js"])
              .pipe(jshint())
              .pipe(jshint.reporter("default"));
});

var watcher = gulp.watch(["./*.js","./test/*.js","./lib/*.js"], ["test", "lint"]);


