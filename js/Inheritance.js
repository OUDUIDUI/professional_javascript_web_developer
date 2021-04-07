(function () {
    console.log("------------- 继承 -------------");
    console.log("---------- 原型链 ----------");
    function SuperType() {
        this.property = true;
    }
    SuperType.prototype.getSuperValue = function () {
        return this.property;
    };
    function SubType() {
        this.subProperty = false;
    }
    // 继承SuperType
    SubType.prototype = new SuperType();
    SubType.prototype.getSubValue = function () {
        return this.subProperty;
    };
    let instance = new SubType();
    console.log(`instance.getSuperValue() = ${instance.getSuperValue()}`); // true
    console.log(`instance.getSubValue() = ${instance.getSubValue()}`); // false
    console.log(`instance instanceof Object = ${instance instanceof Object}`);
    console.log(
        `instance instanceof SuperType = ${instance instanceof SuperType}`
    ); // true
    console.log(`instance instanceof SubType = ${instance instanceof SubType}`); // true
    console.log(
        `Object.prototype.isPrototypeOf(instance) = ${Object.prototype.isPrototypeOf(
            instance
        )}`
    ); // true
    console.log(
        `SuperType.prototype.isPrototypeOf(instance) = ${SuperType.prototype.isPrototypeOf(
            instance
        )}`
    ); // true
    console.log(
        `SubType.prototype.isPrototypeOf(instance) = ${SubType.prototype.isPrototypeOf(
            instance
        )}`
    ); // true

    SubType.prototype.getSuperValue = function () {
        return false;
    };
    console.log(`子类有时候需要覆盖父类的方法，或者增加父类没有的方法，这些方法必须在原型赋值之后再添加到原型上:
    instance.getSuperValue() = ${instance.getSuperValue()}`); // false

    console.log("---------- 盗用构造函数 ----------");
    function SuperType2() {
        this.colors = ["red", "blue", "green"];
    }
    function SubType2() {
        // 继承SuperType2
        SuperType2.call(this);
    }
    let instance1 = new SubType2();
    instance1.colors.push("black");
    console.log(`instance1.colors = ${JSON.stringify(instance1.colors)}`);
    let instance2 = new SubType2();
    console.log(`instance2.colors = ${JSON.stringify(instance2.colors)}`);

    function SuperType3(name) {
        this.name = name;
    }
    function SubType3() {
        // 继承SuperType3并传参
        SuperType3.call(this, "Nicholas");
        // 实例属性
        this.age = 29;
    }
    let instance3 = new SubType3();
    console.log(`相比于使用原型链，盗用构造函数的一个优点就是可以在子类构造函数中向父类构造函数传参：
    instance3.name = ${instance3.name},
    instance4.age = ${instance3.age}`);

    console.log("---------- 组合继承 ----------");
    function SuperType4(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }
    SuperType4.prototype.sayName = function () {
        console.log(this.name);
    };

    function SubType4(name, age) {
        // 继承属性
        SuperType4.call(this, name);
        this.age = age;
    }
    // 继承方法
    SubType4.prototype = new SuperType4();
    SubType4.prototype.sayAge = function () {
        console.log(this.age);
    };
    let instance4 = new SubType4("Nicholas", 29);
    instance4.colors.push("black");
    console.log(`instance4.colors = ${JSON.stringify(instance4.colors)}`);
    instance4.sayName();
    instance4.sayAge();
    let instance5 = new SubType4("Greg", 27);
    console.log(`instance5.colors = ${JSON.stringify(instance5.colors)}`);
    instance5.sayName();
    instance5.sayAge();



    console.log("---------- 原型式继承 ----------");
    // object()是对传入的对象进行了一次浅复制
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
    let person13 = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"],
    };
    let anotherPerson = object(person13);
    anotherPerson.name = "Greg";
    anotherPerson.friends.push("Rob");
    let yetAnotherPerson = object(person13);
    yetAnotherPerson.name = "Linda";
    yetAnotherPerson.friends.push("Barbie");
    console.log(`
    person13.name = ${person13.name}
    anotherPerson.name = ${anotherPerson.name}
    yetAnotherPerson.name = ${yetAnotherPerson.name}
    person13.friends = ${JSON.stringify(person13.friends)}
    anotherPerson.friends = ${JSON.stringify(anotherPerson.friends)}
    yetAnotherPerson.friends = ${JSON.stringify(yetAnotherPerson.friends)}
    `);

    // 使用Object.create()实现
    person13 = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"],
    };
    anotherPerson = Object.create(person13);
    anotherPerson.name = "Greg";
    anotherPerson.friends.push("Rob");
    yetAnotherPerson = Object.create(person13, { name: { value: "Linda" } });
    yetAnotherPerson.friends.push("Barbie");
    console.log(`使用Object.create()实现：
    person13.name = ${person13.name}
    anotherPerson.name = ${anotherPerson.name}
    yetAnotherPerson.name = ${yetAnotherPerson.name}
    person13.friends = ${JSON.stringify(person13.friends)}
    anotherPerson.friends = ${JSON.stringify(anotherPerson.friends)}
    yetAnotherPerson.friends = ${JSON.stringify(yetAnotherPerson.friends)}
    `);



    console.log("---------- 寄生式继承 ----------");
    function createAnother(original) {
        let clone = object(original); // 通过调用函数创建一个新对象
        clone.sayHi = function(){    // 以某种方式增强这个对象
            console.log("hi");
        };
        return clone;    // 返回这个对象
    }

    let person14 = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"],
    };
    let anotherPerson2 = createAnother(person14);
    anotherPerson2.sayHi();


    console.log("---------- 寄生式组合继承 ----------");
    function inheritPrototype(subType, superType) {   // 接收子类构造函数和父类构造函数
        let prototype = object(superType.prototype);   // 创建对象
        prototype.constructor = subType;     // 增强对象
        subType.prototype = prototype;    // 赋值对象
    }
    function SuperType5(name) {
        this.name = name;
        this.colors = ['red', 'blue', 'green'];
    }
    SuperType5.prototype.sayName = function(){
        console.log(this.name);
    }
    function SubType5(name,age){
        SuperType5.call(this,name);
        this.age = age;
    }
    inheritPrototype(SubType5, SuperType5);
    SubType5.prototype.sayAge = function() {
        console.log(this.age);
    }
    let instance6 = new SubType5("Nicholas", 29);
    instance6.colors.push("black");
    console.log(`instance6.colors = ${JSON.stringify(instance6.colors)}`);
    instance6.sayName();
    instance6.sayAge();
    let instance7 = new SubType5("Greg", 27);
    console.log(`instance7.colors = ${JSON.stringify(instance7.colors)}`);
    instance7.sayName();
    instance7.sayAge();
})();
