(function(){
    console.log('----------- Date -----------');

    const now = new Date();
    console.log('now: ' + now);

    const date1 = new Date(Date.parse("12/25/2020"));
    console.log('date1: ' + date1);
    const date2 = new Date(Date.parse("Dec 25 2020"));
    console.log('date2: ' + date2);
    const date3 = new Date(Date.parse("Fri Dec 25 2020 00:00:00 GMT+0800"));
    console.log('date3: ' + date3);
    const date4 = new Date(Date.parse("2020-12-25T00:00:00"));
    console.log('date4: ' + date4);

    const date5 = new Date("Fri Dec 25 2020 00:00:00 GMT+0800");
    console.log('date5: ' + date5);

    const date6 = new Date(Date.UTC(2020,11));
    console.log('date6: ' + date6);
    const date7 = new Date(Date.UTC(2020,11,25,0,0,0));
    console.log('date7: ' + date7);

    const date8 = new Date(2020,11,25,0,0,0);
    console.log(date8);
    console.log('date8: ' + date8);

    const start = Date.now();
    console.log(`开始时间：${start}`);
    console.log('doSomething');
    const stop =  Date.now();
    console.log(`结束时间：${stop}`);
    console.log(`使用时间：${stop - start}`);

    console.log('返回与浏览器运行的本地环境一致的日期和时间：' + now.toLocaleString());
    console.log('返回带时区信息的日期和时间，而时间是24小时制表示的：' + now.toString());

    const date9 = new Date(2020,0,1);    // 2020年1月1日
    const date10 = new Date(2020,1,1);    // 2020年2月1日
    console.log(`date9 < date10 : ${date9 < date10}`);
    console.log(`date9 > date10 : ${date9 > date10}`);

    console.log('now.toDateString() = ' + now.toDateString());
    console.log('now.toTimeString() = ' + now.toTimeString());
    console.log('now.toLocaleDateString() = ' + now.toLocaleDateString());
    console.log('now.toLocaleTimeString() = ' + now.toLocaleTimeString());
    console.log('now.toUTCString() = ' + now.toUTCString());
})()