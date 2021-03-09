(function(){
    console.log("------------ WeakMap ------------");
    console.log("-------- 基本API --------");
    const key1 = {id: 1};
    const key2 = {id: 2};
    const key3 = {id: 3};
    const wm = new WeakMap([
        [key1, "val1"],
        [key2, "val2"],
        [key3, "val3"]
    ])
    console.log(`使用new关键字实例化一个WeakMap，弱映射中的键只能是Object或者继承自Object的类型：`)
    console.log(wm);

    console.log(`初始化之后可以使用set()再添加键/值对，可以使用get()和has()查询，还可以使用delete删除：`);
    const key4 = {id: 4};
    wm.set(key4, "val4");
    console.log(wm);
    wm.delete(key4);
    console.log(wm);
    console.log(`wm.has(key1) = ${wm.has(key1)}`);
    console.log(`wm.get(key1) = ${wm.get(key1)}`);

})()