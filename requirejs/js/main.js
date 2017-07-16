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

require.config({
	paths : {
		jquery : 'jquery-2.1.3.min'
	}
});

require(['jquery'],function($){
	console.log( $ );
});