var gulp = require("gulp"),
	concat = require("gulp-concat"),
	connect = require("gulp-connect"),
	uglify = require("gulp-uglify"),
	less = require("gulp-less"),
	minifyCSS = require('gulp-minify-css'),
    autoprefix = require('gulp-autoprefixer'),
	webpack = require('webpack-stream'),
	named = require('vinyl-named'),  //插件 取到文件名
	fileConfigs = require('./config.json'),
	sass = require('gulp-sass');

gulp.task("iconfont", function(){//移动字体文件
	gulp.src(["src/css/iconfont/iconfont.eot","src/css/iconfont/iconfont.svg","src/css/iconfont/iconfont.ttf","src/css/iconfont/iconfont.woff"])
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
});

gulp.task("html", function(){//移动html文件到dist文件夹下面
	gulp.src("src/html/*.html")
	.pipe(gulp.dest("dist"));
});

gulp.task("img", function(){//移动图片文件到dist文件夹下面
	gulp.src("src/img/*.*")
	.pipe(gulp.dest("dist/img"));
});

gulp.task("bundleSass", function(){//fileConfigs数组通过less编译
	gulp.src(fileConfigs.css)
	.pipe(sass())
	.pipe(autoprefix())//自动添加厂商前缀
//  .pipe(minifyCSS())//压缩css
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
});

gulp.task("bundleCommonJs",function() {
	gulp.src("src/js/base/*.js")//把所有的js文件
	.pipe(concat("bundle.js"))//拼接成bundle.js文件
//	.pipe(uglify())            //并丑化
	.pipe(gulp.dest("dist/js"))//放到dist文件下
	.pipe(connect.reload());  //重启服务器
});

gulp.task('bundleJs', function() {
    return gulp.src(fileConfigs.js)  //json文件
        .pipe(named())   
        .pipe(webpack({
            output: {   //将文件名输出
                filename: '[name].js'
            },
            module: {   
                loaders: [{   //分析器
                    test: /\.mustache$/,
                    loader: 'mustache'
                }, {
                    test: /\.js$/,
                    loader: "imports?define=>false"   //imports  编译js 支持amd的格式  define=>false 就去掉了AMD的格式
                }]
            },
            devtool: "#eval-source-map"
        }))
//      .pipe(uglify().on('error', function(e) {
//          console.log('\x07',e.lineNumber, e.message);
//          return this.end()}
//      ))
        .pipe(gulp.dest("dist/js"))  //输出的地方
        .pipe(connect.reload());  //重启服务器
});

gulp.task("watch",function(){  //监听
	gulp.watch("src/js/**/*", ["bundleJs"]);  //目录下的任何文件的任何东西就执行bundleJs
	gulp.watch("src/js/base/*.js",["bundleCommonJs"]); //base下的js文件发生变化时执行bundleCommonJs
	gulp.watch("src/css/**/*.scss",["bundleSass"]);
	gulp.watch("src/html/*.html",["html"]);
	gulp.watch("src/img/*.*",["img"]);
});

gulp.task("server",function(){
	connect.server({  //在dist文件下起了一个8010的服务器  本地运行时会自动找到index.html文件并执行
		root:"dist",
		port:8010,
		livereload:true
	})
})

gulp.task("default", ["iconfont", "html", "bundleCommonJs", "bundleJs", "bundleSass", "watch", "server", "img"]);