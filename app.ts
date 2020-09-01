// 静态类型
// const count:number=918;
// const myNamme:string='kenan';
// null,undefinde,boolean,void,symbol

// 对象类型
// const meinv:{
//     name:string,
//     age:number
// }={
//     name:'tingting',
//     age:24
// }

// const xiaojiejies:string[]=['tingting','liuying','lizhen'];


// class Person{}
// const dajiao:Person=new Person()


// const jian:()=>string=()=>{
//     return 'dajiao'
// }


// 对象类型 数组类型  函数类型





// 类型推断


// function getTotal(one:number,two:number){
//     return one+two;
// }
// const total=getTotal(2,3);
// console.log(total);




// 函数的返回类型
// function getTotal(one:number,two:number):number{
//     return one+two;
// }
// const total=getTotal(2,3);
// console.log(total);


// function sayHello():void {
//     console.log('hello world');
//     return ''
// }


// 永远执行不完，定义为never
// function errorFunc():never{
//     throw new Error();
//     console.log('hello world');
// }
// function forNever():never{
//     while(true){}
//     console.log(234);
    
// }


// function add({a,b}:{a:number,b:number}){
//     return a+b;
// }
// let result=add({a:1,b:2});
// console.log(result);

// 对象
// function getNumber({one}:{one:number}){
//     return one
// }
// const one=getNumber({one:1})



// 数组的定义

// const numberArr:number[]=[1,2,3];
// const stringArr:string[]=['2','fs'];
// const undefinedArr:undefined[]=[undefined,undefined];

// const arr:(number | string)[]=[1,'a',3];


// const mrs:(number | string | {name:string,age:number})[]=[{name:'tingting',age:22},1,'a'];

// 类型别名
// type Lady={
//     name:string,
//     age:number
// }

// interface Madam {
//     name:string;
//     age:number;
// }
// const mrs:(number | string | Lady)[]=[{name:'tingting',age:22},1,'a'];
// const mrs:(number | string | Madam)[]=[{name:'tingting',age:22},1,'a'];
// const mrs :Madam[]=[
//     {name:'tingting',age:22}
// ]





// 元组

// const ms:(string | number)[]=['tingting',22,'kenan'];
// const ms:[string,string,number]=['tingting','tingting',22];


// // csv格式
// const womens:[string,string,number][]=[
//         ['kenan','tingting',22],
//         ['kenan','tingting',22],
//         ['kenan','tingting',22]
// ]

// console.log(womens);




// interface

// interface Resume{
//     name:string;
//     age:number;
//     bust:number;
//     waistline?:number;
// }
// const resume={
//     name:'tingting',
//     age:22,
//     bust:88,
//     waistline:22
// }
// const screenResume=(resume:Resume)=>{
//     resume.age < 24 && resume.bust >= 90 ? console.log(resume.name + '进入'):console.log(resume.name+'淘汰');    
// }
// const getResume=(resume:Resume)=>{
//     console.log('name:'+resume.name+';age:'+resume.age+';bust:'+resume.bust,resume.waistline);
// }
// screenResume(resume)
// getResume(resume)




// 写任何类型
// interface Resume{
//     name:string;
//     age:number;
//     bust:number;
//     waistline?:number;
//     [propname:string]:any;
//     say():string,
//     teach():string
// }


// const girl={
//     age:22,
//     name:'kenan',
//     bust:20,
//     sex:'nv',
//     say(){
//         return 'welcome'
//     },
//     teach(){
//         return 'teach'
//     }

// }

// const getResume=(girl:Resume)=>{
//     console.log(girl.sex);
//     console.log(girl.say());
    
// }
// getResume(girl);


// 约束类
// class mrs implements Resume{
//     name="tingting";
//     age=18;
//     bust=99;
//     say(){
//         return '欢迎'
//     };
//     teach(){
//         return '干啥？？？'
//     }
// }


// console.log(mrs.name);


// interface 的继承
// interface Teacher extends Resume{
//     teach():string
// }



// 类的约束
// class boy implements Teacher{
//     name='kenan';
//     age=22;
//     bust=25;
//     say(){
//         return "I'm a boy"
//     };
//     teach(){
//         return 'Teacher English'
//     }

// }


// console.log(boy.name);






// class Lady{
//     content="hi,ouba";
//     name="tingting";
//     sayHello(){
//         return this.content
//     }
// }

// class Mrs extends Lady{
    
//     sayLike(){
//         return this.content
//     }
//     sayName(){
//         return this.name
//     }
// }

// const m=new Mrs();
// console.log(m.sayLike());
// console.log(m.sayName());
// const goddess=new Lady();
// console.log(goddess.sayHello());

// class meimei extends Lady{
//     sayHello(){
//         return super.sayHello();
//     }
// }
// const mei=new meimei();
// console.log(mei.sayHello());




class Person{
    name:string;
}
const person=new Person();
person.name='kekeaiai';
console.log(person.name);


