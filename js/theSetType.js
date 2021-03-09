(function(){
    console.log("------------ Set ------------");
    console.log("-------- 基本API --------");

    let s = new Set();
    console.log(`使用new关键字和Set构造函数可以创建一个空集合`);
    console.log(s);
    
    s = new Set(["val1","val2","val3"]);
    console.log(`如果想在创建的同时初始化实例，则可给Set构造函数传入一个可迭代对象，其中需要包含插入到新集合实例中的元素:`);
    console.log(s);

    console.log(`size属性获取元素数量：s.size = ${s.size}`);
    console.log(`has()查询值：s.has('val2') = ${s.has('val2')}; s.has(val4) = ${s.has('val4')}`);
    
    s.add('val4')
    .add('val5');
    console.log(`add()增加值：`)
    console.log(s);

    s.delete('val1');
    console.log(`delete()删除值：`);
    console.log(s);

    s.clear();
    console.log(`clear()清空集合：`);
    console.log(s);

    console.log("-------- 顺序与迭代 --------");
    s = new Set(['val1', 'val2', 'val3']);

    for(let value of s.values()){
        console.log(`通过values()取得迭代器：value = ${value}`);
    }

    for(let value of s[Symbol.iterator]()){
        console.log(`Symbol.iterator属性，它引用values()：value = ${value}`);
    }

    console.log(`因为values()是more迭代器，所以可以直接对集合实例使用扩展操作，将集合转换为数组：[...s] = ${JSON.stringify([...s])}`);

    for(let pair of s.entries()){
        console.log(`集合的entires()方法返回一个迭代器，可以按照插入顺序产生包含两个元素的数组，这两个元素是集合中每个值的重复出现：pair = ${JSON.stringify(pair)}`);
    }

    s.forEach((val,dupVal) => {
        console.log(`可以调用集合的forEach()方法并传入回调，依次迭代每个键/值对：val = ${val}; dupVal = ${dupVal}`)
    })
})()