import {
  SET_READING_START,
  SET_BOOK_TITLE,
  SET_BOOK_PAGES,
  SET_BOOK_PROGRESS,
} from '@/store/mutation-types';

function continueYesterdayReading({ state, commit }, { today }) {
  if (todayReadingExists(state[today])) {
    return false;
  }

  const yesterdayNum = (Number(today) - 1).toString();
  const yesterday = state[yesterdayNum];

  if (yesterdayReadingExists(yesterday)) {
    const day = today;
    commit(SET_READING_START, { day, page: yesterday.reading.end });
    commit(SET_BOOK_TITLE, { day, title: yesterday.book.title });
    commit(SET_BOOK_PAGES, { day, pages: yesterday.book.pages });
    commit(SET_BOOK_PROGRESS, { day, percent: yesterday.book.progress });
  }
}

const todayReadingExists = (today) => today.reading.start !== null;
const yesterdayReadingExists = (yesterday) => yesterday.reading.end !== null;

export { continueYesterdayReading };
