(function () {
    console.log("------------ 代理基础 ------------");
    console.log("--------- 创建空代理 ---------");
    const target = { id: "target" };
    const handler = {};
    const proxy = new Proxy(target, handler);
    console.log(`代理对象和目标对象的id属性会访问同一个值：
    target.id = ${target.id},
    proxy.id = ${proxy.id}`);

    target.id = "foo";
    console.log(`给目标属性赋值会反映到两个对象上：
    target.id = ${target.id},
    proxy.id = ${proxy.id}`);

    proxy.id = "bar";
    console.log(`给代理属性赋值会反映到两个对象上：
    target.id = ${target.id},
    proxy.id = ${proxy.id}`);

    console.log(`严格相等可以用来区别代理和目标：
    target === proxy  ->  ${target === proxy}`);

    console.log("--------- 定义捕获器 ---------");
    const target1 = { foo: "bar" };
    const handler1 = {
        // 捕获器在处理程序对象以方法名为键
        get(trapTarget, property, receiver) {
            console.log(
                `trapTarget === target1  ->  ${trapTarget === target1}`
            );
            console.log(`property = ${property}`);
            console.log(`receiver === proxy1  ->  ${receiver === proxy1}`);
            return `Hi, ${trapTarget[property]}`;
        },
    };
    const proxy1 = new Proxy(target1, handler1);
    console.log(`只有在代理对象上执行操作才会触发捕获器，在目标对象上执行操作仍然会产生正常的行为:
    target1.foo = ${target1.foo}，
    proxy1.foo = ${proxy1.foo}`);

    console.log("--------- 捕获器参数和反射API ---------");
    const target2 = { foo: "bar" };
    const handler2 = {
        // get() {
        //     return Reflect.get(...arguments);
        // },
        // 简洁写法
        get: Reflect.get,
    };
    const proxy2 = new Proxy(target2, handler2);
    console.log(`
    实际上，开发者并不需要手动重建原始行为，而是可以调用全局Reflect对象上（封装了原始行为）的同名方法来轻松重建：
    target2.foo = ${target2.foo}，
    proxy2.foo = ${proxy2.foo}`);

    const target3 = { foo: "bar", baz: "qux" };
    const handler3 = {
        get(trapTarget, property, receiver) {
            let decoration = "";
            if (property === "foo") {
                decoration = "!!!";
            }
            return Reflect.get(...arguments) + decoration;
        },
    };
    const proxy3 = new Proxy(target3, handler3);
    console.log(`
    反射API为开发者准备好了样板代码，在此基础上开发者可以用最少的代码修改捕获的方法：
    target3.foo = ${target3.foo}，proxy3.foo = ${proxy3.foo}
    target3.baz = ${target3.baz}，proxy3.baz = ${proxy3.baz}`);

    console.log("--------- 捕获器不变式 ---------");
    const target4 = {};
    Object.defineProperty(target4, "foo", {
        configurable: false,
        writable: false,
        value: "bar",
    });
    const handler4 = {
        get() {
            return "quz";
        },
    };
    const proxy4 = new Proxy(target4, handler4);
    console.log(
        `捕获器不变式因方法不同而异，但通常都会防止捕获器定义出现过度反常的行为`
    );
    // console.log(proxy4.foo);

    console.log("--------- 可撤销代理 ---------");
    const target5 = {
        foo: "bar",
    };
    const handler5 = {
        get: Reflect.get,
    };
    const { proxy: proxy5, revoke } = Proxy.revocable(target5, handler5);
    console.log(`proxy5.foo = ${proxy5.foo}`);
    revoke();
    console.log(`撤销代理之后，再调用代理会抛出TypeError:`);
    // console.log(proxy5.foo);


    console.log("--------- 使用反射API ---------");
    console.log(`很多反射方法返回称作”状态标记“的布尔值，表示意图执行的操作是否成功:`);
    const o = {};
    // 初始代码
    try{
        Object.defineProperty(o,'foo',{value: 'bar'});
        console.log('success');
    }catch(e){
        console.log('fail');
    }
    // 重构后的代码
    if(Reflect.defineProperty(o,'foo',{value: 'bar'})){
        console.log('success');
    }else {
        console.log('fail');
    }


    console.log("--------- 代理另一个代理 ---------");
    const target6 = {
        foo: 'bar'
    };
    const firstProxy = new Proxy(target6, {
        get() {
            console.log('第一个代理');
            return Reflect.get(...arguments)
        }
    })
    const secondProxy = new Proxy(firstProxy, {
        get() {
            console.log('第二个代理');
            return Reflect.get(...arguments)
        }
    })
    console.log(secondProxy.foo);
})();
