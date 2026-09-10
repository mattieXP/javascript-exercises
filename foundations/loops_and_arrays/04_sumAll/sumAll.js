const sumAll = function(num1, num2) {

    let lowerNum ;
    let higherNum ;
    let array = [];

    // si num1 et num2 ne sont pas des integers positifs alors 'ERROR'
    if (typeof num1 != 'number'
        || typeof num2 != 'number'
        || !Number.isInteger(num1)
        || !Number.isInteger(num2) 
        || num1 <= 0
        || num2 <= 0){
        return 'ERROR';
    } else {
    // arranger l'ordre des num pour que l'inférieur soit le premier et le supérieur le dernier
        if (num1 > num2) {
            lowerNum = num2;
            higherNum = num1; 
        } else {
            lowerNum = num1;
            higherNum = num2;
        }

    // compter de 1 en 1 entre num1 et num2 et remplir un array avec num1,
    // num2, et chaque valeur entre les deux

        for (let i = lowerNum; i <= higherNum; i++) {
        array.push(i);
        } 

    // faire la somme de chaque valeur de l'array avec reduce() en initiant à 0
        const initialValue = 0;
        const sumOfValues = array.reduce(function(accumulator, currentValue) { 
            return accumulator + currentValue
        }, initialValue);
    return sumOfValues;
    }

};

// Do not edit below this line
module.exports = sumAll;
