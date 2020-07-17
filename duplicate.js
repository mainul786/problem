var roll=[12,2,1,2,5,1,4,5,55,2,4,6,55];
var uniqueName=[];
for(var i=0;i<roll.length;i++){
    var element=roll[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);