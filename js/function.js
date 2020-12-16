(function(){
    console.log("-------------- 函数部分 --------------")
    function test(){
        console.log('声明一个函数');
    }
    // 调用函数
    test();

    function sum(num1,num2){
        return num1 + num2;
        console.log('return后面的语句不会执行。')
    }

    const result = sum(1 , 2);
    console.log(`得到sum函数返回值：result = ${result}`);
})()