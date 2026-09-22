const palindromes = function (string) {
    const lowerCaseString = string.toLowerCase();
    const turnInArray = Array.from(lowerCaseString);
    const cleanArray = turnInArray.filter((char) => {
        if (char != " " && char != "," && char != ";" && char != "." && char!="!" && char!="?") {
            return true;
        };
    });
    const array = cleanArray.slice(0 , cleanArray.length);
    const reversed = cleanArray.reverse();

    const orderedString = array.toString();
    const reversedString = reversed.toString();

    return orderedString === reversedString; 
};

// Do not edit below this line
module.exports = palindromes;
