var spech="i am a good boy. Besically i want to a be web developer.";
var count=0;
for (var i=0;i<spech.length;i++){
    var element=spech[i];
    if(element ==" " && spech[i-1] !=" "){
        count++;
    }
}
count++;
console.log(count);