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
      <WipTableRow :day="today.day" :month="today.month" />
      <WipTableRow :day="tomorrow.day" :month="tomorrow.month" />
    </tbody>
  </table>
</template>

<script>
import { computed } from '@vue/composition-api';
import { format, addDays } from 'date-fns';

import WipTableRow from '@/components/WipTableRow.vue';

export default {
  components: {
    WipTableRow,
  },

  setup() {
    const date = new Date();

    const today = computed(() => {
      return {
        month: format(date, 'MMM'),
        day: format(date, 'dd'),
      };
    });

    const tomorrow = computed(() => {
      return {
        month: format(addDays(date, 1), 'MMM'),
        day: format(addDays(date, 1), 'dd'),
      };
    });

    return {
      today,
      tomorrow,
    };
  },
};
</script>
