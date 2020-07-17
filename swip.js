var a=5;
var b=7;
console.log("before swip :a=", a,"b=",b);
var temp=a;
a=b;
b=temp;
console.log("after swip :a=", a,"b=",b);


var x=5;
var y=7;
x=x+y;
y=x-y;
x=x-y;
console.log("after swip :x=",x ,"y=",y);


var p=5;
var q=7;
[p, q]=[q,p]
console.log("after swip :p=",p ,"q=",q);
