(function(){
    console.log('----------- RegExp -----------');

    const pattern1 = /at/g;  // 匹配字符串中的所有“at”
    const pattern2 = /[bc]at/i;   // 匹配第一个“bat”或“cat”，忽略大小写
    const pattern3 = /.at/gi;    // 匹配所有已“at”结尾的三字符组合，忽略大小写

    const pattern4 = /\[bc\]at/i;   // 匹配第一个"[bc]at"，忽略大小写

    const pattern5 = new RegExp("[bc]at","i");   // /at/g
    const pattern6 = new RegExp("\\[bc\\]at","i"); //   /\[bc\]at/i

    const pattern7 = new RegExp(pattern1,"i");   //  /at/i
    console.log('修改已有正则表达式的标记：pattern7 = ' + pattern7);

    console.log('pattern4.global = ' + pattern4.global);
    console.log('pattern4.ignoreCase = ' + pattern4.ignoreCase);
    console.log('pattern4.multiline = ' + pattern4.multiline);
    console.log('pattern4.lastIndex = ' + pattern4.lastIndex);
    console.log('pattern4.source = ' + pattern4.source);
    console.log('pattern4.flags = ' + pattern4.flags); 


    const text = "cat,bat,sat,fat";
    const pattern8 = /.at/g;
    let matches = pattern8.exec(text);
    console.log(`如果找到了匹配项，则返回包含第一个匹配信息的数组：matches = `);
    console.log(matches);
    matches = pattern8.exec(text);
    console.log(`如果模式设置了全局标记，则每次调用exec()方法会返回一个匹配的信息：matches = `);
    console.log(matches);
    console.log(`如果输入的文本与模式匹配，则返回true，否则返回false：pattern8.test(text) = ${pattern8.test(text)}`);

    const text2 = "this is has been a short summer";
    const pattern9 = /(.)hort/g;
    if(pattern9.test(text2)){
        console.log(`最后搜索的字符串：RegExp.input = ${RegExp.input}`);
        console.log(`最后匹配的文本：RegExp.lastMatch = ${RegExp.lastMatch}`);
        console.log(`最后匹配的捕获组：RegExp.lastParen = ${RegExp.lastParen}`);
        console.log(`input字符串出现在lastMatch前面的文本：RegExp.leftContext = ${RegExp.leftContext}`);
        console.log(`input字符串出现在lastMatch后面的文本：RegExp.rightContext = ${RegExp.rightContext}`);
    }
})()