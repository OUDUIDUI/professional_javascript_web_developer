(function () {
    console.log("------------- 类 -------------");
    console.log("---------- 类定义 ----------");
    // 类声明
    class TestClass {}
    // 类表达式
    const TestClass1 = class {};

    {
        function FunctionDeclaration() {}
        class ClassDeclaration {}
    }

    try {
        console.log(`函数受函数作用域限制，而类受块作用域限制`);
        console.log(FunctionDeclaration);
        console.log(ClassDeclaration); // 报错
    } catch (error) {
        console.log(error);
    }

    const TestClass2 = class Test {
        identify() {
            console.log("类表达式的名称是可选的");
        }
    };
    let test = new TestClass2();
    test.identify();

    console.log("---------- 类构造函数 ----------");
    class TestClass3 {
        constructor(name) {
            console.log(
                `使用new操作符实例化类的操作等于使用new调用其构造函数：`
            );
            this.name = name;
        }
    }
    let test2 = new TestClass3("Nicolas");
    console.log(`test2.name = ${test2.name}`);

    class TestClass4 {
        constructor() {
            return {
                bar: "bar",
            };
        }
    }
    let test3 = new TestClass4();
    console.log(`如果返回的不是this对象，而是其他对象，那么这个对象不会通过instanceof操作符检测出跟类有关联:
    test3 instanceof TestClass4 = ${test3 instanceof TestClass4}`);

    class TestClass5 {}
    const test4 = new TestClass5();
    console.log(`typeof TestClass5 = ${typeof TestClass5}`);
    console.log(`TestClass5.prototype = `, TestClass5.prototype);
    console.log(
        `TestClass5 === TestClass5.prototype.constructor  ->  ${
            TestClass5 === TestClass5.prototype.constructor
        }`
    );
    console.log(`test4 instanceof TestClass5 = ${test4 instanceof TestClass5}`);
    console.log(
        `test4.constructor == TestClass5  -> ${test4.constructor == TestClass5}`
    );
    console.log(
        `test4 instanceof TestClass5.constructor = ${
            test4 instanceof TestClass5.constructor
        }`
    );

    console.log(
        `如果在创建实例时直接将类构造函数当做普通构造函数来使用，那么instanceof操作符的返回值会反转:`
    );
    const test5 = new TestClass5.constructor();
    console.log(`test5 instanceof TestClass5 = ${test5 instanceof TestClass5}`);
    console.log(
        `test5.constructor == TestClass5  -> ${test5.constructor == TestClass5}`
    );
    console.log(
        `test5 instanceof TestClass5.constructor = ${
            test5 instanceof TestClass5.constructor
        }`
    );

    let test6 = new (class TestClass6 {
        constructor() {
            console.log(`与立即调用函数表达式一样，类也可以立即实例化`);
        }
    })();

    console.log("---------- 实例、原型和类成员 ----------");
    console.log("------- 实例成员 -------");
    class Person {
        constructor() {
            this.name = new String("Jack");
            this.sayName = () => console.log(this.name);
            this.nicknames = ["Jake", "J-Dog"];
        }
    }
    let p1 = new Person();
    let p2 = new Person();

    console.log(`所有成员都不会在原型上共享:
    p1.name === p2.name  -> ${p1.name === p2.name},
    p1.sayName === p2.sayName  -> ${p1.sayName === p2.sayName},
    p1.nicknames === p2.nicknames  -> ${p1.nicknames === p2.nicknames}`);

    p1.name = p1.nicknames[0];
    p2.name = p2.nicknames[1];
    p1.sayName();
    p2.sayName();

    console.log("------- 原型方法与访问器 -------");
    const symbolKey = Symbol["symbolKey"];
    class Person2 {
        // name: 'Jake'   // 不能在类块中给原型添加原始值作为成员数据

        constructor() {
            this.locate = () => console.log("可以把方法定义在类构造函数中");
        }
        locate() {
            console.log("可以把方法定义在类块中");
        }
        [symbolKey]() {
            console.log(
                `类方法等同于对象属性，可以使用字符串、符号或计算的值作为键`
            );
        }
        [1 + 2]() {
            console.log(
                `类方法等同于对象属性，可以使用字符串、符号或计算的值作为键`
            );
        }
        set name(newName) {
            this.name_ = newName;
        }
        get name() {
            return this.name_;
        }
    }
    let p3 = new Person2();
    p3.locate();
    Person2.prototype.locate();
    p3[symbolKey]();
    p3[3]();
    p3.name = "Jake";
    console.log(`类定义支持获取和设置访问器：p3.name = ${p3.name}`);

    console.log("------- 静态类方法 -------");
    class Person3 {
        constructor() {
            this.locate = () => console.log("instance", this);
        }
        locate() {
            console.log("prototype", this);
        }
        static locate() {
            console.log("class", this);
        }
    }
    let p4 = new Person3();
    console.log(`在静态成员中，this引用类自身`);
    p4.locate();
    Person3.prototype.locate();
    Person3.locate();

    class Person4 {
        constructor(age) {
            this.age_ = age;
        }
        sayAge() {
            console.log(this.age_);
        }
        static create() {
            // 使用随机年龄创建并返回一个Person实例
            return new Person4(Math.floor(Math.random() * 100));
        }
    }
    console.log(`静态类方法非常适用作为实例工厂`, Person4.create());

    console.log("------- 非函数原型和类成员 -------");
    class Person5 {
        sayName() {
            console.log(`${Person5.greeting} ${this.name}`);
        }
    }
    console.log(
        `虽然类定义并不显性支持在原型或类上添加成员数据，但在类定义外部，可以手动添加:`
    );
    Person5.greeting = "My name is"; // 在类上定义数据成员
    Person5.prototype.name = "Jake"; // 在原型上定义数据成员
    let p5 = new Person5();
    p5.sayName();

    console.log("------- 迭代器与生成器方法 -------");
    class Person6 {
        // 在原型上定义生成器方法
        *createNicknameIterator() {
            yield "Jack";
            yield "Jake";
            yield "J-Dog";
        }

        // 在类上定义生成器方法
        static *createJobIterator() {
            yield "Butcher";
            yield "Baker";
            yield "Candlestick Maker";
        }
    }
    let jobIter = Person6.createJobIterator();
    console.log(`jobIter.next().value = ${jobIter.next().value}`);
    console.log(`jobIter.next().value = ${jobIter.next().value}`);
    console.log(`jobIter.next().value = ${jobIter.next().value}`);

    let p6 = new Person6();
    let nicknameIter = p6.createNicknameIterator();
    console.log(`nicknameIter.next().value = ${nicknameIter.next().value}`);
    console.log(`nicknameIter.next().value = ${nicknameIter.next().value}`);
    console.log(`nicknameIter.next().value = ${nicknameIter.next().value}`);

    console.log(
        `因为支持生成器方法，所以可以通过添加一个默认的迭代器，把类实例变成可迭代对象:`
    );
    class Person7 {
        constructor() {
            this.nicknames = ["Jack", "Jake", "J-Dog"];
        }
        *[Symbol.iterator]() {
            yield* this.nicknames.entries();
        }

        // [Symbol.iterator]() {
        //     return this.nicknames.entries();
        // }
    }
    let p7 = new Person7();
    for (let [idx, nickname] of p7) {
        console.log(idx, nickname);
    }

    console.log("---------- 继承 ----------");
    console.log("------- 继承基础 -------");
    class Vehicle {
        identifyPrototype(id) {
            console.log(id, this);
        }
        static identifyClass(id) {
            console.log(id,this);
        }
    }
    // 继承类
    class Bus extends Vehicle {};
    let v = new Vehicle();
    let b = new Bus();
    console.log(`b instanceof Bus = ${b instanceof Bus}`);
    console.log(`b instanceof Vehicle = ${b instanceof Vehicle}`);

    v.identifyPrototype('vehicle');
    b.identifyPrototype('bus');
    Vehicle.identifyClass('vehicle');
    Bus.identifyClass('bus');

    console.log("------- 构造函数、HomeObject和super() -------");
    class Vehicle1 {
        constructor(bool) {
            this.hasEngine = bool;
        }
        static identify(){
            console.log('vehicle');
        }
    }
    class Bus1 extends Vehicle1{
        constructor() {
            // 不要在调用super()之前调用this，否则会抛出ReferenceError
            super(true);
            console.log(`this instanceof Vehicle1 = ${this instanceof Vehicle1}`);
            console.log(`this`,this);
        }
        static identify(){
            super.identify();
        }
    }
    new Bus1();
    Bus1.identify();

    class Van extends Vehicle1{};
    console.log(`如果没有定义类构造函数，在实例化派生类会调用super()，而且会传入所有传入派生类的参数:`);
    console.log(new Van(false));

    class Van1 extends Vehicle1{
        constructor(){
            return {}
        }
    };
    console.log(`如果在派生类中显性定义了构造函数，这要么在使用中调用super()，要么必须在其中返回一个对象:`);
    console.log(new Van1(false));


    console.log("------- 抽象基类 -------");
    class Vehicle2 {
        constructor() {
            console.log(`new.target = ${new.target}`);
            if(new.target === Vehicle2){
                throw new Error('Vuhicle2不能被实例化。')
            }

            if(!this.foo){
                throw new Error('派生类必须定义foo()')
            }

            console.log('继承成功');
        }
    }
    class Bus2 extends Vehicle2 {
        foo() {}
    };
    class Van2 extends Vehicle2 {};
    new Bus2();
    // new Vehicle2();
    // new Van2();


    console.log("------- 继承内置类型 -------");
    class SuperArray extends Array {
        shuffle() {
            // 洗牌算法
            for(let i = this.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * (i + 1));
                [this[i],this[j]] = [this[j],this[i]]
            }
        }
    }

    let a1 = new SuperArray(1,2,3,4,5);
    console.log(`a instanceof Array = ${a1 instanceof Array}`);
    console.log(`a instanceof SuperArray = ${a1 instanceof SuperArray}`);
    console.log(`a = ${JSON.stringify(a1)}`);
    a1.shuffle();
    console.log(`a = ${JSON.stringify(a1)}`);

    console.log(`默认情况下，返回实例与原始实例的类型是一致的`);
    let a2 = a1.filter(x => !!(x%2));
    console.log(`a2 = ${JSON.stringify(a2)}`);
    console.log(`a2 instanceof SuperArray = ${a2 instanceof SuperArray}`);

    console.log(`如果想覆盖这个默认行为，则可以覆盖Symbol.species访问器，这个访问器决定在创建返回实例时使用的类`);
    class SuperArray1 extends Array {
        static get [Symbol.species]() {
            return Array;
        }
    }
    const a3 = new SuperArray1(1,2,3,4,5);
    const a4 = a3.filter(x => !!(x%2));
    console.log(`a3 instanceof SuperArray1 = ${a3 instanceof SuperArray1}`);
    console.log(`a4 instanceof SuperArray1 = ${a4 instanceof SuperArray1}`);


    console.log("------- 类混入 -------");
    class Vehicle3 {};

    let FooMixin = (Superclass) => class extends Superclass {
        foo() {
            console.log('foo');
        }
    }
    let BarMixin = (Superclass) => class extends Superclass {
        bar() {
            console.log('bar');
        }
    }
    let BazMixin = (Superclass) => class extends Superclass {
        baz() {
            console.log('baz');
        }
    }

    function mix(BaseClass, ...Mixins){
        return Mixins.reduce((acc,cur) => cur(acc), BaseClass);
    }

    class Bus3 extends mix(Vehicle3,FooMixin,BarMixin,BazMixin){};
    
    let b3 = new Bus3();
    b3.foo();
    b3.bar();
    b3.baz();
})();
