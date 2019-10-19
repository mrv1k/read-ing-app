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
      <tr class="today-row">
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

      <tr>
        <WipTableCell>{{ tomorrow.day }}</WipTableCell>
        <WipTableCell>{{ tomorrow.day }} {{ tomorrow.month }}</WipTableCell>
        <WipTableInput v-model.number="tomorrowReading.start"></WipTableInput>
        <WipTableInput v-model.number="tomorrowReading.end"></WipTableInput>
        <WipTableCell>{{ tomorrowReadingProgress }}</WipTableCell>
        <WipTableInput
          v-model.number="tomorrowBook.title"
          input-class="w-auto"
        ></WipTableInput>
        <WipTableInput
          v-model.number="tomorrowBook.pages"
          input-class="w-10"
        ></WipTableInput>
        <WipTableCell>{{ tomorrowBookReadingProgress }}</WipTableCell>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { reactive, computed } from '@vue/composition-api';
import { format, addDays } from 'date-fns';

import WipTableCell from '@/components/WipTableCell.vue';
import WipTableInput from '@/components/WipTableInput.vue';

export default {
  components: {
    WipTableCell,
    WipTableInput,
  },

  setup() {
    const date = new Date();
    const today = computed(() => {
      return {
        month: format(date, 'MMMM'),
        day: format(date, 'dd'),
      };
    });

    const tomorrow = computed(() => {
      return {
        month: format(addDays(date, 1), 'MMMM'),
        day: format(addDays(date, 1), 'dd'),
      };
    });

    const reading = reactive({
      start: 1,
      end: 26,
    });
    const readingProgress = computed(() => reading.end - reading.start);

    const tomorrowReading = reactive({
      start: 1,
      end: 26,
    });
    const tomorrowReadingProgress = computed(
      () => tomorrowReading.end - tomorrowReading.start,
    );

    const book = reactive({
      title: 'DTW by Steven',
      pages: 200,
    });
    const tomorrowBook = reactive({
      title: 'DTW by Steven',
      pages: 200,
    });

    const RATIO = 100;
    const percentOutOf = (value, outOf) =>
      Math.floor((readingProgress.value / book.pages) * RATIO);

    const bookReadingProgress = computed(() =>
      percentOutOf(readingProgress.value, book.pages),
    );

    const tomorrowBookReadingProgress = computed(() =>
      percentOutOf(tomorrowReadingProgress.value, tomorrowBook.pages),
    );

    return {
      book,
      bookReadingProgress,
      reading,
      readingProgress,
      today,

      tomorrowBook,
      tomorrowBookReadingProgress,
      tomorrowReading,
      tomorrowReadingProgress,
      tomorrow,
    };
  },
};
</script>
