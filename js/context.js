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
})()

