import { currentMonth, days } from '@/utils/dates';

describe('utils/dates', () => {
  describe('Month class', () => {
    it('has 3 properties', () => {
      expect(currentMonth).toHaveProperty('name');
      expect(currentMonth).toHaveProperty('daysCount');
      expect(currentMonth).toHaveProperty('daysArray');
    });
  });

  describe('Days class', () => {
    it('has 1 property - "today"', () => {
      expect(days).toHaveProperty('today');
    });
    it('has 1 method - isToday', () => {
      expect(days).toHaveProperty('isToday');
    });
  });
});
