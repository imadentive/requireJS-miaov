({
    dir: './dist',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    removeCombined: true,
    paths:{
        jquery : 'jquery-2.1.3.min'
    }
})