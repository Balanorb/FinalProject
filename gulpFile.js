var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-server', function (){
    
    var server = new LiveServer('C:/Users/Norbert/Desktop/InTern buddy/app.js');
    server.start();
    
});

gulp.task('serve',['live-server'], function(){
    
    browserSync.init(null,{
        proxy:'http://localhost:3000',
        port:9001
        
    })
})