/**
 * Created by qile on 2017/8/14.
 */
//操作数非布尔类型，&&短路原则
console.log(2&&4);
console.log(0&&4);
console.log({x:2}&&{name:"Jack"});
console.log(null&&"hello");
console.log({}&&"world");
//&&运算若为真返回左值，若为假返回右值


//操作数非布尔类型，||短路原则
console.log(2||4);
console.log(0||4);
console.log({x:2}||{name:"Jack"});
console.log(null||"hello");
console.log({}||"world");
//返回第一个真值


//思考 所有对象转换为布尔类型 都为 true
console.log((new Boolean(false))&&234);
console.log((new Boolean(false))||234);
