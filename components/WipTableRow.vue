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

    const state = {
      thatDay: $store.state.month[props.thatDay],
      yesterday: props.isToday ? tryToContinueReading(props, $store) : false,
    };

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

const tryToContinueReading = (props, $store) => {
  const yesterday = (Number(props.thatDay) - 1).toString();
  const state = $store.state.month[yesterday];
  if (!state) return false;

  return state.reading.end && state.book.title && state.book.pages
    ? state
    : false;
};

function useReading(state, $store, day) {
  const start = state.yesterday
    ? state.yesterday.reading.end
    : state.thatDay.reading.start;

  const reading = reactive({
    start,
    end: state.thatDay.reading.end,
    progress: computed(() => {
      if (!reading.end) return '';
      return reading.end - reading.start;
    }),
  });

  watch(
    () => reading.start,
    (page) => $store.commit('month/UPDATE_READING_START', { day, page }),
    { lazy: true },
  );

  watch(
    () => reading.end,
    (page) => $store.commit('month/UPDATE_READING_END', { day, page }),
    { lazy: true },
  );

  return { reading };
}

function useBook(state, reading, dayBefore) {
  const book = reactive({
    title: state.thatDay.book.title,
    pages: state.thatDay.book.pages,
    completionProgress: computed(() => {
      if (!book.pages) return 'missing pages';
      if (!reading.progress) return '';

      // const temp = reading.progress + state.reading.end;
      const temp = reading.progress;

      const bookRead = percentage(temp, book.pages);
      return `${bookRead}%`;
    }),
  });

  return { book };
}
</script>
