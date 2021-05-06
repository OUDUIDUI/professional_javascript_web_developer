(function () {
    console.log("------------ 代理捕获器与反射方法 ------------");
    console.log("--------- get() ---------");
    const myTarget = {};
    const proxy = new Proxy(myTarget, {
        get(target, property, receiver) {
            console.log('get()');
            return Reflect.get(...arguments);
        }
    })
    proxy.foo;


    console.log("--------- set() ---------");
    const myTarget1 = {};
    const proxy1 = new Proxy(myTarget1, {
        set(target, property, value, receiver) {
            console.log('set()');
            return Reflect.get(...arguments);
        }
    })
    proxy1.foo = 'bar';

    
    console.log("--------- has() ---------");
    const myTarget2 = {};
    const proxy2 = new Proxy(myTarget2, {
        has(target, property) {
            console.log('has()');
            return Reflect.get(...arguments);
        }
    })
    'foo' in proxy2;


    console.log("--------- defineProperty() ---------");
    const myTarget3 = {};
    const proxy3 = new Proxy(myTarget3, {
        defineProperty(target, property, descriptor) {
            console.log('defineProperty()');
            return Reflect.defineProperty(...arguments)
        }
    })

    Object.defineProperty(proxy3, 'foo', {value: 'bar'});


    console.log("--------- getOwnPropertyDescriptor() ---------");
    const myTarget4 = {};
    const proxy4 = new Proxy(myTarget4, {
        getOwnPropertyDescriptor(target, property) {
            console.log('getOwnPropertyDescriptor()');
            return Reflect.getOwnPropertyDescriptor(...arguments);
        }
    })

    Object.getOwnPropertyDescriptor(proxy4, 'foo');


    console.log("--------- deleteProperty() ---------");
    const myTarget5 = {};
    const proxy5 = new Proxy(myTarget5, {
        deleteProperty(target, property) {
            console.log('deleteProperty()');
            return Reflect.deleteProperty(...arguments);
        }
    })

    delete proxy5.foo;


    console.log("--------- ownKeys() ---------");
    const myTarget6 = {};
    const proxy6 = new Proxy(myTarget6, {
        ownKeys(target) {
            console.log('ownKeys()');
            return Reflect.ownKeys(...arguments);
        }
    })

    Object.keys(proxy6);


    console.log("--------- getPrototypeOf() ---------");
    const myTarget7 = {};
    const proxy7 = new Proxy(myTarget7, {
        getPrototypeOf(target) {
            console.log('getPrototypeOf');
            return Reflect.getPrototypeOf(...arguments);
        }
    })

    Object.getPrototypeOf(proxy7);


    console.log("--------- setPrototypeOf() ---------");
    const myTarget8 = {};
    const proxy8 = new Proxy(myTarget8, {
        setPrototypeOf(target, prototype) {
            console.log('setPrototypeOf()');
            return Reflect.setPrototypeOf(...arguments);
        }
    })

    Object.setPrototypeOf(proxy8, Object);


    console.log("--------- isExtensible() ---------");
    const myTarget9 = {};
    const proxy9 = new Proxy(myTarget9, {
        isExtensible(target) {
            console.log('isExtensible()');
            return Reflect.isExtensible(...arguments);
        }
    })

    Object.isExtensible(proxy9);


    console.log("--------- preventExtensions() ---------");
    const myTarget10 = {};
    const proxy10 = new Proxy(myTarget10, {
        preventExtensions(target) {
            console.log('preventExtensions()');
            return Reflect.preventExtensions(...arguments);
        }
    })

    Object.preventExtensions(proxy10);



    console.log("--------- apply() ---------");
    const myTarget11 = () => {};
    const proxy11 = new Proxy(myTarget11, {
        apply(target, thisArg, ...argumentsList) {
            console.log('apply()');
            return Reflect.apply(...arguments);
        }
    })

    proxy11();



    console.log("--------- construct() ---------");
    const myTarget12 = function() {};
    const proxy12 = new Proxy(myTarget12, {
        construct(target, argumentsList, newTarget) {
            console.log('construct()');
            return Reflect.construct(...arguments);
        }
    })

    new proxy12();
})()