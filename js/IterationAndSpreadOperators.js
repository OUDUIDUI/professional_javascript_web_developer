(function(){
    console.log("------------ 迭代与扩展操作 ------------");

    let iterableThings = [
        Array.of(1,2),                     // Array
        typedArr = Int16Array.of(3,4),     // 定型数组
        new Map([[5,6],[7,8]]),            // Map
        new Set([9,10])                    // Set
    ];
    for(const iterableThing of iterableThings){
        for(const x of iterableThing){
            console.log(`Array，定型数组，Map，Set都支持顺序迭代，即可以传入for-of循环：x = ${JSON.stringify(x)}`)
        }
    }

    let arr1 = [1,2,3];
    let arr2 = [...arr1];
    console.log(`使用扩展操作符复制一个数组：arr2 = ${JSON.stringify(arr2)}`);

    let map1 = new Map([[1,2],[3,4]]);
    let map2 = new Map(map1);
    console.log(`对于期待可迭代对象的构造函数，只要传入一个可迭代对象就可以实现复制：`);
    console.log(map2);

    let arr3 = [{}];
    let arr4 = [...arr3];
    arr3[0].foo = 'bar';
    console.log(`浅复制意味着只会复制对象引用：arr4 = ${JSON.stringify(arr4)}`)
})()