'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src([
      './src/images/**/*.*',
      '!./src/images/svg/**/*.*'
	])
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
