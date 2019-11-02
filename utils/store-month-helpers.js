import { getDayBefore } from './dates';
import {
  SET_SESSION_START,
  SET_SESSION_TITLE,
  SET_SESSION_PAGES_COUNT,
} from '@/store/mutation-types';

function continueYesterdayReading({ state, commit }, { today }) {
  if (todayReadingExists(state[today]) || today === '01') {
    return false;
  }

  const yesterday = state[getDayBefore(today)];

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
