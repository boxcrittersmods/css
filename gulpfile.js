const gulp = require("gulp"),
	sourcemaps = require("gulp-sourcemaps"),
	sass = require("gulp-sass"),
	concat = require("gulp-concat"),

	css = () => {
		return gulp.src("scss/bcmc.scss")
			.pipe(sourcemaps.init())
			.pipe(sass())
			//.pipe(sass({ outputStyle: "compressed" }))
			.pipe(concat("bcmc.min.css"))
			.pipe(sourcemaps.write(".", { sourceRoot: "../scss", includeContent: true }))
			.pipe(gulp.dest("dist"));
	};

sass.compiler = require('sass');

gulp.task("css", css);