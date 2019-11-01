<template>
  <tr :class="{ 'border-t-2 border-b-2 border-gray-600': isToday }">
    <WipTableCell :class="{ 'bg-green-500': challengeIsCompleted }">
      {{ thatDay }}
    </WipTableCell>
    <WipTableCell>{{ thatDay }} {{ monthName }}</WipTableCell>
    <WipTableInput v-model.number="session.start"></WipTableInput>
    <WipTableInput v-model.number="session.end"></WipTableInput>
    <WipTableCell>{{ pagesProgress }}</WipTableCell>
    <WipTableInput v-model="session.title" input-class="w-auto"></WipTableInput>
    <WipTableInput
      v-model.number="session.pagesCount"
      input-class="w-10"
    ></WipTableInput>
    <WipTableCell>{{ bookProgress }}%</WipTableCell>
    <WipTableCell>{{ bookProgressTotal }}%</WipTableCell>
  </tr>
</template>

<script>
import { computed, reactive, watch } from '@vue/composition-api';
import WipTableCell from '@/components/WipTableCell.vue';
import WipTableInput from '@/components/WipTableInput.vue';
import {
  SET_SESSION_START,
  SET_SESSION_END,
  SET_SESSION_TITLE,
  SET_SESSION_PAGES_COUNT,
} from '@/store/mutation-types';

export default {
  components: {
    WipTableCell,
    WipTableInput,
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

    const pagesProgress = computed(() =>
      $store.getters['month/pagesProgress'](props.thatDay),
    );
    const bookProgress = computed(() =>
      $store.getters['month/bookProgress'](props.thatDay),
    );
    const bookProgressTotal = computed(() =>
      $store.getters['month/bookProgressTotal'](props.thatDay),
    );

    // const progress = { pages: 43, book: 13, bookTotal: 13 };
    // console.log(progress.pages, progress.book, progress.bookTotal);

    const challengeIsCompleted = computed(() => {
      if (pagesProgress.value === '') return false;

      return pagesProgress.value >= props.challengeGoal;
    });

    syncWithStore(props, $store, session);

    return {
      session,

      pagesProgress,
      bookProgress,
      bookProgressTotal,

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

function syncWithStore(props, $store, session) {
  const day = props.thatDay;

  const commit = (type, key = 'data') => (value) => {
    $store.commit(`month/${type}`, { day, [key]: value });
  };

  const watcher = (source, commitCallback, options = { lazy: true }) =>
    watch(source, commitCallback, options);

  watcher(() => session.start, commit(SET_SESSION_START, 'page'));
  watcher(() => session.end, commit(SET_SESSION_END, 'page'));
  watcher(() => session.title, commit(SET_SESSION_TITLE, 'title'));
  watcher(() => session.pagesCount, commit(SET_SESSION_PAGES_COUNT, 'pages'));
}
</script>
