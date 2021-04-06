(function () {
    console.log("------------- 创建对象 -------------");
    console.log("---------- 工厂模式 ----------");
    function createPerson(name, age, job) {
        let o = new Object();
        o.name = name;
        o.age = age;
        o.job = job;
        o.sayName = function () {
            console.log(this.name);
        };
        return o;
    }
    let person1 = createPerson("Nicholas", 29, "Software Engineer");
    console.log(person1);

    console.log("---------- 构造函数模式 ----------");
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.sayName = function () {
            console.log(this.name);
        };
    }
    let person2 = new Person("Nicholas", 29, "Software Engineer");
    console.log(person2);
    console.log(
        `person2.constructor === Person -> ${person2.constructor === Person}`
    );
    console.log(`person2 instanceof Object = ${person2 instanceof Object}`);
    console.log(`person2 instanceof Person = ${person2 instanceof Person}`);

    // 作为函数调用
    console.log(`作为函数调用: `);
    Person("Greg", 27, "Doctor"); // 添加到window对象
    window.sayName();

    // 在另一个对象的作用域中调用
    console.log(`在另一个对象的作用域中调用: `);
    let o = new Object();
    Person.call(o, "Kristen", 25, "Nurse");
    o.sayName();

    console.log("---------- 原型模式 ----------");
    function Person2() {}
    Person2.prototype.name = "Nicholas";
    Person2.prototype.age = 29;
    Person2.prototype.job = "Software engineer";
    Person2.prototype.sayName = function () {
        console.log(this.name);
    };

    let person3 = new Person2();
    person3.sayName();
    let person4 = new Person2();
    console.log(
        `person3.sayName === person4.sayName -> ${
            person3.sayName === person4.sayName
        }`
    );

    console.log("------- 理解原型 -------");
    const Person3 = function () {}; // 新建构造函数
    console.log(`typeof Person3.prototype = ${typeof Person3.prototype}`); // object
    console.log("Person3.prototype = ", Person3.prototype); // __proto__: Object
    console.log(
        `Person3.prototype.constructor === Person3 -> ${
            Person3.prototype.constructor === Person3
        }`
    ); // true
    console.log(
        `Person3.prototype.__proto__ === Object.prototype -> ${
            Person3.prototype.__proto__ === Object.prototype
        }`
    ); // true
    console.log(
        `Person3.prototype.__proto__.constructor === Object -> ${
            Person3.prototype.__proto__.constructor === Object
        }`
    ); // true
    console.log(
        `Person3.prototype.__proto__.__proto__ === null -> ${
            Person3.prototype.__proto__.__proto__ === null
        }`
    ); // true
    console.log(`Person3.prototype.__proto__`, Person3.prototype.__proto__);

    let person5 = new Person3();
    let person6 = new Person3();
    console.log(`构造函数、原型对象和实例是3个完全不同的对象：
    person5 !== Person3  ->  ${person5 !== Person3},
    person5 !== Person3.prototype  ->  ${person5 !== Person3.prototype},
    Person3.prototype !== Person3  ->  ${Person3.prototype !== Person3}`);
    console.log(`实例与构造函数没有直接联系，但与原型对象有直接联系：
    person5.__proto__ === Person3.prototype  ->  ${
        person5.__proto__ === Person3.prototype
    },
    person5.__proto__.constructor === Person3  ->  ${
        person5.__proto__.constructor === Person3
    }`);
    console.log(`同一个构造函数创建的两个实例，共享同一个原型对象：
    person5.__proto__ === person6.__proto__  ->  ${
        person5.__proto__ === person6.__proto__
    }`);

    console.log(`通过instanceof检测实例的原型链中是否包含指定构造函数的原型：
    person5 instanceof Person3 = ${person5 instanceof Person3}, 
    person5 instanceof Object = ${person5 instanceof Object},
    Person3.prototype instanceof Object = ${
        Person3.prototype instanceof Object
    }`);

    console.log(`isPrototypeOf()会在传入参数的[[Prototype]]指向调用它的对象时返回true：
    Person3.prototype.isPrototypeOf(person5) = ${Person3.prototype.isPrototypeOf(
        person5
    )}
    Person3.prototype.isPrototypeOf(person6) = ${Person3.prototype.isPrototypeOf(
        person6
    )}`);

    console.log(
        `ECMAScript的Object.getPrototypeOf()，返回参数的内部特性[[Prototype]]的值：
    Object.getPrototypeOf(person5) = `,
        Object.getPrototypeOf(person5),
        `
    Object.getPrototypeOf(person5) === Person3.prototype  ->  ${
        Object.getPrototypeOf(person5) === Person3.prototype
    }`
    );

    let biped = { numLegs: 2 };
    let person7 = { name: "Matt" };
    Object.setPrototypeOf(person7, biped);
    console.log(`Object类型还有一个setPrototypeOf()方法，可以向实例的私有特性[[Prototype]]写入一个新值：
    person7.name = ${person7.name},
    person7.numLegs = ${person7.numLegs},
    Object.getPrototypeOf(person7) === biped  -> ${
        Object.getPrototypeOf(person7) === biped
    }`);

    let person8 = Object.create(biped);
    person8.name = "Matt";
    console.log(`通过Object.create()来创建一个新对象，同时为其指定原型：
    person8.name = ${person8.name},
    person8.numLegs = ${person8.numLegs},
    Object.getPrototypeOf(person8) === biped  -> ${
        Object.getPrototypeOf(person8) === biped
    }`);

    console.log("------- 原型层级 -------");
    function Person4() {}

    Person4.prototype.name = "Nicholas";
    Person4.prototype.age = 24;
    Person4.prototype.job = "Software Engineer";
    Person4.prototype.sayName = () => {
        console.log(this.name);
    };
    let person9 = new Person4();
    let person10 = new Person4();

    person9.name = "Greg";
    console.log(`返回实例的name：person9.name = ${person9.name}`);
    console.log(`返回原型的name：person10.name = ${person10.name}`);

    delete person9.name;
    console.log(`返回原型的name：person9.name = ${person9.name}`);

    person9.name = "Greg";
    console.log(`hasOwnProperty()方法用于确定某个属性是实例上的还是在原型上的：
    person9.hasOwnProperty('name') = ${person9.hasOwnProperty("name")},
    person10.hasOwnProperty('name') = ${person10.hasOwnProperty("name")}`);

    console.log("------- 原型和in操作符 -------");
    console.log(`"name" in person9 = ${"name" in person9}`);
    console.log(`"name" in person10 = ${"name" in person10}`);
    console.log(`"gender" in person9 = ${"gender" in person9}`);

    for (let key in person9) {
        console.log(
            `通过对象访问且可以被枚举的属性都会返回，包括实例属性和原型属性: key = ${key}`
        );
    }
    console.log(`要获得对象上所有可枚举的实例属性，可以使用Object.keys()方法: 
    Object.keys(person9) = ${JSON.stringify(Object.keys(person9))}`);
    console.log(`如果想列出所有实例属性，无论是否可以枚举，都可以使用Object.getOwnPropertyNames(): 
    Object.getOwnPropertyNames(Person4.prototype) = ${JSON.stringify(
        Object.getOwnPropertyNames(Person4.prototype)
    )}`);

    console.log("---------- 对象迭代 ----------");
    const obj = { foo: "bar", baz: 1, qux: {}, [Symbol()]: "foo" };
    console.log(`Object.values(obj) = ${JSON.stringify(Object.values(obj))}`);
    console.log(`Object.entries(obj) = ${JSON.stringify(Object.entries(obj))}`);

    function Person5() {};
    Person5.prototype = {
        name: 'Nicholas',
        age: 29,
        job: 'Software Engineer',
        sayName() {
            console.log(this.name);
        }
    }
    let friend = new Person5();
    console.log(` 对象字面量写法会完全重写了默认的prototype对象，因此其constructor属性也指向了完全不同的新对象(Object构造函数)，不再指向原来的构造函数:
    friend instanceof Object = ${friend instanceof Object},
    friend instanceof Person5 = ${friend instanceof Person5},
    friend.constructor == Person5  ->  ${friend.constructor == Person5},
    friend.constructor == Object  ->  ${friend.constructor == Object}`);

    // 两种方式恢复constructor的值
    Person5.prototype = {
        constructor: Person5,
        name: 'Nicholas',
        age: 29,
        job: 'Software Engineer',
        sayName() {
            console.log(this.name);
        }
    };

    Object.defineProperty(Person5.prototype, "constructor", {
        enumerable: false, 
        value: Person5
    })
    let friend1 = new Person5();
    console.log(`恢复constructor的值:
    friend1.constructor == Person5  ->  ${friend1.constructor == Person5}`);


    console.log(`任何时候对原型所做的修改都会在实例上反映出来：`);
    function Person6() {};
    let friend2 = new Person6();
    Person6.prototype.sayHi = function() {
        console.log('Hi');
    };
    friend2.sayHi();

    Person6.prototype = {
        constructor: Person6,
        name: 'Nicholas',
        age: 29,
        sayName() {
            console.log(this.name);
        }
    };
    // 报错
    // friend2.sayName(); 

    function Person7(){};
    Person7.prototype.friends = ['Shelby','Court'];
    let person11 = new Person7();
    let person12 = new Person7();
    person11.friends.push('Van');
    console.log(`原型的共享特性：
    person11.friends = ${JSON.stringify(person11.friends)},
    person12.friends = ${JSON.stringify(person12.friends)},
    person11.friends === person12.friends  ->  ${person11.friends === person12.friends}`);
})();
