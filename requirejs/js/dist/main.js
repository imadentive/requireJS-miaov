define("a",[],function(){function e(){console.log("我是a模块")}return console.log("a"),{aFn:e}}),define("b",[],function(){function e(){console.log("我是b模块")}return console.log("b"),{bFn:e}}),define("c",["require","a"],function(e){function n(){console.log("我是c模块")}console.log("c");var t=e("a");return t.aFn(),{cFn:n}}),require(["a","b","c"],function(){}),define("main",function(){});