(function () {
    console.log("------------ 函数属性与方法 ------------");
    function sum(num1, num2){
        return num1 + num2;
    }
    function sayHi(){
        console.log('hi');
    }
    console.log(`sum.length = ${sum.length}`);
    console.log(`sayHi.length = ${sayHi.length}`);

    function callSum1(num1,num2){
        // return sum.apply(this, arguments);
        return sum.apply(this, [num1, num2]);
    }

    function callSum2(num1,num2){
        // return sum.apply(this, arguments);
        return sum.call(this, num1, num2);
    }
    console.log(`callSum1(10, 20) = ${callSum1(10, 20)}`);
    console.log(`callSum2(10, 20) = ${callSum2(10, 20)}`);

    window.color = 'red';
    let o = {
        color: 'blue'
    };
    function sayColor() {
        console.log(`this.color = ${this.color}`);
    };
    sayColor();
    sayColor.call(o);
    sayColor.apply({color: 'white'});
    sayColor.bind(o)();
})();  
