const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0){
        return 'ERROR'
    }
    if (! (Math.floor(int1)=== int1 && Math.floor(int2)=== int2)){
        return 'ERROR'
    }
    if (+int1 === NaN || +int2 === NaN){
        return 'ERROR'
    }
    let big 
    let small
    if(int1>int2){
        big = int1;
        small = int2
    }else{
        big = int2;
        small = int1 
    }
    let sum = 0;
    for (let i = small; i <= big; i++){
        sum += i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
