let massive = [10, 'Hello world', null, true , '', false, 255];

let explainedMassive = getExplanation(massive);

console.log(explainedMassive);


// Functions

/**
 * Функция удаляет все негативные значения и заменяет оставшиеся елементы массива 
 * с типом 'number'/'boolean'/'string' на объект соответствующего типа
 * 
 * @param {object} array массив
 * @returns {object} возвращает новый массив с объяснением
 */
function getExplanation(array) {
    let tempArr = [];

    tempArr = removeAllNegativeValues(array);

    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = getObjectOfExplain(tempArr, i);
    }

    return tempArr;
}

/**
 * Создает объект для описания типа и значения каждого элеманта из массива
 * 
 * @param {object} array массив
 * @param {number} index текущий индекс массива
 * @returns {object} Возвращает объект со свойствами type & value для описания каждого элеманта из массива
 */
function getObjectOfExplain(array, index) {
    let object = {};

    if (typeof(array[index]) === 'number' || typeof(array[index]) === 'boolean') {
        object.type = ( typeof(array[index]) );
        object.value = ( array[index] );
    } else if (typeof(array[index]) === 'string') {
        object.type = ( typeof(array[index]) );
        object.value = ( array[index] );
        object.length = ( array[index].length );
    }

    return object;
}

/**
 * Функция создает новый массив без негативных значений из передаваемого массива
 * 
 * @param {object} array массив
 * @returns {object} Возвращает новый массив без негативных значений
 */
function removeAllNegativeValues(array) {
    let tempArr = [];
    let item;

    for (let i = 0, i2 = 0; i < array.length; i++) {
        item = array[i];

        if (!item) {
            continue;
        } else {
            tempArr[i2++] = array.slice(i, i + 1)[0];
        }
    }

    return tempArr;
}