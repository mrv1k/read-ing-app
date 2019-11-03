<template>
  <tr :class="{ 'border-t-2 border-b-2 border-gray-600': isToday }">
    <MonthTableCell :class="{ 'bg-green-500': challengeIsCompleted }">
      {{ thatDay }}
    </MonthTableCell>
    <MonthTableCell>{{ thatDay }} {{ monthName }}</MonthTableCell>
    <MonthTableInput v-model.number="session.start"></MonthTableInput>
    <MonthTableInput v-model.number="session.end"></MonthTableInput>
    <MonthTableCell>{{ progress.pages }}</MonthTableCell>
    <MonthTableInput
      v-model="session.title"
      input-class="w-auto"
    ></MonthTableInput>
    <MonthTableInput
      v-model.number="session.pagesCount"
      input-class="w-10"
    ></MonthTableInput>
    <MonthTableCell
      v-text="progress.book ? `${progress.book}%` : ''"
    ></MonthTableCell>
  </tr>
</template>

<script>
import { computed, reactive, watch } from '@vue/composition-api';
import { percentage } from '@/utils/helpers';
import MonthTableCell from '@/components/MonthTableCell.vue';
import MonthTableInput from '@/components/MonthTableInput.vue';
import {
  SET_SESSION_START,
  SET_SESSION_END,
  SET_SESSION_TITLE,
  SET_SESSION_PAGES_COUNT,
  SET_SESSION_PROGRESS,
} from '@/store/mutation-types';

export default {
  components: {
    MonthTableCell,
    MonthTableInput,
  },

  props: {
    thatDay: {
      type: String,
      required: true,
    },
    monthName: {
      type: String,
      required: true,
    },
    isToday: {
      type: Boolean,
      default: false,
    },

    challengeGoal: {
      type: Number,
      required: true,
    },
  },

  setup(props, { root, emit }) {
    const { $store } = root;

    const state = $store.state.month[props.thatDay];

    if (props.isToday) {
      $store.dispatch('month/continueYesterdayReading', {
        today: props.thatDay,
      });
    }

    const { session } = useSession(state);

    const progress = reactive({
      pages: computed(() => {
        if (session.end && session.start) {
          return session.end - session.start;
        }
      }),
      book: computed(() => {
        if (session.end && session.pagesCount) {
          return percentage(session.end, session.pagesCount);
        }
      }),
    });

    // const progress = { pages: 43, book: 13, bookTotal: 13 };
    // console.log(progress.pages, progress.book, progress.bookTotal);

    const challengeIsCompleted = computed(() => {
      if (progress.pages) {
        return progress.pages >= props.challengeGoal;
      }
    });

    syncWithStore(props, $store, { session, progress });

    return {
      session,
      progress,

      challengeIsCompleted,
    };
  },
};

function useSession(state) {
  const session = reactive({
    start: state.start,
    end: state.end,
    title: state.title,
    pagesCount: state.pagesCount,
  });

  return { session };
}

function syncWithStore(props, $store, { session, progress }) {
  const day = props.thatDay;

  const commit = (type, key = 'data') => (value) => {
    $store.commit(`month/${type}`, { day, [key]: value });
  };

  const lazyWatch = (source, commitCallback) =>
    watch(source, commitCallback, { lazy: true });

  lazyWatch(() => session.start, commit(SET_SESSION_START, 'page'));
  lazyWatch(() => session.end, commit(SET_SESSION_END, 'page'));
  lazyWatch(() => session.title, commit(SET_SESSION_TITLE, 'title'));
  lazyWatch(
    () => session.pagesCount,
    commit(SET_SESSION_PAGES_COUNT, 'pagesCount'),
  );
  watch(() => progress, commit(SET_SESSION_PROGRESS), {
    deep: true,
    lazy: true,
  });
}
</script>
