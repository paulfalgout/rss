var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul');

// gulp.task('mocha', function() {
//     return gulp.src([
//         './test/setup/node.js',
//         './test/setup/helpers.js',
//         './test/unit/js/*.js'
//         ],
//         { read: false })
//         .pipe(mocha());
// });

gulp.task('mocha', function(cb) {
    return gulp.src(['./src/js/*.js'])
        .pipe(istanbul()) // Covering files
        .pipe(istanbul.hookRequire()) // Force `require` to return covered files
        .on('finish', function () {
          gulp.src([
            './test/setup/node.js',
            './test/setup/helpers.js',
            './test/unit/js/*.js'
            ])
            .pipe(mocha())
            .pipe(istanbul.writeReports()) // Creating the reports after tests runned
            .on('end', cb);
        });
});
