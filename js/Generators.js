(function () {
    console.log(`------------ 生成器 ------------`);
    console.log(`--------- 生成器基础 ---------`);
    // 生成器函数声明
    function* generatorFn1() { }
    // 生成器函数表达式
    const generatorFn2 = function* () { }
    // 作为对象字面量方法的生成器函数
    let foo = {
        * generatorFn() { }
    };
    // 作为类实例方法的生成器函数
    class Foo {
        * generatorFn() { }
    }
    // 作为类静态方法的生成器函数
    class Bar {
        static * generatorFn() { }
    }

    function* generatorFn() {
        console.log(`foo`);
        return 'foo';
    }
    let generatorObject = generatorFn();   // 初次调用生成器函数并不会打印日志
    console.log(`生成器对象：generatorObject = `)
    console.log(generatorObject);
    console.log(`generatorObject.next() = ${JSON.stringify(generatorObject.next())}`);


    console.log(`--------- 通过yield中断执行 ---------`);
    function* generatorFn3() {
        yield 'foo';
        yield 'bar';
        return 'baz';
    }
    let generatorObject3 = generatorFn3();
    console.log(`generatorObject3.next() = ${JSON.stringify(generatorObject3.next())}`);
    console.log(`generatorObject3.next() = ${JSON.stringify(generatorObject3.next())}`);
    console.log(`generatorObject3.next() = ${JSON.stringify(generatorObject3.next())}`);

    // 有效
    function* validGeneratorFn(){
        yield;
    }

    // 无效
    function* invalidGeneratorFnA(){
        function a() {
            yield;
        }
    }

    // 无效
    function* invalidGeneratorFnB(){
        const b = () => {
            yield;
        }
    }

    // 无效
    function* invalidGeneratorFnC(){
        (() => {
            yield;
        })()
    }

    function* generatorFn4() {
        yield 1;
        yield 2;
        yield 3;
    }
    for(const x of generatorFn4()){
        console.log(`生成器作为可迭代对象：x = ${x}`);
    }

    console.log(`使用yield实现输入和输出：`);
    function* generatorFn5(initial) {
        console.log(initial);
        console.log(yield);
        console.log(yield);
    }
    let generatorObject5 = generatorFn5('foo');
    generatorObject5.next('bar');  // foo
    generatorObject5.next('baz');  // baz
    generatorObject5.next('qux');  // qux

    function* generatorFn6() {
        yield* [1,2,3];
    }
    for(const x of generatorFn6()){
        console.log(`产生可迭代对象：x = ${x}`);
    }

    function* nTimes(n){
        if(n > 0){
            yield* nTimes(n - 1);
            yield n - 1;
        }
    }
    for(const x of nTimes(3)){
        console.log(`使用yield*实现递归算法：x = ${x}`);
    }

    console.log(`--------- 生成器作为默认迭代器 ---------`);
    class Foo1 {
        constructor() {
            this.values = [1,2,3];
        }
        * [Symbol.iterator](){
            yield* this.values;
        }
    }
    const f = new Foo1();
    for (const x of f){
        console.log(x);
    }

    console.log(`--------- 提前终止生成器 ---------`);
    function* generatorFn7() {};
    const g = generatorFn7();
    console.log(`g = ${g}`);
    console.log(`g.next = ${g.next}`);
    console.log(`g.return = ${g.return}`);
    console.log(`g.throw = ${g.throw}`);

    console.log(`使用return()提前终止生成器`);
    function* generatorFn8() {
        for(const x of [1,2,3]){
            yield x;
        }
    }
    const g8 = generatorFn8();
    console.log(`g8.next() = ${JSON.stringify(g8.next())}`);
    console.log(`g8.return(4) = ${JSON.stringify(g8.return(4))}`);
    console.log(`g8 = `,g8);
    console.log(`g8.next() = ${JSON.stringify(g8.next())}`);

    console.log(`throw()提前终止生成器`);
    function* generatorFn9() {
        for(const x of [1,2,3]){
            yield x;
        }
    }
    const g9 = generatorFn9();
    try {
        g9.throw('foo');
    } catch (e) {
        console.log(e);   // 'foo'
    }
    console.log(`g9 = `,g9);

    function* generatorFn10() {
        for(const x of [1,2,3]){
            try {
                yield x;
            } catch (e) {
                console.log(`假如生成器内部处理了这个错误，那么生成器就不会被关闭，而且还可以恢复执行`);
            }
        }
    }
    const g10 = generatorFn10();
    console.log(`g10.next() = ${JSON.stringify(g10.next())}`);
    g10.throw('foo');
    console.log(`g10.next() = ${JSON.stringify(g10.next())}`);
})()