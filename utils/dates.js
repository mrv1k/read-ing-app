/**
 * @param {Number} end - array length to be created
 * @returns {Array}
 */
export const initializeArrayWithPaddedRange = (end) =>
  Array.from({ length: end }, (_, i) => String(i + 1).padStart(2, '0'));
