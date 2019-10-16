import { initializeArrayWithPaddedRange } from '@/utils/dates';

describe('utils/dates', () => {
  describe('initializeArrayWithPaddedRange', () => {
    it('creates an array of given length', () => {
      const array = initializeArrayWithPaddedRange(9);

      expect(array).toHaveLength(9);
    });

    it('fills array with double digit values', () => {
      const array = initializeArrayWithPaddedRange(9);

      expect(array).toContain('01');
      expect(array).toContain('09');
    });

    it('start filling array from 1', () => {
      const array = initializeArrayWithPaddedRange(1);

      expect(array).not.toContain('00');
      expect(array).toContain('01');
    });
  });
});
