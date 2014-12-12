var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    coveralls = require('gulp-coveralls');

function mochaTest(coverage_cb){
   var stream =  gulp.src([
        './test/setup/helpers.js',
        './test/unit/js/*.js'
        ],
        { read: false })
        .pipe(mocha({
            reporter: 'nyan',
            globals: {
                nodejs: require('../../test/setup/node.js')
            }
        }));

    if(coverage_cb){
        stream.pipe(istanbul.writeReports()) // Creating the reports after tests runned
            .on('end', coverage_cb);
    } else {
        return stream;
    }
}

gulp.task('mocha', function() {
    return mochaTest();
});

gulp.task('coverage', ['coverage:test', 'coverage:coveralls']);

gulp.task('coverage:test', function(cb) {
    gulp.src(['./src/js/*.js'])
        .pipe(istanbul()) // Covering files
        .pipe(istanbul.hookRequire()) // Force `require` to return covered files
        .on('finish', function() {
            mochaTest(cb);
        });
});

gulp.task('coverage:coveralls', ['coverage:test'], function() {
    return gulp.src('./coverage/lcov.info')
        .pipe(coveralls());
});