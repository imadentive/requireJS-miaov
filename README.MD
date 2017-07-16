# 看源码就懂了
main.js

``` javascript

// JavaScript Document


/*require([],function(){
	console.log(1);
});*/

/*require(['a'],function(aM){
	
	aM.aFn();
	
});*/

/*require(['a.js'],function(aM){
	
	aM.aFn();
	
});*/

/*require(['a','b'],function(aM,bM){
	
	aM.aFn();
	bM.bFn();
	
});*/

/*require(['c'],function(cM){
	
	cM.cFn();
	
});*/

/*require.config({
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
	
});*/

//使用jq，jq源码中定义了‘jquery’模块名
require.config({
	paths : {
		jquery : 'jquery-2.1.3.min'
	}
});

require(['jquery'],function($){
	console.log( $ );
});


```
# 自带的代码压缩
1. npm install require.js -g
2. 把r.js放到项目目录下
3. 配置打包文件build.js
4. 执行命令 node r.js -o build.js

# 加入mine-ioo文件夹（练习）
