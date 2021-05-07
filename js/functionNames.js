(function () {
    console.log("------------ 函数名 ------------");
    function sum(num1, num2){
        return num1 + num2;
    }
    console.log(`sum(10, 10) = ${sum(10, 10)}`);
    let anotherSum = sum;
    sum = null;
    console.log(`anotherSum(10, 10) = ${anotherSum(10, 10)}`);

    function foo() {};
    let bar = function() {};
    let baz = () => {};
    let dog = {
        years: 1,
        get age() {
            return this.years;
        },
        set age(newAge) {
            this.years = newAge;
        }
    };
    let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, 'age');
    console.log(`foo.name = ${foo.name}`);
    console.log(`bar.name = ${bar.name}`);
    console.log(`baz.name = ${baz.name}`);
    console.log(`(()=>{}).name = ${(()=>{}).name}`);
    console.log(`(new Function()).name = ${(new Function()).name}`);
    console.log(`foo.bind(null).name = ${foo.bind(null).name}`);
    console.log(`propertyDescriptor.set.name = ${propertyDescriptor.set.name}`);
    console.log(`propertyDescriptor.get.name = ${propertyDescriptor.get.name}`);
})()