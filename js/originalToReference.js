(function(){
    console.log('----------- 原始值包装类型 -----------');

    let value = "25";
    let number = Number(value);   // 转型函数
    console.log(typeof number);   // "number"
    let obj = new Number(value);  // 构造函数
    console.log(typeof obj);      // "object"

    let num = 10;
    console.log(`num.valueOf()返回原始数值，num.valueOf() = ${num.valueOf()}`);
    console.log(`num.toString()可选地接收一个表示基数的参数，并返回相应基数形式的数值字符串，num.toString(16) = ${num.toString(16)}`);
    console.log(`num.toFixed()返回包含指定小数点位数的数值字符串，num.toFixed(2) = ${num.toFixed(2)}`);
    console.log(`num.toExponential()返回以科学记数法的数值字符串，num.toExponential(1) = ${num.toExponential(1)}`);
    console.log(`num.toPrecision()根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式，num.toPrecision() = ${num.toPrecision()}`);
    console.log(`Number.isInteger()用于判别一个数值是否可以保存为整数，Number.isInteger(1) = ${Number.isInteger(1)}、Number.isInteger(1.0) = ${Number.isInteger(1.0)}、Number.isInteger(1.1) = ${Number.isInteger(1.1)}`);
    console.log(`Number.isSafeInteger()鉴别整数是否在Number.MIN_SAFE_INTEGER(-2^53+1)到Number.MAX_SAFE_INTEGER(2^53-1)之间，超出这个范围的数值，即使尝试保存为整数，IEEE754编码格式也可能会表示一个完全不同的数值，Number.isSafeInteger(-1 * (2 ** 53)) = ${Number.isSafeInteger(-1 * (2 ** 53))}`);

    let stringValue = "Hello World";
    console.log(`3个继承的方法都返回对象的原始字符串值：stringValue.valueOf() = ${stringValue.valueOf()}，stringValue.toLocaleString() = ${stringValue.toLocaleString()}，stringValue.toString() = ${stringValue.toString()}`);
    console.log(`str.length返回字符串的长度：stringValue.length = ${stringValue.length}`);
    console.log(`chatAt()返回给定索引位置的字符：stringValue.charAt(2) = ${stringValue.charAt(2)}`);
    console.log(`charCodeAt()返回指定码元的字符编码：stringValue.charCodeAt(2) = ${stringValue.charCodeAt(2)}`);
    console.log(`fromCharCode()用于给定的UTF-16码元创建字符串中的字符，这个方法可以接受任意多个数值，并返回将所有数值对应的字符拼接起来的字符：String.fromCharCode(97,98,99,100,101) = ${String.fromCharCode(97,98,99,100,101)}, String.fromCharCode(0x61,0x62,0x63,0x64,0x65) = ${String.fromCharCode(0x61,0x62,0x63,0x64,0x65)}`);

    console.log(`concat()用于将一个或多个字符串拼接成一个新的字符串：stringValue.concat(',OUDUIDUI','!')  = ${stringValue.concat(',OUDUIDUI','!')}`);
    console.log(`提取字符串：
    stringValue.slice(3) = ${stringValue.slice(3)}，
    stringValue.substr(3) = ${stringValue.substr(3)}，
    stringValue.substring(3) = ${stringValue.substring(3)}，
    stringValue.slice(3,7) = ${stringValue.slice(3,7)}，
    stringValue.substr(3,7) = ${stringValue.substr(3,7)}，
    stringValue.substring(3,7) = ${stringValue.substring(3,7)}，
    stringValue.slice(-3) = ${stringValue.slice(-3)}，
    stringValue.substr(-3) = ${stringValue.substr(-3)}，
    stringValue.substring(-3) = ${stringValue.substring(-3)}，
    stringValue.slice(3,-4) = ${stringValue.slice(3,-4)}，
    stringValue.substr(3,-4) = ${stringValue.substr(3,-4)}，
    stringValue.substring(3,-4) = ${stringValue.substring(3,-4)}`);

    console.log(`搜索字符串：
    stringValue.indexOf("o") = ${stringValue.indexOf("o")},
    stringValue.lastIndexOf("o") = ${stringValue.lastIndexOf("o")},
    stringValue.indexOf("o",6) = ${stringValue.indexOf("o",6)},
    stringValue.lastIndexOf("o",6) = ${stringValue.lastIndexOf("o",6)}`);

    console.log(`字符串包含方法：
    stringValue.startsWith("Hel") = ${stringValue.startsWith("Hel")},
    stringValue.startsWith("rld") = ${stringValue.startsWith("rld")},
    stringValue.startsWith("llo",2) = ${stringValue.startsWith("llo",2)},
    stringValue.startsWith("Hel",2) = ${stringValue.startsWith("Hel",2)},
    stringValue.endsWith("Hel") = ${stringValue.endsWith("Hel")},
    stringValue.endsWith("rld") = ${stringValue.endsWith("rld")},
    stringValue.endsWith("Wor",9) = ${stringValue.endsWith("Wor",9)},
    stringValue.endsWith("rld",9) = ${stringValue.endsWith("rld",9)},
    stringValue.includes("Hel") = ${stringValue.includes("Hel")},
    stringValue.includes("rld") = ${stringValue.includes("rld")},
    stringValue.includes("llo",2) = ${stringValue.includes("llo",2)},
    stringValue.includes("Hel",2) = ${stringValue.includes("Hel",2)},`);

    console.log(`trim()返回一个洗的字符串，删除前后所有的空格符：'   Hello World   '.trim() = ${'   Hello World   '.trim()}`);

    console.log(`repeat()这个方法接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果：stringValue.repeat(3) = ${stringValue.repeat(3)}`);

    console.log(` padStart()和padEnd()这两个方法会复制字符串，如果小于指定长度，则在相应一遍填充支付，直至满足长度条件：
    stringValue.padStart(2) = ${stringValue.padStart(2)},
    stringValue.padStart(20) = ${stringValue.padStart(20)},
    stringValue.padStart(20,"abcde") = ${stringValue.padStart(20,"abcde")},
    stringValue.padEnd(20) = ${stringValue.padEnd(20)},
    stringValue.padEnd(20,"abcde") = ${stringValue.padEnd(20,"abcde")},
    `)

    let stringIterator = stringValue[Symbol.iterator]();
    console.log(`字符串的原型上暴露了一个@@iterator方法，表示可以迭代字符串的每个字符:`);
    console.log(stringIterator.next());
    console.log(stringIterator.next());
    console.log(stringIterator.next());
    console.log(stringIterator.next());
    console.log(stringIterator.next());
    for(const p of stringValue){
        console.log(`在for-of循环中可以通过这个迭代器按序访问每个字符：${p}`)
    };
    console.log(`可以更方便把字符串份额为字符数组：${JSON.stringify([...stringValue])}`);

    console.log(`字符串大小写转换：
    stringValue.toLocaleUpperCase() = ${stringValue.toLocaleUpperCase()},
    stringValue.toUpperCase() = ${stringValue.toUpperCase()},
    stringValue.toLocaleLowerCase() = ${stringValue.toLocaleLowerCase()},
    stringValue.toLowerCase() = ${stringValue.toLowerCase()}`)

    console.log(`match()这个方法本质上跟RegExp对象的exec()方法相同,该方法直接搜一个参数，可以是一个正则表达式字符串，也可以是一个RegExp对象：
    stringValue.match(/.llo/) = ${JSON.stringify(stringValue.match(/.llo/))},
    stringValue.match(/.llo/).index = ${stringValue.match(/.llo/).index},
    stringValue.match(/.llo/)[0] = ${stringValue.match(/.llo/)[0]}`)

    console.log(`search()这个方法返回模式第一个匹配的位置索引，如果没找到就返回-1：
    stringValue.search(/llo/) = ${stringValue.search(/llo/)}`);

    console.log(`replace()替换字符串:
    stringValue.replace("l","L") = ${stringValue.replace("l","L")},
    stringValue.replace(/l/g,"L") = ${stringValue.replace(/l/g,"L")}`);

    console.log(`split()这个方法会根据传入的分隔符将字符串拆分成数组：
    stringValue.split("o") = ${JSON.stringify(stringValue.split("o"))},
    stringValue.split("o",2) = ${JSON.stringify(stringValue.split("o",2))},
    stringValue.split(/o|l/) = ${JSON.stringify(stringValue.split(/o|l/))}`);
    
    console.log(`localeCompare()这个方法用于排序字符串：
    stringValue.localeCompare('apple') = ${stringValue.localeCompare('apple')},
    stringValue.localeCompare('Hello World') = ${stringValue.localeCompare('Hello World')},
    stringValue.localeCompare('zoo') = ${stringValue.localeCompare('zoo')}`)
})()