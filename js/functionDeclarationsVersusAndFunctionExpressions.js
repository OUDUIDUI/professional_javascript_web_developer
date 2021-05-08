(function () {
    console.log("------------ 函数声明与函数表达式 ------------");
    func();
    function func(){
        console.log('this is a function')
    }

    // func1();   // ReferenceError: Cannot access 'func1' before initialization
    const func1 = function(){
        console.log('this is a function')
    }
})();
