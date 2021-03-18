(function(){
    console.log(`------------ 迭代器模式 ------------`);
    console.log(`--------- 可迭代协议 ---------`);
    console.log(`检查是否存在默认迭代器属性可以暴露这个工厂函数：`);
    let num = 1;
    let obj = {};
    console.log(`数值和对象没有实现迭代器工厂函数：num[Symbol.iterator] = ${num[Symbol.iterator]}, obj[Symbol.iterator] = ${obj[Symbol.iterator]}`);
    let str = 'abc';
    let arr = ['a', 'b', 'c'];
    let map = new Map().set('a', 1).set('b', 2).set('c', 3);
    let set = new Set().add('a').add('b').add('c');
    let els = document.querySelectorAll('div');
    console.log(`字符串、数值、映射、集合、dom集合类型等都实现了迭代器工厂函数：`);
    console.log(str[Symbol.iterator]);
    console.log(arr[Symbol.iterator]);
    console.log(map[Symbol.iterator]);
    console.log(set[Symbol.iterator]);
    console.log(els[Symbol.iterator]);
    console.log(`调用工厂函数会生成一个迭代器：`);
    console.log(str[Symbol.iterator]());
    console.log(arr[Symbol.iterator]());
    console.log(map[Symbol.iterator]());
    console.log(set[Symbol.iterator]());
    console.log(els[Symbol.iterator]());

    arr = ['foo', 'bar', 'baz'];
    // for-of循环
    for(let el of arr){
        console.log(`for-of循环：el = ${el}`);
    };
    // 数组结构
    let [a,b,c] = arr;
    console.log(`数组结构：a = ${a}, b = ${b}, c = ${c}`);
    // 扩展操作符
    let arr2 = [...arr];
    console.log(`扩展操作符：arr2 = ${JSON.stringify(arr2)}`);
    // Array.from()
    let arr3 = Array.from(arr);
    console.log(`Array.from()：arr3 = ${JSON.stringify(arr3)}`);
    // Set构造函数
    set = new Set(arr);
    console.log(`Set构造函数：set = `);
    console.log(set);
    // Map构造函数
    let pairs = arr.map((x, i) => [x, i]);
    map = new Map(pairs);
    console.log(`Map构造函数：map = `);
    console.log(map);

    class FooArray extends Array{};
    let fooArr = new FooArray('foo','bar','baz');
    for(let el of fooArr){
        console.log(`如果对象原型链上的父类实现了Iterable接口，那么对象也就实现了这个接口：el = ${el}`);
    }

    console.log(`--------- 迭代器协议 ---------`);
    arr = ['foo', 'bar'];
    let iter = arr[Symbol.iterator]();
    console.log(`迭代器：iter = `);
    console.log(iter);
    console.log(`iter.next() = ${JSON.stringify(iter.next())}`);
    console.log(`iter.next() = ${JSON.stringify(iter.next())}`);
    console.log(`iter.next() = ${JSON.stringify(iter.next())}`);

    console.log(`不同迭代器的实例相互之间没有联系，只会独立地遍历可迭代对象`);
    let iter1 = arr[Symbol.iterator]();
    let iter2 = arr[Symbol.iterator]();
    console.log(`iter1.next() = ${JSON.stringify(iter1.next())}`);
    console.log(`iter2.next() = ${JSON.stringify(iter2.next())}`);

    console.log(`如果可迭代对象在迭代期间被修改了，那么迭代器也会反映相应的变化`);
    arr = ['foo', 'baz'];
    iter = arr[Symbol.iterator]();
    console.log(`iter.next() = ${JSON.stringify(iter.next())}`);
    arr.splice(1,0,'bar');
    console.log(`iter.next() = ${JSON.stringify(iter.next())}`);
    console.log(`iter.next() = ${JSON.stringify(iter.next())}`);
    console.log(`iter.next() = ${JSON.stringify(iter.next())}`);


    // 自定义迭代器
    console.log(`自定义迭代器：`)
    class Counter {
        constructor(limit){
            this.limit = limit;
        }

        [Symbol.iterator]() {
            let count = 1;
            let limit = this.limit;
            return {
                next(){
                    if(count <= limit) {
                        return { done: false, value: count++ };
                    }else{
                        return { done: true, value: undefined };
                    }
                },
                // 提前终止生成器
                return() {
                    console.log(`Exiting early`);
                    return {done: true}
                }
            }
        }
    }

    let counter = new Counter(5);
    console.log(`利用break提前终止迭代器`);
    for(let i of counter){
        if(i > 2) break;
        console.log(i);
    }
    let [a1,b1] = counter;  // 打印 Exiting early

    
    
    let arr4 = [1,2,3,4,5];
    let iter4 = arr4[Symbol.iterator]();

    for(let i of iter4){
        console.log(i);
        if(i > 2) break;
    }
    for(let i of iter4){
        console.log(`如果迭代器没有关闭，这还可以继续从上次离开的地方继续迭代: i = ${i}`);
    
    }
})()