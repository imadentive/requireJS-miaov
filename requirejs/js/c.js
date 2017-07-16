// JavaScript Document

/*define(['a'],function(aM){
	console.log('c');
	aM.aFn();
	function cFn(){
		console.log('我是c模块');
	}
	return {
		cFn : cFn
	};
});*/

define(function(require){
	console.log('c');
	
	var aM = require('a');
	aM.aFn();
	
	function cFn(){
		console.log('我是c模块');
	}
	return {
		cFn : cFn
	};
});