const reverseString = function(string) {
    // Transform the string in an array
    const char = string.split('');

    // Reverse the array

    const reverted = char.reverse();

    // Transform the array in a string

    const reString = reverted.join('');

    return reString;
};

// Do not edit below this line
module.exports = reverseString;
