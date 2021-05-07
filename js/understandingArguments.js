(function () {
    console.log("------------ 理解参数 ------------");
    function sayHi(name, message) {
        console.log(`hello ` + name + ', ' + message);
        console.log(`hello ` + arguments[0] + ', ' + arguments[1]);
    }
    function sayHi1() {
        console.log(`arguments.length = ${arguments.length}`);
        console.log(`hello ` + arguments[0] + ', ' + arguments[1]);
    }
    sayHi('John', 'how are you?');
    sayHi1('John', 'how are you?');

    function doSomething(num1) {
        arguments[0] = 10;
        console.log(`arguments的值始终会与对应的命名参数同步 ：num1 = ${num1}`);
    }
    doSomething(1);


    let bar = (num) => {
        console.log(`num = ${num}`);
        // console.log(`arguments[0] = ${arguments[0]}`);  // Uncaught ReferenceError: argument is not defined
    };
    bar(0);
})()