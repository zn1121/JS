/**
 * Created by qile on 2017/8/14.
 */

function foo(){}
console.log(foo); //ƒ foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //t
console.log(foo instanceof Function); //t
console.log(foo === window.foo); //t


console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object


//思考：
console.log(typeof new Function());// function 
console.log(typeof new Array());	 //  object
console.log(typeof new Date());	 //  object

//补充思考：
console.log(Function instanceof Function);//t
console.log(Function instanceof Object);//t

console.log(Array instanceof Function);//t
console.log(Array instanceof Object);//t

console.log(Date instanceof Function);//t
console.log(Date instanceof Object);//t

console.log(Math instanceof Function);//f
console.log(Math instanceof Object);//t

console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);//t




//length是形参的数量
//arguments是实参的数量

