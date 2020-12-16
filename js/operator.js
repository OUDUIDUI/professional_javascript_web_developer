(function(){
    console.log("-------------- 操作符部分 --------------")

    /* 一元操作符 */
    console.log("------- 一元操作符 -------")
    
    console.log('---- 递增/递减操作符 ----');
    let age = 29;
    console.log('初始值：age = ' + age);        // 29
    console.log(`前缀递增：++age = ${++age}`);  // 30
    console.log(`后缀递增：age++ = ${age++}`);  // 30
    console.log('age = ' + age);              // 31
    console.log(`前缀递减：--age = ${--age}`);  // 30
    console.log(`后缀递减：age-- = ${age--}`);  // 30
    console.log('age = ' + age);              // 29

    let s1 = "2";
    let s2 = "z";
    let b = false;
    let f = 1.1;
    let o = {
        valueOf(){
            return -1;
        }
    };

    s1++;  // 数值3
    s2++;  // NaN
    b++;   // 数值1
    f--;   // 0.10000000000000009
    o--;   // 数值-2

    console.log(`如果是有效的数值形式字符串，则转换为数值再应用改变：s1 = ${s1}`)
    console.log(`如果不是有效的数值类型字符串，则将变量的值设置为NaN：s2 = ${s2}`)
    console.log(`如果是false，则转换为0再应用改变：b = ${b}`)
    console.log(`浮点数正常加一或减一：f = ${f}`)
    console.log(`对象则调用其valueOf()方法取得可以操作的值，对得到的值应用上述规则：o = ${o}`)


    console.log('---- 一元加和减 ----');
    let num = 25;
    console.log('初始值：num = ' + num);  
    num = +num;
    console.log(`一元加对数值没有任何影响：num = ${num}`);
    num = -num;
    console.log(`一元减会把数值变成负数：num = ${num}`);


    /* 位操作符 */
    console.log("------- 位操作符 -------")
    console.log('---- 按位非 ----');

    let num1 = 25;       // 二进制 0000 0000 0000 0000 0000 0000 0001 1001
    let num2 = ~num1;    // 二进制 1111 1111 1111 1111 1111 1111 1110 0110
    console.log(`25的补数为${num2}`)

    console.log('---- 按位与 ----');
    console.log(`25和3按位非后结果为${25&3}`)

    console.log('---- 按位或 ----');
    console.log(`25和3按位或后结果为${25|3}`)

    console.log('---- 按位异或 ----');
    console.log(`25和3按位异或后结果为${25^3}`)

    console.log('---- 左移 ----');
    let oldValue = 2;     // 二进制 10
    let newValue = oldValue << 5;    // 二进制 1000000
    console.log(`2左移5位的结果为${newValue}`)

    console.log('---- 有符号右移 ----');
    console.log(`64有符号右移5位的结果为${newValue >> 5}`)

    console.log('---- 无符号右移 ----');
    let oldValue2 = -64;     // 二进制 1111 1111 1111 1111 1111 1111 1100 0000
    let newValue2 = oldValue2 >>> 5;    // 二进制 0000 0111 1111 1111 1111 1111 1111 1110
    console.log(`-64无符号右移5位的结果为${newValue2}`)


    /* 布尔操作符 */
    console.log("------- 布尔操作符 -------")
    console.log('---- 逻辑非 ----');
    
    console.log(`!false = ${!false}`);   // true
    console.log(`!'blue' = ${!'blue'}`);   // false
    console.log(`!0 = ${!0}`);   // true
    console.log(`!NaN = ${!NaN}`);   // true
    console.log(`!'' = ${!''}`);   // true
    console.log(`!12345 = ${!12345}`);   // false

    console.log('同时使用两次逻辑非等效于Boolean(),将值转为布尔值');
    console.log(`!!false = ${!!false}`);   // false
    console.log(`!!'blue' = ${!!'blue'}`);   // true
    console.log(`!!0 = ${!!0}`);   // false
    console.log(`!!NaN = ${!!NaN}`);   // false
    console.log(`!!'' = ${!!''}`);   // false
    console.log(`!!12345 = ${!!12345}`);   // true

    console.log('---- 逻辑非 ----');

    let found = false;
    let result = found && someUndeclaredVariable;   // 不会出错
    console.log('因为逻辑与是一种短路操作符，第一个操作数为false，已经确定结果，因此即使第二个操作数未定义，也不会报错:result = ' + result);

    console.log('---- 逻辑或 ----');
    let found2 = true;
    let result2 = found2 || someUndeclaredVariable;   // 不会出错
    console.log('逻辑或也是一种短路操作符，第一个操作数为true，第二个操作数就不会再被求值：result2 = ' + result2);


    /* 乘性操作符 */
    console.log("------- 乘性操作符 -------")
    console.log(`乘法运算符：34 * 56 = ${34*56}`);
    console.log(`除法运算符：66 / 11 = ${66/11}`);
    console.log(`取模运算符：26 % 5 = ${26%5}`);


    /* 指数操作符 */
    console.log("------- 指数操作符 -------")
    console.log(`Math.pow(3,2) = ${Math.pow(3,2)}`);
    console.log(`3 ** 2 = ${3**2}`);
    
    let squared = 3;
    squared **= 2;
    console.log(`squared = ${squared}`);



    /* 加性操作符 */
    console.log("------- 加性操作符 -------")
    console.log(`1 + 2 = ${1+2}`);

    let num4 = 5;
    let num5 = 10;
    let message = "The sum of 5 and 10 is " + num4 + num5;   // This sum of 5 and 10 is 510
    console.log(`message = ${message}`);
    message = "The sum of 5 and 10 is " + (num4 + num5);   // This sum of 5 and 10 is 15
    console.log(`message = ${message}`);


    /* 关系操作符 */
    console.log("------- 关系操作符 -------")
    console.log(`5 > 3 : ${5 > 3}`);
    console.log(`5 < 3 : ${5 < 3}`);
    console.log(`5 >= 3 : ${5 >= 3}`);
    console.log(`5 <= 3 : ${5 <= 3}`);

    console.log(`"Brick" < "alphabet" : ${"Brick" < "alphabet"}`);
    console.log(`"brick" < "alphabet" : ${"brick" < "alphabet"}`);
    console.log(`"23" < "3" : ${"23" < "3" }`);
    console.log(`"23" < 3 : ${"23" < 3 }`);


    /* 相等操作符 */
    console.log("------- 相等操作符 -------");
    console.log(`null == undefined : ${null == undefined}`);
    console.log(`"NaN" == NaN : ${"NaN" == NaN}`);
    console.log(`5 == NaN : ${5 == NaN}`);
    console.log(`NaN == NaN : ${NaN == NaN}`);
    console.log(`NaN != NaN : ${NaN != NaN }`);
    console.log(`false == 0 : ${false == 0}`);
    console.log(`true == 1 : ${true == 1}`);
    console.log(`true == 2 : ${true == 2}`);
    console.log(`undefined == 0 : ${undefined == 0}`);
    console.log(`null == 0 : ${null == 0}`);
    console.log(`"5" == 5 : ${"5" == 5}`);
    console.log(`"5" === 5 : ${"5" === 5}`);


    /* 条件操作符 */
    console.log("------- 条件操作符 -------");
    let result3 = true ? '条件满足返回这个' : '条件不满足返回这个';
    console.log(`三元运算符：${result3}`)


    /* 赋值操作符 */
    console.log("------- 赋值操作符 -------");
    let num6 = 10;
    num6 = num6 + 10;
    console.log(`num6 = ${num6}`);
    num6 += 10;
    console.log(`num6 = ${num6}`);


    /* 逗号操作符 */
    console.log("------- 逗号操作符 -------");
    let num7,num8 = 1.1,num9 = 3;
    console.log(`利用逗号操作符一条语句声明多个变量：num7 = ${num7},num8 = ${num8},num9 = ${num9}`)
})()