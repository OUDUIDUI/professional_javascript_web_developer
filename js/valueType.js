(function(){
    console.log("--------- 原始值与引用值 ---------")

    let person = new Object();
    person.name = "Nicholas";
    console.log(`对于引用值而言，可以随时添加、修改和删除其属性和方法：person.name = ${person.name}`);

    let name = "Nicholas";
    name.age = 27;
    console.log(`原始值不能有属性的，尽管尝试给原始值添加属性不会报错：name.age = ${name.age}`);

    let num1 = 5;
    let num2 = num1;
    num1 = 6;
    console.log(`原始值复制后，两个变量是可以独立使用的：num1 = ${num1}, num2 = ${num2}`);

    let obj1 = new Object();
    let obj2 = obj1;
    obj1.name = 'Nicholas';
    console.log(`引用值复制后，两个变量实际上是指向同一个对象的：obj1.name = ${obj1.name}, obj2.name = ${obj2.name}`);

    function addTen(num){
        num += 10;
        return num;
    }

    let count  = 20;
    let result = addTen(count);
    console.log(`当参数是一个原始值时，函数内部的变化不会影响到外部：count = ${count}, result = ${result}`);

    function setName(obj){
        obj.name = "Nicholas";
    }
    let person1 = new Object();
    setName(person1);
    console.log(`当参数是一个引用值时，函数内部的变化会影响到外部：person1.name = ${person1.name}`);

    let person2 = {
        name: 'Nicholas',
        age: '27'
    };
    let colors = ['red','white','blue'];
    let pattern = /ab+c/i;

    console.log(person2 instanceof Object);
    console.log(colors instanceof Array);
    console.log(pattern instanceof RegExp);
})()