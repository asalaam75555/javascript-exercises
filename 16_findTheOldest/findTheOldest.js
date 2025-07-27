const findTheOldest = function(peoples) {
    let years = 0
    let index = 0
    let date = new Date();
    peoples.forEach((person,pindex) => {
        let personyears
        if (person.yearOfDeath === undefined){
            personyears = date.getFullYear() - person.yearOfBirth;
        }else{
            personyears = person.yearOfDeath - person.yearOfBirth;
        }
        if (personyears > years){
            years = personyears 
            index = pindex
        }
    });
    return peoples[index];
};

// Do not edit below this line
module.exports = findTheOldest;
