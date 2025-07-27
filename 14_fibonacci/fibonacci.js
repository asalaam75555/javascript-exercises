const fibonacci = function(number) {
    let sum =0;
    if(typeof(number) !== 'number' && isNaN(+number)){
        return 0;
    }
    else if (+number === 0){
        return sum;
    }
    else if (+number === 1){
        return 1;
    }
    else if (number < 0){
        return 'OOPS'
    }   
        return sum = fibonacci(number - 1)+ fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;
