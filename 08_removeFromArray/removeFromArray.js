const removeFromArray = function() {
    const args = Array.from(arguments);
    let arr1 = []
    let arr2 = []
    let result = [] 
    if (args.length > 0){
        arr1 = args[0];
    }
    if (args.length > 1){
        arr2 = args.slice(1);
    }
    for (let i of arr2){
                arr1 = arr1.filter(item => {
                    if(item !== i)
                    {
                         return item;
                    }})
            }   
    return arr1; 
   
};
// Do not edit below this line
module.exports = removeFromArray;
