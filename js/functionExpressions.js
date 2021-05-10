(function () {
    console.log("------------ 函数表达式 ------------");
    // 千万别这么做
    // if(true) {
    //     function sayHi() {
    //         console.log('Hi');
    //     }
    // }else{
    //     function sayHi() {   // 多少浏览器会忽略判断直接返回第二个声明
    //         console.log('Yo');
    //     }
    // }


    let sayHi;
    if(true) {
        sayHi = function() {
            console.log('Hi');
        }
    }else{
        sayHi = function() {
            console.log('Yo');
        }
    }

    sayHi();
})();  
