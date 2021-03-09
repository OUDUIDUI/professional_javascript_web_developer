(function(){
    console.log("------------ Object ------------");

    let person1 = new Object();
    person1.name = "Nicholas";
    person1.age = 29;

    console.log(`使用new操作符和Object构造函数创建Object：person1 = ${JSON.stringify(person1)}`);

    let person2 = {
        name: "Nicholas",
        age: 29,
        5: true
    };
    console.log(`使用对象字面量表示法创建Object：person2 = ${JSON.stringify(person2)}`);

    console.log(`点语法获取属性：person2.name = ${person2.name}`);
    console.log(`中括号获取属性：person2['age'] = ${person2['age']}`)
})()