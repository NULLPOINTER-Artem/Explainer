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
        tempArr[i] = tryReplaceOnObjectOfNumber(tempArr, i);
        tempArr[i] = tryReplaceOnObjectOfString(tempArr, i);
        tempArr[i] = tryReplaceOnObjectOfBoolean(tempArr, i);
    }

    return tempArr;
}

/**
 * Функция заменяет все элементы массива с типом 'string' на объект соответствующего типа
 * 
 * @param {object} array массив
 * @param {number} index текущий индекс массива 
 * @returns {object} возвращает объект String если было выполнено соответствующие условие 
 *          иначе элемент текущего массива
 */
function tryReplaceOnObjectOfString(array, index) {
    if (typeof(array[index]) === 'string') {
        array[index] = new String(array[index]);

        return array[index];
    } 

    return array[index];
}

/**
 * Функция заменяет все элементы массива с типом 'boolean' на объект соответствующего типа
 * 
 * @param {object} array массив
 * @param {number} index текущий индекс массива 
 * @returns {object} возвращает объект Boolean если было выполнено соответствующие условие 
 *          иначе элемент текущего массива
 */
function tryReplaceOnObjectOfBoolean(array, index) {
    if (typeof(array[index]) === 'boolean') {
        array[index] = new Boolean(array[index]);

        return array[index];
    } 

    return array[index];
}

/**
 * Функция заменяет все элементы массива с типом 'number' на объект соответствующего типа
 * 
 * @param {object} array массив
 * @param {number} index текущий индекс массива 
 * @returns {object} возвращает объект Number если было выполнено соответствующие условие 
 *          иначе элемент текущего массива
 */
function tryReplaceOnObjectOfNumber(array, index) {
    if (typeof(array[index]) === 'number') {
        array[index] = new Number(array[index]);

        return array[index];
    } 

    return array[index];
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