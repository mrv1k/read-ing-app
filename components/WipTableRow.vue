<template>
  <tr :class="{ 'border-t-2 border-b-2 border-gray-600': isToday }">
    <WipTableCell :class="{ 'bg-green-500': challengeIsCompleted }">
      {{ day }}
    </WipTableCell>
    <WipTableCell>{{ day }} {{ monthName }}</WipTableCell>
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
    day: {
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

    const dayBefore = (Number(props.day) - 1).toString();
    const state = {
      day: $store.state.month[props.day],
      dayBefore: $store.state.month[dayBefore],
    };

    const { book } = useBook();
    const { reading } = useReading(props.day, $store, state);

    const bookReadingProgress = computed(() => {
      if (reading.progress > 0 && !book.pages) return 'missing pages';
      return reading.end ? `${percentage(reading.progress, book.pages)}%` : '';
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

function useReading(day, $store, state) {
  const reading = reactive({
    start: state.day.reading.start,
    end: state.day.reading.end,
    progress: computed(() => (reading.end ? reading.end - reading.start : '')),
  });

  watch(
    () => reading.start,
    (page) => $store.commit('month/UPDATE_READING_START', { day, page }),
    { lazy: true },
  );

  if (canContinueReading(state.dayBefore)) {
    reading.start = state.dayBefore.reading.end;
  }

  watch(
    () => reading.end,
    (page) => $store.commit('month/UPDATE_READING_END', { day, page }),
    { lazy: true },
  );

  return { reading };
}

const canContinueReading = (dayBefore) => {
  return dayBefore && dayBefore.reading.end;
};

function useBook() {
  const book = reactive({
    title: null,
    pages: null,
  });

  return { book };
}
</script>
