(function () {
    console.log("------------ 函数内部 ------------");
    console.log("-------- arguments --------");
    function factorial(num) {
        if (num <= 1) {
            return 1;
        } else {
            // return num * factorial(num - 1);
            return num * arguments.callee(num - 1);
        }
    }

    console.log(`factorial(5) = ${factorial(5)}`);

    console.log("-------- this --------");
    window.color = "red";
    o = { color: "blue" };
    function sayColor() {
        console.log(`标准函数：this.color = ${this.color}`);
    }
    o.sayColor = sayColor;
    sayColor();
    o.sayColor();
    const sayColor1 = () => {
        console.log(`箭头函数：this.color = ${this.color}`);
    };
    o.sayColor1 = sayColor1;
    sayColor1();
    o.sayColor1();

    function King() {
        this.royaltyName = "Henry";
        // this引用King的实例
        setTimeout(() =>
            console.log(`箭头函数：this.royaltyName = ${this.royaltyName}`)
        );
        // this引用window的对象
        setTimeout(function () {
            console.log(`标准函数：this.royaltyName = ${this.royaltyName}`);
        });
    }
    // new King();

    console.log("-------- caller --------");
    function outer(){
        inner()
    };
    function inner() {
        console.log('inner.caller : ',inner.caller);
        console.log('arguments.callee.caller : ',arguments.callee.caller);
    }
    outer();


    console.log("-------- new.target --------");
    function Queen(){
        if(!new.target){
            throw 'Queen must be instantiated using "new"';
        }
        console.log('Queen instantiated using "new"');
    };
    new Queen();   // Queen instantiated using "new"'
    // Queen();   // 'Queen must be instantiated using "new"'
})();  
