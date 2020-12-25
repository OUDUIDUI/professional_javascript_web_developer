(function(){
    console.log("--------- 执行上下文与作用域 ---------")

    var color = 'blue';
    
    function changeColor(){
        let anotherColor = "red";

        function swapColors(){
            let tempColor = anotherColor;
            anotherColor = color;
            color = tempColor;
            console.log(`这里可以访问到color、anotherColor、tempColor：color = ${color}, anotherColor = ${anotherColor}, tempColor = ${tempColor}`);
        }

        console.log(`这里可以访问到color、anotherColor：color = ${color}, anotherColor = ${anotherColor}`);
        swapColors();
    }

    console.log(`这里可以访问到color：color = ${color}`);
    changeColor();

    function add(num1,num2){
        var sum1 = num1 + num2;
        sum2 = num1 + num2;
        return  sum1;
    }
    let result = add(10,20);
    // console.log(`因为sum1在这里不是有效变量，所以访问sum1会报错，sum1 = ${sum1}`);
    console.log(`因为sum2未经声明就被初始化，所以它就会自动被添加到全局上下文，sum2 = ${sum2}`);

    if(true){
        let a;
    }
    // console.log(`因为let的作用域是块级，因此这里访问不到a，a = ${a}`);

    var a;
    var a;   // 不会报错
    let b;
    // let b;   // 报错


    var num = 1;
    function getNum(){
        let num = 2;
        {
            let  num = 3;
            return num;
        }
    };

    console.log(`标识符查找开始于作用域链的前端，num = ${getNum()}`);
})()

