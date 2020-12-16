(function(){
    console.log("-------------- 变量部分 --------------")

    console.log("------- var关键字 -------")
    /* var关键字 */
    // 不设初始值默认为undefined
    var message;  
    console.log('不设初始值默认为undefined,message=' + message);

    // 定义变量时同时设置它的值
    var message1 = "hi";  
    console.log('定义变量时同时设置它的值,message1=' + message1);

    // 可以改变变量值的类型，但是不推荐
    message1 = 100;  
    console.log('可以改变变量值的类型，但是不推荐，message1=' + message1);


    // var声明作用域
    function test1(){
        var message2 = 'h1'; // 局部变量
    }
    test1();
    // 报错：Uncaught ReferenceError: message2 is not defined
    // console.log(”var声明作用域：此时message2为局部变量，所以打印message2会报错。message2=“ + message2);  


    function test2(){
        message3 = 'hi'; // 全局变量，不推荐这么做
    }
    test2();
    console.log("var声明作用域：在函数内定义变量省略var操作符，则创建了一个全局变量，只要调用一次函数后，就会定义了这个变量，可在函数外访问到，message3=" + message3);

    function test3(){
        "use strict"
        message4 = 'hi'; // 严格模式下会报错
    }
    // variable.js:33 Uncaught ReferenceError: message4 is not defined
    // test3();

    // 定义多个变量
    var message5 = "hi",
        isSay=false,
        age=24,
        otherThing;   // 不赋值为undefined

    console.log("var声明作用域：定义多个变量：message5=" + message5 + ",isSay=" + isSay + ",age=" + isSay + ",otherThing=" + otherThing)


    // var声明提升
    function test4(){
        console.log('var声明提升：在var关键词声明变量前访问该变量不会报错，则为undefined，age1=' + age1);
        var age1 = 26;
    }
    test4();

    // 上述代码运行时被ECMAScript看成等价于下列代码
    function test5(){
        var age1;
        console.log('var声明提升：在var关键词声明变量前访问该变量不会报错，则为undefined，age1=' + age1);
        age1 = 26;
    }
    test5();

    function test6(){
        var age2 = 20;
        var age2 = 21;
        var age2 = 22;
        console.log("var声明提升：使用var关键字反复声明同一个变量也是没有问题，age2=" + age2);
    }
    test6();




    console.log("------- let声明 -------")
    /* let声明 */
    // let声明范围为块作用域，var则是函数作用域
    if(true){
        var name = "OUDUIDUI";
        console.log("使用var关键字在块作用域内声明name变量，在块作用域内可以访问：name" + name);
    }
    console.log("在块作用域外也可以访问：name" + name);

    if(true){
        let name1 = "OUDUIDUI";
        console.log("使用let在块作用域内声明name1变量，只能在块作用域内访问：name1" + name1);
    }
    // console.log("在块作用域外就无法可以访问：name1" + name1);


    // let不允许冗余声明
    let age3 = 24;
    //  报错：Uncaught SyntaxError: Identifier 'age3' has already been declared
    // let age3 = 24;  

    var age4 = 24;
    //  报错：Uncaught SyntaxError: Identifier 'age4' has already been declared
    // let age4 = 24; 

    // 嵌套声明重复变量不会报错
    let name2 = "OU";
    console.log("此时name2为OU，name2=" + name2);
    if(true){
        let name2 = "OUDUIDUI"
        console.log("此时name2为新声明的局部变量，值为OUDUIDUI，name2=" + name2);
    }

    // 暂时死区
    console.log('var存在声明提升，因此在声明前访问该变量为undefined，name3=' + name3);
    var name3 = 'OUDUIDUI';

    // console.log('let声明的变量不会在作用域中被提升，因为在声明前访问该变量会报错，name4=' + name4);
    let name4 = 'OUDUIDUI';


    // 全局变量
    var name5 = 'OUDUIDUI';
    console.log('在全局作用域中var声明的变量会成为window对象的属性，window.name5='+window.name5);
    let name6 = 'OUDUIDUI';
    console.log('而使用let声明的变量不会成为window对象的属性，访问则为undefined，window.name6=' + window.name6);


    // for循环中的let声明
    for(var i = 0; i < 5; ++i){
        // 循环逻辑
        // setTimeout(() => console.log('使用var声明会打印5个5,i=' + i),0);
    }
    console.log('for循环使用var定义的迭代变量会渗透到循环体外部,i=' + i);

    for(let j = 0; j < 5; ++j){
        // 循环逻辑
        // setTimeout(() => console.log('使用let声明会打印1,2,3,4,5,j=' + j),0);
    }
    // console.log('for循环使用let定义的迭代变量则不会渗透到循环体外部,j=' + j);



    console.log("------- const声明 -------")
    /* const声明 */
    // const声明变量时必须同时初始化变量，且不可修改变量，否认会报错
    const age5 = 26;
    // age5 = 27;  // 报错
    // const age6; // 报错

    // 如果const变量引用的是一个对象，那么修改这个对象内部的属性是可以的
    const person = {};
    person.name = 'OUDUIDUI';
    console.log('可以修改const变量声明的对象里面的属性值，person=' + JSON.stringify(person));
    // person = {name:'OUDUIDUI'}; // 但是重新赋值就会报错

})()