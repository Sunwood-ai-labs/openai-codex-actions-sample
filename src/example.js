function findLargestNumber(numbers) {
    /**
     * 配列から最大値を見つける
     * @param {number[]} numbers - 数値の配列
     * @returns {number|null} 最大値（配列が空の場合はnull）
     */
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return null;
    }
    
    return Math.max(...numbers);
}

function reverseString(str) {
    /**
     * 文字列を反転する
     * @param {string} str - 入力文字列
     * @returns {string} 反転された文字列
     */
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    
    return str.split('').reverse().join('');
}

class Calculator {
    /**
     * 基本的な計算機能を提供するクラス
     */
    
    add(a, b) {
        /**
         * 2つの数値を加算
         * @param {number} a - 1つ目の数値
         * @param {number} b - 2つ目の数値
         * @returns {number} 加算結果
         */
        this._validateNumbers(a, b);
        return a + b;
    }
    
    subtract(a, b) {
        /**
         * 2つの数値を減算
         * @param {number} a - 1つ目の数値
         * @param {number} b - 2つ目の数値
         * @returns {number} 減算結果
         */
        this._validateNumbers(a, b);
        return a - b;
    }
    
    multiply(a, b) {
        /**
         * 2つの数値を乗算
         * @param {number} a - 1つ目の数値
         * @param {number} b - 2つ目の数値
         * @returns {number} 乗算結果
         */
        this._validateNumbers(a, b);
        return a * b;
    }
    
    divide(a, b) {
        /**
         * 2つの数値を除算
         * @param {number} a - 1つ目の数値
         * @param {number} b - 2つ目の数値
         * @returns {number} 除算結果
         * @throws {Error} 0による除算の場合
         */
        this._validateNumbers(a, b);
        
        if (b === 0) {
            throw new Error('Division by zero');
        }
        
        return a / b;
    }
    
    _validateNumbers(a, b) {
        /**
         * 引数が数値であることを検証
         * @private
         * @param {*} a - 1つ目の引数
         * @param {*} b - 2つ目の引数
         * @throws {TypeError} 引数が数値でない場合
         */
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
    }
}

// デモ
if (typeof module === 'undefined') {
    // ブラウザコンソール用デモ
    console.log(`Largest number: ${findLargestNumber([3, 1, 4, 1, 5, 9])}`);
    console.log(`Reversed string: ${reverseString('Hello, World!')}`);
    
    const calc = new Calculator();
    console.log(`5 + 3 = ${calc.add(5, 3)}`);
    console.log(`5 - 3 = ${calc.subtract(5, 3)}`);
    console.log(`5 * 3 = ${calc.multiply(5, 3)}`);
    console.log(`5 / 3 = ${calc.divide(5, 3)}`);
}

// Node.js用エクスポート
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        findLargestNumber,
        reverseString,
        Calculator
    };
}
