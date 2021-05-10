(function () {
    console.log("------------ 函数作为值 ------------");
    function callSomeFunction(someFunction, someArgument){
        return someFunction(someArgument);
    }

    function add10(num) {
        return num + 10;
    }

    console.log(`callSomeFunction(add10, 20) = ${callSomeFunction(add10, 20)}`);
})();
