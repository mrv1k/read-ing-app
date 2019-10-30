<template>
  <tr :class="{ 'border-t-2 border-b-2 border-gray-600': isToday }">
    <WipTableCell :class="{ 'bg-green-500': challengeIsCompleted }">
      {{ thatDay }}
    </WipTableCell>
    <WipTableCell>{{ thatDay }} {{ monthName }}</WipTableCell>
    <WipTableInput v-model.number="reading.start"></WipTableInput>
    <WipTableInput v-model.number="reading.end"></WipTableInput>
    <WipTableCell>{{ reading.progress }}</WipTableCell>
    <WipTableInput v-model="book.title" input-class="w-auto"></WipTableInput>
    <WipTableInput
      v-model.number="book.pages"
      input-class="w-10"
    ></WipTableInput>
    <WipTableCell>{{ book.progress }}%</WipTableCell>
    <WipTableCell>{{ bookCompletedPercent }}%</WipTableCell>
  </tr>
</template>

<script>
import { computed, reactive, watch } from '@vue/composition-api';
import { percentage } from '@/utils/helpers';
import WipTableCell from '@/components/WipTableCell.vue';
import WipTableInput from '@/components/WipTableInput.vue';

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

    const state = props.isToday
      ? $store.getters['month/continueReading'](props.thatDay)
      : $store.state.month[props.thatDay];

    const { reading } = useReading(state);
    const { book } = useBook(state, reading);

    const bookCompletedPercent = $store.getters['month/bookCompletedPercent'](
      props.thatDay,
      book,
    );

    const challengeIsCompleted = computed(() => {
      return reading.progress >= props.challengeGoal;
    });

    syncWithStore(props, $store, { reading, book });

    return {
      reading,
      book,
      bookCompletedPercent,
      challengeIsCompleted,
    };
  },
};

function useReading(state) {
  const reading = reactive({
    start: state.reading.start,
    end: state.reading.end,
    progress: computed(() => {
      if (!reading.end) return '';
      return reading.end - reading.start;
    }),
  });

  return { reading };
}

function useBook(state, reading) {
  const book = reactive({
    title: state.book.title,
    pages: state.book.pages,
    progress: computed(() => {
      if (!book.pages) return 'missing pages';
      if (!reading.progress) return '';

      return percentage(reading.progress, book.pages);
    }),
  });

  return { book };
}

function syncWithStore(props, $store, { book, reading }) {
  const day = props.thatDay;

  const commit = (type, key = 'data') => (value) => {
    $store.commit(`month/${type}`, { day, [key]: value });
  };

  const watcher = (source, commitCallback, options = { lazy: true }) =>
    watch(source, commitCallback, options);

  watcher(() => reading.start, commit('UPDATE_READING_START', 'page'));
  watcher(() => reading.end, commit('UPDATE_READING_END', 'page'));

  watcher(() => book.title, commit('SET_BOOK_TITLE', 'title'));
  watcher(() => book.pages, commit('SET_BOOK_PAGES', 'pages'));
  watcher(() => book.progress, commit('SET_BOOK_PROGRESS', 'percent'));
}
</script>
