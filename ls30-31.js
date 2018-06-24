var f = function (v) {
    return v + 1;
};
f(2);
var f = v => v + 1;
f(2);

var f = () => 5;

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
};

const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var moveToX = ()=>this.x=x;
        var moveToY = ()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);

function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });

function test() {
    console.log(arguments);
}
test("a","b","c");

var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);

var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1);
console.log(s2);
console.log(s1.toString()); 
console.log(s2.toString());

var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false
var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 

var sym = Symbol('My symbol');
var sym = Symbol('My symbol');
String(sym);
sym.toString();

var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';
// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
a[mySymbol]
a['mySymbol']

let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);

var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1));
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2));

var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);
console.log(s2 === s3);
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);
console.log(s2 === s4);

var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}

var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);

console.log([...(new Set([1, 2, 3, 4, 5]))]);//[1, 2, 3, 4, 5]

var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());
console.log(typeof set.values());
console.log(typeof set.entries());

var set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) );

var set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
var set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));