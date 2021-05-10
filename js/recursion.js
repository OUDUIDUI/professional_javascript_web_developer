(function () {
    console.log("------------ 递归 ------------");
    function factorial(num) {
        if(num <= 1){
            return 1
        }else {
            return num * factorial(num - 1);
        }
    }

    function factorial1(num) {
        if(num <= 1){
            return 1
        }else {
            return num * arguments.callee(num - 1);
        }
    }

    const factorial2 = (function f(num) {
        if(num <= 1){
            return 1
        }else {
            return num * f(num - 1);
        }
    })

    console.log(`factorial(5) = ${factorial(5)}`);
    console.log(`factorial1(5) = ${factorial1(5)}`);
    console.log(`factorial2(5) = ${factorial2(5)}`);
})();  
