var number=[78,45,12,11,10,120];
var add=0;
for (var i=0;i<number.length;i++){
    var element=number[i];
    add=add+element;
}
console.log(add);
// function and array using sum
var numbers=[45,20,12,10,20,22];
function arraysum(numbers){
    var sum=0;
    for (var i=0;i<numbers.length;i++){
        var element=numbers[i];
        sum=sum+element;
    }
    return sum;
}
var result=arraysum(numbers);
console.log(result);