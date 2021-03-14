const {src, dest, watch, series, parallel } =require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const uglifycss = require("gulp-uglifycss");
// Sökvägar

const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js"
}

// Kopiera HTML filer
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest("pub")
    );
}

//Sammanslå och minifiera js-filer
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('pub/js')
        );
}

//Sammanslå och minifiera css-filer

function cssTask() {
    return src(files.cssPath)
        .pipe(concat('styles.css'))
        .pipe(uglifycss())
        .pipe(dest('pub/css')
        );
}


//watcher
function watchTask() {
    watch([files.htmlPath, files.jsPath, files.cssPath], 
        parallel(copyHTML, jsTask, cssTask));
}


//Default Task
exports.default = series(
    parallel(copyHTML, jsTask, cssTask),
    watchTask
);