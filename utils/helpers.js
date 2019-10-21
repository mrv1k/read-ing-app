/**
 * @param {Number} end - array length to be created
 * @returns {Array}
 */
const initializeArrayWithPaddedRange = (end) =>
  Array.from({ length: end }, (_, i) => String(i + 1).padStart(2, '0'));

/**
 * @param {Number} value
 * @param {Number} outOf
 * @param {Number} RATIO
 * @returns {Number}
 */
const percentage = (value, outOf, RATIO = 100) =>
  Math.floor((value / outOf) * RATIO);

export { initializeArrayWithPaddedRange, percentage };
