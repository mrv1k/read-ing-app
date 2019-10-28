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
    <WipTableCell>{{ book.completionProgress }}</WipTableCell>
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
      ? $store.getters['month/continueYesterdayIfTodayIsEmpty'](props.thatDay)
      : $store.state.month[props.thatDay];

    const { reading } = useReading(state, $store, props.thatDay);
    const { book } = useBook(state, reading);

    const challengeIsCompleted = computed(() => {
      return reading.progress >= props.challengeGoal;
    });

    return {
      reading,
      book,
      challengeIsCompleted,
      state,
    };
  },
};

function useReading(state, $store, day) {
  const reading = reactive({
    start: state.reading.start,
    end: state.reading.end,
    progress: computed(() => {
      if (!reading.end) return '';
      return reading.end - reading.start;
    }),
  });

  const commit = (type) => (page) =>
    $store.commit(`month/${type}`, { day, page });

  watch(() => reading.start, commit('UPDATE_READING_START'), { lazy: true });
  watch(() => reading.end, commit('UPDATE_READING_END'), { lazy: true });

  return { reading };
}

function useBook(state, reading, dayBefore) {
  const book = reactive({
    title: state.book.title,
    pages: state.book.pages,
    completionProgress: computed(() => {
      if (!book.pages) return 'missing pages';
      if (!reading.progress) return '';

      const bookRead = percentage(reading.progress, book.pages);
      return `${bookRead}%`;
    }),
  });

  return { book };
}
</script>
