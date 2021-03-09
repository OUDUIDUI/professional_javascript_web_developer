(function(){
    console.log("------------ Map ------------");
    console.log("-------- 基本API --------");
    let m = new Map();
    console.log(`使用new关键字和Map构造函数可以创建一个空映射：`);
    console.log(m);

    m = new Map([
        ['key1','value1'],
        ['key2','value2'],
        ['key3','value3']
    ]);
    console.log(`如果想在创建的同时初始化实例，可以给Map构造函数传入一个可迭代对象，需要包含键/值对数组：`);
    console.log(m);

    m
    .set('key4','value4')
    .set('key5','value5');
    console.log(`set()添加键/值对：`)
    console.log(m);

    console.log(`get() / has()查询：
        m.get('key1') = ${m.get('key1')},
        m.has('key1') = ${m.has('key1')},
        m.get('key6') = ${m.get('key6')},
        m.has('key6') = ${m.has('key6')}
    `)
    
   console.log(`size属性返回Map的长度：m.size = ${m.size}`);

   m.delete('key1');
   console.log(`delete()接收键，删除指定键/值对：`);
   console.log(m);

   m.clear()
   console.log(`clear()清除映射实例中所有键/值对：`);
   console.log(m);

   m = new Map();
   const functionKey = function(){};
   const symbolKey = Symbol();
   const objectKey = new Object();

   m
   .set(functionKey,'functionValue')
   .set(symbolKey,'symbolValue')
   .set(objectKey,'objectValue');
   console.log(`Map可以使用任何JavaScript数据类型作为键：`);
   console.log(m);

   console.log(`使用严格对象相等的标准来检查键的匹配性：
    m.has(function(){}) = ${m.has(function(){})},
    m.has(functionKey) = ${m.has(functionKey)}`);

    console.log("-------- 顺序与迭代 --------");
    const m2 = new Map([
        ['key1','value1'],
        ['key2','value2'],
        ['key3','value3']
    ]);

    for(let item of m2.entries()){
        console.log(`使用entries()遍历Map：item = ${JSON.stringify(item)}`)
    }

    for(let item of m2[Symbol.iterator]()){
        console.log(`使用[Symbol.iterator]遍历Map：item = ${JSON.stringify(item)}`)
    }

    console.log(`因为entries()是默认迭代器，所以可以直接对映射对象使用扩展操作，把映射转换为数组：
    [...m2] = ${JSON.stringify([...m2])}`);

    m2.forEach((value, key) => console.log(`可以调用映射的forEach(callback, opt_thisArg)方法并传入回调，一次迭代每个键值对：key = ${key}, value = ${value}`));

    for(let key of m2.keys()){
        console.log(`keys()返回以插入顺序生成的键的迭代器： key = ${key}`)
    }
    for(let value of m2.values()){
        console.log(`values()返回以插入顺序生成的值的迭代器： value = ${value}`)
    }
})()