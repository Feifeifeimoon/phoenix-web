var gulp = require('gulp');
var sftp = require('gulp-sftp');

const sftpOption = {
    host: '192.168.159.128', // FTP主机地址
    port: 22,
    auth: 'FTPServer', // 下一步创建的 .ftppass 文件里面对应的授权方式
    remotePath: '/root/phoenix/www/', // FTP需要上传的位置
}

gulp.task('upload', function () {
    return gulp.src('./dist/**/*')
    .pipe(sftp(sftpOption));
});