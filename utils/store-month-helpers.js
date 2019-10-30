import {
  UPDATE_READING_START,
  SET_BOOK_TITLE,
  SET_BOOK_PAGES,
  SET_BOOK_PROGRESS,
} from '@/store/mutation-types';

const todayReadingExists = (today) => today.reading.start !== null;
const yesterdayReadingExists = (yesterday) => yesterday.reading.end !== null;

function continueYesterdayReading({ state, commit }, { today }) {
  if (todayReadingExists(state[today])) {
    return false;
  }

  const yesterdayNum = (Number(today) - 1).toString();
  const yesterday = state[yesterdayNum];

  if (yesterdayReadingExists(yesterday)) {
    commit(UPDATE_READING_START, {
      day: today,
      page: yesterday.reading.end,
    });
    commit(SET_BOOK_TITLE, { day: today, title: yesterday.book.title });
    commit(SET_BOOK_PAGES, { day: today, pages: yesterday.book.pages });
    commit(SET_BOOK_PROGRESS, {
      day: today,
      percent: yesterday.book.progress,
    });
  }
}

export { continueYesterdayReading };
