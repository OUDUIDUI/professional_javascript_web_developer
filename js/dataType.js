(function(){
    console.log("-------------- 数据类型部分 --------------")

    /* typeof */
    // 可使用typeof查看数据格式
    console.log(
        '可使用typeof查看数据格式',
        ',typeof undefined = ' + typeof undefined,
        ',typeof \'someThing\' = ' + typeof 'someThing',
        ',typeof 111 = ' + typeof 111,
        ',typeof true = ' + typeof true,
        ',typeof [] = ' + typeof [],
        ',typeof {} = ' + typeof {},
        ',typeof null = ' + typeof null,
        ',typeof function(){} = ' + typeof function(){},
        ',typeof Symbol() = ' + typeof Symbol()
    )


    console.log("------- Undefined类型 -------")
    /* undefined */
    let test;
    var test1;
    console.log('当使用var或let声明了变量但没有初始化时，就相当于给变量赋予了undefined值，test = ' + test , ',test1 = ' + test1);

    console.log('当变量未定义声明时，typeof也返回undefined，typeof test2 = ' + typeof test2 + '，但是访问未声明的值会报错的');

    if(undefined){

    }else{
        console.log('undefined是一个假值，可以通过判断语句去判断该变量是否存在或有值')
    }

    console.log("------- Null类型 -------")
    /* Null */
    let car = null;
    console.log('null值表示为一个空对象的指针，因此type null返回object,typeof car = ' + typeof car);


    console.log(`undefined值是由null值派生而来的，因此ECMA0262将它们定义为表面上相等,即null == undefined为${null == undefined},则null === undefined为${null === undefined}`);

    if(null){

    }else{
        console.log('null是一个假值，可以通过判断语句去判断该变量是否不为null')
    }


    console.log("------- Boolean类型 -------")
    /* boolean */
    console.log(`boolean值不同于数值，true不等于1，false不等于0，即1===true值为${1===true},0===false值为${0===false}`);

    console.log('通过Boolean()可将其他类型转为布尔值，Boolean(\'Hello World\')=' + Boolean('Hello World'));

    if('Hello World'){
        console.log('像if等流控制语句会自动执行其他类型值到布尔值的转换');
    }


    console.log("------- Number类型 -------")
    /* number */
    let intNum = 55; // 声明整数
    console.log('直接声明整数，iniNum = ' + intNum + ',typeof intNum = ' + typeof intNum);

    let octalNum1 = 070; // 声明八进制的56
    let octalNum2 = 079; // 无效的八进制值，当成79处理
    let octalNum3 = 08;  // 无效的八进制值，当成8处理
    console.log('声明八进制字面量，第一个数字必须是0，然后相应的是八进制数字（0~7）,如果字面量中包含的数字超出应有的范围，就会当成十进制处理，octalNum1 = ' + octalNum1 + ',octalNum2 = ' + octalNum2 + ',octalNum3 = ' + octalNum3);

    let octalNum4 = 0o71; // 严格模式下需使用0o为前缀声明八进制值
    console.log('严格模式下需使用0o为前缀声明八进制值,octalNum4 = ' + octalNum4);

    let hexNum1 = 0xA;  // 十六进制10
    let hexNum2 = 0x1f; // 十六进制31
    console.log('创建十六进制字面量，必须让真正的数值前缀0x（区分大小写），然后是十六进制数值（0~9以及A~F）。十六进制数字中的字母大小写均可。hexNum1 = ' + hexNum1 + ',hexNum2 = ' + hexNum2);

    let floatNum1 = 1.1;
    let floatNum2 = 0.1;
    let floatNum3 = .1;   // 有效，但不推荐
    console.log('通过小数点声明浮点数，floatNum1 = ' + floatNum1 + ',floatNum2 = ' + floatNum2 + ',floatNum3 = ' + floatNum3);

    let floatNum4 = 10.;   // 会转换为整数
    let floatNum5 = 10.0;  // 会转换为整数
    console.log('在小数点后面没有数字的情况下，数字会变成整数,floatNum4 = ' + floatNum4 + ',如果数字本身就是整数，只是小数点后面跟着0，那它也会转换为整数,floatNum5 = ' + floatNum5);

    console.log(`在算术计算中浮点数远不如整数精确，0.1 + 0.2 = ${0.1 + 0.2}`);

    let num = 3.125e7;   // 等于31250000
    let num2 = 3e-17;  // 等于0.00000000000000003
    console.log('科学计数法，num = ' + num + ',num2 = ' + num2);

    let floatNum6 = 0.0000003;
    console.log('ECMAScript会将小数点后包含6个0的浮点数转换为科学计数法，即0.0000003 = ' + floatNum6);

    console.log('ECMAScript可以表示的最小值保存在Number.MIN_VALUE，Number.MIN_VALUE = ' + Number.MIN_VALUE);
    console.log('ECMAScript可以表示的最大值保存在Number.MAX_VALUE，Number.MAX_VALUE = ' + Number.MAX_VALUE);
    console.log('可用isFinite()判断是不是无穷值，isFinite(Number.MAX_VALUE + 1) = ' + isFinite(Number.MAX_VALUE + 1));

    console.log(`在ECMAScript中，0、+0或-0相除会返回NaN，0/0 = ${0/0}`);
    console.log(`如果除数是非0值，而被除数是有符号0或无符号0，会返回Infinity或-Infinity，5/0 = ${5/0}`)
    console.log(`任何涉及NaN的操作始终返回NaN，NaN/10 = ${NaN/10}`);
    
    if(NaN !== NaN){
        console.log('NaN不等于包括NaN在内的任何值')
    }

    console.log('---- isNaN()的使用 ----');
    console.log(`isNaN(NaN) = ${isNaN(NaN)}`);
    console.log(`isNaN(1) = ${isNaN(1)}`);
    console.log(`isNaN('100') = ${isNaN('100')}`);
    console.log(`isNaN('blue') = ${isNaN('blue')}`);
    console.log(`isNaN(true) = ${isNaN(true)}`);

    console.log('---- Number()的使用 ----');
    console.log('Number(true) = ' + Number(true));
    console.log('Number(111) = ' + Number(111));
    console.log('Number(null) = ' + Number(null));
    console.log('Number(undefined) = ' + Number(undefined));
    console.log("Number('100') = " + Number('100'));
    console.log("Number('0100') = " + Number('0100'));
    console.log("Number('1.1') = " + Number('1.1'));
    console.log("Number('0xf') = " + Number('0xf'));
    console.log("Number('') = " + Number(''));
    console.log("Number('str') = " + Number('str'));

    console.log('---- parseInt()的使用 ----');
    console.log("parseInt('12')" + parseInt('12'));
    console.log("parseInt('')" + parseInt(''));
    console.log("parseInt('111str')" + parseInt('111str'));
    console.log("parseInt('22.5')" + parseInt('22.5'));
    console.log("parseInt('0xA')" + parseInt('0xA'));
    console.log("parseInt('AF',16)" + parseInt('AF',16));
    console.log("parseInt(100,2)" + parseInt(100,2));
    console.log("parseInt(100,8)" + parseInt(100,8));
    console.log("parseInt(100,10)" + parseInt(100,10));
    console.log("parseInt(100,16)" + parseInt(100,16));

    console.log('---- parseFloat()的使用 ----');
    console.log("parseFloat('1234blue')" + parseFloat('1234blue'));
    console.log("parseFloat('0xA')" + parseFloat('0xA'));
    console.log("parseFloat('22.5')" + parseFloat('22'));
    console.log("parseFloat('22.245.12')" + parseFloat('22.245.12'));
    console.log("parseFloat('0908.5')" + parseFloat('0908.5'));
    console.log("parseFloat('3.125e7')" + parseFloat('3.125e7'));


    console.log("------- String类型 -------")
    /* string */
    let firstName = "John";
    let lastName1 = 'Jacob';
    let lastName2 = `Jingle`;
    
    console.log('字符串声明，firstName =' + firstName + ',lastName1 = ' + lastName1 + ',lastName2 = ' + lastName2);

    console.log('利用字符字面量打印引号\'\"')


    console.log('---- toString()的使用 ----');
    let age = 11;
    console.log('age.toString() = ' + age.toString());  
    let found = true;
    console.log('found.toString() = ' + found.toString());
    
    let num3 = 100;
    console.log('num3.toString()' + num3.toString());
    console.log('num3.toString(2)' + num3.toString(2));
    console.log('num3.toString(8)' + num3.toString(8));
    console.log('num3.toString(10)' + num3.toString(10));
    console.log('num3.toString(16)' + num3.toString(16));


    console.log('---- String()的使用 ----');
    console.log('String(10) = ' + String(10));
    console.log('String(true) = ' + String(true));
    console.log('String(null) = ' + String(null));
    console.log('String(undefined) = ' + String(undefined));

    console.log('---- 模板字面量 ----');
    console.log(`模板字面量保留换行字符，
    可以跨行定义字符串`);
    console.log(`
    <div id="app">
        <h1>模板字面量常用于定义HTML模板</h1>
    </div>
    `);
    console.log(`模板字符串会保持反引号内部的空格
                                就这`);

    let text = '使用模板字面量插值';
    console.log(`${text}，1+1=${1+1}`);

    console.log(`\u00A9`);
    console.log(String.raw`\u00A9`);
    console.log(`first line\nsecond line`)


    
    console.log("------- Symbol类型 -------")
    /* symbol */
    let sym = Symbol();
    console.log('声明Symbol：' + typeof sym);

    let genericSymbol = Symbol();
    let otherGenericSymbol = Symbol();
    
    let fooSymbol = Symbol('foo');
    let otherFooSymbol = Symbol('foo');
    console.log(`参数与符号定义或标识完全无关,genericSymbol === otherGenericSymbol:${genericSymbol === otherGenericSymbol}、fooSymbol === otherFooSymbol:${fooSymbol === otherFooSymbol}`);

    // Symbol()不能与new关键字一起作为构造函数使用
    let myBoolean = new Boolean();
    let myString = new String();
    let myNumber = new Number();
    // let mySymbol = new Symbol();  // 报错

    // 注册全局符号注册表
    let fooGlobalSymbol = Symbol.for('foo');
    let otherFooGlobalSymbol = Symbol.for('foo');
    console.log(`相同description的全局符号是等同的,fooGlobalSymbol === otherFooGlobalSymbol:${fooGlobalSymbol === otherFooGlobalSymbol}`);
    console.log(`但与Symbol定义的符号不等同,fooGlobalSymbol === fooSymbol:${fooGlobalSymbol === fooSymbol}`);
    console.log(`使用Symbol.keyFor()来查询全局注册表：Symbol.keyFor(fooGlobalSymbol) = ${Symbol.keyFor(fooGlobalSymbol)}`);

    // 使用符号作为属性
    let s1 = Symbol('foo'),
        s2 = Symbol('bar'),
        s3 = Symbol('baz'),
        s4 = Symbol('qux');
    
    let o = {
        [s1]: 'foo val'
    };
    console.log(o);

    Object.defineProperty(o,s2,{value:'bar val'});
    console.log(o);

    Object.defineProperties(o,{
        [s3]: {value: 'baz val'},
        [s4]: {value: 'qux val'}
    })
    console.log(o);

    console.log('Object.getOwnPropertySymbols(o):');
    console.log(Object.getOwnPropertySymbols(o));
    console.log('Object.getOwnPropertyDescriptors(o):');
    console.log(Object.getOwnPropertyDescriptors(o));
    console.log('Reflect.ownKeys(o):');
    console.log(Reflect.ownKeys(o));

    // Symbol.asyncIterator
    class Emitter {
        constructor(max){
            this.max = max;
            this.asyncIdx = 0;
        }

        async *[Symbol.asyncIterator](){
            while(this.asyncIdx < this.max){
                yield new Promise((resolve) => resolve(this.asyncIdx++))
            }
        }
    };

    async function asyncCount(){
        let emitter = new Emitter(5);
        for await(const x of emitter){
            console.log('---- Symbol.asyncIterator ----');
            console.log(x);
        }
    }

    asyncCount();


    // Symbol.hasInstance
    console.log('---- Symbol.hasInstance ----');
    class Bar{}
    class Baz extends Bar {
        static [Symbol.hasInstance](){
            return false;
        }
    }

    let b = new Baz();
    console.log(Bar[Symbol.hasInstance](b));  // true
    console.log(b instanceof Bar);   // true
    console.log(Baz[Symbol.hasInstance](b));  // false
    console.log(b instanceof Baz);  // false


    // Symbol.isConcatSpreadable
    console.log('---- Symbol.isConcatSpreadable ----');
    let inital = ['foo'];

    let array = ['bar'];
    console.log(array[Symbol.isConcatSpreadable]);  // undefined
    console.log(inital.concat(array));           // ['foo','bar']
    array[Symbol.isConcatSpreadable] = false;
    console.log(inital.concat(array));   // ['foo',Array(1)]

    let arrayLikeObject = {length: 1, 0: 'baz'};
    console.log(arrayLikeObject[Symbol.isConcatSpreadable]);  // undefined
    console.log(inital.concat(arrayLikeObject));  //  ['foo',{...}]
    arrayLikeObject[Symbol.isConcatSpreadable] = true;
    console.log(inital.concat(arrayLikeObject));  //  ['foo','bar']

    let otherObject = new Set().add('qux');
    console.log(otherObject[Symbol.isConcatSpreadable]);  // undefined
    console.log(inital.concat(otherObject));   // ['foo',Set(1)]
    otherObject[Symbol.isConcatSpreadable] = true;
    console.log(inital.concat(otherObject));   // ['foo']
    

    // Symbol.iterator
    class Emitter2 {
        constructor(max){
            this.max = max;
            this.idx = 0;
        }

        *[Symbol.iterator](){
            while(this.idx < this.max){
                yield this.idx++
            }
        }
    }

    function count(){
        let emitter = new Emitter2(5);

        for(const x of emitter){
            console.log('---- Symbol.iterator ----');
            console.log(x)
        }
    }

    count();


    // Symbol.match
    console.log('---- Symbol.match ----');

    class FooMatcher{
        static [Symbol.match](target){
            return target.includes('foo');
        }
    }

    console.log('foobar'.match(FooMatcher)); // true
    console.log('barbaz'.match(FooMatcher)); // false

    class StringMatcher{
        constructor(str){
            this.str = str;
        }

        [Symbol.match](target){
            return target.includes(this.str);
        }
    }

    console.log('foobar'.match(new StringMatcher('foo'))); // true
    console.log('barbaz'.match(new StringMatcher('qux'))); // false


    // Symbol.replace
    console.log('---- Symbol.replace ----');

    class FooReplacer{
        static [Symbol.replace](target,replacement){
            return target.split('foo').join(replacement);
        }
    }

    console.log('barfoobaz'.replace(FooReplacer,'qux')); // barquxbaz

    class StringRepacer{
        constructor(str){
            this.str = str;
        }

        [Symbol.replace](target,replacement){
            return target.split(this.str).join(replacement);
        }
    }

    console.log('barfoobaz'.replace(new StringRepacer('foo'),'qux')); // barquxbaz


    // Symbol.search
    console.log('---- Symbol.search ----');
    class FooSearcher{
        static [Symbol.search](target){
            return target.indexOf('foo');
        }
    }

    console.log('foobar'.search(FooSearcher));    // 0
    console.log('barfoo'.search(FooSearcher));    // 3
    console.log('barbaz'.search(FooSearcher));    // -1

    class StringSearcher{
        constructor(str){
            this.str = str;
        }

        [Symbol.search](target){
            return target.indexOf(this.str);
        }
    }

    console.log('foobar'.search(new StringSearcher('foo')));    // 0
    console.log('barfoo'.search(new StringSearcher('foo')));    // 3
    console.log('barbaz'.search(new StringSearcher('foo')));    // -1



    // Symbol.species
    console.log('---- Symbol.species ----');

    class Bar2 extends Array{};
    class Baz2 extends Array{
        static get [Symbol.species](){
            return Array;
        }
    }

    let bar = new Bar2();
    console.log(bar instanceof Array);   // true
    console.log(bar instanceof Bar2);     // true
    bar = bar.concat('bar');
    console.log(bar instanceof Array);   // true
    console.log(bar instanceof Bar2);     // true

    let baz = new Baz2();
    console.log(baz instanceof Array);   // true
    console.log(baz instanceof Baz2);     // true
    baz = baz.concat('baz');
    console.log(baz instanceof Array);   // true
    console.log(baz instanceof Baz2);     // false


    // Symbol.split
    console.log('---- Symbol.split ----');
    class FooSplitter {
        static [Symbol.split](target){
            return target.split('foo');
        }
    }

    console.log('barfoobaz'.split(FooSplitter));   // ['bar','baz'];

    class StringSplitter{
        constructor(str){
            this.str = str;
        }

        [Symbol.split](target){
            return target.split(this.str);
        }
    }

    console.log('barfoobaz'.split(new StringSplitter('foo')));   // ['bar','baz'];



    // Symbol.toPrimitive
    console.log('---- Symbol.toPrimitive ----');
    class Foo3{};
    let foo3 = new Foo3();

    console.log(3 + foo3);   // "3[object object]"
    console.log(3 - foo3);   // NaN
    console.log(String(foo3));  // "[object object]"


    class Bar3 {
        constructor(){
            this[Symbol.toPrimitive] = function(hint){
                switch(hint){
                    case "number":
                        return 3;
                    case "string":
                        return 'string bar';
                    default:
                        return 'default bar';
                }
            }
        }
    }

    let bar3 = new Bar3();

    console.log(3 + bar3);   // "3default bar"
    console.log(3 - bar3);   // 0
    console.log(String(bar3));   // "string bar"



    // Symbol.toStringTag
    console.log('---- Symbol.toStringTag ----');

    let s = new Set();

    console.log(s);    // Set(0){}
    console.log(s.toString());  // [Object Set]
    console.log(s[Symbol.toStringTag]);   // Set

    class Foo4{}
    let foo4 = new Foo4();

    console.log(foo4);   // Foo4{}
    console.log(foo4.toString())   // [object object]
    console.log(foo4[Symbol.toStringTag])    // undefined

    class Bar4{
        constructor(){
            this[Symbol.toStringTag] = 'Bar';
        }
    }
    let bar4 = new Bar4();

    console.log(bar4);   // Bar4{}
    console.log(bar4.toString())   // [object Bar]
    console.log(bar4[Symbol.toStringTag])    // Bar



    // Symbol.unscopables
    console.log('---- Symbol.unscopables ----');
    let o2 = {foo: 'bar'};

    with(o2){
        console.log(foo);  // bar
    }

    o2[Symbol.unscopables] = {
        foo: true
    }

    with(o2){
        // console.log(foo);  // ReferenceError
    }




    console.log("------- Object类型 -------")
    /* object */
    let obj = new Object();
    console.log('声明Object：obj = ' + JSON.stringify(obj));

    let obj2 = new Object;  // 合法，但不推荐
})()
