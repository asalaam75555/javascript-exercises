const palindromes = function (str) {
    let alphaArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
        'r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
    let arr = str.toLowerCase().split('');
    let arrW =[];
    let arrRW = []
    let rarr = arr.toReversed();
    arr.forEach(element => {
        if (alphaArr.includes(element)){
            arrW.push(element);
        }
    });
    rarr.forEach(element => {
        if (alphaArr.includes(element)){
            arrRW.push(element);
        }
    })
    let words = arrW.join();
    let rwords = arrRW.join();
    if (words=== rwords){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
