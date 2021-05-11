(function () {
    console.log("------------ 箭头函数 ------------");
    let arrowSum = (a, b) => {
        return a + b;
    }
    console.log(`arrowSum(5, 8) = ${arrowSum(5, 8)}`);

    let double = x => 2 * x;
    console.log(`double(5) = ${double(5)}`);
})()