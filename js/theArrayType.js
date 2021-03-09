(function(){
    console.log("------------ Array ------------");

    console.log("-------- 创建数组 --------");
    let arr1 = new Array();
    let arr2 = new Array(20);
    let arr3 = new Array('red','blue','green');
    let arr4 = Array();

    console.log(`
    使用Array构造函数创建数组：arr1 = ${JSON.stringify(arr1)},
    可以创建指定长度的数组：arr2 = ${JSON.stringify(arr2)},
    可传入要保存的元素：arr3 = ${JSON.stringify(arr3)},
    可省略new创建数组：${JSON.stringify(arr4)}`);

    let arr5 = ['red','blue','green'];
    console.log(`使用数组字面量(array literal)表达法创建数组：arr5 = ${JSON.stringify(arr5)}`);

    console.log(`Array.from()可将字符串拆分为单字符数组：Array.from("HelloWorld") = ${JSON.stringify(Array.from("HelloWorld"))}`);
    let m = new Map().set(1,2).set(3,4);
    let s = new Set().add(1).add(2).add(3).add(4);
    console.log(`Array.from()可将集合和映射转换为一个新数组：Array.from(m) = ${JSON.stringify(Array.from(m))}, Array.from(s) = ${JSON.stringify(Array.from(s))}`);
    const arr6 = Array.from(arr5);
    console.log(`Array.from()可对现有数组进行浅复制：arr6 = ${JSON.stringify(arr6)}, arr5 === arr6 : ${arr5 === arr6}`)
    const iter = {*[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }}
    console.log(`Array.from()可以将任何可迭代对象转换为数组：Array.from(iter) = ${JSON.stringify(Array.from(iter))}`);
    function getArgsArray(){
        return Array.from(arguments);
    }
    console.log(`Array.from()可转换arguments对象：getArgsArray(1,2,3,4) = ${JSON.stringify(getArgsArray(1,2,3,4))}`);
    console.log(`Array.from()可转换带有必要属性的自定义对象：Array.from({0:1, 1:2, 2:3, 3:4, length:4}) = ${JSON.stringify(Array.from({0:1, 1:2, 2:3, 3:4, length:4}))}`);

    const arr7 = [1,2,3,4];
    console.log(`Array.from(arr7, x => x**2) = ${JSON.stringify(Array.from(arr7, x => x**2))}`);
    console.log(`Array.from(arr7, function(x){return x**this.exponent}, {exponent: 2})) = ${JSON.stringify(Array.from(arr7, function(x){return x**this.exponent}, {exponent: 2}))}`);

    console.log(`Array.of()可以把一组参数转换为数组：Array.of(1,2,3,4) = ${JSON.stringify(Array.of(1,2,3,4))}`)


    console.log("-------- 数组空位 --------");
    const options = [1,,,,5];
    for(const option of options){
        console.log("数组空位为undefined，option === undefined ：",option === undefined);
    };

    console.log("-------- 数组索引 --------");
    console.log(`要取得或设置数组的值，需要使用中括号并提供相应值得数值索引：arr5[0] = ${arr5[0]}`);
    console.log(`数组中元素的数量保存在length属性中，这个属性始终返回0或大于0的值：arr5.length = ${arr5.length}`);

    console.log("-------- 检测数组 --------");
    console.log(`Array.isArray(arr5) = ${Array.isArray(arr5)}`);

    console.log("-------- 迭代器方法 --------");
    const aKeys = Array.from(arr5.keys());
    const aValues = Array.from(arr5.values());
    const aEntries = Array.from(arr5.entries());

    console.log(`keys()返回数组索引的迭代器：aKeys = ${JSON.stringify(aKeys)}`);
    console.log(`values()返回数组元素的迭代器：aValues = ${JSON.stringify(aValues)}`);
    console.log(`entries()返回索引/值得迭代器：aEntries = ${JSON.stringify(aEntries)}`);

    console.log("-------- 复制和填充方法 --------");
    const arr8 = [1,2,3,4,5];
    arr8.fill(0);
    console.log(`使用fill重置清零：arr8 = ${JSON.stringify(arr8)}`);
    arr8.fill(7,1,3);
    console.log(`使用fill从索引1至索引3填充7：arr8 = ${JSON.stringify(arr8)}`);

    let arr9 = [1,2,3,4,5,6,7,8,9];
    arr9.copyWithin(5);
    console.log(`使用copyWithin复制索引0至索引5，从索引5开始粘贴：arr9 = ${arr9}`);
    arr9 = [1,2,3,4,5,6,7,8,9];
    arr9.copyWithin(4,0,3);
    console.log(`使用copyWithin复制索引0至索引3，从索引4开始粘贴：arr9 = ${arr9}`);

    console.log("-------- 转换方法 --------");
    console.log(`
        arr5.valueOf() = ${JSON.stringify(arr5.valueOf())}
        arr5.toString() = ${arr5.toString()}
        arr5.toLocaleString() = ${arr5.toLocaleString()}
        arr5.join('-') = ${arr5.join('-')}
    `)

    console.log("-------- 栈方法 --------");
    let count = arr5.push('yellow');
    console.log(`push()接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度：count = ${count}, arr5 = ${JSON.stringify(arr5)}`);
    let item = arr5.pop();
    console.log(`pop()用于删除数组的最后一项，同时减少数组的length值，返回被删除的项：item = ${item}, arr5 = ${JSON.stringify(arr5)}`);

    console.log("-------- 队列方法 --------");
    item = arr5.shift();
    console.log(`shift()删除数组的第一项并返回它，然后数组长度减1：item = ${item}, arr5 = ${JSON.stringify(arr5)}`);
    count = arr5.unshift('red');
    console.log(`unshift()在数组的开头添加任意多个值，然后返回新的数值长度：count = ${count}, arr5 = ${JSON.stringify(arr5)}`);

    console.log("-------- 排序方法 --------");
    let nums = [0, 1, 5, 10, 15];
    nums.reverse();
    console.log(`reverse()将数组元素反向排序：nums = ${JSON.stringify(nums)}`);
    nums.sort();
    console.log(`sort()sort()会在每一项上调用String()转型函数，然后比较字符串来决定顺序。即使数组的元素都是数值，也会将数组转换为字符串再比较、排序:
    nums = ${JSON.stringify(nums)}`);
    nums.sort((a,b) => a < b ? 1 : a > b ? -1 : 0);
    console.log(`sort()可接收一个比较函数，判断哪个值排在前面：nums = ${JSON.stringify(nums)}`);

    console.log("-------- 操作方法 --------");
    let arr10 = arr5.concat("yellow", ["black", "brown"]);
    console.log(`concat()它首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组：arr10 = ${JSON.stringify(arr10)}`);
    let moreColors = ["black", "brown"];
    moreColors[Symbol.isConcatSpreadable] = false;
    arr10 = arr5.concat("yellow",moreColors);
    console.log(`强制不打平数组：arr10 = ${JSON.stringify(arr10)}`)

    const arr11 = ["red","blue","green","yellow","black","brown"];
    const someColors = arr11.slice(2,5);
    console.log(`slice()用于创建一个包含原有数组中一个或多个元素的新数组：someColors = ${JSON.stringify(someColors)}`);
    
    const items = arr11.splice(1,2,'grey','white');
    console.log(`splice()在数组中删除并插入元素：items = ${JSON.stringify(items)}, arr11 = ${JSON.stringify(arr11)}`);

    console.log("-------- 搜索和位置方法 --------");
    const arr12 = [1,2,3,4,5,4,3,2,1];
    console.log(`严格相等搜索：
        arr12.indexOf(4) = ${arr12.indexOf(4)},
        arr12.lastIndexOf(4) = ${arr12.lastIndexOf(4)},
        arr12.includes(4) = ${arr12.includes(4)},
        arr12.indexOf(0) = ${arr12.indexOf(0)},
        arr12.lastIndexOf(0) = ${arr12.lastIndexOf(0)},
        arr12.includes(0) = ${arr12.includes(0)},
    `);

    const people = [
        {name: "Matt", age: 27},
        {name: "Nicholas", age: 29}
    ];
    console.log(`断言函数搜索：
        people.find((person,index,array) => person.age < 28) = ${JSON.stringify(people.find((person,index,array) => person.age < 28))};
        people.findIndex((person,index,array) => person.age < 28) = ${people.findIndex((person,index,array) => person.age < 28)}
    `)

    console.log("-------- 迭代方法 --------");
    console.log(`
        every()判断是不是每一个元素都大于2：arr12.every(num => num > 2) = ${arr12.every(num => num > 2)};
        some()判断是不是至少有一个元素大于2：arr12.some(num => num > 2) = ${arr12.some(num => num > 2)};
        filter()筛选出大于2的元素组成一个新数组：arr12.filter(num => num > 2) = ${JSON.stringify(arr12.filter(num => num > 2))};
        map()将每个元素乘以2返回一个新数组：arr12.map(num => num * 2) = ${JSON.stringify(arr12.map(num => num * 2))};
    `)
    arr12.forEach(num => console.log('forEach()遍历每个元素：' + num));

    console.log("-------- 归并方法 --------");
    const sum = arr12.reduce((prev,cur,index,arr) => prev + cur,0);
    console.log(`使用reduce将数组所有值求和：sum = ${sum}`);
})()