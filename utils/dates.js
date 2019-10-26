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

class Days {
  constructor() {
    this.today = format(now, 'dd');
  }
  isToday(day) {
    return day === this.today;
  }
}

const currentMonth = new Month();
const days = new Days();

export { currentMonth, days };
