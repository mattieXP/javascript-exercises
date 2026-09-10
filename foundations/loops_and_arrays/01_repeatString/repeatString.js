const repeatString = function(string, num) {
    if (num <= 0) {
        string = 'ERROR';
        return string;
    } else {
        let i = 1;
        let finalString = "";
        for (i=1; i<=num; i++) {
            finalString += string;
        }
        return finalString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
