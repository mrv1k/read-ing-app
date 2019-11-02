/**
 * Create N-length array with double digit values [01, 02 ...etc]
 * @param {Number} end - array length to be created
 * @returns {Array}
 */
const initializeArrayWithPaddedRange = (end) =>
  Array.from({ length: end }, (_, i) => String(i + 1).padStart(2, '0'));

/**
 * Get value percent out of another value
 * @param {Number} value
 * @param {Number} outOf
 * @returns {Number}
 */
const percentage = (value, outOf) => Math.floor((value / outOf) * 100);

/**
 * Tranform array into object
 * @param {Array} array
 * @param {any} propValue
 * @returns {Object}
 */
function transformArrayToObject(array, propValue = null) {
  return array.reduce((acc, value) => {
    acc[value] = propValue;
    return acc;
  }, {});
}

export { initializeArrayWithPaddedRange, percentage, transformArrayToObject };
