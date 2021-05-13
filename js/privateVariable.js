(function () {
    console.log("------------ 私有变量 ------------");
    function MyObject() {
        // 私有变量和私有函数
        let privateVariable = 10;
        function privateFunction() {
            return true;
        }

        // 特权方法
        this.publicMethod = function(){
            privateVariable++;
            return privateVariable;
        }

        this.getPrivateVariable = function() {
            return privateVariable;
        }

        this.setPrivateVariable = function(val) {
            privateVariable = val;
        }
    }
    const obj = new MyObject();
    console.log(`在构造函数中实现特权方法：obj.publicMethod() = ${obj.publicMethod()}`);
    obj.setPrivateVariable(100);
    console.log(`通过特权方法去修改私有变量：obj.getPrivateVariable() = ${obj.getPrivateVariable()}`);


    console.log("-------- 静态私有变量 --------");
    (function (){
        // 私有变量和私有函数
        let name = '';

        Person = function(value) {   // 不使用关键字声明的变量会创建子全局作用域，在严格模式下会导致错误
            name = value;
        }

        // 公有和特权方法
        Person.prototype.getName = function () {
            return name;
        }

        Person.prototype.setName = function (value) {
            name = value;
        }
    })()
    let person1 = new Person('Nicholas');
    console.log(`person1.getName() = ${person1.getName()}`)
    person1.setName('Matt');
    console.log(`person1.getName() = ${person1.getName()}`)
    let person2 = new Person('Michael');
    console.log(`person1.getName() = ${person1.getName()}`)
    console.log(`person2.getName() = ${person2.getName()}`)


    console.log("-------- 模块模式 --------");
    let singleton = function() {
        // 私有变量和私有函数
        let privateVariable = 10;

        function privateFunction() {
            return true;
        }

        // 特权/公有方法和属性
        return {
            publicProperty: true,
            publicMethod() {
                privateVariable++;
                return privateFunction();
            }
        }
    }();
    console.log(`singleton.publicMethod() = ${singleton.publicMethod()}`)

    console.log("-------- 模块增强模式 --------");
    class PowerObject extends Object {
        sayHi() {
            return 'Hello World'
        }
    }

    let singleton1 = function () {
        // 私有变量和私有函数
        let privateVariable = 10;

        function privateFunction() {
            return true;
        }

        // 创建对象
        let obj = new PowerObject();

        // 增加特权/公有方法和属性
        obj.publicProperty = true;
        obj.publicMethod = function() {
            privateVariable++;
            return privateFunction();
        };

        // 返回对象
        return obj;
    }()

    console.log(`singleton1.publicMethod() = ${singleton1.publicMethod()}`)
    console.log(`singleton1.sayHi() = ${singleton1.sayHi()}`)
})();
