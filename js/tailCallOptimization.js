(function () {
    console.log("------------ 尾调用优化 ------------");
    "use strict"
    function innerFunction() {}
    function innerFunction1() {}

    // 无优化：尾调用没有返回
    function outerFunction() {
        innerFunction();
    }

    // 无优化：尾调用没有直接返回
    function outerFunction1() {
        let res = innerFunction();
        return res;
    }

    // 无优化：尾调用返回后必须转型为字符串
    function outerFunction2() {
        return innerFunction().toString();
    }

    // 无优化：尾调用是一个闭包
    function outerFunction3() {
        let foo = 'bar';
        function innerFunction2() { return foo;}
        return innerFunction2();
    }

    // 有优化：栈帧销毁前执行参数计算
    function outerFunction4(a, b) {
        return innerFunction(a + b);
    }

    // 有优化：初始返回值不涉及栈帧
    function outerFunction5(a, b) {
        if(a < b){
            return a;
        }
        return innerFunction(a + b);
    }

    // 有优化：两个内部函数都在尾部
    function outerFunction6(condition) {
        return condition ? innerFunction() : innerFunction1();
    }

    // 无优化 —— 斐波那契数列
    function fib(n){
        if(n < 2){
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }

    // 有优化 —— 斐波那契数列
    function fib1(n){
        return fibImp1(0, 1, n);
    }
    function fibImp1(a, b, n){
        if(n === 0){
            return a;
        }
        return fibImp1(b, a + b, n - 1);
    }

    const time1 = new Date().getTime();
    const res1 = fib(20);
    const time2 = new Date().getTime();
    console.log(`斐波那契数列（无优化）：fib(10) = ${res1}，花费时间 = ${time2 - time1}`);
    const time3 = new Date().getTime();
    const res2 = fib1(20);
    const time4 = new Date().getTime();
    console.log(`斐波那契数列（无优化）：fib1(10) = ${res2}，花费时间 = ${time4 - time3}`)
})();  
