var gulp = require('gulp')
var concat = require('gulp-concat')
var wrap = require('gulp-wrap')
var replace = require('gulp-replace')

gulp.task('concat', function() {
    console.log('Begin Concact')
    return gulp.src(['./MIDI.js/js/**/*.js', './MIDI.js/inc/jasmid/*.js', './MIDI.js/inc/shim/*.js'])
        .pipe(concat('midi.old.js'))
        .pipe(wrap('var MIDI = module.exports = {}\nMIDI.MIDI = MIDI\n;(function(MIDI) {\nvar module = undefined\nvar exports = undefined\n<%= contents %>\n})(MIDI)'))
        .pipe(replace(/require\((.+?)\)/g, '_require($1)'))
        .pipe(gulp.dest('./dist/'))
})
