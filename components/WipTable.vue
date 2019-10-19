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
        <th class="border text-left">Completed %</th>
      </tr>
    </thead>
    <tbody>
      <tr class="today-row">
        <WipTableCell>{{ today.day }}</WipTableCell>
        <WipTableCell>{{ today.day }} {{ today.month }}</WipTableCell>
        <WipTableInput v-model.number="reading.start"></WipTableInput>
        <WipTableInput v-model.number="reading.end"></WipTableInput>
        <WipTableCell>{{ reading.progress }}</WipTableCell>
        <WipTableInput
          v-model.number="book.title"
          input-class="w-auto"
        ></WipTableInput>
        <WipTableInput
          v-model.number="book.pages"
          input-class="w-10"
        ></WipTableInput>
        <WipTableCell>{{ book.completion }}</WipTableCell>
      </tr>

      <tr>
        <WipTableCell>{{ tomorrow.day }}</WipTableCell>
        <WipTableCell>{{ tomorrow.day }} {{ tomorrow.month }}</WipTableCell>
        <WipTableInput v-model.number="tomorrowReading.start"></WipTableInput>
        <WipTableInput v-model.number="tomorrowReading.end"></WipTableInput>
        <WipTableCell>{{ tomorrowReading.progress }}</WipTableCell>
        <WipTableInput
          v-model.number="tomorrowBook.title"
          input-class="w-auto"
        ></WipTableInput>
        <WipTableInput
          v-model.number="tomorrowBook.pages"
          input-class="w-10"
        ></WipTableInput>
        <WipTableCell>{{ tomorrowBook.completion }}</WipTableCell>
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
      progress: computed(() => reading.end - reading.start),
    });
    const tomorrowReading = reactive({
      start: reading.end,
      end: reading.end,
      progress: computed(() => tomorrowReading.end - tomorrowReading.start),
    });

    const RATIO = 100;
    const percentOutOf = (value, outOf) => Math.floor((value / outOf) * RATIO);

    const book = reactive({
      title: 'DTW by Steven',
      pages: 200,
      completion: computed(() => percentOutOf(reading.progress, book.pages)),
    });
    const tomorrowBook = reactive({
      title: 'DTW by Steven',
      pages: 200,
      completion: computed(() => {
        let t = book.completion > 0 ? book.completion : 0;
        t += percentOutOf(tomorrowReading.progress, tomorrowBook.pages);
        return t;
      }),
    });

    return {
      book,
      reading,
      today,

      tomorrowBook,
      tomorrowReading,
      tomorrow,
    };
  },
};
</script>
