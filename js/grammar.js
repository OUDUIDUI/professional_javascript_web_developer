(function(){
    console.log("-------------- 语法部分 --------------")

    /* 区分大小写 */ 
    const a = '小写';
    const A = '大写';

    console.log('区分大小写，a=' + a + '，A=' + a);


    /* 标识符 */ 
    let test,_test,$test;  // 第一个字符必须是一个字母、下划线（_）或者美元符号（$）

    let firstSecond,myCar,doSomethingImportant;  // 驼峰大小写形式


    /* 注释 */
    // 单行注释

    /**
     * 多
     * 行
     * 注
     * 释
     *  */ 


    /* 严格模式 */
    function doSomething(){
        "use strict"
        console.log("使用严格模式")
    }

    doSomething();


    /* 语句 */
    let num1 = 1    // 没有分号也有效，但不推荐
    let num2 = 2;   // 加分号有效，推荐
    console.log("不管加不加分号都能有效执行，但推荐加分号。num1=" + num1 + ",num2=" + num2);

    if(true){
        console.log('代码块显示');
    }

    if(true) console.log("单条语句可以不加代码块，但是不推荐");
})()
