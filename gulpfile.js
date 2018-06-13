var gulp = require("gulp")
var s3 = require('gulp-s3')

var AWS = {
  'key':    '',
  'secret': '',
  'bucket': 'werun-h5',
  'region': 'us-east-1'
}

var options = { uploadPath: 'help/' }

gulp.task('s3', () => {
  gulp.src(['./tutorial_email.html', 'dist/**/*']).pipe(s3(AWS, options))
})
