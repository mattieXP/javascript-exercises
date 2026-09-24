const findTheOldest = function(listOfPeople) {
    const lifeLength = function(people) {
        let age;
        if (typeof people.yearOfDeath == 'undefined') {
           age = new Date().getFullYear() - people.yearOfBirth;
        } else {
            age = people.yearOfDeath - people.yearOfBirth;}
        return age;
    }

    return listOfPeople.reduce((previousPeople, nextPeople) => {
        if (lifeLength(previousPeople) < lifeLength(nextPeople)) {
            return nextPeople;
        } else return previousPeople;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
