(function () {
    console.log("------------ 默认参数值 ------------");
    function sayHi(name = 'John', message = 'how are you?') {
        console.log(`在使用默认参数时，arguments对象的值不反映参数的默认值，只反映传给函数的参数: arguments[1] = ${arguments[1]}`);
        console.log(`hi ${name}, ${message}`);
    }
    sayHi('Henry');

    function makeKing(name = 'Henry', numerals = name){
        console.log(`numerals = ${numerals}`);
    }
    makeKing();
})()