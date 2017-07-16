// require.config({
//     path:{
//         jquery:'jquery-2.1.3.min'
//     }
// });

require.config({
	paths : {
		jquery : 'jquery-2.1.3.min'
	}
});

// require(['a','b','c'],function(A,B,C){
//     A.aFun();
//     B.bFun();
//     C.cFun();
// })

require(['a','b','c'],function(A,B,C){
    A.aFun();
    B.bFun();
})