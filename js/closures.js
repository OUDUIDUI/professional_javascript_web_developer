(function () {
    console.log("------------ 闭包 ------------");

    function compare(val1, val2) {
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0
        }
    }

    const res = compare(22, 40);
    console.log('此时compare函数中的活动对象已经销毁', res);

    function createComparisonFunction(propertyName) {
        return function (obj1, obj2) {
            let val1 = obj1[propertyName];
            let val2 = obj2[propertyName];
            if (val1 < val2) {
                return -1;
            } else if (val1 > val2) {
                return 1;
            } else {
                return 0
            }
        }
    }

    let compareFn = createComparisonFunction('name');
    const res1 = compareFn({name: 'Nicholas'}, {name: 'Matt'});
    console.log('此时createComparisonFunction的活动对象并不能销毁，因为compareFn的作用域链中仍然有对propertyName的引用', compareFn, res1);
    compareFn = null;
    console.log('直到compareFn销毁后，此时createComparisonFunction的活动对象才会销毁', compareFn);


    console.log("-------- this对象 --------");
    window.identity = 'The Window';
    let obj = {
        identity: 'My Object',
        getIdentityFunc() {
            return function () {

            }
        },
        getIdentityFunc1() {
            let that = this;
            return function () {
                return that.identity;
            }
        },
        getIdentityFunc2() {
            return this.identity;
        }
    };
    console.log(`内部函数是获取不到外部函数的this：obj.getIdentityFunc()() = ${obj.getIdentityFunc()()}`)
    console.log(`把外部变量的this保存到闭包可以访问的另一个变量：obj.getIdentityFunc1()() = ${obj.getIdentityFunc1()()}`)

    console.log(`正常调用：obj.getIdentityFunc2() = ${obj.getIdentityFunc2()}`);
    console.log(`按照规范obj.getIdentityFunc2和(obj.getIdentityFunc2)是相等的：(obj.getIdentityFunc2)() = ${(obj.getIdentityFunc2)()}`);
    console.log(`因为赋值表达式的值是函数本身，this值不再与任何对象绑定：(obj.getIdentityFunc2 = obj.getIdentityFunc2)() = ${(obj.getIdentityFunc2 = obj.getIdentityFunc2)()}`);


    console.log("-------- 内存泄漏 --------");
    function assignHandler() {
        let element = document.getElementById('someElement');
        let id = element.id;   // 新建id变量，避免闭包中对element.id循环引用

        element.onclick = () => {
            // console.log(element.id);
            console.log(id);
        };

        element = null;  // 接触对COM对象引用
    }
})();
