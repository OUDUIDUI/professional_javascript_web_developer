(function() {
    console.log('------------- 理解对象 -------------');
    console.log('---------- 属性的类型 ----------');
    let person = {};
    Object.defineProperty(person, 'name', {
        writable: false,
        value: 'Nicholas'
    });
    console.log(`使用Object.defineProperty()修改属性的默认特征：person.name = ${person.name}`);
    person.name = 'Greg';
    console.log(`person的name属性设置为不可修改的：person.name = ${person.name}`);

    Object.defineProperty(person, 'age', {
        configurable: false,
        value: 24
    });
    console.log('一个属性被定义为不可配置之后，就不能再变回可配置的了');
    // 报错
    // Object.defineProperty(person, 'age', {
    //     configurable: true,
    //     value: 24
    // });

    let book = {
        year_: 2017,
        edition: 1
    };
    Object.defineProperty(book, 'year', {
        get(){
            return this.year_;
        },
        set(newValue){
            if(newValue > 2017){
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    });
    book.year = 2018;
    console.log(`使用访问器属性实现设置一个属性会导致一些其他变化发生：book.edition = ${book.edition}`);


    console.log('---------- 定义多个属性 ----------');
    let book2 = {};
    Object.defineProperties(book2, {
        year_:{
            value: 2017
        },
        edition: {
            value: 1
        },
        year: {
            get(){
                return this.year_;
            },
            set(newValue) {
                if(newValue > 2017){
                    this.year_ = newValue;
                    this.edition += newValue - 2017;
                }
            }
        }
    });
    console.log(`使用Object.defineProperties()定义多个属性：book2 = }`);
    console.log(book2);

    console.log('---------- 读取属性的特征 ----------');
    console.log(`使用Object.getOwnPropertyDescriptor()：`);
    let descriptor1 = Object.getOwnPropertyDescriptor(book2,'year_');
    console.log(`descriptor1.value = ${descriptor1.value}`);
    console.log(`descriptor1.configurable = ${descriptor1.configurable}`);
    console.log(`typeof descriptor1.get = ${typeof descriptor1.get}`);
    let descriptor2 = Object.getOwnPropertyDescriptor(book2,'year');
    console.log(`descriptor2.value = ${descriptor2.value}`);
    console.log(`descriptor2.configurable = ${descriptor2.configurable}`);
    console.log(`typeof descriptor2.get = ${typeof descriptor2.get}`);

    console.log(`使用Object.getOwnPropertyDescriptors()：`);
    console.log(`Object.getOwnPropertyDescriptors(book2) = `);
    console.log(Object.getOwnPropertyDescriptors(book2));

    console.log('---------- 合并对象 ----------');
    let dest, src, result;
    // 简单复制
    dest = {};
    src = {id: 'src'};
    result = Object.assign(dest, src);
    console.log(`Object.assign修改目标对象后，也会返回修改后的目标对象：
    dest = ${JSON.stringify(dest)}, 
    result = ${JSON.stringify(result)}, 
    dest === result -> ${dest === result}`);
    
    // 多个源对象
    dest = {};
    result = Object.assign(dest, {a: 'foo'}, {b: 'bar'});
    console.log(`多个源复制：result = ${JSON.stringify(result)}`);
    
    // 获取函数与设置函数
    dest = {
        set a(val) {
            console.log(`Invoked dest setter with param ${val}`);
        }
    };
    src = {
        get a(){
            console.log(`Invoked src getter`);
            return 'foo';
        }
    };
    Object.assign(dest, src);
    console.log(dest);

    dest = {};
    src = { a: {}};
    Object.assign(dest, src);
    console.log(`Object.assign()实际上对每个源对象执行的是浅复制：dest.a === src.a -> ${dest.a === src.a}`);

    dest = {};
    Object.assign(dest, {a: 1}, {a: 2}, {a: 3});
    console.log(`如果多个源对象都有相同的属性，则使用最后一个复制的值：dest.a = ${dest.a}`);

    dest = {};
    src = {
        a_: 0,
        set a(val){
            this.a_ = val;
        },
        get a(){
            return this.a_;
        }
    }
    src.a = 1;
    Object.assign(dest,src);
    console.log(`从源对象访问器属性取得的值，比如获取函数，会作为一个静态值赋给目标对象：
    src = ${JSON.stringify(src)}, 
    dest = ${JSON.stringify(dest)}`);


    console.log('---------- 对象标识及相等判定 ----------');
    console.log(`Object.is(true,1) = ${Object.is(true,1)}`);
    console.log(`Object.is({},{}) = ${Object.is({},{})}`);
    console.log(`Object.is('2',2) = ${Object.is('2',2)}`);
    console.log(`Object.is(+0,-0) = ${Object.is(+0,-0)}`);
    console.log(`Object.is(+0,0) = ${Object.is(+0,0)}`);
    console.log(`Object.is(-0,0) = ${Object.is(-0,0)}`);
    console.log(`Object.is(NaN,NaN) = ${Object.is(NaN,NaN)}`);


    console.log('---------- 增强的对象语法 ----------');
    let name = 'Matt';
    let person2 = {
        name
    }
    console.log(`属性值简写：person2.name = ${person2.name}`);

    const jobKey = 'job';
    person2[jobKey] = 'Software engineer';
    console.log(`可计算属性：person2[jobKey] = ${person2[jobKey]}`);

    person2 = {
        sayName(name) {
            console.log(`简写方法名：My name is ${name}`);
        }
    };
    person2.sayName('Matt');

    const errCodeReg = /^[2][0-9]\d/g;
    let num = 201;
    console.log(errCodeReg.test(num + ''));


    console.log('---------- 对象解构 ----------');
    let person3 = {
        name: 'Matt',
        age: 27
    };
    let {name: personName, age, job = 'software engineer' } = person3;
    console.log(`对象解构：personName = ${personName}, age = ${age}, job = ${job}`);

    let {length} = 'foobar';
    let {constructor: c} = 4;
    console.log(`解构在内部使用函数ToObject()（不能在运行时环境中直接访问）把源数据结构转换为对象: 
    length = ${length}, 
    constructor === Number -> ${c === Number}`);

    let personAge;
    ({age: personAge} = person3);
    console.log(`不过，如果是给事先声明的变量赋值，则赋值表达式必须包含在在一对括号中：personAge = ${personAge}`);

    person3 = {
        name: 'Matt',
        age: 27,
        job: {
            title: 'Software engineer'
        }
    }
    let personCopy = {};
    ({name: personCopy.name, age: personCopy.age, job: personCopy.job} = person3);
    person3.job.title = 'Hacker';
    console.log(`通过解构来复制对象属性: personCopy = ${JSON.stringify(personCopy)}`);

    let {job: {title}} = person3;
    console.log(`解构赋值可以使用嵌套解构，以匹配嵌套的属性: title = ${title}`);

    function printPerson({name,age}) {
        console.log(`在函数参数列表中也可以进行解构赋值：name = ${name}, age = ${age}`);
    }
    printPerson(person3);
})()