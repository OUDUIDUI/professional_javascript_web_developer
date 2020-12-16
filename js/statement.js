(function(){
    console.log("-------------- 语句部分 --------------")
    /* if语句 */
    console.log("------- if语句 -------")
    const i = 10;
    if(i >25) console.log(`"i > 25" is True.`);

    if(!i){
        console.log('满足"!i"条件')
    }else if(i === 10){
        console.log('满足"i === 10"条件')
    }else{
        console.log('不满足以上条件')
    }

    /* do-while语句 */
    console.log("------- do-while语句 -------")
    let j = 2;
    do{
        console.log(`当j小于等于0的时候不会打印，此时j = ${j}`);
        j--;
    }while(j > 0);


    /* while语句 */
    console.log("------- while语句 -------")
    let k = 2;
    while(k > 0){
        console.log(`当k大于0的时候满足条件，此时k = ${k}`);
        k--;
    }

    /* for语句 */
    console.log("------- for语句 -------")
    for(let i = 5;i > 0;i--){
        console.log(`当i大于0的时候满足条件，此时i = ${i}`);
    }

    /* for-in语句 */
    console.log("------- for-in语句 -------")
    const obj = {
        name: 'Henry',
        age: '24',
        gender: 'man'
    }
    for(const key in obj){
        console.log(key);
    }


     /* for-of语句 */
     console.log("------- for-in语句 -------")
     for(const val of [1,2,3,4]){
         console.log(val);
     }


     /* 标签语句 */
     console.log("------- 标签语句 -------")
     start: for(let i = 0; i < 5; i++){
         console.log(i);
     }


     /* break和continue语句 */
     console.log("------- break和continue语句 -------")
     let num = 0;
     for(let i = 0; i < 10; i ++){
         if(i === 4){
             continue;
         }
        outermost:for(let j = 0; j < 10; j ++){
            if(i === 5) {
                break outermost;   // 等同于continue
            }else if(i === 9){
                break;
            }
            console.log(i);
            num++;
        }
     }
     console.log(num);


     /* with语句 */
     console.log("------- with语句 -------")
     const obj1 = {
        name: 'Henry',
        age: '24',
        gender: 'man'
    };
    let newObj = {};
    with(obj1){
        newObj.name = name;
        newObj.age = age;
        newObj.gender = gender;
    };
    console.log(newObj);


    /* switch语句 */
    console.log("------- switch语句 -------")
    const num1 = 2;
    switch(num1){
        case 0:
            // 跳过
        case 1:
            console.log(`当num1等于0或1时满足条件`);
            break;
        case 1 + 1:  // 支持表达式
            console.log(`当num1等于1 + 1时满足条件`);
            break;
        default:
            console.log(`不满足以上条件`)
    }
})()