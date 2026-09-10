const removeFromArray = function(array, ...otherElements) {
   const filteredArray = array.filter(function(element) {
        return !otherElements.includes(element);
    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
