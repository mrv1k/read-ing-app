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

function isToday(day) {
  return day === today;
}

export { currentMonth, today, isToday };
