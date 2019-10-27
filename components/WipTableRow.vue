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
    <WipTableCell>{{ bookReadingProgress }}</WipTableCell>
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

    const dayBefore = (Number(props.thatDay) - 1).toString();
    const state = {
      thatDay: $store.state.month[props.thatDay],
      dayBefore: $store.state.month[dayBefore],
    };

    const { book } = useBook(state.thatDay);
    const { reading } = useReading(state.thatDay, $store, props.thatDay);

    if (canContinueReading(state.dayBefore)) {
      reading.start = state.dayBefore.reading.end;
      book.title = state.dayBefore.book.title;
      book.pages = state.dayBefore.book.pages;
    }

    const bookReadingProgress = computed(() => {
      if (!book.pages) return 'missing pages';
      if (!reading.progress || typeof reading.progress !== 'number') return '';

      let temp = reading.progress;
      if (canContinueReading(state.dayBefore)) {
        temp += state.dayBefore.reading.end;
      }
      const bookRead = percentage(temp, book.pages);
      return `${bookRead}%`;
    });

    const challengeIsCompleted = computed(() => {
      return reading.progress >= props.challengeGoal;
    });

    return {
      bookReadingProgress,
      reading,
      book,
      challengeIsCompleted,
    };
  },
};

function useReading(thatDay, $store, day) {
  const reading = reactive({
    start: thatDay.reading.start,
    end: thatDay.reading.end,
    progress: computed(() => {
      if (!reading.end) return '';

      const temp = reading.end - reading.start;
      if (temp < 0) return "What's been read cannot be unread!";

      return temp;
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

function useBook(thatDay) {
  const book = reactive({
    title: thatDay.book.title,
    pages: thatDay.book.pages,
  });

  return { book };
}

const canContinueReading = (dayBefore) => {
  if (!dayBefore) return;
  // store fields required to resume reading
  return dayBefore.reading.end && dayBefore.book.title && dayBefore.book.pages;
};
</script>
