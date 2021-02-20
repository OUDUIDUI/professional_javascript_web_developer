(function(){
    console.log('----------- 单例内置对象 -----------');

    console.log(`URL解码：
    encodeURI("https://template.com/hello world?id=1234#") = ${encodeURI("https://template.com/hello world?id=1234#")},
    encodeURIComponent("https://template.com/hello world?id=1234#") = ${encodeURIComponent("https://template.com/hello world?id=1234#")},
    decodeURI("https%3A%2F%2Ftemplate.com%2Fhello%20world%3Fid%3D1234%23") = ${decodeURI("https%3A%2F%2Ftemplate.com%2Fhello%20world%3Fid%3D1234%23")},
    decodeURI("https%3A%2F%2Ftemplate.com%2Fhello%20world%3Fid%3D1234%23") = ${decodeURIComponent("https%3A%2F%2Ftemplate.com%2Fhello%20world%3Fid%3D1234%23")}`);

    eval(console.log('helloWorld'));

    console.log(`Math的对象属性：
    自然对数的基数e的值：Math.E = ${Math.E},
    10为底的自然对数：Math.LN10 = ${Math.LN10},
    2为底的自然对数：Math.LN2 = ${Math.LN2},
    以2为底e的对数：Math.LOG2E = ${Math.LOG2E},
    以10为底e的对数：Math.LOG10E = ${Math.LOG10E},
    π的值：Math.PI = ${Math.PI},
    1/2的平方根：Math.SQRT1_2 = ${Math.SQRT1_2},
    2的平方根：Math.SQRT2 = ${Math.SQRT2}`);

    console.log(`min()和max()确定一组数值中的最小值和最大值：
    Math.min(1,2,3,4,5,6,7) = ${Math.min(1,2,3,4,5,6,7)},
    Math.max(1,2,3,4,5,6,7) = ${Math.max(1,2,3,4,5,6,7)}`)

    console.log(`向上取整：Math.ceil(25.2) = ${Math.ceil(25.2)}`);
    console.log(`向下取整：Math.floor(25.9) = ${Math.floor(25.9)}`);
    console.log(`四舍五入：Math.round(25.4) = ${Math.round(25.4)}，Math.round(25.5) = ${Math.round(25.5)}`);
    console.log(`返回数值最接近的单精度（32位）浮点数表示：Math.fround(25.9) = ${Math.fround(25.9)}`);

    console.log(`Math.random()返回一个0~1范围内的随机数，其中包含0但不包含1：Math.random() = ${Math.random()}`);
})()