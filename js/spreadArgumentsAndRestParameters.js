(function () {
    console.log("------------ 参数扩展与收集 ------------");
    console.log("-------- 扩展参数 --------");
    function getSum() {
        let sum = 0;
        for (let i = 0; i < arguments.length; ++i) {
            sum += arguments[i];
        }
        return sum;
    }
    console.log(`getSum(...[1,2,3,4]) = ${getSum(...[1, 2, 3, 4])}`);

    console.log("-------- 收集参数 --------");
    function getSum1(firstNum, ...otherNums) {
        console.log(`firstNum = ${firstNum}`);
        return firstNum + otherNums.reduce((x, y) => x + y, 0);
    }
    console.log(`getSum1(...[1,2,3,4]) = ${getSum1(...[1, 2, 3, 4])}`);
})();
