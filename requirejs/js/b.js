// JavaScript Document

define(function(){
	console.log('b');
	function bFn(){
		console.log('我是b模块');
	}
	return {
		bFn : bFn
	};
});