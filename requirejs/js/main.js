// JavaScript Document


require([],function(){//没有毅力模块也要写[],不然报错
	console.log(1);
});

//加载a模块，根据data-main=”main“的路径为根路径
require(['a'],function(aM){
	
	aM.aFn();
	
});

//a.ja是跟进当前html的路径为根路径
require(['a.js'],function(aM){
	
	aM.aFn();
	
});

//引入a，b模块，a,b模块载入顺序随机，
//如果定义的时候，b模块依赖a模块,则a模块先载入
require(['a','b'],function(aM,bM){
	
	aM.aFn();
	bM.bFn();
	
});

require(['c'],function(cM){
	
	cM.cFn();
	
});

//配置
require.config({
	//baseUrl : 'aaa',
	paths : {
		ng : 'libs/angular'
	},
	shim : {
		ng : {
			deps : [],
			init : function(){
				return '我是ng模块';
			}
		}
	}
});

require(['ng'],function(ng){
	
	console.log(ng);
	
});

//引入jq，jq源码中定义好了模块名，只能用‘jquery’
require.config({
	paths : {
		jquery : 'jquery-2.1.3.min'
	}
});

require(['jquery'],function($){
	console.log( $ );
});

 //模块打包，自带工具r.js
	1. npm install require.js -g
	2. 把r.js放到项目目录下
	3. 配置打包文件build.js
	4. 执行命令 node r.js -o build.js

//build.js
 ({
     dir: './dist',
     modules: [
         {
             name: 'main'
         }
     ],
     fileExclusionRegExp: /^(r|build)\.js$/,
     removeCombined: true
 })
