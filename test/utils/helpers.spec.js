import { initializeArrayWithPaddedRange, percentage } from '@/utils/helpers';

describe('utils/helpers', () => {
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

    it('starts filling array from 01 not 00', () => {
      const array = initializeArrayWithPaddedRange(1);

      expect(array).not.toContain('00');
      expect(array).toContain('01');
    });
  });

  describe('percentage', () => {
    it('should calculate percentage', () => {
      const testCases = [
        { value: 33, outOfValue: 99, expected: 33 },
        { value: 25, outOfValue: 100, expected: 25 },
        { value: 25, outOfValue: 200, expected: 12 },
      ];

      testCases.forEach(({ value, outOfValue, expected }) => {
        const result = percentage(value, outOfValue);
        expect(result).toBe(expected);
      });
    });
  });
});
