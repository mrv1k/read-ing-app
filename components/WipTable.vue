<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th class="border text-left">Day</th>
        <th class="border text-left">Date</th>
        <th class="border text-left">Start</th>
        <th class="border text-left">End</th>
        <th class="border text-left">Progress</th>
        <th class="border text-left">Book</th>
        <th class="border text-left">Pages</th>
        <th class="border text-left">Read %</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <WipTableCell>{{ today.day }}</WipTableCell>
        <WipTableCell>{{ today.day }} {{ today.month }}</WipTableCell>
        <WipTableInput v-model.number="reading.start"></WipTableInput>
        <WipTableInput v-model.number="reading.end"></WipTableInput>
        <WipTableCell>{{ readingProgress }}</WipTableCell>
        <WipTableInput
          v-model.number="book.title"
          input-class="w-auto"
        ></WipTableInput>
        <WipTableInput
          v-model.number="book.pages"
          input-class="w-10"
        ></WipTableInput>
        <WipTableCell>{{ bookReadingProgress }}</WipTableCell>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { reactive, computed } from '@vue/composition-api';
import { format } from 'date-fns';

import WipTableCell from '@/components/WipTableCell.vue';
import WipTableInput from '@/components/WipTableInput.vue';

export default {
  components: {
    WipTableCell,
    WipTableInput,
  },
  setup() {
    const book = reactive({
      title: 'DTW by Steven',
      pages: 200,
    });

    const reading = reactive({
      start: 1,
      end: 26,
    });
    const readingProgress = computed(() => reading.end - reading.start);

    const RATIO = 100;
    const bookReadingProgress = computed(() =>
      Math.floor((readingProgress.value / book.pages) * RATIO),
    );

    const date = new Date();
    const today = computed(() => {
      return {
        month: format(date, 'MMMM'),
        day: format(date, 'dd'),
      };
    });

    return {
      book,
      reading,
      readingProgress,
      bookReadingProgress,
      today,
    };
  },
};
</script>
