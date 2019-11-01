import {
  SET_SESSION_START,
  SET_SESSION_TITLE,
  SET_SESSION_PAGES_COUNT,
} from '@/store/mutation-types';

function continueYesterdayReading({ state, commit }, { today }) {
  if (today === '01') return false;
  if (todayReadingExists(state[today])) {
    return false;
  }

  const yesterdayNum = (Number(today) - 1).toString();
  const yesterday = state[yesterdayNum];

  if (yesterdayReadingExists(yesterday)) {
    const day = today;
    commit(SET_SESSION_START, { day, page: yesterday.end });
    commit(SET_SESSION_TITLE, { day, title: yesterday.title });
    commit(SET_SESSION_PAGES_COUNT, { day, pagesCount: yesterday.pagesCount });
  }
}

const todayReadingExists = (today) => today.start !== null;
const yesterdayReadingExists = (yesterday) => yesterday.end !== null;

export { continueYesterdayReading };
