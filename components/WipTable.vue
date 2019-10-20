<template>
  <table class="table-auto border-collapse">
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
      <WipTableRow
        v-for="day in monthDays"
        :key="`${monthName}-${day}`"
        :day="day"
        :is-today="isToday(day)"
        :month-name="monthName"
      />
    </tbody>
  </table>
</template>

<script>
import { computed } from '@vue/composition-api';
import { format, getDaysInMonth } from 'date-fns';

import WipTableRow from '@/components/WipTableRow.vue';
import { initializeArrayWithPaddedRange } from '@/utils/dates';

export default {
  components: {
    WipTableRow,
  },

  setup() {
    const date = new Date();
    const daysInMonth = getDaysInMonth(date);

    const monthDays = computed(() =>
      initializeArrayWithPaddedRange(daysInMonth),
    );
    const monthName = computed(() => format(date, 'MMM'));

    const today = format(date, 'dd');
    const isToday = (day) => day === today;

    return {
      isToday,

      monthName,
      monthDays,
    };
  },
};
</script>
