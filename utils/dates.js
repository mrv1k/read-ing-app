import { format, getDaysInMonth } from 'date-fns';
import { initializeArrayWithPaddedRange } from './helpers';

const now = new Date();

class Month {
  constructor() {
    this.name = format(now, 'MMM');
    this.daysCount = getDaysInMonth(now);
    this.daysArray = initializeArrayWithPaddedRange(this.daysCount);
  }
}

const currentMonth = new Month();

const today = format(now, 'dd');

const isToday = (day) => day === today;
const getDayBefore = (day) => (Number(day) - 1).toString().padStart(2, '0');

export { currentMonth, today, getDayBefore, isToday };
