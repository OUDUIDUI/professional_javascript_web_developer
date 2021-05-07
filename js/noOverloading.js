(function () {
    console.log("------------ 没有重载 ------------");
    function addSomeNumber(num) {
        return num + 100;
    };
    function addSomeNumber(num) {
        return num + 200;
    };
    console.log(`addSomeNumber(100) = ${addSomeNumber(100)}`);
})()