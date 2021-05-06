(function () {
    console.log("------------ 代理模式 ------------");
    console.log("--------- 跟踪属性访问 ---------");
    const user = {
        name: 'Jake'
    };
    const proxy = new Proxy(user, {
        get(target, property, receiver) {
            console.log(`Getting ${property}`);

            return Reflect.get(...arguments);
        },
        set(target, property, value, receiver) {
            console.log(`Setting ${property} = ${value}`);

            return Reflect.set(...arguments);
        }
    })

    proxy.name;
    proxy.age = 27;


    console.log("--------- 隐藏属性 ---------");
    const hiddenProperties = ['foo', 'bar'];
    const targetObject = {
        foo: 1,
        bar: 2,
        baz: 3
    };
    const proxy1 = new Proxy(targetObject, {
        get(target, property) {
            if(hiddenProperties.includes(property)){
                return undefined;
            }else {
                return Reflect.get(...arguments);
            }
        },
        has(target, property) {
            if(hiddenProperties.includes(property)){
                return false;
            }else {
                return Reflect.get(...arguments);
            }
        }
    })

    console.log(`proxy1.foo = ${proxy1.foo}`);   // undefined
    console.log(`proxy1.bar = ${proxy1.bar}`);   // undefined
    console.log(`proxy1.baz = ${proxy1.baz}`);   // 3
    console.log(`'foo' in proxy1 = ${'foo' in proxy1}`);   // false
    console.log(`'bar' in proxy1 = ${'bar' in proxy1}`);   // false
    console.log(`'baz' in proxy1 = ${'baz' in proxy1}`);   // true



    console.log("--------- 属性验证 ---------");
    const target = {
        onlyNumbersGoHere: 0
    };
    const proxy2 = new Proxy(target, {
        set(target, property, value) {
            if(typeof value !== 'number'){
                return false;
            }else {
                return Reflect.set(...arguments);
            }
        }
    })

    proxy2.onlyNumbersGoHere = 1;
    console.log(`proxy2.onlyNumbersGoHere = ${proxy2.onlyNumbersGoHere}`);    // 1
    proxy2.onlyNumbersGoHere = '2';
    console.log(`proxy2.onlyNumbersGoHere = ${proxy2.onlyNumbersGoHere}`);    // 1



    console.log("--------- 函数与构造函数参数验证 ---------");
    function median(...nums) {
        return nums.sort()[Math.floor(nums.length / 2)];
    };
    const proxy3 = new Proxy(median, {
        apply(target, thisArg, argumentsList){
            for(const arg of argumentsList) {
                if(typeof arg !== 'number'){
                    throw 'Non-number argument provided';
                }
            }
            return Reflect.apply(...arguments);
        }
    })

    console.log(`proxy3(4,7,1) = ${JSON.stringify(proxy3(4,7,1))}`);
    // console.log(`proxy3(4,'7',1) = ${JSON.stringify(proxy3(4,'7',1))}`);   // 'Non-number argument provided'


    class User {
        constructor(id) {
            this.id = id;
        }
    }

    const proxy4 = new Proxy(User, {
        construct(target, argumentsList, newTarget) {
            if(argumentsList[0] === undefined){
                throw 'User cannot be instantiated without id'
            } else {
                return Reflect.construct(...arguments);
            }
        }
    })

    new proxy4(1);
    // new proxy4();   // User cannot be instantiated without id


    console.log("--------- 数据绑定与可观察对象 ---------");
    const userList = [];
    class User1 {
        constructor(name) {
            this._name = name;
        }
    };

    const proxy5 = new Proxy(User1, {
        construct(){
            const newUser = Reflect.construct(...arguments);
            userList.push(newUser);
            return newUser;
        }
    })

    new proxy5('John');
    new proxy5('Jacob');
    new proxy5('Sarah');
    console.log(userList);
})()