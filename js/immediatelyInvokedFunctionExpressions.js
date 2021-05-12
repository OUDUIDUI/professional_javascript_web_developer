(function () {
    console.log("------------ 立即调用的函数表达式 ------------");
    (function(){
        var i = 0;
        console.log(`这是一个立即调用的函数表达式`)
    })()
    console.log('访问不到i：')
    // console.log(i);

    {
        var j = 1;
        let k = 2;
    }
    console.log('访问得到j：')
    console.log(j);
    console.log('访问不到k：')
    // console.log(k);
})();
