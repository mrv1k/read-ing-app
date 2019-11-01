import { format, getDaysInMonth } from 'date-fns';
// import { initializeArrayWithPaddedRange } from './helpers';

const now = new Date();

class Month {
  constructor() {
    this.name = format(now, 'MMM');
    this.daysCount = getDaysInMonth(now);
    // this.daysArray = initializeArrayWithPaddedRange(this.daysCount);
    this.daysArray = ['01', '02', '03', '04', '05'];
  }
}

const currentMonth = new Month();

const today = format(now, 'dd');

function isToday(day) {
  return day === today;
}

export { currentMonth, today, isToday };
