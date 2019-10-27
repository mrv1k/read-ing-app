import { currentMonth, today, isToday } from '@/utils/dates';

describe('utils/dates', () => {
  it('today - returns double digit numerical date', () => {
    expect(today).toEqual(expect.stringMatching(/\d\d/));
  });

  describe('Month class', () => {
    it('has 3 properties', () => {
      expect(currentMonth).toHaveProperty('name');
      expect(currentMonth).toHaveProperty('daysCount');
      expect(currentMonth).toHaveProperty('daysArray');
    });
  });

  describe('isToday', () => {
    it('returns true when given today', () => {
      const result = isToday(today);
      expect(result).toBe(true);
    });
    it('returns false when given non today value', () => {
      const result = isToday('32');
      expect(result).toBe(false);
    });
  });
});
