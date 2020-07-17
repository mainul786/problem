
// 1.feetToMile convert 
function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
var result=feetToMile(10560);
console.log(result);

// 2.woodCalculator
function woodCalculator(chair,table,bed){
    var charCount=chair*1;
    var tableCount=table*3;
    var bedCount=bed*5;
    var totalWood=charCount+tableCount+bedCount;
    return totalWood;
}
var result=woodCalculator(10,10,10);
console.log(result);


// brickCalculator

function brickCalculator(floor){
    if(floor<=10){
        var bellowTen=floor * 15
        var totalBrickSmall=bellowTen * 1000;
        return totalBrickSmall;
    }else if(floor>=11 && floor<=20){
        var aboveTen=floor-10;
        var aboveTenfloor=floor - aboveTen;
        var aboveTenfloorBrick=aboveTenfloor * 15 + aboveTen * 12;
        var totalBrickForMedium=aboveTenfloorBrick * 1000;
        return totalBrickForMedium;
    }
    else{
        var buldingTop=floor-20;
        var buildingMiddle=10;
        var buildingBottom=10;
        var highestBuilding=buildingBottom * 15 + buildingMiddle * 12 + buldingTop * 10;
        var totalBrickForHigh=highestBuilding * 1000;
        return totalBrickForHigh;
    }
}
var result=brickCalculator(23);
console.log(result);


// tinyFriend
function tinyFriend(names){
    var smallest=names[0];
    for(var i=0;i<names.length;i++){
        var countnameslength=names[i];
        if(countnameslength.length<smallest.length){
            smallest=countnameslength;
        }
    }
    return smallest;
}
var largestnumber=tinyFriend(["ram","raju","sohel","ra"]);
console.log(largestnumber);