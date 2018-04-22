/**
 * Created by qile on 2017/8/14.
 */
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//MIKE
person.name = "Lucy";
console.log(person.name);//MIKE
delete person.name;
console.log(person.name);//MIKE

/**
 * Created by qile on 2017/8/14.
 */
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:true,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//MIKE
person.name = "Lucy";
console.log(person.name);//MIKE
delete person.name;
console.log(person.name);//undefined


/**
 * Created by qile on 2017/8/14.
 */
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//MIKE
person.name = "Lucy";
console.log(person.name);//LUCY
delete person.name;
console.log(person.name);//undefined