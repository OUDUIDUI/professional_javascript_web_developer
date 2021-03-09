(function(){
    console.log("------------ WeakSet ------------");
    const val1 = {id: 1};
    const val2 = {id: 2};
    const val3 = {id: 3};

    const ws = new WeakSet([val1, val2, val3]);

    console.log(`使用new关键字实例化一个WeakSet：`)
    console.log(ws);

    console.log(`ws.has(val1) = ${ws.has(val1)}`);

    const val4 = {id: 4};
    ws.add(val4);
    console.log(`使用add()再添加新值`);
    console.log(ws);
})()