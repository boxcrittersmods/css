const gulp = require("gulp"),
	sourcemaps = require("gulp-sourcemaps"),
	sass = require("gulp-sass"),
	rename = require("gulp-rename"),
	terser = require("gulp-terser"),

	css = () => {
		return gulp.src("scss/bcmc.scss")
			.pipe(sourcemaps.init())
			//.pipe(sass())
			.pipe(sass({ outputStyle: "compressed" }))
			.pipe(rename("bcmc.min.css"))
			.pipe(sourcemaps.write(".", { sourceRoot: "../scss", includeContent: true }))
			.pipe(gulp.dest("dist"));
	},
	js = () => {
		return gulp.src("js/bcmc.js")
			.pipe(sourcemaps.init())
			.pipe(terser({ warnings: "verbost" }))
			.pipe(rename("bcmc.min.js"))
			.pipe(sourcemaps.write(".", { sourceRoot: "../js", includeContent: true }))
			.pipe(gulp.dest("dist"));
	};

sass.compiler = require('sass');

gulp.task("css", css);
gulp.task("js", js);
gulp.task("build", gulp.series("css", "js"));