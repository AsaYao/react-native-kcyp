/**
 * Created by chengyao on 16/8/23.
 */
export default class Person {
     idCard = '';
     weight = '0.3';
    constructor(name) {
        this.name = name;
    };

    set (age){
        this.age = age;
    }
    get (){
        return this.age;
    }

    set (sex){
        this.sex = sex;
    }
    get (){
        return this.sex;
    }
    //实例方法
    sayName() {
        console.log('My name is '+this.name);
    }

    satmyAge(){
        console.log('My age is '+this.age);
    }

}