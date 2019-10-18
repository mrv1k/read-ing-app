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
        <td class="border">
          <span v-text="today.day"></span>
        </td>
        <td class="border">
          <span>{{ today.day }} {{ today.month }}</span>
        </td>
        <td class="border text-left">
          <input v-model="reading.start" class="w-8" />
        </td>
        <td class="border text-left">
          <input v-model="reading.end" class="w-8" />
        </td>
        <td class="border text-left">
          <span v-text="readingProgress"></span>
        </td>
        <td class="border text-left">
          <input v-model="book.title" />
        </td>
        <td class="border text-left">
          <input v-model="book.pages" class="w-10" />
        </td>
        <td class="border text-left">
          <span v-text="bookReadingProgress"></span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { reactive, computed } from '@vue/composition-api';
import { format } from 'date-fns';

export default {
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
