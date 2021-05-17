(async function () {
    console.log("------------ 异步编程 ------------");
    console.log('同步行为1');
    console.log('同步行为2');
    setTimeout(() => console.log('异步行为'));
    console.log('同步行为3');

    function double(value, callback) {
        setTimeout(() => callback(value * 2), 1000);
    }
    double(3 , (x) => console.log(`获取到异步返回值：x = ${x}`));
})()