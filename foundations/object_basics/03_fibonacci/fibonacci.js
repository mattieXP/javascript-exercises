const fibonacci = function(index) {
    
    const array = [0,1,1];

    if (index <0) {
        return "OOPS"
    } else {
        for (let i = 3 ; i<= index ; i++) {
            const antepenultimate = i - 2;
            const penultimate = i - 1;
            const newNumber = array[antepenultimate] + array[penultimate];
            array.push(newNumber);
        }
        return array[index];
        }
};

// Do not edit below this line
module.exports = fibonacci;
